const { Report, D } = require('./lib');

const r = new Report({ footnotes: {} });

function task(id, title, what, why, done, quote) {
  r.h3(`${id}  ${title}`);
  (Array.isArray(what) ? what : [what]).forEach((w) => r.p(w, { spacing: { after: 60, line: 290 } }));
  if (quote) r.quote(quote);
  r.p(`**Warum:** ${why}`, { spacing: { after: 60, line: 290 } });
  if (done) r.p(`**Fertig, wenn:** ${done}`, { spacing: { after: 200, line: 290 }, run: { color: '444444' } });
}

const DEF = 'PageCompliance ist die Plattform für Gesundheitswerbung. Agenturen, Praxen, Heilberufe und Hersteller prüfen ihre Texte KI-gestützt auf Risiken nach Heilmittelwerbegesetz (HWG), Health-Claims-Verordnung und UWG – bekommen für jede kritische Stelle den besseren Satz und geben gemeinsam frei.';

r.body.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: 'GEO-MASSNAHMENPLAN · AUFGABEN FÜR MASSI', font: 'Helvetica', size: 15, color: '6B6B6B', characterSpacing: 30 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 120 }, children: [new D.TextRun({ text: 'Was Massi tun soll', font: 'Helvetica', bold: true, size: 44 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 240 }, children: [new D.TextRun({ text: 'Punkt für Punkt, mit dem Grund dahinter · Stand 28. Oktober 2026', font: 'Helvetica', size: 22, color: '555555' })] }));

r.callout('WORUM ES GEHT', 'Google und KI-Systeme finden PageCompliance kaum, weil die Website eine alte Geschichte erzählt und außerhalb nur zwei Stimmen über uns sprechen. Dein Teil löst genau das: eine einheitliche Beschreibung, korrekte Inhalte und fremde Stimmen. Leon macht die Technik und die Preise.');
r.p('Grundlage: GEO-Audit (Teil 1) und GEO-Maßnahmenplan (Teil 2) vom 28. Oktober. Die Nummern M2 bis M14 und E1 bis E5 sind dort dieselben. Die Fragen, Rankings und Wettbewerber stehen in der Datei „Fragen, Rankings und Wettbewerb“.', { run: { size: 18, color: '555555' } });

r.h1('1 Diese Woche mit Leon entscheiden');
r.table(['#', 'Entscheidung', 'Empfehlung', 'Dein Anteil'], [
  ['E1', 'Google-Extended freigeben?', 'ja', 'mitentscheiden'],
  ['E2', 'Welche Preise zeigt die Website?', 'Preise v2 mit dem Upgrade; bis dahin unbelegte Zahlen raus', 'Leon entscheidet; du schreibst keine Preise in neue Artikel, bis E2 steht'],
  ['E3', 'Zeile „Er stellt keine Rechtsberatung dar“ unter den Artikeln?', 'ersetzen durch „Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“', 'mitentscheiden'],
  ['E4', 'Name der Wächter-Seite?', '„Laufende Website-Prüfung“; App-Name bleibt „Wächter“; Monatsbericht heißt „Prüfbericht“', 'Text der Seite'],
  ['E5', 'Trainingscrawler (GPTBot, ClaudeBot, CCBot, Applebot-Extended) freigeben?', 'ja, für die öffentlichen Seiten', 'mitentscheiden'],
], [6, 30, 36, 28], { size: 15 });

r.h1('2 Sofort (diese Woche)');
task('M2', 'Eine Definition überall: LinkedIn und Munich Startup', [
  'LinkedIn-Info der Firmenseite auf die Definition umstellen. Die Seite bitte selbst prüfen; ohne Login war sie für die Erhebung nicht lesbar.',
  'In der LinkedIn-Info nach „Vorprüfung“ und „rechtssicher“ suchen und ersetzen. Die Profile von Leon und dir mit der Firmenseite verknüpfen.',
  'Bei Munich Startup den Beschreibungstext ersetzen und die Kategorien FinTech und InsurTech entfernen lassen. Dort steht PageCompliance heute unter „FinTech | InsurTech | LegalTech | RegTech“.',
  'Die Definition, wörtlich:',
], 'Gemini ordnet PageCompliance dem FinTech-Bereich zu; Munich Startup ist dafür eine wahrscheinliche Quelle. Perplexity zitiert uns überwiegend über LinkedIn und gibt dort „technische Vorprüfung“ weiter. KI-Systeme ordnen eine Firma über gleichlautende Beschreibungen ein.',
  'beide Profile tragen die Definition wörtlich; bei Munich Startup stehen FinTech und InsurTech nicht mehr.', DEF);
task('M3', 'Text für /ueber-uns', [
  'Faktenblock, den Leon einbaut (L10). Vorschlag:',
], 'Perplexity zitiert genau diese Seite. Heute stehen dort nur Vornamen, kein Sitz, kein Gründungsjahr, keine Registernummer; Gemini holt diese Fakten deshalb aus Creditreform. Die Gründerstory bleibt offen, die Fakten reichen.',
  'der Text liegt bei Leon.',
  'S/E PageCompliance UG (haftungsbeschränkt), Sitz Grünwald, gegründet 2026, HRB 311850, Amtsgericht München. Gründer: Leon V. Schwahn (CEO) und Massimiliano Ehmann (CCO). Danach die Definition wörtlich und die drei Grundsätze: 01 Ihre Botschaft bleibt erhalten. 02 Jeder Befund ist nachvollziehbar. 03 Ehrliche Kommunikation.');
task('M4', 'Vorher-Nachher-Artikel korrigieren', [
  'Kurzantwort und Text um das BGH-Urteil ergänzen, mit Aktenzeichen und Link zur Quelle. Inhalt: Das Verbot vergleichender Vorher-Nachher-Darstellungen aus § 11 Abs. 1 Satz 3 Nr. 1 HWG gilt seit dem Urteil vom 31.07.2025 (I ZR 170/24) auch für Unterspritzungen mit Hyaluron oder Botox, nicht nur bei operativen Eingriffen.',
  'Vor Veröffentlichung fachlich durchsehen lassen.',
], 'Der Artikel sagt heute, das Verbot gelte „bei operativen Eingriffen“. Das ist seit dem Urteil zu eng. Für einen Prüf-Anbieter wiegt ein Inhaltsfehler doppelt.',
  'Kurzantwort und Text nennen Unterspritzungen und das Aktenzeichen.');

r.h1('3 In 30 Tagen');
task('M12', 'Texte für die Startseite', [
  '**Title:** Vorschlag „PageCompliance – die Prüfung für Gesundheitswerbung“.',
  '**Meta-Description:** Vorschlag',
  '1. „Gesundheitstexte nach HWG, HCVO und UWG prüfen. Für Agenturen, Praxen, Heilberufe und Hersteller: jeder Befund mit besserem Satz, bereit zur Freigabe.“',
  '2. „Gesundheitstexte prüfen, für Agenturen, Praxen, Heilberufe und Hersteller. Jeder Befund mit Norm und dem besseren Satz, bereit zur Freigabe.“',
  '**Zeile unter der H1:** Vorschlag „Die Prüfung für Gesundheitswerbung nach Heilmittelwerbegesetz, Health-Claims-Verordnung (und UWG).“',
  '**Ersatz für „Für jede Regel ein Spezialist.“ und „12 Paragrafen“:** ohne Zahl; die Spezialisten als endloser Strom zeigen, nicht zählen.',
  '**Blog-Title:** Vorschlag „Ratgeber für Gesundheitstexte | PageCompliance“.',
  '**Blog, H1:** „Stark werben. Sauber formulieren.“ ersetzen durch „Stark werben. Ruhig veröffentlichen.“ „Sauber“ ist laut Leitfaden ein Urteilswort.',
], 'Live stehen „Healthcare Website Compliance Checker“ und dreimal „Vorprüfung“. Der Claim „Compliance in Sekunden.“ sagt einer Suchmaschine nicht, worum es geht. Nachzählbare Prüfer-Zahlen verbietet der Leitfaden.',
  'die Texte liegen bei Leon (L3, L9).');
task('M5', 'Vorfilter-Artikel neu schreiben',
  'Neuer Titel, etwa „Was eine Prüfung für Gesundheitswerbung leistet und wo die Kanzlei übernimmt“. Kein „Vorfilter“, kein „KEINE PRÜFUNG“. Leon leitet den alten Slug weiter (L12).',
  'Der Artikel widerspricht dem Claim „die Prüfung für Gesundheitswerbung“. Und er beantwortet die Frage, die heute kein KI-System mit einem Werkzeug beantwortet: „Welche Alternativen gibt es zur anwaltlichen Prüfung?“',
  'neuer Artikel ist live, der alte Slug leitet weiter.');
task('M6', 'Immunsystem-Artikel zusammenführen',
  'Aus zwei Artikeln (445 und 712 Wörter) wird einer unter /blog/nem-immunsystem-claims-erlaubt. Mit dem Wortlaut der zugelassenen Claims und ihren Bedingungen.',
  'Zwei Seiten zur selben Frage konkurrieren gegeneinander.',
  'ein Artikel, der andere leitet weiter (L12).');
task('M7', 'Crunchbase und OMR anlegen', [
  '**Crunchbase:** einmal anlegen, Definition und Fakten rein, nicht pflegen. Bringt keine Kunden, aber eine fremde Quelle mit harten Fakten.',
  '**OMR Reviews:** nur das kostenlose Basis-Profil mit Definition und Screenshots. Vorher prüfen, in welcher Kategorie wir landen. Aktiv angehen erst ab etwa fünf echten Bewertungen (eigene Setzung); ein Profil ohne Bewertungen ist wertlos.',
  '**Kein G2:** amerikanisch geprägt, für deutsche Gesundheitswerbung ohne erkennbaren Nutzen.',
  'Bewertungen nur von echten Kunden, nie gekauft. Naheliegend: die Agenturkundin und die Heilpraktikerin um eine ehrliche Bewertung bitten.',
  'Die Profil-Adressen an Leon geben; er trägt sie ins Firmen-Markup ein (L8).',
], 'Außerhalb der eigenen Website gibt es heute nur LinkedIn und Munich Startup. Eine Marke braucht Fundstellen, die nicht ihr selbst gehören. OMR nennt sich die meistzitierte Quelle bei Software-Empfehlungen in DACH; das ist eine eigene Studie mit Eigeninteresse.',
  'Crunchbase und OMR sind live, beide Kunden um eine Bewertung gebeten.');
task('M8', 'Neue Artikel 1 bis 4', [
  'In dieser Reihenfolge: 1 „Sind Heilversprechen strafbar?“ · 2 „Was kostet eine Prüfung nach dem Heilmittelwerbegesetz?“ · 3 „Welche Werbung darf ein Arzt machen?“ · 4 „Für wen gilt das Heilmittelwerbegesetz?“. Belege und geprüfte Rechtsgrundlagen stehen im Maßnahmenplan, Abschnitt 3.4.',
  '**Format jeder Seite:** Kurzantwort in zwei Sätzen, der riskante Satz, Norm und Aktenzeichen, wann es doch geht, drei bessere Sätze, ein Agentur-Hinweis, „Ihren Satz kostenlos prüfen“, Stand-Datum und Autor.',
  '**Artikel 1:** Risiko vorne, Ruhe am Ende; er endet mit dem besseren Satz, nicht mit dem Strafrahmen. **Artikel 2:** Fremde Preise nur mit Quelle, Datum und Screenshot; eigene Preise erst nach E2, die liefert Leon. Kein „günstiger und schneller als der Anwalt“ (OLG Köln 6 U 263/19).',
], 'Diese Fragen stellen Käufer nachweislich (Googles „Weitere Fragen“, Autocomplete, KI-Fragen), und zu keiner gibt es einen Artikel. Das Format ist zugleich die Produktvorführung: Befund, Norm, besserer Satz.',
  'je Artikel ist er live, hat einen LinkedIn-Beitrag und eine fremde Fundstelle (Muster, Schritte 1 bis 3).');
task('M9', 'Partner-Agenturen ansprechen – IDEE', [
  'envyo.de, get-luna.de, buntdigital.de, pixelrobots.de, huchel-medienagentur.de, adfera.de. Angebot: Gastbeitrag, Tool-Erwähnung oder Partnerschaft. Ansprache in Sie.',
  'Nicht smugo: smugo bietet Agenturen selbst einen HWG-Dienst als White-Label-Partnerschaft an.',
  'Kernaussage für die Anfrage, als Vorschlag:',
], 'Diese Agenturen besetzen die Ratgeber-Suchen, verkaufen aber Websites, keine Prüfung. Ein Beitrag bei ihnen bringt Link und Zielgruppe. Und sie sind selbst Tür 1: Über den Empfehlungsweg bringen sie Praxen mit, mit 15 % Gutschrift.',
  'mindestens zwei Zusagen für Gastbeitrag oder Erwähnung.',
  'Sie bauen die Websites, wir prüfen die Texte darauf. Ihre Kunden fragen, ob sie das so schreiben dürfen; wir zeigen jede kritische Stelle mit Norm und besserem Satz. Gern schreiben wir einen Beitrag für Ihre Leser, und Ihre Kunden prüfen mit uns in Ihrem Namen.');
task('M11', 'Jeder Artikel ein LinkedIn-Beitrag',
  'Binnen 14 Tagen nach Veröffentlichung. Firmenseite in Sie, dein Profil in Du. Format aus dem Marketing-Schlüssel: „Ein Satz, drei Fassungen“, also ein echter Satz aus dem Gesundheitsmarketing, der Befund, der bessere Satz, Ende „Bereit zur Freigabe“. Falls M9 umgesetzt wird, zusätzlich eine Gastbeitrag-Version für eine Partner-Agentur.',
  'Schritt 3 des Musters: zwei fremde Stimmen je Seite. LinkedIn ist heute die Quelle, über die Perplexity uns zitiert.',
  'jeder neue Artikel hat seinen Beitrag.');

r.h1('4 In 90 Tagen');
task('M10', 'Text für die Vergleichsseite',
  'Vergleich nach Kategorien: Kanzlei, Chat-KI, Agentur-Dienstleistung, Plugin, Prüfsoftware. Sachlich nach § 6 UWG, mit Stand-Datum. Kein Anbieter wird namentlich angegriffen.',
  'ChatGPT baut Tool-Tabellen aus vorhandenen Vergleichen. Und „Welche Alternativen gibt es zur anwaltlichen Prüfung?“ beantwortet heute kein System mit einem Werkzeug.',
  'Text liegt bei Leon (L16) und ist gegengelesen (M14).');
task('M13', 'Wiederholungsmessung',
  'Dieselben 20 Suchbegriffe und 15 Fragen, jede Frage dreimal in ChatGPT, Perplexity und Gemini. Dazu Search Console und Bing „AI Performance“. Die leere Messtabelle steht in der Datei „Fragen, Rankings und Wettbewerb“. Erste verkürzte Messung vier Wochen nach dem Sofort-Paket.',
  'Ein Durchlauf ist ein Schnappschuss, drei zeigen einen Trend. Nach der Messung bekommt jede Seite eine Entscheidung: halten, verlinken, umschreiben, aufgeben.',
  'der Vergleich mit den Ausgangswerten vom 26.10. liegt vor.');
task('M14', 'Anwaltlich gegenlesen lassen',
  'Abmahnschutz-Formulierungen, Artikel 2 zur Preisfrage, die Vergleichsseite. Den Preisanker auf der Preisseite lässt Leon prüfen.',
  'Steht im Sprach-Leitfaden als offen. Ein Prüf-Anbieter muss in der eigenen Werbung sauber sein.',
  'die Befunde sind eingearbeitet.');

r.h1('5 Offen bei dir');
r.bullets([
  '**Sprach-Leitfaden nachziehen:** In Abschnitt 7 stehen „15 € je Text“ und „trägt sich ab dem 7. Text“ noch unter „Unbelegt“. Neu: 15 € ist das Rechenbeispiel für kleine und mittlere Agenturen, immer als Beispiel formuliert.',
  '**Heilpraktiker-Kernsatz:** „liest ab jetzt jemand mit“ klingt nach einem Menschen, der mitliest. Alternative „liest ab jetzt PageCompliance mit“ prüfen.',
  '**Ton für approbierte Psychotherapeuten** getrennt von Heilpraktikern festlegen, bevor der Artikel „Heilpraktiker für Psychotherapie“ kommt.',
  '**Wörterbuch im Leitfaden nachziehen:** Der Wächter heißt gegenüber Kunden der Agentur jetzt „Laufende Website-Prüfung“ statt „Compliance-Monitoring“; der Monatsbericht heißt „Prüfbericht“.',
  '**Instagram (optional):** Profil erst in die Website-Fußzeile und ins Firmen-Markup, wenn es regelmäßig bespielt wird. Link im Profil direkt auf die kostenlose Prüfung oder /heilberufe. Für GEO zählt es wenig, für Vertrauen schon.',
]);

r.h1('6 Was Leon von dir braucht');
r.table(['Leons Aufgabe', 'braucht von dir', 'Aufgabe'], [
  ['L3, L9', 'Title, Meta-Description, Zeile unter der H1, Startseiten-Texte', 'M12'],
  ['L5', 'Definition (fertig, steht oben)', 'M2'],
  ['L8, L10', 'Faktenblock Über uns; Adressen der Verzeichnis-Profile', 'M3, M7'],
  ['L12', 'neuer Vorfilter-Artikel; zusammengeführter Immunsystem-Artikel', 'M5, M6'],
  ['L15', 'Texte je Tür: /agenturen, /arztpraxen, /heilberufe, /hersteller, /laufende-website-pruefung', 'Texte je Tür'],
  ['L16', 'Text der Vergleichsseite', 'M10'],
], [18, 62, 20]);

r.h1('7 Sechs Sprachregeln für jeden Text');
r.numbered([
  '**Risiko vorne, Ruhe am Ende.** Der Einstieg darf zuspitzen; das Ende ist der bessere Satz und „kostenlos prüfen“.',
  '**Die Software prüft, der Mensch entscheidet.** Nie „Wir prüfen Ihre Texte“, auch nicht „prüfen lassen“.',
  '**„Prüfung“, nie „Vorprüfung“ oder „Vorfilter“.** KI nur nebenbei, nie in Title oder H1.',
  '**Abmahnschutz nur als Thema**, nie als Versprechen.',
  '**Den Anwalt einordnen, nicht schlechtmachen:** „Zum Anwalt geht nur, was rot bleibt.“',
  '**Zahlen nur aus der Belegt-Liste** oder mit Quelle, Datum und Screenshot. Rechenbeispiele immer als Beispiel formulieren.',
]);
r.body.pop();

r.save(process.argv[2], { title: 'Was Massi tun soll', withToc: false });
