// Renders the report diagrams (HTML -> PNG) in the plain box style of the Strategiebericht Pricing.
const { chromium } = require('playwright');
const path = require('path');
const OUT = path.join(__dirname, 'fig');

const CSS = `
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: #fff; font-family: 'JetBrains Mono', monospace; color: #111; font-size: 13px; line-height: 1.35; }
#c { display: inline-block; padding: 18px 22px; position: relative; }
.box { border: 1.2px solid #111; padding: 8px 10px; background: #fff; white-space: pre-line; position: absolute; }
.box.dash { border-style: dashed; }
.box.blue { border-color: #1b3aa8; color: #1b3aa8; }
.box.fill { background: #f3f3f1; }
.ref { color: #666; font-size: 11.5px; margin-top: 6px; display: block; }
.lab { position: absolute; font-size: 11px; letter-spacing: .08em; color: #555; }
.lab.blue { color: #1b3aa8; }
.ln { position: absolute; background: #111; }
.ln.blue { background: #1b3aa8; }
.arr { position: absolute; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 7px solid #111; }
.arr.r { border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 7px solid #111; border-right: 0; }
`;

// helpers producing absolutely positioned elements
const box = (x, y, w, h, text, cls = '', ref = '') =>
  `<div class="box ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px">${text}${ref ? `<span class="ref">${ref}</span>` : ''}</div>`;
const hl = (x, y, w, cls = '') => `<div class="ln ${cls}" style="left:${x}px;top:${y}px;width:${w}px;height:1.2px"></div>`;
const vl = (x, y, h, cls = '') => `<div class="ln ${cls}" style="left:${x}px;top:${y}px;width:1.2px;height:${h}px"></div>`;
const down = (x, y) => `<div class="arr" style="left:${x - 4.4}px;top:${y}px"></div>`;
const right = (x, y) => `<div class="arr r" style="left:${x}px;top:${y - 4.4}px"></div>`;
const lab = (x, y, t, cls = '') => `<div class="lab ${cls}" style="left:${x}px;top:${y}px">${t}</div>`;

// Tree: one answer on top, n supports below
function tree(top, kids, W = 760, topH = 52) {
  const n = kids.length, g = 16, kw = (W - (n - 1) * g) / n, topW = 440, kh = kids[0].h || 92;
  let h = '';
  const tx = (W - topW) / 2;
  h += box(tx, 0, topW, topH, top);
  const yBar = topH + 22;
  h += vl(W / 2, topH, 22);
  h += hl(kw / 2, yBar, W - kw);
  kids.forEach((k, i) => {
    const x = i * (kw + g);
    h += vl(x + kw / 2, yBar, 20);
    h += box(x, yBar + 20, kw, kh, k.t, k.cls || '', k.ref);
  });
  return { html: h, w: W, h: yBar + 20 + kh };
}

const figs = {};

figs.audit_kern = () => tree('PageCompliance ist gut gebaut,\naber von außen kaum bestätigt', [
  { t: 'Gemini selbst\nausgesperrt', ref: '2.2' },
  { t: 'Website erzählt\neine alte\nGeschichte', ref: '2.5' },
  { t: 'Nur zwei\nfremde Stimmen', ref: '2.4 · 2.6' },
  { t: 'Chance: eigene\nKategorie\nnoch frei', ref: '2.7', cls: 'dash' },
]);

figs.audit_zitate = () => {
  const W = 760, cw = 236, g = 26, bh = 104;
  let h = '';
  const sys = [
    ['ChatGPT', 'nennt uns aus\nTool-Listen und der\neigenen Website', '3 von 15'],
    ['Perplexity', 'zitiert meist\nLinkedIn statt\npagecompliance.de', '4 von 15'],
    ['Gemini', 'zitiert, was bei\nGoogle in den\nTop 10 steht', '0 von 15'],
  ];
  sys.forEach((s, i) => {
    const x = i * (cw + g);
    h += lab(x, 0, s[0].toUpperCase());
    h += box(x, 20, cw, bh, s[1], '', 'Nennungen: ' + s[2]);
    h += vl(x + cw / 2, 20 + bh, 26);
    h += down(x + cw / 2, 20 + bh + 26);
  });
  const y = 20 + bh + 33;
  h += box(0, y, W, 46, 'Gemeinsamer Nenner: Fremde Signale entscheiden, ob und woher zitiert wird.', 'fill');
  return { html: h, w: W, h: y + 46 };
};

figs.plan_kern = () => tree('Erst mit einer Stimme sprechen,\ndann belegte Fragen beantworten,\ndann fremde Stimmen sammeln', [
  { t: 'Türen öffnen\nfür Gemini und\nDuckDuckGo', ref: '3.2' },
  { t: 'Eine Stimme:\nDefinition, Pakete,\nnur belegte Zahlen', ref: '3.3' },
  { t: 'Belegte Fragen\nje Tür im festen\nFormat', ref: '3.4' },
  { t: 'Fremde Stimmen\nsammeln, zwei\nje Seite', ref: '3.5' },
], 760, 70);

figs.plan_treppe = () => {
  // vertical staircase with brackets GEO / Pricing
  const W = 760, bw = 470, bh = 44, g = 18, x0 = 150;
  const steps = [
    ['Frage bei Google, ChatGPT, Perplexity oder Gemini', ''],
    ['Seite von PageCompliance: riskanter Satz, Norm,\nbesserer Satz', ''],
    ['„Ihren Satz kostenlos prüfen“', 'blue'],
    ['Gratis: 3 Prüfungen jeden Monat', ''],
    ['Paket je Tür: Praxis 29 € · Hersteller 99 € ·\nAgentur 99 €', ''],
    ['Team 249 €, wenn mehrere Menschen arbeiten', ''],
  ];
  let h = '';
  steps.forEach((s, i) => {
    const y = i * (bh + g);
    h += box(x0, y, bw, bh, s[0], s[1]);
    if (i < steps.length - 1) { h += vl(x0 + bw / 2, y + bh, g - 6); h += down(x0 + bw / 2, y + bh + g - 7); }
  });
  // brackets
  const yA = 0, yB = 3 * (bh + g) - g, yC = 3 * (bh + g), yD = 6 * (bh + g) - g;
  h += vl(x0 - 18, yA, yB - yA, 'blue'); h += hl(x0 - 18, yA, 10, 'blue'); h += hl(x0 - 18, yB, 10, 'blue');
  h += lab(0, (yA + yB) / 2 - 16, 'GEO<br>dieser Plan', 'blue');
  h += vl(x0 - 18, yC, yD - yC); h += hl(x0 - 18, yC, 10); h += hl(x0 - 18, yD, 10);
  h += lab(0, (yC + yD) / 2 - 16, 'PRICING<br>Bericht 01.10.');
  h += lab(x0 + bw + 20, 2 * (bh + g) + 6, 'Brücke: das<br>Seitenformat ist<br>die Produktdemo');
  return { html: h, w: W, h: yD };
};

figs.plan_muster = () => {
  const W = 760, n = 5, g = 12, bw = (W - (n - 1) * g) / n, bh = 110;
  const st = [
    ['1 Frage\nbelegen', 'Autocomplete,\nWeitere Fragen,\nKI, Kunde'],
    ['2 Seite im\nfesten Format', 'Befund, Norm,\nbesserer Satz'],
    ['3 Zwei fremde\nStimmen', 'in 14 Tagen'],
    ['4 Eine\nDefinition', 'überall\nwörtlich gleich'],
    ['5 Nach 4 Wochen\nmessen', 'Search Console,\nBing, Panel'],
  ];
  let h = '';
  st.forEach((s, i) => {
    const x = i * (bw + g);
    h += box(x, 0, bw, bh, `${s[0]}`, '', s[1].replace(/\n/g, '<br>'));
    if (i < n - 1) { h += hl(x + bw, bh / 2, g - 6); h += right(x + bw + g - 7, bh / 2); }
  });
  const y = bh + 30;
  h += vl(W - bw / 2, bh, 30);
  h += down(W - bw / 2, bh + 23);
  const dw = (W - 3 * g) / 4;
  ['halten', 'verlinken', 'umschreiben', 'aufgeben'].forEach((d, i) => {
    h += box(i * (dw + g), y, dw, 36, d, 'fill');
  });
  h += lab(0, y + 46, 'Was nicht durch Schritt 1 kommt, wird nicht geschrieben. Was nach Schritt 5 nicht trägt, wird umgebaut oder aufgegeben.');
  return { html: h, w: W, h: y + 64 };
};

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ deviceScaleFactor: 3 });
  for (const [name, fn] of Object.entries(figs)) {
    const f = fn();
    await p.setContent(`<html><head><style>${CSS}</style></head><body><div id="c"><div style="position:relative;width:${f.w}px;height:${f.h}px">${f.html}</div></div></body></html>`);
    await p.waitForTimeout(150);
    await (await p.$('#c')).screenshot({ path: path.join(OUT, name + '.png') });
    console.log('ok', name);
  }
  await b.close();
})();
