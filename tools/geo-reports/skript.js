const { Report, D } = require('./lib');

const r = new Report({ footnotes: {} });

// One slide: kernel sentence for the slide, then a few short spoken lines
function folie(nr, title, minutes, onSlide, say) {
  r.h2(`Folie ${nr} · ${title}`);
  r.p(`**Auf der Folie:** ${onSlide}  ·  etwa ${minutes}`, { run: { size: 17, color: '6B6B6B' }, spacing: { after: 100 } });
  say.forEach((t) => r.p(t, { spacing: { after: 110, line: 310 } }));
}

r.body.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: 'SPRECHSKRIPT FÜR LEON', font: 'Helvetica', size: 15, color: '6B6B6B', characterSpacing: 30 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 120 }, children: [new D.TextRun({ text: 'GEO und SEO mit unseren Kampagnen', font: 'Helvetica', bold: true, size: 44 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 240 }, children: [new D.TextRun({ text: '8 Folien · etwa 11 Minuten · Stand 28. Oktober 2026', font: 'Helvetica', size: 22, color: '555555' })] }));

folie(1, 'Worum es geht', '1 Minute',
  'Kampagnen wecken Interesse. Google und KI müssen es auffangen.',
  [
    'Leon, es geht heute um Google und die KI-Suche, also SEO und GEO, und wie das mit unseren Kampagnen zusammenhängt.',
    'Unser Ziel bis April: 20 zahlende Kunden, 3.980 € im Monat. Das Problem ist nicht der Preis, sondern dass uns zu wenige finden. Heute kommen rund 1,6 Anmeldungen im Monat von Fremden.',
    'Eine Kampagne macht neugierig. Dann googelt man oder fragt ChatGPT. Finden die Leute dort nichts Gutes über uns, ist die Kampagne verpufft.',
  ]);

folie(2, 'Wo wir stehen', '1,5 Minuten',
  'Gemini kennt uns nicht. Unsere Website ist veraltet. Kaum jemand spricht über uns.',
  [
    'Die Technik der Website ist gut. Wo man uns lesen darf, gewinnen wir sogar: ChatGPT nennt uns bei der Tool-Frage zuerst, und zwei Artikel stehen bei Google auf Platz 1.',
    'Trotzdem sind wir kaum sichtbar. Drei Gründe: Erstens sperren wir Gemini selbst aus. Zweitens erzählt unsere Website noch die alte Geschichte, mit „Vorprüfung“ und alten Preisen. Drittens sprechen außer LinkedIn und Munich Startup keine anderen über uns.',
  ]);

folie(3, 'Wie Suche und Kampagnen zusammenspielen', '1,5 Minuten',
  'Kampagne → Blog → „Drei Texte im Monat kostenlos prüfen“.',
  [
    'Jede Kampagne braucht eine Seite, auf der sie landet. Das ist unser Blog, für alle vier Zielgruppen, auch für Agenturen. Er bekommt eine Kategorie je Zielgruppe, und Artikel zu den Fragen, die die Leute wirklich stellen.',
    'Jeder Artikel endet mit „Drei Texte im Monat kostenlos prüfen“. Das ist unser Gratis-Zugang, und der ist schon aktiv.',
    'Jeder Artikel ist gleich gebaut: riskanter Satz, Gesetz, besserer Satz. Das ist genau unsere LinkedIn-Serie „Ein Satz, drei Fassungen“. Einmal schreiben, zweimal nutzen.',
    'Und wenn Verbände oder Agenturen unsere Kampagnen teilen, sprechen andere über uns. Genau das fehlt uns bei Google und in den KI-Antworten.',
  ]);

folie(4, 'Was sich an unserer Sprache sofort ändert', '1,5 Minuten',
  'Alt raus, neu rein. Überall dieselben Worte.',
  [
    'Die KI-Systeme wiederholen, was auf unserer Website steht. Deshalb räumen wir zuerst die Sprache auf. Und Zahlen, die wir nicht belegen können, sind für einen Prüf-Anbieter ein Risiko.',
    'Die wichtigsten Änderungen:',
  ]);
r.table(['Alt', 'Neu', 'Wer'], [
  ['„Vorprüfung“, „Vorfilter“, „Healthcare Website Compliance Checker“', '„Prüfung“; Claim „die Prüfung für Gesundheitswerbung“', 'Leon, Massi'],
  ['„Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“, „1.000 geprüfte Texte“', 'raus; „Anwalt ab 399 €“ nur mit Quelle', 'Leon'],
  ['„15 € je Text“', 'bleibt, aber klar als Rechenbeispiel', 'Leon'],
  ['Starter, Professional', 'Gratis, Praxis, Hersteller, Agentur, Team (mit dem Upgrade)', 'Leon'],
  ['„White-Label“, „Video-Audit“', '„In Ihrem Namen“, „Einzel-Audit“', 'Leon'],
  ['„Für jede Regel ein Spezialist“, „12 Paragrafen“', 'ohne Zahl', 'Massi'],
  ['„Stark werben. Sauber formulieren.“', '„Stark werben. Ruhig veröffentlichen.“', 'Massi'],
  ['„Er stellt keine Rechtsberatung dar“', '„Den Einzelfall bewertet Ihre Kanzlei.“ (Entscheidung 3)', 'Massi, Leon'],
  ['„HWG-Wächter“, „Compliance-Monitoring“', '„Laufende Website-Prüfung“ (Entscheidung 4)', 'Massi'],
  ['FinTech (Munich Startup), „technische Vorprüfung“ (LinkedIn)', 'unsere Definition, überall wörtlich gleich', 'Massi'],
], [40, 44, 16], { size: 15 });

folie(5, 'Was du machst', '2 Minuten',
  'Technik und Preise. Sofort etwa 5 Stunden, dann etwa 4 Tage, dann etwa 5 Tage.',
  [
    '**Sofort:** Gemini und die anderen KI-Crawler hereinlassen. Die Login-Seite aus der Google-Suche nehmen. Titel und Texte im Kopf der Seiten bereinigen. Und die Preisseite: Alle Zahlen raus, die wir nicht belegen können. Für einen Prüf-Anbieter sind die ein echtes Risiko.',
    '**In 30 Tagen:** Google sagen, wer wir sind, also Firma, Sitz, Gründer. Die Seite „Über uns“ einbauen. Die Blog-Vorlage verbessern und vier Blog-Kategorien anlegen, eine je Zielgruppe. Und messen, woher jede Anmeldung kommt. Dafür bekommen die Links in unseren Kampagnen eine Markierung, dann sehen wir, welche Kampagne wirkt.',
    '**In 90 Tagen:** eine Seite pro Zielgruppe: Agenturen, Arztpraxen, Heilberufe, Hersteller, dazu die „Laufende Website-Prüfung“. Und eine Vergleichsseite. Extra-Seiten für Suchbegriffe wie „HWG-Prüfung“ bauen wir erst, wenn die Messung zeigt, dass sie fehlen. Sonst konkurrieren sie mit der Startseite.',
    'Alles steht mit Erklärung in deinem Blatt.',
  ]);

folie(6, 'Was ich mache', '1,5 Minuten',
  'Eine Stimme, richtige Inhalte, andere sprechen über uns.',
  [
    '**Sofort:** LinkedIn und Munich Startup auf unsere Beschreibung umstellen. Dort steht noch FinTech, deshalb hält Gemini uns dafür. Den Text für „Über uns“ schreiben. Einen Fehler im Vorher-Nachher-Artikel korrigieren.',
    '**In 30 Tagen:** Texte für die Startseite, vier neue Artikel, jeder mit LinkedIn-Beitrag. Ein Profil bei Crunchbase. OMR kommt später, wenn wir mehr Kunden haben, die uns bewerten können.',
    '**Idee:** Agenturen, die über das Thema schreiben, als Partner gewinnen.',
  ]);

folie(7, 'Was wir heute entscheiden', '2,5 Minuten',
  'Fünf Entscheidungen.',
  [
    '**1. Gemini freigeben?** Ja. Sonst nennt Gemini uns nicht.',
    '**2. Welche Preise zeigt die Website?** Deine Entscheidung. Vorschlag: neue Preise mit dem Upgrade, unbelegte Zahlen sofort raus.',
    '**3. Den Satz „keine Rechtsberatung“ unter den Artikeln?** Ersetzen durch: „Den Einzelfall bewertet Ihre Kanzlei.“',
    '**4. Name für den Wächter auf der Website?** „Laufende Website-Prüfung“. In der App bleibt es „Wächter“.',
    '**5. Die KI-Modelle mit unseren Texten lernen lassen?** Ja. Dann kennen sie uns auch ohne Websuche. Ob das wirkt, ist allerdings nicht sicher.',
    'Offen bei dir: Bleiben wir bei Plausible? Mein Vorschlag: ja, mit markierten Kampagnen-Links. Bauen wir eigene Kurzlinks für die Kampagnen? Brauchen wir eine Markenrechtlerin, und wann sprichst du mit den Praxen und tigovit über die Preise?',
  ]);

folie(8, 'Was es bringt und wie es weitergeht', '1 Minute',
  'In 90 Tagen: Gemini kennt uns, mindestens 4 fremde Quellen statt 2, neue Artikel in den Top 10.',
  [
    'Es kostet vor allem unsere Zeit, kaum Geld. Nach vier Wochen messen wir mit denselben Fragen nach. Was nicht wirkt, ändern wir.',
    'Wenn wir heute entscheiden, kannst du morgen anfangen. Und die erste Kampagne an Agenturen landet dann schon auf der neuen Website.',
  ]);

r.h1('Falls Leon fragt');
r.table(['Frage', 'Kurze Antwort'], [
  ['„Warum nicht erst Kampagnen?“', 'Ohne passende Seiten verpuffen sie. Das Sofort-Paket dauert eine Woche.'],
  ['„Warum nicht einfach mehr Artikel?“', 'Uns fehlt nicht Inhalt, sondern dass andere über uns sprechen.'],
  ['„Was, wenn es nichts bringt?“', 'Wir messen nach vier Wochen. Es kostet vor allem Zeit.'],
], [36, 64]);
r.body.pop();

r.save(process.argv[2], { title: 'Sprechskript für Leon', withToc: false });
