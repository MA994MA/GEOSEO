const { Report, D } = require('./lib');

const r = new Report({ footnotes: {} });

// One slide: title with duration, a one-line hint for the later deck, then the spoken text
function folie(nr, title, minutes, onSlide, say) {
  r.h2(`Folie ${nr} · ${title}`);
  r.p(`**Dauer:** etwa ${minutes} · **Auf der Folie:** ${onSlide}`, { run: { size: 17, color: '6B6B6B' }, spacing: { after: 100 } });
  say.forEach((t) => r.p(t, { spacing: { after: 120, line: 310 } }));
}

r.body.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: 'GEO-MASSNAHMENPLAN · SPRECHSKRIPT', font: 'Helvetica', size: 15, color: '6B6B6B', characterSpacing: 30 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 120 }, children: [new D.TextRun({ text: 'Mehr Reichweite über Google und KI', font: 'Helvetica', bold: true, size: 44 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 240 }, children: [new D.TextRun({ text: 'Sprechskript für das Gespräch mit Leon · 8 Folien · etwa 15 Minuten · Stand 28. Oktober 2026', font: 'Helvetica', size: 22, color: '555555' })] }));
r.callout('ZIEL DES GESPRÄCHS', 'Leon weiß am Ende, was er tun soll und warum, was du tust, was uns das bringt, und ihr habt die fünf Entscheidungen getroffen oder einen Termin dafür.');

r.h1('Das Skript');

folie(1, 'Worum es geht', '1 Minute',
  'Ziel April 2027: 20 zahlende Organisationen, 3.980 € im Monat. Heute: rund 1,6 Anmeldungen von außen im Monat.',
  [
    'Leon, du kennst die Rechnung aus dem Pricing-Bericht: Bis April brauchen wir 20 zahlende Organisationen und 3.980 € im Monat. Der Bericht sagt klar: Der Engpass ist nicht der Preis, sondern die Reichweite. Heute kommen rund 1,6 Anmeldungen im Monat von Leuten, die wir nicht kennen.',
    'Agenturen holen wir über Vorführungen. Praxen, Heilberufe und Hersteller sollen aber über die Website kommen und kostenlos prüfen. Das klappt nur, wenn sie uns finden: bei Google und in ChatGPT, Perplexity und Gemini. Genau darum geht es heute.',
  ]);

folie(2, 'Was das Audit zeigt', '2 Minuten',
  'ChatGPT 3, Perplexity 4, Gemini 0 von 15 Antworten. Google: 2 von 20 Suchbegriffen, beide Platz 1.',
  [
    'Wir haben 15 Fragen gestellt, so wie ein Kunde sie eintippt, und 20 Suchbegriffe bei Google geprüft. Die gute Nachricht zuerst: Die Technik der Website ist gut. Google hat alle Seiten im Index, auch alle 14 Blogartikel.',
    'Und wo man uns lesen darf, gewinnen wir sofort. ChatGPT setzt uns bei der Frage nach Tools in die erste Zeile. Bei Google stehen zwei Artikel auf Platz 1.',
    'Aber insgesamt sind wir kaum sichtbar, und dafür gibt es drei Gründe. Erstens: Wir sperren Gemini selbst aus, mit einer Zeile in der robots.txt. Gemini hält PageCompliance deshalb für einen Allgemeinbegriff und ordnet uns dem FinTech-Bereich zu. Zweitens: Unsere eigene Website erzählt noch die alte Geschichte, mit „Vorprüfung“, den alten Paketen und Zahlen, die wir nicht belegen können. Genau das geben die KI-Systeme weiter. Drittens: Außer LinkedIn und Munich Startup spricht niemand über uns. Google und die KI-Systeme vertrauen aber vor allem fremden Quellen.',
  ]);

folie(3, 'Was uns das bringt', '2 Minuten',
  'Die Website wird zum Weg in den Gratis-Einstieg. Frage → unsere Seite → kostenlos prüfen → Paket.',
  [
    'Der Plan macht die Website zu dem Weg, den das Pricing braucht. Jemand fragt bei Google oder ChatGPT: „Darf ich schmerzfrei schreiben?“ Er landet auf unserer Seite. Die zeigt den riskanten Satz, die Norm und den besseren Satz. Und am Ende steht: „Ihren Satz kostenlos prüfen.“ Damit ist er im Gratis-Einstieg mit drei Prüfungen im Monat. Ab da trägt das Pricing.',
    'Dazu kommt: Die Kategorie ist noch frei. Auf die Frage „Welche Alternativen gibt es zur anwaltlichen Prüfung?“ nennt heute keines der drei Systeme ein Werkzeug. Und auf die Preisfrage antworten alle nur mit Kanzleipreisen. Da wollen wir rein, bevor es jemand anderes tut.',
    'Was es kostet: vor allem unsere Zeit. Dein Teil sind etwa fünf Stunden sofort plus die Preisseite, vier Tage in den nächsten 30 Tagen und fünf Tage bis Tag 90. Geld geben wir dafür kaum aus. Die Werkzeuge sind kostenlos, Verzeichnisse wie OMR haben ein kostenloses Basis-Profil.',
    'Woran wir es messen: Nach vier Wochen fragen wir dieselben 15 Fragen und 20 Suchbegriffe noch mal ab. In 90 Tagen soll Gemini richtig sagen, wer wir sind. Wir wollen mindestens fünf fremde Quellen statt zwei, und zwei der neuen Artikel sollen in den Top 10 stehen. Und wir sehen bei jeder Anmeldung, woher sie kommt.',
  ]);

folie(4, 'Deine Aufgaben, Leon: sofort', '2 Minuten',
  'Etwa 5 Stunden Technik plus Preisseite. L1 bis L7 und L17.',
  [
    'Dein Teil ist die Technik und die Preise. Das meiste ist schnell gemacht, und es wirkt sofort.',
    'Erstens die robots.txt: Gemini und DuckDuckGo hereinlassen, und wenn wir uns einig sind, auch die Trainings-Crawler von OpenAI, Anthropic, Common Crawl und Apple. Warum: Sonst darf Gemini unsere Website nicht nutzen, und die Modelle kennen uns nur, wenn sie gerade im Netz suchen.',
    'Zweitens die Login- und Registrierungsseite aus dem Index nehmen. Warum: Die Login-Seite steht bei der Suche nach PageCompliance auf Platz 3, vor der Preisseite.',
    'Drittens Titles, Meta-Description und Überschriften bereinigen, also raus mit „Vorprüfung“ und „Healthcare Website Compliance Checker“. Warum: Das ist das Erste, was Google und KI lesen. Die Texte dafür bekommst du von mir.',
    'Viertens die Preisseite. Die liegt ganz bei dir, weil du die Preise verantwortest. „Anwalt ab 3.000 €“ und „Abmahnung ab 5.000 €“ müssen raus, weil wir sie nicht belegen können. Für einen Anbieter, der Werbeaussagen prüft, ist das auf der eigenen Preisseite ein echtes Risiko. Die 15 € je Text dürfen bleiben, aber klar als Rechenbeispiel.',
    'Dazu Kleinkram mit Wirkung: die llms.txt neu, die Sitemap prüfen, die Fußzeile im Blog tauschen, Search Console und Bing einrichten. Ohne die beiden Werkzeuge können wir nichts messen.',
  ]);

folie(5, 'Deine Aufgaben, Leon: 30 und 90 Tage', '1,5 Minuten',
  '30 Tage: Firmen-Markup, Über uns, Blog-Vorlage, Weiterleitungen, Messung, Preis-Markup. 90 Tage: Seiten je Zielgruppe, Vergleichsseite.',
  [
    'In den nächsten 30 Tagen machen wir aus PageCompliance eine Firma, die Maschinen erkennen. Du baust ein Firmen-Markup mit Sitz, Gründung, Registernummer und uns beiden als Gründer. Warum: Gemini holt diese Fakten heute aus Creditreform statt von uns.',
    'Dazu die Seite „Über uns“ mit meinem Faktenblock, eine Blog-Vorlage mit Datum, Autor, Aktenzeichen und internen Links, zwei Weiterleitungen, und die Messung, damit wir sehen, ob eine Anmeldung über ChatGPT kam. Ob wir dafür bei Plausible bleiben, entscheidest du. Das Preis-Markup kommt erst, wenn die neuen Preise live sind.',
    'Bis Tag 90 dann eine Seite je Zielgruppe: Agenturen, Arztpraxen, Heilpraktiker, Hersteller und die Seite „Laufende Website-Prüfung“ für den Wächter. Dazu eine Vergleichsseite nach Kategorien, ohne einen Wettbewerber anzugreifen. Warum: Bei den acht Suchen nach einem Werkzeug steht heute keine einzige Seite von uns.',
  ]);

folie(6, 'Meine Aufgaben', '2 Minuten',
  'Eine Stimme, richtige Inhalte, fremde Stimmen. M2 bis M14.',
  [
    'Mein Teil löst den eigentlichen Engpass: Wir sprechen überall gleich, unsere Inhalte stimmen, und andere sprechen über uns.',
    'Sofort stelle ich LinkedIn und Munich Startup auf unsere Definition um und lasse dort FinTech und InsurTech streichen. Warum: Daher hat Gemini sehr wahrscheinlich das FinTech. Ich schreibe den Text für „Über uns“. Und ich korrigiere den Vorher-Nachher-Artikel: Der BGH hat das Verbot 2025 auf Unterspritzungen ausgeweitet, das fehlt bei uns. Für einen Prüf-Anbieter ist so ein Fehler doppelt peinlich.',
    'In den nächsten 30 Tagen schreibe ich die Texte für die Startseite, baue zwei alte Artikel um und schreibe vier neue. Die vier beantworten Fragen, die Leute nachweislich stellen, zum Beispiel „Sind Heilversprechen strafbar?“. Das ist die häufigste Frage im ganzen Audit, und wir haben keinen Artikel dazu. Jeder Artikel bekommt einen LinkedIn-Beitrag. Und ich lege uns bei OMR Reviews, Crunchbase und G2 an, mit echten Bewertungen von unseren Kunden.',
    'Eine Idee, die ich noch prüfe: Partner-Agenturen wie envyo oder pixelrobots ansprechen. Die schreiben über das Heilmittelwerbegesetz, verkaufen aber Websites, keine Prüfung. Ein Gastbeitrag bei denen bringt Links, und die Agenturen sind gleichzeitig unsere Hauptkäufer.',
    'Bis Tag 90: Text für die Vergleichsseite, die Wiederholungsmessung und eine anwaltliche Durchsicht der heiklen Formulierungen.',
  ]);

folie(7, 'Was wir heute entscheiden', '3 Minuten',
  'E1 bis E5, dazu drei offene Punkte.',
  [
    'Fünf Entscheidungen brauche ich heute von uns beiden.',
    '**E1, Google-Extended freigeben?** Mein Vorschlag: ja. Ohne die Freigabe nennt uns Gemini nicht. Der Preis: Google darf unsere Texte auch für das Training nutzen.',
    '**E2, welche Preise auf die Website?** Das entscheidest du. Mein Vorschlag: Die neuen Preise gehen mit dem Upgrade live. Bis dahin fliegen die unbelegten Zahlen sofort raus, und in neue Artikel schreiben wir keine Preise.',
    '**E3, die Zeile „Er stellt keine Rechtsberatung dar“ unter allen Artikeln?** Vorschlag: ersetzen durch „Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“ So steht es auch im Leitfaden: die Formel nur in die AGB, nicht ins Marketing.',
    '**E4, wie heißt die Wächter-Seite?** Vorschlag: „Laufende Website-Prüfung“, der Monatsbericht heißt „Prüfbericht“. In der App bleibt es „Wächter“. Der Name ist deutsch, passt zu „Prüfung“, verspricht keinen Schutz, und Agenturen können ihn ihren Kunden weiterberechnen.',
    '**E5, die Sperre für die Trainings-Crawler aufheben?** Vorschlag: ja, für die öffentlichen Seiten. Die Sperre kostet uns keine Zitate, aber sie hält uns aus dem Wissen der Modelle heraus. Was öffentlich steht, ist Marketing und soll sich verbreiten. Ehrlich gesagt: Ob das wirkt, ist nicht belegt, und es dauert bis zur nächsten Modellgeneration.',
    'Dazu drei offene Punkte für dich: Bleiben wir bei Plausible? Beauftragen wir eine Markenrechtlerin für „Wächter“ und „PageCompliance“? Und wann führst du die Gespräche mit den Praxen und tigovit? Davon hängen die Preise ab, und damit Preis-Markup und Zielgruppen-Seiten.',
  ]);

folie(8, 'Die nächsten vier Wochen', '1,5 Minuten',
  'Woche 1 entscheiden und Sofort-Paket · Woche 2 eine Stimme · Woche 3 Bestand reparieren · Woche 4 erste Artikel und Messung.',
  [
    'So sieht der Monat aus. Diese Woche entscheiden wir, du baust das Sofort-Paket und bereinigst die Preisseite. Danach stellen wir überall auf eine Stimme um: Website, LinkedIn, Munich Startup, „Über uns“. Dann reparieren wir die alten Artikel, und dann gehen die ersten neuen Artikel online, jeder mit LinkedIn-Beitrag.',
    'Vier Wochen nach dem Sofort-Paket messen wir zum ersten Mal nach. Dann entscheiden wir für jede Seite: halten, verlinken, umschreiben oder aufgeben.',
    'Alles steht in deinem Blatt „Was Leon tun soll“, mit Code und „Fertig, wenn“. Wenn wir die fünf Entscheidungen heute treffen, kannst du morgen anfangen.',
  ]);

r.h1('Falls Leon fragt');
r.table(['Frage', 'Antwort'], [
  ['„Warum nicht einfach mehr Artikel?“', 'Weil uns nicht der Inhalt fehlt, sondern Autorität von außen. Wo kaum jemand schreibt, stehen wir schon auf Platz 1. Wo andere mit Links stehen, kommen wir nicht in die Top 10, auch mit passendem Artikel. Google warnt außerdem selbst vor Masse.'],
  ['„Geben wir mit der Freigabe nicht unser Wissen her?“', 'Öffentlich stehen nur Marketingtexte, die sich verbreiten sollen. Die Prüflogik steht nicht auf der Website. Und wir gewinnen über den Weg bis zur Freigabe, nicht über einzelne Artikel.'],
  ['„Was, wenn es nichts bringt?“', 'Wir messen nach vier Wochen mit denselben Fragen. Was nicht trägt, bauen wir um oder lassen es. Der größte Teil kostet nur Zeit, kein Geld.'],
  ['„Warum muss die Preisseite so schnell geändert werden?“', 'Unbelegte Zahlen auf der Preisseite eines Prüf-Anbieters sind angreifbar (§ 5 UWG). Und die KI-Systeme geben sie weiter.'],
  ['„Brauchen wir dafür eine Agentur?“', 'Nein. Dein Teil sind etwa zehn Arbeitstage über drei Monate, meiner sind Texte und Kontakte.'],
], [32, 68]);
r.body.pop();

r.save(process.argv[2], { title: 'Sprechskript für Leon', withToc: false });
