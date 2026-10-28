const { Report, D } = require('./lib');

const r = new Report({ footnotes: {} });

// Each task: title, what (bullets or text), why, done
function task(id, title, what, why, done, code) {
  r.h3(`${id}  ${title}`);
  (Array.isArray(what) ? what : [what]).forEach((w) => r.p(w, { keepNext: !!code, spacing: { after: 60, line: 290 } }));
  if (code) r.code(code);
  r.p(`**Warum:** ${why}`, { spacing: { after: 60, line: 290 } });
  if (done) r.p(`**Fertig, wenn:** ${done}`, { spacing: { after: 200, line: 290 }, run: { color: '444444' } });
}

r.body.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: 'GEO-MASSNAHMENPLAN · AUFGABEN FÜR LEON', font: 'Helvetica', size: 15, color: '6B6B6B', characterSpacing: 30 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 120 }, children: [new D.TextRun({ text: 'Was Leon tun soll', font: 'Helvetica', bold: true, size: 44 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 240 }, children: [new D.TextRun({ text: 'Punkt für Punkt, mit dem Grund dahinter · Stand 28. Oktober 2026', font: 'Helvetica', size: 22, color: '555555' })] }));

r.callout('WORUM ES GEHT', 'Das neue Pricing braucht Reichweite: Praxen, Heilberufe und Hersteller sollen über die Website kommen und kostenlos prüfen. Heute sperrt die Website Gemini aus, erzählt eine alte Geschichte und hat kaum fremde Stimmen. Deine Aufgaben machen die Website lesbar und eindeutig, die Preisseite liegt ganz bei dir. Massi liefert die übrigen Texte und sammelt fremde Stimmen.');
r.p('Grundlage: GEO-Audit (Teil 1) und GEO-Maßnahmenplan (Teil 2) vom 28. Oktober. Die Nummern L1 bis L17 und E1 bis E5 sind dort dieselben.', { run: { size: 18, color: '555555' } });

r.h1('1 Diese Woche entscheiden');
r.p('Fünf Entscheidungen, gemeinsam mit Massi. L1, L4, L14 und die Wächter-Seite warten darauf.');
r.table(['#', 'Entscheidung', 'Empfehlung', 'Warum'], [
  ['E1', 'Google-Extended freigeben?', 'Ja.', 'Ohne Freigabe darf Gemini die Website nicht für Antworten nutzen: heute 0 von 15 Nennungen, Einordnung als FinTech. Preis: Google darf die Texte auch fürs Training nutzen.'],
  ['E2', 'Welche Preise zeigt die Website?', 'Preise v2 geht mit dem Upgrade live. Bis dahin: unbelegte Zahlen sofort raus, kein Preis-Markup, keine Preise in neuen Artikeln.', 'Live stehen Starter und Professional, im Prototyp die neuen Pakete. Zwei Preismodelle verwirren Kunden und KI-Systeme; unbelegte Zahlen sind ein UWG-Risiko.'],
  ['E3', 'Zeile „Er stellt keine Rechtsberatung dar“ unter den 14 Artikeln?', 'Ersetzen durch „Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“', 'Der Sprach-Leitfaden sieht die Formel nur in den AGB vor, nicht im Marketing.'],
  ['E4', 'Name der Wächter-Seite?', 'Seite „Laufende Website-Prüfung“ (/laufende-website-pruefung); in der App bleibt „Wächter“. Der Monatsbericht heißt „Prüfbericht“, etwa „Prüfbericht Oktober: Ihre Website war ohne Befund.“', 'smugo nutzt „HWG-Wächter“; in TMview gibt es aktive „Wächter“-Marken für Software (Klassen 9 und 42).'],
  ['E5', 'Trainingssperre für GPTBot, ClaudeBot, CCBot, Applebot-Extended aufheben?', 'Ja, für die öffentlichen Seiten. /api/, /admin/, /dashboard/ bleiben gesperrt.', 'Die Sperre kostet keine Zitate, hält uns aber aus den Trainingsdaten heraus; ein Modell kennt uns dann nur bei Websuche. Öffentlich stehen Marketingtexte, die sich verbreiten sollen. Effekt nicht belegt, kommt frühestens mit der nächsten Modellgeneration; gesammelte Daten lassen sich nicht zurückholen.'],
], [6, 20, 34, 40], { size: 15 });

r.h1('2 Sofort bauen (etwa 5 Stunden Technik plus Preisseite)');
task('L17', 'Preisseite bereinigen (sofort, auch bevor Preise v2 live ist)', [
  '**Raus:** „Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“, „1.000 geprüfte Texte“, „White-Label“, „Video-Audit“, „Spezialisten für jeden HWG-Paragrafen“.',
  '**Ersetzen:** „White-Label“ durch „In Ihrem Namen“; „Video-Audit“ durch „Einzel-Audit 149 €“ (sobald Preise v2 live ist). Als Preisanker „Anwaltliche Einzelprüfung ab 399 €“, aber nur mit abgelegter Fundstelle aus Recherche O2 samt Screenshot; sonst „400 € netto je Internetseite bis 550 Wörter“ (RechtVital, abgerufen 27.10., Screenshot sichern).',
  '**Rechenbeispiel:** „15 € je Text“ darf bleiben, klar als Beispiel formuliert. „Trägt sich ab dem 24. Text“ rechnet mit Professional; mit Preise v2 heißt es „ab dem 7. Text“.',
  '**Nicht auf die Website:** der Pitch-Satz „rund 600 € statt 2.000 €“; er steht nicht in der Belegt-Liste.',
], 'Du verantwortest die Preise. Ein Anbieter, der Werbeaussagen prüft, darf auf der eigenen Preisseite keine unbelegten Zahlen zeigen; das ist ein eigenes Risiko nach § 5 UWG. Und KI-Systeme geben die Zahlen weiter.',
  'jede Zahl auf der Preisseite steht in der Belegt-Liste oder hat Quelle und Screenshot; der Preisanker ist vor Veröffentlichung gegengelesen.');

task('L1', 'robots.txt: KI-Crawler hereinlassen (nach E1 und E5)', [
  'Google-Extended, DuckAssistBot und, nach E5, GPTBot, ClaudeBot, CCBot und Applebot-Extended aus der Disallow-Liste nehmen und in einer Gruppe erlauben. Den § 44b-Vorbehalt für diese Crawler streichen.',
  'Wichtig: Ein Crawler mit eigener Gruppe liest die Regeln unter `User-agent: *` nicht mehr. Die Sperren für /api/, /admin/ und /dashboard/ deshalb in der Gruppe wiederholen. Lautet E5 „nein“, nur Google-Extended und DuckAssistBot in die Gruppe aufnehmen.',
], 'Google-Extended und DuckAssistBot liefern Antworten an Nutzer; gesperrt kosten sie Sichtbarkeit. Gemini hält „PageCompliance“ heute für einen Gattungsbegriff. Die vier Trainingscrawler bringen die öffentlichen Texte in die Trainingsdaten der großen Modelle, damit diese die Marke auch ohne Websuche kennen.',
  'die robots.txt zeigt die Gruppe mit Allow und den drei Disallow-Zeilen; Meta-ExternalFetcher und alle anderen Regeln bleiben unverändert.',
  ['# KI-Antworten und Training erlauben (E1, E5)', 'User-agent: Google-Extended', 'User-agent: DuckAssistBot', 'User-agent: GPTBot', 'User-agent: ClaudeBot', 'User-agent: CCBot', 'User-agent: Applebot-Extended', 'Allow: /', 'Disallow: /api/', 'Disallow: /admin/', 'Disallow: /dashboard/']);
task('L2', '/login und /register aus dem Index nehmen',
  'Auf beiden Seiten `noindex, follow` setzen. Nicht zusätzlich in der robots.txt sperren. In Next.js etwa so:',
  '/login steht auf Platz 3 der Markensuche, vor der Preisseite. Eine Sperre in der robots.txt würde Google daran hindern, das noindex überhaupt zu sehen.',
  'das Roh-HTML beider Seiten enthält noindex; die Search Console meldet sie als „ausgeschlossen“.',
  ["export const metadata = { robots: { index: false, follow: true } };"]);
task('L3', 'Titles, Meta-Descriptions und H1 bereinigen', [
  '**Startseite, Title:** „Healthcare Website Compliance Checker“ ersetzen, Vorschlag: „PageCompliance – die Prüfung für Gesundheitswerbung“ (51 Zeichen).',
  '**Startseite, Head:** alle drei „Vorprüfung“ entfernen. Meta-Description, zwei Varianten von Massi (M12):',
  '1. „Gesundheitstexte nach HWG, HCVO und UWG prüfen. Für Agenturen, Praxen, Heilberufe und Hersteller: jeder Befund mit besserem Satz, bereit zur Freigabe.“',
  '2. „Gesundheitstexte prüfen, für Agenturen, Praxen, Heilberufe und Hersteller. Jeder Befund mit Norm und dem besseren Satz, bereit zur Freigabe.“',
  '**Blog, Title:** „Blog - PageCompliance | PageCompliance“ ersetzen, Vorschlag: „Ratgeber für Gesundheitstexte | PageCompliance“.',
  '**Blog, H1:** „Stark werben. Sauber formulieren.“ ersetzen durch „Stark werben. Ruhig veröffentlichen.“ „Sauber“ ist laut Leitfaden ein Urteilswort.',
  'Regeln: „Prüfung“ statt „Vorprüfung“, kein „KI“ im Title oder in der H1, „HWG“ (wird von der Hochschule Ludwigshafen besetzt) nie allein im Title.',
], 'Der Title ist das Erste, was Google und KI-Systeme lesen. Heute ist er halb englisch, nennt den alten Begriff und keinen Suchbegriff.',
  'kein „Vorprüfung“ mehr im Roh-HTML einer Seite; Blog-Title ohne doppelte Marke.');
task('L4', 'Blog-Fußzeile tauschen (nach E3)',
  'In der Blog-Vorlage die Zeile „Er stellt keine Rechtsberatung dar“ durch den Satz aus E3 ersetzen.',
  'Eine Änderung in der Vorlage wirkt auf alle 14 Artikel.',
  'alle 14 Artikel zeigen die neue Zeile.');
task('L5', 'llms.txt neu schreiben', [
  'Oben die Definition wörtlich: „PageCompliance ist die Plattform für Gesundheitswerbung. Agenturen, Praxen, Heilberufe und Hersteller prüfen ihre Texte KI-gestützt auf Risiken nach Heilmittelwerbegesetz (HWG), Health-Claims-Verordnung und UWG – bekommen für jede kritische Stelle den besseren Satz und geben gemeinsam frei.“',
  'Danach Kernseiten und Artikel mit je einem Satz. „Prüfung“ statt „Vorprüfung“, keine alten Pakete und Preise bis E2, keine Wirkungsversprechen.',
], 'Die Datei verbreitet heute „Vorprüfung“ und die alten Preise. Google nutzt llms.txt nicht; andere Systeme vielleicht. Sie kostet wenig, schadet aber, wenn sie Falsches sagt.',
  'die Datei enthält die Definition wörtlich und kein Wort aus der „Nie so“-Liste.');
task('L6', 'Sitemap prüfen',
  'Nur indexierbare Seiten; /login und /register bleiben draußen. `lastmod` zeigt das echte Änderungsdatum. Neue Seiten und Weiterleitungsziele kommen automatisch hinein.',
  'Die Sitemap sagt Suchmaschinen, was neu ist. Falsche Daten führen dazu, dass geänderte Seiten später gelesen werden.',
  'die Sitemap listet nur Seiten mit Status 200 und ohne noindex.');
task('L7', 'Search Console, Bing Webmaster Tools und IndexNow einrichten', [
  'Google Search Console als Domain-Property bestätigen, Sitemap einreichen. Bing Webmaster Tools anlegen (Import aus der Search Console geht in einem Schritt). IndexNow aktivieren, damit neue und geänderte Seiten sofort an Bing gemeldet werden.',
  'Reihenfolge: erst die Search Console (Domain per DNS-Eintrag bestätigen), dann Bing per Import. Zusammen 1 bis 2 Stunden. Massi bekommt Lesezugriff auf beide Werkzeuge.',
], 'Beide sind kostenlos und so etwas wie der Produktionsbericht der Suchmaschine: welche Seiten angenommen wurden, welche Fehler haben, wie oft sie gezeigt werden. Ohne Search Console gibt es keine genaue Indexzahl und keine Impressionen. Bing zeigt im Bericht „AI Performance“, wie oft Copilot uns zitiert. Damit messen wir den Plan.',
  'beide Werkzeuge zeigen Daten; Massi hat Zugriff.');

r.h1('3 In 30 Tagen (etwa 4 Tage)');
task('L8', 'Firmen-Markup auf Startseite und /ueber-uns',
  'Ein Organization-Block als JSON-LD. Logo-Pfad und LinkedIn-Adresse anpassen; das Crunchbase-Profil in `sameAs` ergänzen, sobald Massi sie angelegt hat (M7).',
  'Google erkennt die Marke heute nicht als Firma, und Gemini holt die Fakten aus Creditreform. Das Markup sagt maschinenlesbar, wer wir sind.',
  'der Rich-Results-Test von Google liest den Block ohne Fehler.',
  ['{', '  "@context": "https://schema.org",', '  "@type": "Organization",', '  "name": "PageCompliance",',
    '  "legalName": "S/E PageCompliance UG (haftungsbeschränkt)",', '  "url": "https://pagecompliance.de",', '  "logo": "https://pagecompliance.de/logo.png",',
    '  "foundingDate": "2026",', '  "identifier": "HRB 311850, Amtsgericht München",',
    '  "address": { "@type": "PostalAddress", "addressLocality": "Grünwald", "addressCountry": "DE" },',
    '  "founder": [', '    { "@type": "Person", "name": "Leon V. Schwahn", "jobTitle": "CEO" },', '    { "@type": "Person", "name": "Massimiliano Ehmann", "jobTitle": "CCO" }', '  ],',
    '  "description": "<Definition wörtlich>",', '  "sameAs": [', '    "https://de.linkedin.com/company/page-compliance",', '    "https://www.munich-startup.de/startups/pagecompliance/"', '  ]', '}']);
task('L9', 'Suchbegriff unter die H1 der Startseite',
  'Der Claim bleibt als H1. Direkt darunter eine Zeile, Vorschlag: „Die Prüfung für Gesundheitswerbung nach Heilmittelwerbegesetz, Health-Claims-Verordnung (und UWG).“ Dazu den Ersatz für „Für jede Regel ein Spezialist.“ und „12 Paragrafen“ einbauen (Text M12).',
  'Ein Claim wie „Compliance in Sekunden.“ ist stark, sagt einer Suchmaschine aber nicht, worum es geht. Nachzählbare Prüfer-Zahlen verbietet der Leitfaden.',
  'Heilmittelwerbegesetz steht im Roh-HTML direkt unter der H1.');
task('L10', '/ueber-uns ausbauen',
  'Faktenblock von Massi einbauen (M3): Firma, Sitz Grünwald, gegründet 2026, HRB 311850 Amtsgericht München, beide Gründer mit vollem Namen und Rolle, Definition, drei Grundsätze. Dazu das Markup aus L8 und je ein Person-Markup für Leon und Massi. Falls dort noch „über 2.500 EU Health Claims“ steht: nur behalten, wenn die Zahl belegt und erklärt ist.',
  'Perplexity zitiert genau diese Seite. Heute stehen dort nur Vornamen, kein Sitz und kein Jahr.',
  'die Seite nennt alle Fakten und trägt das Markup.');
task('L11', 'Blog-Vorlage erweitern',
  'Sichtbares „Stand: <Datum>“ und Autor mit Namen. Ein Feld für Aktenzeichen mit Link zur Quelle. Zwei bis drei interne Links: verwandte Artikel und die Produktseite der Tür. Ein fester Agentur-Hinweis. Am Ende der Aufruf „Ihren Satz kostenlos prüfen“. Im Article-Markup `dateModified` pflegen.',
  'Kein Artikel hat heute ein Datum, ein Aktenzeichen oder einen internen Link. Bei Gesundheitsthemen zählen Aktualität und Quellen; interne Links verteilen die Stärke der Platz-1-Artikel.',
  'alle 14 Artikel zeigen Stand, Autor und mindestens zwei interne Links.');
task('L12', 'Weiterleitungen (301) setzen', [
  '`/blog/vorfilter-hwg-pruefung-bedeutung` → neuer Slug des neu geschriebenen Artikels (M5).',
  '`/blog/immunsystem-staerken-health-claim-erlaubt` → `/blog/nem-immunsystem-claims-erlaubt` (M6).',
], 'Zwei Seiten zur selben Frage konkurrieren gegeneinander. Die Weiterleitung bündelt sie, und alte Links bleiben gültig.',
  'die alten Adressen antworten mit 301 auf das neue Ziel.');
task('L13', 'Messung in Plausible?', [
  'Besuche aus KI-Systemen als eigene Gruppe sichtbar machen (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com). Das Ziel „Anmeldung“ mit Herkunft erfassen. Bei der Anmeldung ein freiwilliges Feld „Wie haben Sie uns gefunden?“ mit der Option „ChatGPT oder anderer KI-Assistent“.',
  'Kampagnen-Links markieren: Jeder Link in einem LinkedIn- oder Instagram-Beitrag bekommt einen Zusatz wie `?utm_source=linkedin&utm_campaign=hp-satz`. Dann zeigt Plausible, aus welcher Kampagne ein Klick kam.',
  'Empfehlung zum Fragezeichen: bei Plausible bleiben. Daten seit Juni, laut Anbieter kein Cookie-Banner nötig. Grenze: Plausible zählt nur den letzten Kontakt; wer erst später googelt, zählt als Google. Das fängt das Anmeldefeld auf.',
], 'Nur so sehen wir, ob GEO Anmeldungen bringt. Das ist die Kennzahl, um die es im Pricing geht: heute rund 1,6 Anmeldungen von außen im Monat.',
  'die erste Anmeldung mit Herkunft ist in Plausible sichtbar.');
task('L14', 'Preis-Markup (erst nach E2, wenn Preise v2 live ist)',
  'Zuerst nur für die entschiedenen Pakete: Gratis, Agentur 99 €, Team 249 €. Praxis und Hersteller folgen, wenn du die Preise nach den Gesprächen festgelegt hast.',
  'Markup mit den alten Paketen würde die alte Geschichte maschinenlesbar machen. Software-Rich-Results verlangen ohnehin Bewertungen; das Markup dient der Eindeutigkeit, nicht dem Snippet.',
  'das Markup stimmt Zeile für Zeile mit der sichtbaren Preisseite überein.');

r.h1('4 In 90 Tagen (etwa 5 Tage)');
task('L15', 'Produktseiten je Tür', [
  '`/agenturen` (gibt es schon; von „Ihr“ auf „Sie“ umstellen), `/arztpraxen`, `/heilberufe`, `/hersteller` („Nahrungsergänzungsmittel“ in Title und H1), `/laufende-website-pruefung` (nach E4, Zeitform „kommt“, solange nicht live). Texte von Massi.',
  'Keine zusätzlichen Seiten für Kaufbegriffe (Vorschlag der Strategie: `/hwg-pruefung`, `/health-claims-pruefung`). Sie würden mit vorhandenen Seiten um dieselben Suchbegriffe konkurrieren: Die Startseite übernimmt „Prüfung nach Heilmittelwerbegesetz“, die Hersteller-Seite „Health Claims prüfen“. Erst wenn die Search Console nach der ersten Messung viele Einblendungen für solche Begriffe ohne passende Seite zeigt, wird nachgebaut.',
  'Ärzte und Heilberufe bekommen getrennte Seiten, obwohl dasselbe Paket dahinterliegt. /heilberufe, weil auch Physiotherapie, Osteopathie und Psychotherapeuten dazugehören.',
], 'Auf den acht Suchen nach einem Werkzeug rankt heute keine Produktseite. Wettbewerber tragen den Suchbegriff im Namen. Und Ärzte wollen nicht mit Heilpraktikern in einen Topf.',
  'jede Seite ist live, verlinkt aus Startseite und passenden Artikeln, und steht in der Sitemap.');
task('L16', 'Vergleichsseite',
  'Seite nach Massis Text (M10): Vergleich nach Kategorien (Kanzlei, Chat-KI, Agentur-Dienstleistung, Plugin, Prüfsoftware), mit Stand-Datum. Kein Wettbewerber wird namentlich angegriffen.',
  'ChatGPT baut Tool-Tabellen aus vorhandenen Vergleichen. Und die Frage „Welche Alternativen gibt es zur anwaltlichen Prüfung?“ beantwortet heute kein System mit einem Werkzeug.',
  'die Seite ist live und vor Veröffentlichung gegengelesen (M14).');

r.h1('5 Außerdem aus dem Pricing');
r.p('Diese Punkte gehören nicht zur Technik, schalten aber den GEO-Plan frei:');
r.bullets([
  '**Gespräche mit mindestens drei Praxen und tigovit führen.** Erst danach stehen die Preise für Praxis und Hersteller fest; davon hängen Preis-Markup (L14), Produktseiten (L15) und Massis Artikel zur Preisfrage ab.',
  '**Markenrechtlerin beauftragen (E4).** „Wächter“ und eine eigene Anmeldung von „PageCompliance“ vor dem Start prüfen lassen.',
]);

r.h1('6 Was du von Massi bekommst');
r.table(['Deine Aufgabe', 'wartet auf', 'von Massi'], [
  ['L3, L9', 'Titles, Meta-Description, Zeile unter der H1, Startseiten-Texte', 'M12'],
  ['L8, L10', 'Faktenblock Über uns; Profile für sameAs', 'M3, M7'],
  ['L12', 'neu geschriebener Vorfilter-Artikel; zusammengeführter Immunsystem-Artikel', 'M5, M6'],
  ['L15, L16', 'Texte je Tür; Vergleichsseite', 'Texte je Tür, M10'],
], [22, 56, 22]);

r.h1('7 Was du bitte nicht tust');
r.bullets([
  '**Kein FAQ-Markup als Priorität.** Google zeigt FAQ-Rich-Results seit 7. Mai 2026 nicht mehr.',
  '**Keine Seiten in Masse.** Google warnt ausdrücklich vor massenhaft erzeugten Seiten; wenige tiefe Seiten gewinnen.',
  '**Keine gekauften Bewertungen oder Erwähnungen.** Google warnt vor unechten Erwähnungen, und es wäre irreführend.',
  '**Kein „KI“ in Title oder H1**, kein „HWG“ allein im Title, kein „Vorprüfung“.',
  '**Keine Preise in neuen Seiten vor E2** und keine Zahl, die nicht in der Belegt-Liste des Leitfadens steht. Rechenbeispiele wie „15 € je Text“ nur als Beispiel formuliert.',
]);

r.body.pop(); // drop trailing list spacer
r.save(process.argv[2], { title: 'Was Leon tun soll', withToc: false });
