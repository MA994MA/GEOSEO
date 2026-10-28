const path = require('path');
const { Report, D } = require('./lib');

const r = new Report({ footnotes: {} });

r.body.push(new D.Paragraph({ spacing: { before: 200, after: 120 }, children: [new D.TextRun({ text: 'GEO-AUDIT · REFERENZ', font: 'Helvetica', size: 15, color: '6B6B6B', characterSpacing: 30 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 120 }, children: [new D.TextRun({ text: 'Fragen, Rankings und Wettbewerb', font: 'Helvetica', bold: true, size: 44 })] }));
r.body.push(new D.Paragraph({ spacing: { after: 240 }, children: [new D.TextRun({ text: 'Was gefragt wurde, wo PageCompliance steht und wer sonst genannt wird · Erhebung 26.10.2026, Nachprüfung 27.10.2026', font: 'Helvetica', size: 22, color: '555555' })] }));

r.callout('WOFÜR DIESE DATEI', 'Sie hält die Ausgangswerte fest, an denen der Maßnahmenplan gemessen wird. Bei jeder Wiederholungsmessung (M13) werden dieselben Fragen und Suchbegriffe genutzt, damit die Werte vergleichbar bleiben. Abschnitt 6 ist die leere Messtabelle dafür.');

r.h1('1 So wurde gemessen');
r.bullets([
  '**15 Fragen** an ChatGPT, Perplexity und Gemini, so formuliert, wie ein Käufer sie eintippt. Je Frage ein Durchlauf; KI-Antworten schwanken, erst drei Durchläufe zeigen einen Trend.',
  '**20 Suchbegriffe** auf google.de, sortiert nach Absicht: kommerziell (jemand sucht ein Werkzeug), informativ (jemand sucht eine Antwort), Tür (gehört zu einer Zielgruppe).',
  '**Googles „Weitere Fragen“** auf den 20 Suchen und das **Google-Autocomplete** für 33 Startbegriffe (27.10.) als Beleg, welche Fragen wirklich gestellt werden.',
  '**Keine Suchvolumen gemessen.** Belegt ist, dass eine Frage gestellt wird, nicht wie oft.',
]);

r.h1('2 Die 15 Fragen an ChatGPT, Perplexity und Gemini');
r.h2('2.1 Wo PageCompliance genannt wird');
r.table(['#', 'Frage', 'Tür', 'ChatGPT', 'Perplexity', 'Gemini'], [
  ['1', 'Welche Tools gibt es, um Healthcare-Werbetexte auf HWG-Konformität zu prüfen?', 'alle', '**Platz 1, zitiert**', 'nein', 'verweigert'],
  ['2', 'Wie kann ich meine Praxis-Website automatisch auf Heilmittelwerbegesetz prüfen lassen?', 'Praxis', '**genannt, zitiert**', '**genannt (LinkedIn)**', 'nein'],
  ['3', 'Was kostet eine HWG-Prüfung für eine Website?', 'alle', 'nein', 'nein', 'nein'],
  ['4', 'Gibt es Software, die Health Claims bei Nahrungsergänzungsmitteln prüft?', 'Hersteller', 'nein', 'nein', 'nein'],
  ['5', 'Wie stellen Healthcare-Marketing-Agenturen sicher, dass Texte HWG-konform sind?', 'Agentur', 'nein', 'nein', 'nein'],
  ['6', 'Welche Alternativen gibt es zur anwaltlichen Prüfung von Gesundheitswerbung?', 'alle', 'nein', 'nein', 'nein'],
  ['7', 'Wie vermeide ich als Heilpraktiker eine Abmahnung wegen Wirkversprechen?', 'Heilberufe', 'nein', 'nein', 'nein'],
  ['8', 'Darf ich auf meiner Praxis-Website schreiben, dass eine Behandlung hilft?', 'Praxis', 'nein', 'nein', 'nein'],
  ['9', 'Ist „stärkt das Immunsystem“ als Werbeaussage für ein Nahrungsergänzungsmittel erlaubt?', 'Hersteller', 'nein', 'nein', 'nein'],
  ['10', 'Welche Formulierungen auf einer Arzt-Website sind HWG-rechtlich riskant?', 'Ärzte', 'nein', 'nein', 'nein'],
  ['11', 'Wer bietet KI-gestützte Compliance-Prüfung für Gesundheitsmarketing in Deutschland an?', 'alle', 'nein', '**Platz 2 (LinkedIn)**', 'nein'],
  ['12', 'Wie prüfe ich Vorher-Nachher-Bilder auf meiner Praxis-Website rechtlich ab?', 'Ärzte', 'nein', 'nein', 'nein'],
  ['13', 'Was ist der Unterschied zwischen HWG und Health-Claims-Verordnung?', 'Hersteller, Agentur', 'nein', 'nein', 'nein'],
  ['14', 'Welche Software hilft NEM-Herstellern bei der Werbe-Compliance?', 'Hersteller', 'nein', '**Platz 1 (LinkedIn)**', 'nein'],
  ['15', 'Was ist PageCompliance? (Kontrollfrage)', 'Marke', '**richtig, zitiert**', '**richtig, eigene Seite**', 'Gattungsbegriff, FinTech'],
  ['', '**Nennungen gesamt**', '', '**3 von 15**', '**4 von 15**', '**0 von 15**'],
], [5, 41, 12, 14, 15, 13], { size: 15 });
r.p('Auf zehn der 15 Fragen nennt keines der drei Systeme PageCompliance; das sind vor allem die Sachfragen der Zielgruppen (3 bis 10, 12, 13).');

r.h2('2.2 Wer in den Antworten genannt oder zitiert wird');
r.p('Festgehalten ist, was im Audit dokumentiert wurde. Wo eine Zelle „nicht festgehalten“ sagt, wurde die Antwort erhoben, aber die Namen nicht notiert.', { run: { size: 18, color: '555555' } });
r.table(['#', 'ChatGPT', 'Perplexity', 'Gemini'], [
  ['1', 'Vergleichstabelle: PageCompliance, DOCTARIS, Caidera, Eckada, HWG-Checker, AppCore; „erste Wahl für den unkomplizierten Einstieg: PageCompliance oder DOCTARIS“', 'nicht festgehalten', 'begann eine Antwort, zog sie zurück: „Ich kann dabei nicht helfen“'],
  ['3', '„einige Hundert bis mehrere Tausend Euro“, zitiert zwei Kanzleien', '270 bis 2.500 € je nach Umfang; Abmahnung 1.200 bis 5.000 €', '50 bis 200 € je Einzelprüfung, 300 bis 1.000 € je Praxis-Website, 800 bis 2.500 € je Shop'],
  ['6', 'Behörden, IHK, Wettbewerbszentrale; kein Werkzeug', 'sieben allgemeine Wege (interne Freigabe, Medical und Regulatory Affairs, Verbände, Peer Review); kein Anbieter', 'anwaltliche Prüfung sei „der Goldstandard“, dazu interne Checklisten; zitiert kpw.law, Ärzteversichert'],
  ['8', 'nicht festgehalten', 'nicht festgehalten', 'zitiert Pixelrobots und „Zur erfolgreichen Praxis“ (beide in den Google-Top-10)'],
  ['9', 'nicht festgehalten', 'nicht festgehalten', 'zitiert Bundeszentrum für Ernährung und Verbraucherzentrale (Google-Plätze 1 und 3)'],
  ['11', 'Caidera, Dr. Kaske (MediCheck), Symbiofy, Blee, Eckada', 'Dr. Kaske (KAI/MediCheck), dann PageCompliance als „technische Vorprüfung ohne Rechtsberatung“', 'nur Dr. Kaske'],
  ['14', 'nicht festgehalten', 'Vier-Tool-Tabelle mit PageCompliance an erster Stelle („sehr passend“), Kern eines empfohlenen Tool-Stacks', 'zitiert Medizinrecht-Blog und Lyck+Pätzold'],
  ['15', 'Software zur Prüfung von Gesundheitswerbung auf HWG und HCVO; zitiert pagecompliance.de; Gründer und Preise unbekannt', 'KI-gestützte Compliance-Software nach HWG und Health-Claims-Verordnung; zitiert /ueber-uns und LinkedIn', 'erst „Landing Page Compliance“ (DSGVO, Cookie-Banner, Impressum; One.com, Pandectes), dann „S/E PageCompliance UG“, „FinTech- oder LegalTech-Bereich“, Quelle Creditreform'],
], [5, 32, 32, 31], { size: 14 });

r.h2('2.3 Wer insgesamt wie oft genannt wird');
r.table(['Anbieter', 'ChatGPT (Antworten von 15)'], [
  ['Caidera', '4'], ['PageCompliance', '3'], ['Eckada', '2'], ['Symbiofy', '2'], ['rukola.app', '2'], ['HWG-Checker', '2'],
  ['DOCTARIS, AppCore, Dr. Kaske, blee.com, taama.ai, noknots', 'je 1'],
], [70, 30]);
r.p('**Perplexity:** Eckada und PageCompliance liegen vorn, vor Dr. Kaske, AppCore und dem HWG Check von leema. Caidera kommt nicht vor. Nur bei Perplexity tauchen auf: Regly, Cape.io, Improvado, Typetone, Consileon, KI Marketing Studio, Behr’s Digital Health & Nutrition Claims, ClaimGuard, Supplement-Check.eu. ClaimGuard ist laut Plan v1 der englische Name von smugos HWG-Wächter, also kein eigener Wettbewerber.');
r.p('**Gemini:** nennt nur Dr. Kaske als Anbieter (Frage 11).');

r.h1('3 Die 20 Suchbegriffe auf google.de');
r.p('PageCompliance steht auf 2 von 20 Suchbegriffen in den Top 10, beide Male auf Platz 1 mit einem Blogartikel. Auf den acht Werkzeug-Suchen (1 bis 8) steht keine Seite von PageCompliance.');
r.table(['#', 'Suchbegriff', 'Absicht', 'Tür', 'PageCompliance', 'Top 3'], [
  ['1', 'HWG Prüfung Software', 'kommerziell', 'alle', '–', 'wordpress.org, eckada.de, hwg-lu.de'],
  ['2', 'HWG Compliance Tool', 'kommerziell', 'alle', '–', 'drkaske.de, eckada.de, viralspoon.de'],
  ['3', 'Heilmittelwerbegesetz Website prüfen', 'kommerziell', 'Praxis', '–', 'dripback.de, leema.ai, huchel-medienagentur.de'],
  ['4', 'Website HWG konform prüfen', 'kommerziell', 'Praxis', '–', 'eckada.de, leema.ai, smugo.de'],
  ['5', 'Health Claims Check Tool', 'kommerziell', 'Hersteller', '–', 'EU-Kommission, bohillebrand.de, rki.de'],
  ['6', 'Compliance Check Gesundheitswerbung', 'kommerziell', 'Agentur', '–', 'eckada.de, verbraucherzentrale.de, aok.de'],
  ['7', 'HWG Prüfung Kosten', 'kommerziell', 'alle', '–', 'hwg-lu.de (Hochschule, alle Plätze)'],
  ['8', 'Werbetexte Heilmittelwerbegesetz prüfen lassen', 'kommerziell', 'Agentur', '–', 'gruenlaw.de, eckada.de, dripback.de'],
  ['9', 'Heilmittelwerbegesetz was ist erlaubt', 'informativ', 'alle', '–', 'gesetze-im-internet.de, dmrz.de, bvmed.de'],
  ['10', 'HWG Abmahnung vermeiden Website', 'informativ', 'Praxis', '–', 'pixelrobots.de, massageschule-baumann.de, buntdigital.de'],
  ['11', 'Heilpraktiker Website was darf ich schreiben', 'informativ', 'Heilberufe', '–', 'pixelrobots.de, hybrid-it-solution.com, heilpraktiker-psychotherapie-werden.de'],
  ['12', 'Health Claims Verordnung NEM erlaubte Aussagen', 'informativ', 'Hersteller', '–', 'bvl.bund.de, bmleh.de, ihk-muenchen.de'],
  ['13', 'stärkt das Immunsystem Werbung erlaubt', 'informativ', 'Hersteller', '–', 'ndr.de, ernaehrungs-umschau.de, 123recht.de'],
  ['14', 'Vorher Nachher Bilder Praxis erlaubt', 'informativ', 'Ärzte', '–', 'pa-pure.com, staude.de, schneiderstudios.de'],
  ['15', 'Patientenbewertungen Website HWG', 'informativ', 'Praxis', '–', 'huchel-medienagentur.de, curanorm.de, it-recht-kanzlei.de'],
  ['16', 'schmerzfrei werben Praxis erlaubt', 'informativ', 'Ärzte', '**Platz 1**', 'pagecompliance.de, wbs.legal, ratgeberrecht.eu'],
  ['17', 'HWG Richtlinien Healthcare Marketing Agentur', 'Tür', 'Agentur', '**Platz 1**', 'pagecompliance.de, pk-management.de, gesetze-im-internet.de'],
  ['18', 'Praxis Website rechtliche Vorgaben Werbung', 'Tür', 'Ärzte', '–', 'blaek.de, medizinio.de, 360clinicconsulting.com'],
  ['19', 'Nahrungsergänzungsmittel Werbung Vorschriften', 'Tür', 'Hersteller', '–', 'bzfe.de, heilmittelwerberecht.net, verbraucherzentrale.de'],
  ['20', 'Arzt Website Werbung erlaubt HWG', 'Tür', 'Ärzte', '–', 'huchel-medienagentur.de, envyo.de, get-luna.de'],
], [5, 30, 12, 11, 12, 30], { size: 14 });
r.figure(path.join(__dirname, 'fig', 'audit_wettbewerb.png'), 'Wie oft eine Domain in den Top 10 der 20 Suchen stand; eigene Erhebung am 26.10.2026', 5.6);
r.p('**Drei Beobachtungen:**');
r.bullets([
  '**„HWG“ allein gehört der Hochschule.** Google liest das Kürzel als Hochschule für Wirtschaft und Gesellschaft Ludwigshafen (Suchbegriffe 1 und 7). Tragfähig: „Heilmittelwerbegesetz“ ausgeschrieben oder „HWG“ mit Arzt, Heilpraktiker, Agentur.',
  '**Keine KI-Übersicht.** Auf keiner der 20 Suchen zeigte Google eine.',
  '**Behörden besetzen die reinen Rechtsfragen** (9, 12, 19). Diese drei gehören nicht auf die Zielliste.',
]);
r.h2('Die Markensuche „PageCompliance“');
r.table(['Platz', 'Treffer', 'Bewertung'], [
  ['1', 'pagecompliance.de (Startseite)', 'richtig'],
  ['2', 'pagecompliance.de/ueber-uns', 'richtig'],
  ['3', 'pagecompliance.de/login', 'gehört nicht in den Index'],
  ['4', 'Ryte Wiki, Website-Compliance', 'fremder Treffer'],
  ['5', 'iubenda, Website-Compliance-Checkliste', 'fremder Treffer'],
  ['6', 'pagecompliance.de/pricing', 'richtig'],
  ['7', 'Michael Page, Compliance-Jobs', 'Namensverwechslung'],
  ['8', 'Business Insider, Website-Compliance', 'fremder Treffer'],
], [10, 55, 35]);
r.p('Googles „Weitere Fragen“ zur Markensuche lauten „Was versteht man unter Compliance?“ und „Wie heißt Compliance auf Deutsch?“: Google erkennt die Marke nicht als Firma.');

r.h1('4 Belegte Fragen aus Google');
r.table(['Wiederkehrende Frage („Weitere Fragen“)', 'Suchen', 'Eigener Artikel', 'Geplant'], [
  ['Sind Heilversprechen strafbar?', '4 von 20', 'fehlt', 'Artikel 1'],
  ['Für wen gilt das Heilmittelwerbegesetz?', '3 von 20', 'fehlt', 'Artikel 4'],
  ['Welche Werbung darf ein Arzt (nicht) machen?', '2 von 20', 'fehlt', 'Artikel 3'],
  ['Sind Vorher-Nachher-Bilder erlaubt?', '1 von 20', 'vorhanden', 'korrigieren (M4)'],
], [44, 14, 18, 24]);
r.table(['Autocomplete (27.10.2026)', 'Geplant'], [
  ['heilversprechen strafbar', 'Artikel 1'],
  ['arzt werbung was ist erlaubt was verboten', 'Artikel 3'],
  ['heilversprechen formulierungen', 'Artikel 5'],
  ['heilmittelwerbegesetz physiotherapie · werbung physiotherapie erlaubt', 'Artikel 6'],
  ['botox werbung verboten', 'Artikel 7'],
  ['heilmittelwerbegesetz heilpraktiker · werbung heilpraktiker was ist erlaubt', 'Umbau Heilpraktiker-Artikel'],
], [70, 30]);

r.h1('5 Die Konkurrenz');
r.h2('5.1 Werkzeuge und Dienste (nachgeprüft am 27.10.2026)');
r.table(['Anbieter', 'Was es wirklich ist', 'Preis laut Seite', 'Bedeutung für uns'], [
  ['smugo („HWG-Wächter“, englisch „ClaimGuard“)', 'einmalige Dienstleistung: Durchleuchtung, Befund-Bericht, neu formulierte Texte, optional Umsetzung im CMS; Shops, Hersteller, Praxen, Heilberufe; Agenturen als White-Label-Partner; DE und Schweiz', 'Erst-Check kostenlos, danach Festpreis nach Umfang, „keine Abos“', 'direkter Gegenentwurf: Service statt Software; Konkurrent bei Agenturen; rankt auf drei Suchbegriffen'],
  ['Caidera', 'Plattform für Marketing-Content in regulierten Branchen (Pharma, MedTech, Food, Kosmetik, Finanzen) mit Freigabe-Workflow', 'nicht genannt, Demo', 'Enterprise; bei ChatGPT meistgenannt (4 von 15)'],
  ['Dr. Kaske (MediCheck, KAI)', 'KI-Überwachung von Social-Media-Kommentaren für Pharma: HWG-Verstöße und Nebenwirkungsmeldungen', 'nicht genannt, Demo', 'andere Zielgruppe, besetzt aber die Kategoriefrage (Frage 11)'],
  ['AppCore', 'Health Claims als Teil eines CMS-Pakets', 'Erst-Audit kostenlos, CMS-Umzug einmalig 990 bis 3.990 € netto', 'Hersteller-Tür, nur im Paket'],
  ['leema.ai (HWG Check)', 'Plattform für medizinische Cannabis-Therapie; HWG-Plugin kostenlos, regelbasiert („15 Regelgruppen“), nur WordPress', 'kostenlos', 'besetzt „kostenlos“ und „HWG Check“'],
  ['eckada', 'Digitalagentur für kleine Betriebe mit App „Werbetext-Check“ für Heilversprechen und Umweltaussagen', 'auf Anfrage, eine Seite kostenlos', 'eher Partner als Wettbewerber; sichtbar auf fünf Suchen'],
  ['dripback', 'KI-Agentur für den Mittelstand in OWL; auf der Startseite kein HWG-Check', 'Module ab 49 € im Monat', 'kein Prüf-Anbieter'],
  ['DOCTARIS', 'Prüfung eingegebener Texte und Adressen, unbegrenzt, ohne Beobachtung (Strategiebericht Pricing)', '15,96 € im Monat', 'Preisanker für Praxen; von ChatGPT neben uns als Einstieg genannt'],
  ['Weitere aus der Google-Suche', 'evalii.de, smileai.de, hub-strategy.com: PV/HWG-Prüfung, Content-Copilot, AI-Act-Precheck', 'nicht geprüft', 'beobachten'],
], [18, 38, 20, 24], { size: 14 });
r.h2('5.2 Agenturen, die die Ratgeber-Suchen besetzen');
r.p('envyo.de, get-luna.de, huchel-medienagentur.de, pixelrobots.de, buntdigital.de, adfera.de. Sie bauen Websites für Heilberufe und schreiben über das Heilmittelwerbegesetz, weil ihre Kunden fragen. Sie verkaufen keine Prüfung und sind deshalb Partner, keine Wettbewerber: Ein Gastbeitrag bei ihnen bringt Link und Zielgruppe (M9). Zugleich gehören sie zu Tür 1, dem Hauptkäufer.');
r.h2('5.3 Behörden und Fachmedien');
r.p('Auf den reinen Rechtsfragen gewinnen gesetze-im-internet.de, BVL, BfR, Bundeszentrum für Ernährung, Verbraucherzentrale, Ärzteblatt, Bundesärztekammer, DocCheck und Thieme. Gegen sie ist nicht anzukommen; sie sind Quellen zum Verlinken, keine Gegner.');
r.h2('5.4 Wie wir uns unterscheiden (intern)');
r.table(['smugo', 'PageCompliance'], [
  ['einmalige Prüfung', 'Prüfung bei jedem neuen Text; Beobachtung der Live-Seiten im Bau'],
  ['Agentur prüft und schreibt um', 'die Software prüft, der Kunde entscheidet und ändert selbst'],
  ['Festpreis nach Umfang', 'im Paket, in Einheiten'],
  ['Agentur arbeitet als White-Label-Partner', 'Agentur bietet die Prüfung in eigenem Namen an'],
], [50, 50]);
r.p('Öffentlich wird kein Wettbewerber namentlich angegriffen.');

r.h1('6 Messtabelle für die Wiederholung (M13)');
r.p('Je Frage und System drei Durchläufe. Eintragen: „–“ für nicht genannt, „g“ für genannt, „P1“, „P2“ … für den Platz, „z“ wenn pagecompliance.de zitiert wird, „L“ wenn LinkedIn zitiert wird. Datum der Messung: ____________', { run: { size: 18 } });
const blank = ['', '', '', '', '', '', '', '', ''];
r.table(['#', 'GPT 1', 'GPT 2', 'GPT 3', 'Perp 1', 'Perp 2', 'Perp 3', 'Gem 1', 'Gem 2', 'Gem 3'],
  Array.from({ length: 15 }, (_, i) => [String(i + 1), ...blank]), [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], { size: 15 });
r.table(['#', 'Suchbegriff', 'Platz 26.10.', 'Platz neu', 'Top 3 neu'],
  ['HWG Prüfung Software', 'HWG Compliance Tool', 'Heilmittelwerbegesetz Website prüfen', 'Website HWG konform prüfen', 'Health Claims Check Tool', 'Compliance Check Gesundheitswerbung', 'HWG Prüfung Kosten', 'Werbetexte Heilmittelwerbegesetz prüfen lassen', 'Heilmittelwerbegesetz was ist erlaubt', 'HWG Abmahnung vermeiden Website', 'Heilpraktiker Website was darf ich schreiben', 'Health Claims Verordnung NEM erlaubte Aussagen', 'stärkt das Immunsystem Werbung erlaubt', 'Vorher Nachher Bilder Praxis erlaubt', 'Patientenbewertungen Website HWG', 'schmerzfrei werben Praxis erlaubt', 'HWG Richtlinien Healthcare Marketing Agentur', 'Praxis Website rechtliche Vorgaben Werbung', 'Nahrungsergänzungsmittel Werbung Vorschriften', 'Arzt Website Werbung erlaubt HWG']
    .map((k, i) => [String(i + 1), k, i === 15 || i === 16 ? '1' : '–', '', '']), [5, 45, 14, 12, 24], { size: 15 });
r.p('Neue Artikel kommen mit ihrer eigenen Frage als zusätzliche Zeile dazu (etwa „sind heilversprechen strafbar“), damit die 20 Ausgangswerte vergleichbar bleiben.', { run: { size: 18 } });
r.body.pop();

r.save(process.argv[2], { title: 'Fragen, Rankings und Wettbewerb', withToc: false });
