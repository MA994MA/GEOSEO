const path = require('path');
const { Report } = require('./lib');
const FIG = (f) => path.join(__dirname, 'fig', f);

const fn = {
  reach: 'Strategiebericht Pricing vom 01.10.2026, Abschnitt 1.2: Plausible, 247 Besucher vom 15.06. bis 03.09.2026, eigene Besuche eingeschlossen; Anmeldungen außerhalb des eigenen Netzwerks vom 05.06. bis 30.09.2026.',
  erhebung: 'Eigene Erhebung am 26.10.2026: 20 Suchen auf google.de, 15 Fragen je System, ein Durchlauf je Frage. Alle Ergebnisse in Anhang A.',
  ziele: 'Strategiebericht Pricing, Abschnitt 1.1; Ziele Z‑01, Z‑02, Z‑03 und Z‑06, Zählregel nach E‑007 und E‑009.',
  fahrplan: 'Marketing-Schlüssel vom 19.10.2026, Abschnitt 9 „Fahrplan“.',
  rech06: 'Strategiebericht Pricing, Abschnitt 2.1; Rechnung 06. Annahmen: Kaufquote 1 von 6, keine Kündigungen.',
  e008: 'Strategiebericht Pricing, Abschnitt 3.1, Entscheidung E‑008; Marketing-Schlüssel, Abschnitt 3 „Die Treppe“.',
  method: 'Nachprüfung am 27.10.2026: Roh-HTML von pagecompliance.de (Startseite, /pricing, /ueber-uns, /blog, alle 14 Artikel, /login, /register, /kostenlos-pruefen, Impressum), robots.txt, sitemap.xml, llms.txt; Google-Autocomplete DE für 33 Startbegriffe; TMview DE und EU.',
  siteindex: 'Google-Abfrage site:pagecompliance.de am 26.10.2026. Die Zahl ist eine Schätzung von Google; genau zählt nur die Search Console.',
  bots: 'OpenAI: Bots und Crawler; Google: Liste der gängigen Crawler; DuckDuckGo: DuckAssistBot; Meta: Web-Crawler. Links unter Quellen.',
  munich: 'Munich Startup, Profil PageCompliance, abgerufen am 27.10.2026.',
  uwg: '§ 5 UWG verbietet irreführende geschäftliche Handlungen; maßgeblich ist der Gesamteindruck. Ein Hinweis in den AGB heilt das nicht. Sprach-Leitfaden v1.0, Regel 2.3.',
  bgh: 'BGH, Urteil vom 31.07.2025, I ZR 170/24; Zusammenfassung der Verbraucherzentrale NRW. Link unter Quellen.',
  gext: 'Google: Liste der gängigen Crawler, Eintrag Google-Extended. Der Token steuert Training und Grounding in Gemini Apps und Vertex AI, nicht die Google-Suche.',
  gai: 'Google Search Central: Leitfaden zur Optimierung für KI-Suche. Link unter Quellen.',
  wett: 'Anbieterseiten abgerufen am 27.10.2026; Links unter Quellen.',
  schonda: 'Marketing-Schlüssel vom 19.10.2026: „Schon da: Startseite v3 · Preise v2 · Blog v1 · Über uns v1“, im Prototyp App v3. Sprach-Leitfaden v1.0 vom 22.10.2026.',
  autocomplete: 'Google „Weitere Fragen“ auf 17 der 20 Suchen am 26.10.2026; Autocomplete-Abfrage am 27.10.2026.',
};

const r = new Report({ footnotes: fn });

r.titlePage({
  series: 'STRATEGIEBERICHT GEO · TEIL 1 VON 2',
  title: 'GEO-Audit PageCompliance',
  subtitle: 'Wo PageCompliance in Google und in KI-Antworten steht, und warum',
  question: 'Wie sichtbar ist PageCompliance heute in Google, ChatGPT, Perplexity und Gemini, woran liegt es, und was bedeutet das für den Engpass Reichweite, an dem das neue Pricing hängt?',
  meta: 'Für Leon und Massi · 28. Oktober 2026 · Erhebung 26. Oktober, Nachprüfung 27. Oktober 2026',
  note: 'Teil 2, der GEO-Maßnahmenplan, baut auf diesem Audit auf.',
});

r.toc();

// ───────────── Kernaussage
r.h1('Kernaussage', { pageBreak: true });
r.h2('PageCompliance ist gut gebaut, aber von außen kaum bestätigt');
r.p('Das neue Pricing setzt darauf, dass Praxen, Heilberufe und Hersteller über die Website kommen und dort kostenlos prüfen. Heute kommen rund 95 Besucher und 1,6 Anmeldungen von außen im Monat.[^reach] Dieses Audit misst, ob PageCompliance gefunden wird, wenn jemand bei Google oder in einem KI-System nach der Prüfung von Gesundheitswerbung fragt.');
r.p('Das Ergebnis: Die Technik der Website ist besser als ihre Sichtbarkeit. ChatGPT nennt PageCompliance in 3 von 15 Antworten, Perplexity in 4, Gemini in keiner. Bei Google steht PageCompliance auf 2 von 20 Suchbegriffen in den Top 10, dort aber jeweils auf Platz 1.[^erhebung] Drei Ursachen erklären die Lücke. Jede lässt sich für sich beheben:');
r.numbered([
  '**Gemini schließen wir selbst aus.** Die robots.txt sperrt den Zugang Google-Extended. Er steuert laut Google auch, ob Gemini die Website für Antworten nutzen darf. Gemini hält „PageCompliance“ deshalb für einen Gattungsbegriff und ordnet die Firma dem FinTech-Bereich zu.',
  '**Die eigene Website erzählt eine alte Geschichte.** Startseite, Preisseite und llms.txt sprechen von „Vorprüfung“, von den alten Paketen und von Zahlen, die der Sprach-Leitfaden als unbelegt führt. Genau diese Texte lesen die KI-Systeme und geben sie weiter.',
  '**Außerhalb der eigenen Website gibt es nur zwei Stimmen:** LinkedIn und Munich Startup. Google, Gemini und Perplexity stützen sich auf fremde Quellen. Wo andere Autorität haben, kommt PageCompliance nicht in die Top 10.',
]);
r.figure(FIG('audit_kern.png'), 'Die Antwort, ihre drei Ursachen und die Chance');
r.p('Die gute Nachricht steckt in denselben Zahlen. Wo PageCompliance gelesen werden darf und kaum jemand schreibt, gewinnt es sofort: ChatGPT setzt PageCompliance bei der Tool-Frage in die erste Zeile seiner Vergleichstabelle, Google zeigt zwei Artikel auf Platz 1. Und die Frage, die PageCompliance am genauesten beschreibt, „Welche Alternativen gibt es zur anwaltlichen Prüfung?“, beantwortet heute keines der drei Systeme mit einem Anbieter.');
r.p('Die folgende Tabelle ordnet jeden Befund seiner Folge für den Maßnahmenplan zu. Anhang B zeigt, was die Nachprüfung am 27. Oktober gegenüber der ersten Auswertung korrigiert hat.');
r.table(['Befund', 'Folge im Maßnahmenplan (Teil 2)', 'Abschnitt'], [
  ['Technik trägt; kleine Fehler bei /login, Titles und H1', 'in einem Arbeitstag beheben', '2.1'],
  ['Gemini und DuckAssist sind ausgesperrt', 'Google-Extended und DuckAssistBot freigeben (Entscheidung E1)', '2.2'],
  ['ChatGPT und Perplexity nennen uns nur bei Tool- und Markenfragen', 'die Sachfragen der Zielgruppen beantworten', '2.3'],
  ['Google belohnt nur dünn besetzte Fragen', 'belegte Fragen im festen Format, je Tür', '2.4'],
  ['Website und Profile widersprechen dem Leitfaden', 'Preisseite, Startseite, llms.txt, Über uns, Munich Startup neu fassen', '2.5'],
  ['Nur zwei fremde Stimmen', 'Verzeichnisse, Partner-Agenturen, LinkedIn', '2.6'],
  ['Kategorie und Preisfrage sind frei', 'Artikel zur Preisfrage, Vergleichsseite nach Kategorien', '2.7'],
], [44, 44, 12]);
r.p('Gut belegt sind die Technik und die Google-Platzierungen: Sie beruhen auf dem Roh-HTML, den Dokumentationen der Anbieter und den Suchen vom 26. Oktober. Schwächer belegt sind die KI-Antworten. Jede Frage wurde einmal je System gestellt, und KI-Antworten schwanken. Wie Gemini zitiert, stützt sich auf zwei beobachtete Fälle und ist deshalb ein Hinweis, kein Beweis. Suchvolumen wurden nicht gemessen.');

r.h2('Begriffe');
r.table(['Begriff', 'Bedeutung'], [
  ['GEO', 'Generative Engine Optimization: dafür sorgen, dass KI-Systeme wie ChatGPT, Perplexity und Gemini eine Marke kennen, richtig beschreiben und nennen'],
  ['SEO', 'Suchmaschinenoptimierung für die klassische Suche bei Google und Bing'],
  ['Crawler', 'Programm, das Websites liest; jeder Anbieter hat eigene, etwa Googlebot oder OAI-SearchBot (auch: Bot)'],
  ['robots.txt', 'Datei auf der Website, die festlegt, welcher Crawler was lesen darf'],
  ['Google-Extended', 'Kennung in der robots.txt, mit der eine Website steuert, ob Google ihre Inhalte für Gemini nutzt: für Training und für Antworten'],
  ['Grounding', 'Ein KI-System holt zum Zeitpunkt der Frage Inhalte aus dem Netz und stützt seine Antwort darauf'],
  ['llms.txt', 'Textdatei, die KI-Systemen die Website beschreibt; kein Standard, Google nutzt sie nicht'],
  ['Markup', 'maschinenlesbare Angaben im Code einer Seite, etwa Firmenname, Preise oder Autor (strukturierte Daten, JSON-LD)'],
  ['Entität', 'etwas, das eine Suchmaschine als eigenständiges Ding erkennt, etwa eine Firma mit Namen, Sitz und Gründern'],
  ['Fremde Stimme', 'Erwähnung oder Link auf einer Seite, die nicht uns gehört: Verzeichnis, Fachmedium, Partner, LinkedIn'],
  ['Weitere Fragen', 'Block in der Google-Suche mit Fragen, die andere Nutzer stellen'],
  ['KI-Übersicht', 'von Google erzeugte Antwort über den Suchergebnissen (AI Overview)'],
  ['Tür', 'Zielgruppe mit eigenem Einstieg: Agentur, Arztpraxis, Heilberufe, Hersteller (Marketing-Schlüssel)'],
], [22, 78]);

// ───────────── 1
r.h1('1 Problemdefinition: Ohne Reichweite trägt das neue Pricing nicht');
r.h2('1.1 Bis April 2027 sollen 20 Organisationen 3.980 € im Monat zahlen');
r.p('Der Strategiebericht Pricing legt zwei Ziele fest, die gemeinsam gelten: mindestens 3.980 € wiederkehrender Umsatz im Monat und mindestens 20 zahlende Organisationen, wobei kein Kunde mehr als 30 % des Umsatzes trägt.[^ziele] Eine Rechnung, die aufgeht: 10 Agenturen und 20 Praxen.[^fahrplan] Agenturen gewinnt der Vertrieb in Vorführungen. Praxen und Hersteller kaufen über die Website, direkt oder auf Empfehlung ihrer Agentur.');
r.h2('1.2 Heute kommen kaum Interessenten an');
r.table(['Kennzahl', 'Wert', 'Zeitraum'], [
  ['Zahlende Kunden', '2: eine Agentur, eine Heilpraktikerin', 'Stand 30.09.2026'],
  ['Wiederkehrender Umsatz', '198 € im Monat', 'September 2026'],
  ['Besucher der Website', 'rund 95 im Monat, eigene Besuche eingeschlossen', '15.06. bis 03.09.2026'],
  ['Anmeldungen außerhalb des eigenen Netzwerks', 'rund 1,6 im Monat', '05.06. bis 30.09.2026'],
  ['Anteil der Anmeldungen, die kaufen', '1 von 6', '05.06. bis 30.09.2026'],
], [38, 37, 25]);
r.p('Der Abstand entsteht nicht beim Kauf, sondern davor. Sollen zwölf Praxen über die Website kommen, braucht sie bei heutiger Kaufquote zwölf Anmeldungen im Monat statt 1,6, also 7,7-mal so viele.[^rech06] Ein besserer Preis ändert diese Größenordnung nicht. Es müssen mehr Menschen PageCompliance finden.');
r.h2('1.3 Gefunden wird man bei Google und in KI-Antworten');
r.p('Wer wissen will, ob „schmerzfrei“ in einem Praxistext stehen darf, fragt Google oder ein KI-System wie ChatGPT, Perplexity oder Gemini. Die neuen Pakete setzen genau dort an: Der Gratis-Einstieg mit drei Prüfungen jeden Monat soll Interessenten holen und zurückbringen.[^e008] Das wirkt nur, wenn PageCompliance in den Antworten auf diese Fragen auftaucht.');
r.p('Daraus folgt die Leitfrage dieses Audits: **Wie sichtbar ist PageCompliance heute in Google und in den drei KI-Systemen, und woran liegt es?**');

// ───────────── 2
r.h1('2 Problemanalyse: Sieben Befunde erklären die Sichtbarkeit');
r.p('Gemessen wurde am 26. Oktober in vier Teilen: die Markensuche bei Google (Teil A), 20 Suchbegriffe auf google.de (Teil B), 15 Käuferfragen in ChatGPT, Perplexity und Gemini (Teil C) und die Technik der eigenen Website (Teil D). Am 27. Oktober wurde jeder Befund nachgeprüft: im Roh-HTML von pagecompliance.de, in den Dokumentationen von Google, Bing, OpenAI und DuckDuckGo, im Gesetzestext, in TMview und im Google-Autocomplete.[^method] Suchbegriffe und Fragen stehen in Anhang A. Jeder Befund steht für sich; zusammen begründen sie den Maßnahmenplan.');

r.h2('2.1 Die Technik ist nicht der Engpass');
r.p('Der befürchtete Fehler tritt nicht ein. Die Website wird auf dem Server erzeugt; Crawler, die kein JavaScript ausführen, sehen den vollen Inhalt. Das Roh-HTML der Startseite enthält sogar mehr Text als die Ansicht im Browser, mit allen Überschriften und beiden Markup-Blöcken. Google hat alle Seiten im Index, auch alle 14 Blogartikel.[^siteindex] robots.txt, Sitemap und llms.txt sind sorgfältiger aufgesetzt als bei den meisten Wettbewerbern.');
r.table(['Prüfpunkt', 'Befund', 'Bewertung'], [
  ['Darstellung ohne JavaScript', 'voller Inhalt im Roh-HTML', 'in Ordnung'],
  ['Indexierung', 'rund 26 Treffer bei 22 URLs in der Sitemap', 'vollständig'],
  ['Markup im Blog', 'Article, FAQPage, Person, Organization, Breadcrumb', 'sehr gut'],
  ['Markup der Startseite', 'nur Organization und WebSite', 'Lücke'],
  ['Markup der Preisseite', 'keine Preise', 'Lücke; wartet auf das neue Pricing'],
  ['H1 der Kernseiten', 'Claims ohne Suchbegriff, etwa „Compliance in Sekunden.“', 'Lücke'],
  ['Title von /blog', '„Blog - PageCompliance | PageCompliance“', 'Fehler'],
  ['/login und /register', 'im Index, tragen „index, follow“; /login steht auf Platz 3 der Markensuche', 'Fehler'],
  ['/ueber-uns', '236 Wörter, nur Vornamen, kein Sitz, kein Gründungsjahr', 'Lücke'],
], [26, 52, 22]);
r.p('Die Lücken liegen woanders: bei Kernseiten, die einer Suchmaschine nicht sagen, worum es geht, und bei zwei Zugängen in der robots.txt.');

r.h2('2.2 Gemini schließen wir mit einer Zeile selbst aus');
r.p('Die robots.txt folgt einer richtigen Idee: Suchcrawler erlauben, Trainingscrawler sperren. Zwei der gesperrten Zugänge liefern aber Antworten an Nutzer. Sie zu sperren kostet Sichtbarkeit, ohne Trainingsdaten zu schützen.[^bots]');
r.table(['Crawler', 'Wofür laut Anbieter', 'Status', 'Folge'], [
  ['OAI-SearchBot, ChatGPT-User', 'Suche und Abruf für ChatGPT', 'erlaubt', 'richtig'],
  ['PerplexityBot', 'Suche für Perplexity', 'erlaubt', 'richtig'],
  ['Claude-SearchBot, Claude-User', 'Suche und Abruf für Claude', 'erlaubt', 'richtig'],
  ['Googlebot, Bingbot', 'klassische Suche, KI-Übersichten, Copilot', 'erlaubt', 'richtig'],
  ['GPTBot, ClaudeBot, CCBot, Applebot-Extended', 'nur Training', 'gesperrt', 'bewusst; kostet keine Sichtbarkeit'],
  ['**Google-Extended**', '**Training und Grounding für Gemini**', '**gesperrt**', '**sperrt uns aus Gemini-Antworten aus**'],
  ['**DuckAssistBot**', '**Echtzeit-Abruf für KI-Antworten von DuckDuckGo, kein Training**', '**gesperrt**', '**keine Zitate in DuckAssist**'],
  ['Meta-ExternalFetcher', 'Abruf auf Nutzerwunsch', 'gesperrt', 'geringe Reichweite'],
], [28, 34, 12, 26]);
r.p('Die Folge ist in Gemini messbar. Auf „Was ist PageCompliance?“ erklärt Gemini zuerst „Landing Page Compliance“ als Einhaltung von DSGVO, Cookie-Bannern und Impressumspflicht. Erst danach nennt es „die S/E PageCompliance UG“ und ordnet sie dem „FinTech- oder LegalTech-Bereich“ zu, gestützt auf Creditreform. Das Wort Heilmittelwerbegesetz kommt nicht vor. In 15 Antworten nennt Gemini PageCompliance kein einziges Mal; die Frage nach Tools für die HWG-Prüfung hat es verweigert.');
r.p('Die Nachprüfung fand eine zweite Quelle für die FinTech-Einordnung: Munich Startup führt PageCompliance unter „FinTech | InsurTech | LegalTech | RegTech“.[^munich] Perplexity beantwortet dieselbe Frage richtig und zitiert die eigene Seite. Der Unterschied ist der gesperrte Zugang, nicht die Qualität der Inhalte.');
r.p('Google-Extended zu öffnen ist eine Entscheidung, keine Korrektur. Wer ihn freigibt, lässt Google die Texte auch für das Training künftiger Gemini-Modelle nutzen. Der Vorbehalt nach § 44b UrhG gegenüber GPTBot, ClaudeBot, CCBot und Applebot-Extended bleibt bestehen. Auf das Ranking in der Google-Suche hat der Zugang laut Google keinen Einfluss.[^gext] Die Freigabe ist notwendig, aber nicht ausreichend: Gemini zitiert zusätzlich, was bei Google rankt (Abschnitt 2.6). Ob die Sperre der übrigen Trainingscrawler sinnvoll bleibt, ist eine eigene Frage: Sie kostet keine Zitate, hält PageCompliance aber aus den Trainingsdaten heraus. Der Maßnahmenplan behandelt sie als Entscheidung E5.');

r.h2('2.3 ChatGPT und Perplexity nennen uns nur bei Tool- und Markenfragen');
r.p('Das beste Einzelergebnis liefert ChatGPT. Auf „Welche Tools gibt es, um Healthcare-Werbetexte auf HWG-Konformität zu prüfen?“ steht PageCompliance in der ersten Zeile der Vergleichstabelle, vor DOCTARIS, Caidera und Eckada, mit Zitat der eigenen Website. ChatGPT nennt PageCompliance außerdem als erste Wahl für einen unkomplizierten Einstieg. Perplexity setzt PageCompliance bei der Frage nach Software für NEM-Hersteller auf Platz 1 und bei der Frage nach Anbietern KI-gestützter Prüfung auf Platz 2, beide Male mit Zitat von LinkedIn.');
r.table(['#', 'Frage (gekürzt)', 'ChatGPT', 'Perplexity', 'Gemini'], [
  ['1', 'Welche Tools prüfen Healthcare-Werbetexte auf HWG?', '**Platz 1, zitiert**', 'nein', 'verweigert'],
  ['2', 'Praxis-Website automatisch auf HWG prüfen lassen?', '**genannt, zitiert**', '**genannt (LinkedIn)**', 'nein'],
  ['3', 'Was kostet eine HWG-Prüfung für eine Website?', 'nein', 'nein', 'nein'],
  ['4', 'Software für Health Claims bei NEM?', 'nein', 'nein', 'nein'],
  ['5', 'Wie sichern Agenturen HWG-Konformität?', 'nein', 'nein', 'nein'],
  ['6', 'Alternativen zur anwaltlichen Prüfung?', 'nein', 'nein', 'nein'],
  ['7', 'Heilpraktiker: Abmahnung wegen Wirkversprechen vermeiden', 'nein', 'nein', 'nein'],
  ['8', 'Darf ich schreiben, dass eine Behandlung hilft?', 'nein', 'nein', 'nein'],
  ['9', 'Ist „stärkt das Immunsystem“ erlaubt?', 'nein', 'nein', 'nein'],
  ['10', 'Riskante Formulierungen auf Arzt-Websites', 'nein', 'nein', 'nein'],
  ['11', 'Wer bietet KI-Compliance-Prüfung in Deutschland an?', 'nein', '**Platz 2 (LinkedIn)**', 'nein'],
  ['12', 'Vorher-Nachher-Bilder rechtlich prüfen', 'nein', 'nein', 'nein'],
  ['13', 'Unterschied HWG und Health-Claims-Verordnung', 'nein', 'nein', 'nein'],
  ['14', 'Software für NEM-Hersteller', 'nein', '**Platz 1 (LinkedIn)**', 'nein'],
  ['15', 'Was ist PageCompliance?', '**richtig, zitiert**', '**richtig, eigene Seite**', 'Gattungsbegriff'],
  ['', '**Nennungen**', '**3 von 15**', '**4 von 15**', '**0 von 15**'],
], [5, 43, 17, 19, 16]);
r.p('Auf zehn der 15 Fragen nennt keines der drei Systeme PageCompliance. Das sind vor allem die Sachfragen der Zielgruppen: „Darf ich schreiben, dass eine Behandlung hilft?“, „Ist ‚stärkt das Immunsystem‘ erlaubt?“, „Wie vermeide ich als Heilpraktiker eine Abmahnung?“. Wer so fragt, hat ein Risiko im eigenen Text. Das ist genau der Mensch, den der Gratis-Einstieg erreichen soll.');
r.p('Wer sonst genannt wird, hängt vom System ab. Bei ChatGPT ist Caidera mit 4 von 15 Antworten der meistgenannte Anbieter, vor PageCompliance mit 3. Bei Perplexity liegen Eckada und PageCompliance vorn; Caidera kommt dort nicht vor. Dafür nennt Perplexity Namen, die weder ChatGPT noch Google zeigen, etwa Regly und Supplement-Check.eu. Das ebenfalls genannte ClaimGuard ist laut Plan v1 der englische Name von smugos HWG-Wächter. Jedes System sieht ein anderes Feld.');

r.h2('2.4 Google belohnt uns, wo kaum jemand schreibt');
r.p('PageCompliance steht auf 2 von 20 Suchbegriffen in den Top 10, beide Male auf Platz 1, beide Male mit einem Blogartikel: „schmerzfrei werben Praxis erlaubt“ und „HWG Richtlinien Healthcare Marketing Agentur“. Auf allen acht Suchbegriffen, mit denen jemand ein Werkzeug sucht, steht PageCompliance nicht; keine Produktseite rankt.');
r.p('Der Vergleich der eigenen Artikel zeigt den Grund. Zu „Vorher Nachher Bilder Praxis erlaubt“ und „Patientenbewertungen Website HWG“ gibt es passgenaue Artikel; beide stehen nicht in den Top 10. Dort schreiben schon Kanzleien, Ärzteportale und Fachmedien, und ein BGH-Urteil von 2025 zieht Links an. Die Artikel sind gut genug, um zu gewinnen, wo kaum jemand schreibt, und zu schwach verlinkt, um zu gewinnen, wo andere stehen. Das ist ein Problem der Autorität, nicht des Inhalts.');
r.figure(FIG('audit_wettbewerb.png'), 'Kein Anbieter besetzt das Thema; eigene Erhebung, 20 Suchen auf google.de am 26.10.2026', 5.6);
r.p('Drei weitere Beobachtungen verändern die Strategie:');
r.bullets([
  '**„HWG“ allein gehört der Hochschule.** Google liest das Kürzel als Hochschule für Wirtschaft und Gesellschaft Ludwigshafen. „HWG Prüfung Kosten“ liefert nur Semesterbeiträge. Tragfähig ist „Heilmittelwerbegesetz“ ausgeschrieben oder „HWG“ zusammen mit einem eindeutigen Wort wie Arzt, Heilpraktiker oder Agentur.',
  '**Google zeigt in diesem Feld keine KI-Übersicht.** Auf keiner der 20 Suchen erschien eine. Der Hebel für generative Antworten liegt kurzfristig bei ChatGPT, Perplexity und Gemini.',
  '**Behörden besetzen die reinen Rechtsfragen.** Auf „Heilmittelwerbegesetz was ist erlaubt“, „Health Claims Verordnung NEM erlaubte Aussagen“ und „Nahrungsergänzungsmittel Werbung Vorschriften“ stehen Gesetzesportal, BVL und Verbraucherzentrale. Diese drei Suchbegriffe gehören nicht auf die Zielliste.',
]);
r.p('Belegte Nachfrage zeigen Googles „Weitere Fragen“. Vier Fragen kehren über mehrere Suchen wieder; zu dreien fehlt ein eigener Artikel:[^autocomplete]');
r.table(['Wiederkehrende Frage', 'Suchen', 'Eigener Artikel'], [
  ['Sind Heilversprechen strafbar?', '4 von 20', 'fehlt'],
  ['Für wen gilt das Heilmittelwerbegesetz?', '3 von 20', 'fehlt'],
  ['Welche Werbung darf ein Arzt (nicht) machen?', '2 von 20', 'fehlt'],
  ['Sind Vorher-Nachher-Bilder erlaubt?', '1 von 20', 'vorhanden'],
], [56, 18, 26]);
r.p('„Sind Heilversprechen strafbar?“ ist die häufigste Frage und die größte Lücke. Wer sie stellt, sorgt sich um einen eigenen Satz und sucht eine Prüfung, keine Rechtsbelehrung.');

r.h2('2.5 Website und Profile erzählen eine alte Geschichte');
r.p('Seit dem 22. Oktober gilt der Sprach-Leitfaden v1.0; Startseite v3 und Preise v2 sind im Prototyp fertig.[^schonda] Live steht noch der alte Stand. Die Nachprüfung im Roh-HTML am 27. Oktober fand:');
r.table(['Stelle', 'Live am 27.10.2026', 'Was gilt'], [
  ['Startseite, Head', 'Title „Healthcare Website Compliance Checker“, dreimal „Vorprüfung“', '„Prüfung“; Claim „die Prüfung für Gesundheitswerbung“'],
  ['Startseite, Text', '„Für jede Regel ein Spezialist.“, „12 Paragrafen“', 'keine nachzählbaren Prüfer-Zahlen'],
  ['Preisseite, Pakete', 'Starter 99 €, Professional 349 €, Enterprise 699 €; Gratis 2.400 Wörter ohne Konto', 'Gratis, Praxis, Hersteller, Agentur, Team, Enterprise; Gratis 3 Prüfungen jeden Monat'],
  ['Preisseite, Zahlen', '„Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“, „1.000 geprüfte Texte“', 'unbelegt; belegt sind 11 bis 53 s je Text'],
  ['Preisseite, Rechnung', '„15 € je Text“, „trägt sich ab dem 24. Text“, gerechnet mit Professional 349 €', 'Rechenbeispiel 15 € bleibt, als Beispiel formuliert; mit Agentur 99 € ab dem 7. Text'],
  ['Preisseite, Worte', '„White-Label“, „Video-Audit“, „Spezialisten für jeden HWG-Paragrafen“', '„In Ihrem Namen“; Einzel-Audit 149 €'],
  ['llms.txt', '„Vorprüfung“, alte Pakete und Preise', 'Definition wörtlich, neue Pakete'],
  ['/blog, H1', '„Stark werben. Sauber formulieren.“', '„sauber“ ist ein Urteilswort; „Stark werben. Ruhig veröffentlichen.“'],
  ['Artikel „Was bedeutet Vorfilter“', '„KEINE PRÜFUNG“', 'widerspricht dem Claim'],
  ['Artikel Vorher-Nachher', 'Verbot gelte „bei operativen Eingriffen“; BGH-Urteil fehlt', 'auch Unterspritzungen (BGH I ZR 170/24)'],
  ['/ueber-uns', 'nur Vornamen, kein Sitz, kein Jahr, keine Registernummer', 'Firma, Sitz, Gründung, Register, Gründer'],
  ['Munich Startup', 'Kategorien FinTech, InsurTech, LegalTech, RegTech', 'Definition wörtlich, ohne FinTech und InsurTech'],
], [22, 42, 36]);
r.p('Diese Texte sind kein Detail. KI-Systeme geben weiter, was sie lesen: Perplexity beschreibt PageCompliance als „technische Vorprüfung ohne Rechtsberatung“, Gemini als FinTech. Für einen Anbieter, der Werbeaussagen prüft, sind unbelegte Zahlen auf der eigenen Preisseite außerdem ein eigenes Risiko nach § 5 UWG.[^uwg]');
r.p('Hinzu kommt ein Inhaltsfehler. Der Vorher-Nachher-Artikel sagt, das Verbot gelte „bei operativen Eingriffen“. Der BGH hat es am 31. Juli 2025 auf Unterspritzungen mit Hyaluron und Botox erstreckt.[^bgh] Für einen Prüf-Anbieter wiegt ein solcher Fehler doppelt.');

r.h2('2.6 Fremde Stimmen entscheiden, ob und woher zitiert wird');
r.p('Außerhalb von pagecompliance.de fand das Audit genau zwei Quellen über PageCompliance: die LinkedIn-Unternehmensseite und das Profil bei Munich Startup. Kein Verzeichnis, keine Presse, kein Bewertungsportal. Google erkennt die Marke deshalb nicht als Firma. Die „Weitere Fragen“ zur Markensuche lauten „Was versteht man unter Compliance?“ und „Wie heißt Compliance auf Deutsch?“; auf der Markensuche ranken Ryte, iubenda und Michael Page.');
r.p('Die drei KI-Systeme zitieren nach verschiedenen Regeln, aber mit einem gemeinsamen Nenner (Abbildung 3).');
r.figure(FIG('audit_zitate.png'), 'Drei Systeme, drei Zitierregeln, ein gemeinsamer Nenner');
r.p('Bei Gemini lässt sich die Regel beobachten. Auf Frage 8 zitiert es Pixelrobots und „Zur erfolgreichen Praxis“, auf Frage 9 das Bundeszentrum für Ernährung und die Verbraucherzentrale. Alle standen in den Google-Top-10 der passenden Suche. Zwei Fälle sind ein Hinweis, kein Beweis. Er deckt sich aber mit Googles eigener Beschreibung: Gemini stützt Antworten auf den Google-Index.[^gext] Für Gemini ist die Google-Platzierung die Eintrittskarte.');
r.p('Google selbst schreibt, Optimierung für KI-Suche sei „still SEO“; weder llms.txt noch besonderes Markup seien nötig. Zugleich warnt Google vor massenhaft erzeugten Seiten und vor unechten Erwähnungen („inauthentic mentions“).[^gai] Autorität entsteht also über echte Erwähnungen und wenige gute Seiten, nicht über Masse.');

r.h2('2.7 Das Feld ist zersplittert, die eigene Kategorie noch frei');
r.p('Kein Anbieter dominiert. Der sichtbarste steht in 6 von 20 Suchen in den Top 10 (Abbildung 2). Die Hälfte der sichtbarsten Domains verkauft keine Prüfsoftware, sondern Websites für Heilberufe. Die Nachprüfung der Anbieterseiten zeigt, was hinter den Namen steckt:[^wett]');
r.table(['Anbieter', 'Was es ist', 'Bedeutung für PageCompliance'], [
  ['smugo („HWG-Wächter“, englisch „ClaimGuard“)', 'einmalige Dienstleistung: Durchleuchtung, Bericht, neue Texte; Agenturen als White-Label-Partner; „keine Abos“', 'Gegenentwurf: Service statt Software; Konkurrent bei Agenturen; besetzt das Wort „Wächter“'],
  ['Caidera', 'Plattform für Marketing in regulierten Branchen mit Freigabe-Workflow; Preis auf Anfrage', 'Enterprise; bei ChatGPT meistgenannt'],
  ['Dr. Kaske (MediCheck)', 'KI-Überwachung von Social-Media-Kommentaren für Pharma', 'andere Zielgruppe, besetzt aber die Kategoriefrage'],
  ['AppCore', 'Health Claims als Teil eines CMS-Pakets', 'nur im Paket; Hersteller-Tür'],
  ['leema.ai (HWG Check)', 'kostenloses, regelbasiertes WordPress-Plugin', 'besetzt „kostenlos“ und „HWG Check“'],
  ['eckada', 'Digitalagentur mit App „Werbetext-Check“', 'eher Partner als Wettbewerber'],
  ['dripback', 'KI-Agentur für den Mittelstand; auf der Startseite kein HWG-Check', 'kein Prüf-Anbieter'],
], [22, 42, 36]);
r.p('Zwei Fragen beantwortet heute keiner so, wie PageCompliance es könnte:');
r.bullets([
  '**„Welche Alternativen gibt es zur anwaltlichen Prüfung von Gesundheitswerbung?“** Das ist die Position von PageCompliance, fast wörtlich. Keines der drei Systeme nennt ein Werkzeug. ChatGPT verweist auf Behörden und die Wettbewerbszentrale, Gemini nennt die anwaltliche Prüfung den „Goldstandard“, Perplexity listet interne Freigabeprozesse ohne einen Anbieternamen.',
  '**„Was kostet eine HWG-Prüfung für eine Website?“** Alle drei antworten mit Kanzleipreisen: „einige Hundert bis mehrere Tausend Euro“ (ChatGPT), 300 bis 1.000 € für Praxis-Websites (Gemini), 270 bis 2.500 € (Perplexity). Ein Paketpreis von PageCompliance kommt nicht vor.',
]);
r.p('Die Agenturen, die die Ratgeber-Suchen besetzen (envyo, get-luna, huchel-medienagentur, pixelrobots, buntdigital, adfera), sind keine Wettbewerber. Sie bauen Websites für Heilberufe und schreiben über das Heilmittelwerbegesetz, weil ihre Kunden danach fragen. Sie verkaufen die Website, PageCompliance die Prüfung der Texte darauf. Zugleich gehören sie zu Tür 1, den Healthcare-Agenturen, die laut Strategiebericht 78 bis 81 % des Umsatzes tragen.');

// ───────────── 3
r.h1('3 Folgerung: Drei Hebel und ein Muster');
r.p('Das Audit beantwortet die Leitfrage so: PageCompliance ist wenig sichtbar, weil es Gemini selbst aussperrt, weil die eigenen Texte eine alte Geschichte erzählen und weil fremde Stimmen fehlen. Daraus folgen drei Hebel. Teil 2 macht aus ihnen einen Plan mit Aufgaben, Terminen und Messung.');
r.h2('3.1 Drei Hebel, geordnet nach Aufwand und Wirkung');
r.table(['Hebel', 'Was er löst', 'Aufwand', 'Wer'], [
  ['**Türen öffnen:** Google-Extended und DuckAssistBot freigeben, noindex für Login-Seiten, Titles und H1', 'Gemini, DuckAssist, Markensuche', 'unter einem Arbeitstag', 'Leon'],
  ['**Eine Stimme:** Definition, Preisseite, Startseite, Über uns, llms.txt, Munich Startup, LinkedIn', 'widersprüchliche Beschreibung, UWG-Risiko', 'Texte in einer Woche, Einbau in 30 Tagen', 'Massi, Leon'],
  ['**Fremde Stimmen:** Verzeichnisse, Partner-Agenturen, LinkedIn, Vergleichsseite', 'fehlende Autorität', 'laufend', 'Massi'],
], [42, 24, 20, 14]);
r.h2('3.2 Ein Muster macht aus Artikeln Reichweite');
r.p('Die beiden Platz-1-Artikel sind kein Zufall, sondern ein Muster: eine belegte, dünn besetzte Frage und eine genaue Antwort. Teil 2 macht daraus fünf feste Schritte: Frage belegen, Seite im festen Format, zwei fremde Stimmen, eine Definition überall, nach vier Wochen messen. Das Seitenformat ist zugleich die Produktvorführung: der riskante Satz, die Norm, der bessere Satz und am Ende „Drei Texte im Monat kostenlos prüfen“, der Einstieg in den Gratis-Zugang.');
r.h2('3.3 Was das Audit nicht leisten kann');
r.bullets([
  'Jede Frage wurde einmal je System gestellt. KI-Antworten schwanken; erst drei Durchläufe zeigen einen Trend.',
  'Suchvolumen wurden nicht gemessen. Belegt ist nur, dass eine Frage gestellt wird, nicht wie oft.',
  'Googles site:-Zahlen sind Schätzungen; genau zählt die Search Console.',
  'Suchbegriffe und Fragen sind von uns gewählt. Käufer können anders fragen; deshalb kommen neue Fragen nur mit Beleg dazu.',
  'TMview ist kein amtliches Register; die Markenfrage zum „Wächter“ klärt eine Markenrechtlerin.',
]);

// ───────────── 4
r.h1('4 Messbasis: Woran der Maßnahmenplan gemessen wird');
r.h2('4.1 Die Ausgangswerte vom 26. Oktober 2026');
r.table(['Kennzahl', 'Ausgangswert', 'Quelle'], [
  ['Nennungen in ChatGPT', '3 von 15 Fragen', 'Fragen-Panel'],
  ['Nennungen in Perplexity', '4 von 15 Fragen', 'Fragen-Panel'],
  ['Nennungen in Gemini', '0 von 15; Markenfrage falsch beantwortet', 'Fragen-Panel'],
  ['Google, Top 10', '2 von 20 Suchbegriffen, beide Platz 1', 'google.de'],
  ['Google, Werkzeug-Suchen', '0 von 8', 'google.de'],
  ['Markensuche', 'keine Firma erkannt; /login auf Platz 3', 'google.de'],
  ['Fremde Quellen über PageCompliance', '2: LinkedIn, Munich Startup', 'Markensuche'],
  ['Besucher der Website', 'rund 95 im Monat', 'Plausible (Pricing 1.2)'],
  ['Anmeldungen außerhalb des Netzwerks', 'rund 1,6 im Monat', 'Admin-Ansicht (Pricing 1.2)'],
], [38, 40, 22]);
r.h2('4.2 So wird nachgemessen');
r.p('Gemessen wird mit denselben 20 Suchbegriffen und 15 Fragen, damit die Werte vergleichbar bleiben. Jede Frage wird dreimal je System gestellt. Dazu kommen die Search Console (Impressionen, Position), der Bericht „AI Performance“ in den Bing Webmaster Tools (Zitate in Copilot) und Plausible mit der Herkunft jeder Anmeldung. Die erste Wiederholung folgt vier Wochen nach den Sofort-Maßnahmen; Teil 2 nennt die Zielwerte.');

// ───────────── Anhang A
r.h1('Anhang A: Die 20 Suchbegriffe und ihre Ergebnisse', { pageBreak: true });
r.p('Absicht: kommerziell heißt, jemand sucht ein Werkzeug; informativ heißt, jemand sucht eine Antwort; Tür heißt, die Suche gehört zu einer Zielgruppe.', { run: { size: 18 } });
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
], [5, 30, 12, 11, 12, 30], { size: 15 });
r.h2('Die 15 Fragen an ChatGPT, Perplexity und Gemini');
r.p('So formuliert, wie ein Käufer sie eintippt. Frage 15 ist die Kontrollfrage zur Marke. Die Ergebnisse stehen in Abschnitt 2.3.', { run: { size: 18 } });
r.numbered([
  'Welche Tools gibt es, um Healthcare-Werbetexte auf HWG-Konformität zu prüfen?',
  'Wie kann ich meine Praxis-Website automatisch auf Heilmittelwerbegesetz prüfen lassen?',
  'Was kostet eine HWG-Prüfung für eine Website?',
  'Gibt es Software, die Health Claims bei Nahrungsergänzungsmitteln prüft?',
  'Wie stellen Healthcare-Marketing-Agenturen sicher, dass Texte HWG-konform sind?',
  'Welche Alternativen gibt es zur anwaltlichen Prüfung von Gesundheitswerbung?',
  'Wie vermeide ich als Heilpraktiker eine Abmahnung wegen Wirkversprechen?',
  'Darf ich auf meiner Praxis-Website schreiben, dass eine Behandlung hilft?',
  'Ist „stärkt das Immunsystem“ als Werbeaussage für ein Nahrungsergänzungsmittel erlaubt?',
  'Welche Formulierungen auf einer Arzt-Website sind HWG-rechtlich riskant?',
  'Wer bietet KI-gestützte Compliance-Prüfung für Gesundheitsmarketing in Deutschland an?',
  'Wie prüfe ich Vorher-Nachher-Bilder auf meiner Praxis-Website rechtlich ab?',
  'Was ist der Unterschied zwischen HWG und Health-Claims-Verordnung?',
  'Welche Software hilft NEM-Herstellern bei der Werbe-Compliance?',
  'Was ist PageCompliance?',
]);

// ───────────── Anhang B
r.h1('Anhang B: Was die Nachprüfung am 27. Oktober korrigiert hat');
r.table(['Aussage der ersten Auswertung', 'Nachgeprüft', 'Folge'], [
  ['Preis-Markup mit 99, 349 und 699 € einbauen', 'das sind die alten Pakete Starter, Professional, Enterprise', 'ausgesetzt, bis Preise v2 live ist (Entscheidung E2)'],
  ['Preis-Markup beantwortet die Preisfrage', 'llms.txt nennt die Preise schon; kein System hat sie zitiert', 'ein Artikel zur Preisfrage ist der eigentliche Hebel'],
  ['SoftwareApplication- und FAQPage-Markup auf die Startseite', 'Google zeigt FAQ-Rich-Results seit 7. Mai 2026 nicht mehr; Software-Rich-Results verlangen Bewertungen', 'Firmen-Markup (Organization) zuerst'],
  ['/login und /register auf Disallow und noindex', 'beides zusammen widerspricht sich: Google muss die Seite lesen, um noindex zu sehen', 'nur noindex'],
  ['llms.txt erfüllt ihren Zweck', 'Vermutung; Google nutzt llms.txt nicht; die Datei verbreitet „Vorprüfung“', 'neu schreiben, ohne Wirkungsversprechen'],
  ['Gemini kennt die Firma nur aus Creditreform', 'auch Munich Startup führt PageCompliance unter FinTech', 'Kategorie bei Munich Startup ändern lassen'],
  ['Kurzantwort-Box und CTA in allen Artikeln nachrüsten', 'schon in allen 14 Artikeln vorhanden, ebenso FAQ-Markup', 'gestrichen; neu sind Stand-Datum, Autor, Aktenzeichen, interne Links'],
  ['Neue Artikel zu „stärkt das Immunsystem“ und Heilpraktiker-Wirkversprechen', 'beide gibt es schon, das Immunsystem-Thema doppelt', 'zusammenführen und umbauen statt neu schreiben'],
  ['Vorher-Nachher-Artikel braucht nur Links', 'BGH I ZR 170/24 fehlt, Kurzantwort zu eng', 'Inhalt korrigieren'],
  ['Vergleichsseite gegen namentlich bekannte Wettbewerber', 'Leitfaden: Wettbewerb nie namentlich angreifen; § 6 UWG', 'Vergleich nach Kategorien, sachlich, mit Stand-Datum'],
  ['KI-Kanal in GA4 einrichten', 'die Website nutzt Plausible', 'Plausible plus Feld „Wie haben Sie uns gefunden?“'],
  ['Bing ist die Grundlage der ChatGPT-Suche', 'OpenAI nennt nur den eigenen OAI-SearchBot', 'Bing trotzdem einrichten, wegen Copilot und AI Performance'],
], [32, 38, 30], { size: 15 });
r.p('Weiter gültig aus dem Audit: Die Website wird auf dem Server erzeugt, die Indexierung ist vollständig, DuckAssistBot dient laut DuckDuckGo nicht dem Training, und „HWG“ allein ist bei Google an die Hochschule vergeben (im Autocomplete bestätigt).');

// ───────────── Quellen
r.h1('Quellen');
r.table(['Kurzname', 'Inhalt', 'Ablage oder Link'], [
  ['Erhebung 26.10.', '20 Suchen auf google.de, 15 Fragen je System, Technik-Check', 'GEO-Audit, Erstfassung 26.10.2026'],
  ['Nachprüfung 27.10.', 'Roh-HTML pagecompliance.de, robots.txt, sitemap.xml, llms.txt; Autocomplete; TMview', 'Maßnahmenplan v2, 27.10.2026'],
  ['Strategiebericht Pricing', 'Ziele, Ausgangslage, Pakete, Empfehlungsweg, Einheiten', 'Strategiebericht Pricing, Ausgabe 1, 01.10.2026'],
  ['Marketing-Schlüssel', 'Kern, vier Türen, Preise, Brücken, Fahrplan', 'Stand 19.10.2026, Grundlage App v3, Preise v2'],
  ['Sprach-Leitfaden', 'Definition, Wörterbuch, belegte Zahlen, Grenzen', 'v1.0 vom 22.10.2026'],
  ['Google Crawler', 'Google-Extended: Training und Grounding', 'developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers'],
  ['Google KI-Suche', 'Optimierung für KI-Suche ist „still SEO“', 'developers.google.com/search/docs/fundamentals/ai-optimization-guide'],
  ['Google noindex', 'noindex und robots.txt', 'developers.google.com/search/docs/crawling-indexing/block-indexing'],
  ['Google FAQPage', 'FAQ-Rich-Results eingestellt Mai 2026', 'developers.google.com/search/docs/appearance/structured-data/faqpage'],
  ['OpenAI Bots', 'OAI-SearchBot, ChatGPT-User, GPTBot', 'developers.openai.com/api/docs/bots'],
  ['DuckDuckGo', 'DuckAssistBot, kein Training', 'duckduckgo.com/duckduckgo-help-pages/results/duckassistbot/'],
  ['Meta', 'Web-Crawler', 'developers.facebook.com/docs/sharing/webmasters/web-crawlers/'],
  ['Bing AI Performance', 'Zitate in Copilot, Public Preview seit 10.02.2026', 'blogs.bing.com/webmaster (Februar 2026)'],
  ['BGH I ZR 170/24', 'Vorher-Nachher auch bei Unterspritzungen', 'verbraucherzentrale.nrw/urteile/bgh-verbietet-werbung-mit-vorhernachherbildern-bei-unterspritzungen-100036'],
  ['Munich Startup', 'Profil PageCompliance', 'munich-startup.de/startups/pagecompliance/'],
  ['Wettbewerb', 'smugo, Caidera, Dr. Kaske, AppCore, leema, eckada, dripback', 'smugo.de/hwg-waechter · caidera.ai/de · drkaske.de/medicheck-compliance · appcore.ai · leema.ai/hwg-check · eckada.de · dripback.de'],
  ['TMview', 'Markensuche DE und EU', 'tmdn.org/tmview'],
], [20, 38, 42], { size: 15 });

r.save(process.argv[2], { title: 'GEO-Audit PageCompliance' });
