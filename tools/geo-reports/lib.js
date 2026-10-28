// Shared layout for the GEO reports: mirrors the Strategiebericht Pricing
// (Helvetica throughout, rule-only tables, footnoted sources).
const fs = require('fs');
const path = require('path');
const D = require('docx');
const { imageSize } = (() => {
  // minimal PNG size reader
  return { imageSize: (f) => { const b = fs.readFileSync(f); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; } };
})();

const HEAD = 'Helvetica', BODY = 'Helvetica', MONO = 'Courier New';
const INK = '1A1A1A', GREY = '6B6B6B', RULE = 'D6D6D6', BLUE = '1B3AA8';
const PAGE_W = 11906, MARGIN = 1300, CONTENT = PAGE_W - 2 * MARGIN; // 9306 DXA

class Report {
  constructor(opts) {
    this.o = opts;
    this.body = [];
    this.footnotes = {};
    this.fnId = 0;
    this.fnText = opts.footnotes || {};
    this.lists = 0;
    this.numbering = [{
      reference: 'bul',
      levels: [{ level: 0, format: D.LevelFormat.BULLET, text: '•', alignment: D.AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 240 } } } }],
    }];
    this.fig = 0;
  }

  // inline markup: **bold**, `code`, [^key] footnote
  runs(text, base = {}) {
    const out = [];
    const re = /(\*\*[^*]+\*\*|`[^`]+`|\[\^[\w-]+\])/g;
    let last = 0, m;
    const push = (t, extra = {}) => { if (t) out.push(new D.TextRun({ text: t, ...base, ...extra })); };
    while ((m = re.exec(text))) {
      push(text.slice(last, m.index));
      const tok = m[0];
      if (tok.startsWith('**')) push(tok.slice(2, -2), { bold: true });
      else if (tok.startsWith('`')) push(tok.slice(1, -1), { font: MONO, size: (base.size || 20) - 2 });
      else {
        const key = tok.slice(2, -1);
        const t = this.fnText[key];
        if (!t) throw new Error('missing footnote ' + key);
        const id = ++this.fnId;
        this.footnotes[id] = { children: [new D.Paragraph({ spacing: { after: 40 }, children: this.runs(t, { font: BODY, size: 14, color: '444444' }) })] };
        out.push(new D.FootnoteReferenceRun(id));
      }
      last = m.index + tok.length;
    }
    push(text.slice(last));
    return out;
  }

  p(text, opt = {}) {
    this.body.push(new D.Paragraph({
      spacing: { after: 140, line: 300 },
      ...opt,
      children: this.runs(text, { font: BODY, size: 20, color: INK, ...(opt.run || {}) }),
    }));
  }
  small(text) { this.p(text, { run: { size: 17, color: GREY } }); }

  h1(text, { pageBreak = false } = {}) {
    this.body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_1, pageBreakBefore: pageBreak, keepNext: true, children: [new D.TextRun({ text })] }));
  }
  h2(text) { this.body.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_2, keepNext: true, children: [new D.TextRun({ text })] })); }
  h3(text) {
    this.body.push(new D.Paragraph({ keepNext: true, spacing: { before: 160, after: 80 },
      children: [new D.TextRun({ text, font: HEAD, bold: true, size: 19, color: INK })] }));
  }

  bullets(items) {
    items.forEach((t) => this.body.push(new D.Paragraph({ numbering: { reference: 'bul', level: 0 }, spacing: { after: 80, line: 290 },
      children: this.runs(t, { font: BODY, size: 20, color: INK }) })));
    this.body.push(new D.Paragraph({ spacing: { after: 60 }, children: [] }));
  }

  numbered(items) {
    const ref = 'num' + (++this.lists);
    this.numbering.push({ reference: ref, levels: [{ level: 0, format: D.LevelFormat.DECIMAL, text: '%1.', alignment: D.AlignmentType.LEFT,
      style: { run: { font: BODY, bold: true }, paragraph: { indent: { left: 400, hanging: 300 } } } }] });
    items.forEach((t) => this.body.push(new D.Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 100, line: 290 },
      children: this.runs(t, { font: BODY, size: 20, color: INK }) })));
    this.body.push(new D.Paragraph({ spacing: { after: 40 }, children: [] }));
  }

  quote(text) {
    this.body.push(new D.Paragraph({
      indent: { left: 360, right: 360 }, spacing: { before: 60, after: 180, line: 300 },
      border: { left: { style: D.BorderStyle.SINGLE, size: 12, color: BLUE, space: 10 } },
      children: this.runs(text, { font: BODY, size: 20, color: INK, italics: true }),
    }));
  }

  code(lines) {
    lines.forEach((l, i) => this.body.push(new D.Paragraph({
      shading: { type: D.ShadingType.CLEAR, color: 'auto', fill: 'F3F3F1' },
      indent: { left: 120, right: 120 },
      keepNext: i < lines.length - 1, keepLines: true,
      spacing: { after: i === lines.length - 1 ? 160 : 0, line: 260 },
      children: [new D.TextRun({ text: l || ' ', font: MONO, size: 16, color: INK })],
    })));
  }

  // label + boxed text (Leserfrage style)
  callout(label, text) {
    this.body.push(new D.Paragraph({ indent: { left: 240 }, spacing: { before: 200, after: 60 },
      border: { left: { style: D.BorderStyle.SINGLE, size: 12, color: BLUE, space: 10 } },
      children: [new D.TextRun({ text: label, font: HEAD, size: 15, color: BLUE, characterSpacing: 20 })] }));
    this.body.push(new D.Paragraph({ indent: { left: 240 }, spacing: { after: 200, line: 300 },
      border: { left: { style: D.BorderStyle.SINGLE, size: 12, color: BLUE, space: 10 } },
      children: this.runs(text, { font: HEAD, size: 20, color: INK }) }));
  }

  table(headers, rows, pct, { size = 16 } = {}) {
    const widths = pct.map((x) => Math.round((CONTENT * x) / 100));
    widths[widths.length - 1] += CONTENT - widths.reduce((a, b) => a + b, 0);
    const none = { style: D.BorderStyle.NONE, size: 0, color: 'FFFFFF' };
    const cell = (t, i, head, lastRow) => new D.TableCell({
      width: { size: widths[i], type: D.WidthType.DXA },
      margins: { top: 60, bottom: 60, left: 80, right: 80 },
      borders: { top: none, left: none, right: none,
        bottom: { style: D.BorderStyle.SINGLE, size: head ? 8 : 4, color: head ? '444444' : RULE } },
      children: String(t).split('\n').map((line) => new D.Paragraph({ spacing: { after: 0, line: 250 },
        children: this.runs(line, { font: HEAD, size, color: head ? '333333' : INK, bold: head || undefined }) })),
    });
    const trs = [new D.TableRow({ tableHeader: true, cantSplit: true, children: headers.map((h, i) => cell(h, i, true)) })];
    rows.forEach((r, ri) => trs.push(new D.TableRow({ cantSplit: true, children: r.map((c, i) => cell(c, i, false, ri === rows.length - 1)) })));
    this.body.push(new D.Table({ width: { size: CONTENT, type: D.WidthType.DXA }, columnWidths: widths, rows: trs,
      borders: { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none } }));
    this.body.push(new D.Paragraph({ spacing: { after: 160 }, children: [] }));
  }

  figure(file, caption, widthIn = 6.3) {
    const { w, h } = imageSize(file);
    const wpx = widthIn * 96, hpx = (wpx * h) / w;
    this.body.push(new D.Paragraph({ alignment: D.AlignmentType.CENTER, spacing: { before: 120, after: 60 }, keepNext: true,
      children: [new D.ImageRun({ type: 'png', data: fs.readFileSync(file), transformation: { width: wpx, height: hpx },
        altText: { title: caption, description: caption, name: path.basename(file) } })] }));
    this.fig += 1;
    this.body.push(new D.Paragraph({ spacing: { after: 220 },
      children: [new D.TextRun({ text: `Abbildung ${this.fig}: ${caption}`, font: HEAD, size: 15, color: GREY })] }));
  }

  titlePage({ series, title, subtitle, questionLabel = 'LESERFRAGE', question, meta, note }) {
    const b = this.body;
    b.push(new D.Paragraph({ spacing: { before: 3000, after: 160 }, children: [new D.TextRun({ text: series, font: HEAD, size: 15, color: GREY, characterSpacing: 30 })] }));
    b.push(new D.Paragraph({ spacing: { after: 160 }, children: [new D.TextRun({ text: title, font: HEAD, bold: true, size: 48, color: INK })] }));
    b.push(new D.Paragraph({ spacing: { after: 300, line: 320 }, children: [new D.TextRun({ text: subtitle, font: HEAD, size: 24, color: '555555' })] }));
    if (question) this.callout(questionLabel, question);
    b.push(new D.Paragraph({ spacing: { before: 300, after: 80 }, children: [new D.TextRun({ text: meta, font: HEAD, size: 16, color: GREY })] }));
    if (note) b.push(new D.Paragraph({ spacing: { after: 80 }, children: [new D.TextRun({ text: note, font: HEAD, size: 16, color: GREY })] }));
  }

  toc() {
    this.body.push(new D.Paragraph({ pageBreakBefore: true, spacing: { after: 200 }, children: [new D.TextRun({ text: 'Inhalt', font: HEAD, bold: true, size: 30 })] }));
    this.body.push(new D.TableOfContents('Inhalt', { hyperlink: true, headingStyleRange: '1-2' }));
  }

  save(file, { title, withToc = true } = {}) {
    const footerRun = (children) => new D.Footer({ children: [new D.Paragraph({ alignment: D.AlignmentType.CENTER, children })] });
    const doc = new D.Document({
      creator: 'PageCompliance', title, description: title,
      features: withToc ? { updateFields: true } : undefined,
      footnotes: this.footnotes,
      numbering: { config: this.numbering },
      styles: {
        default: { document: { run: { font: BODY, size: 20, color: INK } } },
        paragraphStyles: [
          { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
            run: { font: HEAD, size: 30, bold: true, color: INK }, paragraph: { spacing: { before: 420, after: 200 }, outlineLevel: 0 } },
          { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
            run: { font: HEAD, size: 22, bold: true, color: INK }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
          { id: 'TOC1', name: 'toc 1', basedOn: 'Normal', run: { font: HEAD, size: 18, bold: true }, paragraph: { spacing: { before: 100, after: 20 } } },
          { id: 'TOC2', name: 'toc 2', basedOn: 'Normal', run: { font: HEAD, size: 17 }, paragraph: { indent: { left: 360 }, spacing: { after: 20 } } },
          { id: 'FootnoteText', name: 'footnote text', basedOn: 'Normal', run: { size: 14 } },
        ],
      },
      sections: [{
        properties: { titlePage: true, page: { size: { width: PAGE_W, height: 16838 }, margin: { top: 1300, bottom: 1300, left: MARGIN, right: MARGIN, footer: 600 } } },
        footers: {
          first: new D.Footer({ children: [new D.Paragraph({ children: [] })] }),
          default: footerRun([new D.TextRun({ children: [D.PageNumber.CURRENT], font: HEAD, size: 15, color: GREY })]),
        },
        children: this.body,
      }],
    });
    return D.Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(file, buf); console.log('wrote', file); });
  }
}

module.exports = { Report, D, CONTENT };
