const path = require('path');
const { Report } = require('./lib');
const FIG = (f) => path.join(__dirname, 'fig', f);

const fn = {
  audit: 'GEO-Audit PageCompliance (Teil 1), Kernaussage und Abschnitt 4.1; Erhebung 26.10.2026, Nachprüfung 27.10.2026.',
  ziele: 'Strategiebericht Pricing vom 01.10.2026, Abschnitt 1.1; Ziele Z‑01, Z‑02, Z‑03 und Z‑06.',
  engpass: 'Strategiebericht Pricing, Abschnitte 2.1 und 3.2; Rechnung 06 und 07.',
  treppe: 'Strategiebericht Pricing, Abschnitt 3.1 (E‑008, E‑012, E‑014, E‑015); Marketing-Schlüssel vom 19.10.2026, Abschnitt 3 „Die Treppe“. Praxis 29 € und Hersteller 99 € sind Arbeitswerte.',
  fahrplan: 'Marketing-Schlüssel, Abschnitt 9 „Fahrplan · Vorschlag zur Diskussion“.',
  tueren: 'Marketing-Schlüssel, Abschnitt 2 „Zielgruppen“; Sprach-Leitfaden v1.0 vom 22.10.2026, Abschnitt 6.',
  gai: 'Google Search Central: Leitfaden zur Optimierung für KI-Suche; Google: Liste der gängigen Crawler, Eintrag Google-Extended.',
  faq: 'Google Search Central: FAQPage-Markup, Hinweis zur Einstellung im Mai 2026; Software-App-Markup verlangt Bewertungen für Rich Results.',
  uwg: '§ 5 UWG; maßgeblich ist der Gesamteindruck, ein Hinweis in den AGB heilt das nicht (Sprach-Leitfaden, Regel 2.3).',
  belegt: '15 € ist das Rechenbeispiel aus dem Marketing-Schlüssel (Abschnitt 3) für kleine und mittlere Agenturen. Gemessen ist nur ein Datenpunkt: Die befragte kleine Agentur berechnet 12 € je Text weiter (Strategiebericht Pricing, Abschnitt 2.3; Fall-Log 001 bis 001d, n = 1).',
  o2: 'Strategiebericht Pricing, Abschnitt 2.3, Recherche O2 (arbeit/recherche_O2_praxis_referenzpreise.md, Abruf 01.10.2026): „anwaltliche Einmalprüfung einer Website ab 399 €“. Die öffentliche Fundstelle fehlt noch in der Ablage.',
  rechtvital: 'RechtVital, Kanzlei für Lebensmittel- und Werberecht: Werbeprüfung zum Festpreis, abgerufen 27.10.2026. Nicht HWG-spezifisch; Screenshot sichern.',
  olg: 'OLG Köln, Urteil vom 19.06.2020, 6 U 263/19; Rechtskraft dieses Teils nicht geprüft.',
  hwg: 'Gesetzestext auf gesetze-im-internet.de, geprüft am 27.10.2026. Vor Veröffentlichung bleibt die fachliche Durchsicht Pflicht.',
  omr: 'OMR Reviews: AGB für Software-Anbieter (Basis-Profil kostenlos); OMR und Radyant, „Quellen von LLMs bei Software-Empfehlungen“, Juni 2026. Eigene Studie von OMR, Interessenlage beachten.',
  tmview: 'TMview (EUIPO), Abfrage DE und EU am 27.10.2026. TMview ist kein amtliches Register.',
  brücken: 'Marketing-Schlüssel, Abschnitt 4 „Brücken“; Strategiebericht Pricing, Abschnitt 3.2 (E‑010).',
  kennz: 'Setzungen dieses Plans. Sie leiten sich aus den geplanten Maßnahmen ab, nicht aus einer Prognose.',
};

const r = new Report({ footnotes: fn });

r.titlePage({
  series: 'STRATEGIEBERICHT GEO · TEIL 2 VON 2',
  title: 'GEO-Maßnahmenplan für PageCompliance',
  subtitle: 'Wie die Website zum Reichweiten-Motor für das neue Pricing wird',
  question: 'Welche Maßnahmen, in welcher Reihenfolge und von wem, sorgen dafür, dass Google und KI-Systeme PageCompliance richtig einordnen und empfehlen, damit mehr Agenturen, Praxen, Heilberufe und Hersteller kostenlos prüfen?',
  meta: 'Für Leon und Massi · 28. Oktober 2026 · Version 3, ersetzt Version 2 vom 27. Oktober',
  note: 'Baut auf Teil 1, dem GEO-Audit, auf. Leons Aufgaben stehen zusätzlich im Blatt „Was Leon tun soll“.',
});

r.toc();

// ───────────── Kernaussage
r.h1('Kernaussage', { pageBreak: true });
r.h2('Erst mit einer Stimme sprechen, dann belegte Fragen beantworten, dann fremde Stimmen sammeln');
r.p('Das Audit zeigt: PageCompliance ist technisch gut gebaut, wird aber kaum gefunden. Gemini ist ausgesperrt, die eigene Website erzählt eine alte Geschichte, und außerhalb gibt es nur zwei Stimmen. ChatGPT nennt PageCompliance in 3 von 15 Antworten, Perplexity in 4, Gemini in keiner.[^audit] Gleichzeitig braucht das neue Pricing Reichweite: Der Gratis-Einstieg wirkt nur, wenn Menschen ihn finden.[^engpass]');
r.p('Der Plan setzt deshalb nicht bei mehr Artikeln an, sondern an vier Stellen. Jede trägt für sich zur Sichtbarkeit bei:');
r.numbered([
  '**Die Türen öffnen.** Gemini und DuckDuckGo dürfen die Website für Antworten lesen, Login-Seiten verschwinden aus der Markensuche, Titles und H1 sagen, worum es geht. Etwa ein Arbeitstag für Leon.',
  '**Mit einer Stimme sprechen.** Website, llms.txt, LinkedIn, Munich Startup und jedes Verzeichnis tragen dieselbe Definition, dieselben Pakete und nur belegte Zahlen. KI-Systeme ordnen eine Firma über gleichlautende Beschreibungen ein.',
  '**Belegte Fragen je Tür beantworten.** Jede Seite beantwortet eine Frage, die Käufer nachweislich stellen, im festen Format: riskanter Satz, Norm, besserer Satz, „Ihren Satz kostenlos prüfen“. So wird jeder Artikel zur Produktvorführung und zum Einstieg in die drei Gratis-Prüfungen jeden Monat.',
  '**Fremde Stimmen sammeln.** Jede neue Seite bekommt binnen 14 Tagen zwei Erwähnungen außerhalb von pagecompliance.de. Partner-Agenturen zählen doppelt: Sie bringen Links und sind selbst der Hauptkäufer.',
]);
r.figure(FIG('plan_kern.png'), 'Die Antwort und ihre vier Stützen');
r.p('Der Plan läuft in drei Wellen: sofort (diese Woche), in 30 Tagen, in 90 Tagen. Fünf Entscheidungen stehen diese Woche an. Die Tabelle nennt sie mit Empfehlung; Abschnitt 4.3 zeigt die Fakten dahinter, Anhang A für jede Maßnahme den Befund, auf dem sie beruht.');
r.table(['Entscheidung', 'Frage', 'Empfehlung', 'Abschnitt'], [
  ['E1', 'Google-Extended freigeben?', 'ja', '3.2'],
  ['E2', 'Welche Preise zeigt die Website?', 'Preise v2 mit dem Upgrade; bis dahin unbelegte Zahlen raus, kein Preis-Markup, keine Preise in neuen Artikeln', '3.3'],
  ['E3', 'Zeile „Er stellt keine Rechtsberatung dar“ unter allen Artikeln?', 'durch eine Zeile ohne diese Formel ersetzen', '3.4'],
  ['E4', 'Name der Wächter-Seite?', '„Laufende Website-Prüfung“; App-Name bleibt „Wächter“; Monatsbericht heißt „Prüfbericht“', '3.3'],
  ['E5', 'Trainingssperre für GPTBot, ClaudeBot, CCBot und Applebot-Extended aufheben?', 'ja, für die öffentlichen Seiten; /api/, /admin/, /dashboard/ bleiben gesperrt', '3.2'],
], [14, 30, 44, 12]);
r.p('Gut belegt ist, was der Plan an Technik und Texten ändert: Er stützt sich auf die Dokumentationen der Anbieter, das Roh-HTML und den Sprach-Leitfaden. Schwach belegt ist, wie schnell fremde Stimmen wirken; dafür gibt es keine verlässliche Zahl, nur das Muster aus dem Audit. Der Plan misst deshalb nach vier Wochen und entscheidet je Seite neu.');

r.h2('Begriffe');
r.table(['Begriff', 'Bedeutung'], [
  ['Tür', 'Zielgruppe mit eigenem Einstieg: Agentur, Arztpraxis, Heilberufe, Hersteller'],
  ['Muster', 'die fünf festen Schritte, die jede neue Seite durchläuft (Abschnitt 3.1)'],
  ['Seitenformat', 'fester Aufbau jeder Ratgeber-Seite: Kurzantwort, riskanter Satz, Norm, wann es doch geht, bessere Sätze, Agentur-Hinweis, „Ihren Satz kostenlos prüfen“'],
  ['Fremde Stimme', 'Erwähnung oder Link auf einer Seite, die nicht uns gehört'],
  ['Definition', 'der eine Satz, der PageCompliance überall gleich beschreibt (Abschnitt 3.3)'],
  ['Preise v2, Startseite v3', 'neue Preisseite und Startseite, im Prototyp fertig, noch nicht live'],
  ['Fragen-Panel', 'die 15 Käuferfragen aus dem Audit, je dreimal an ChatGPT, Perplexity und Gemini gestellt'],
  ['noindex', 'Anweisung im Code einer Seite, sie nicht in den Suchindex aufzunehmen'],
  ['Weiterleitung (301)', 'dauerhafte Umleitung einer alten Adresse auf eine neue'],
  ['Search Console, Bing Webmaster Tools', 'kostenlose Werkzeuge von Google und Bing, die zeigen, wie eine Website gefunden wird; Bing meldet zusätzlich Zitate in Copilot („AI Performance“)'],
  ['IndexNow', 'Schnittstelle, über die eine Website neue Seiten sofort an Bing und andere Suchmaschinen meldet'],
], [24, 76]);

// ───────────── 1
r.h1('1 Problemdefinition: Die Website soll Reichweite liefern und liefert kaum welche');
r.h2('1.1 Das Pricing braucht Interessenten, die von selbst kommen');
r.p('Bis April 2027 sollen 20 Organisationen mindestens 3.980 € im Monat zahlen, kein Kunde über 30 % des Umsatzes.[^ziele] Der Strategiebericht Pricing zeigt, dass der Engpass die Reichweite ist, nicht der Preis. Seine Antwort hat zwei Wege. Agenturen empfehlen ihren Praxen das Praxis-Paket und erhalten 15 % Gutschrift; diesen Weg trägt der Vertrieb. Der Gratis-Einstieg holt Praxen, Heilberufe und Hersteller über die Website; diesen Weg muss die Website tragen.[^engpass]');
r.p('Abbildung 2 zeigt, wo dieser Plan ansetzt. GEO arbeitet an den ersten drei Stufen: Die Frage muss bei PageCompliance landen, und die Seite muss in die kostenlose Prüfung führen. Ab dort übernimmt die Treppe des Pricing.[^treppe]');
r.figure(FIG('plan_treppe.png'), 'Vom Suchanlass zum Paket; GEO arbeitet an den ersten drei Stufen', 5.8);
r.h2('1.2 Heute findet kaum jemand PageCompliance');
r.table(['Kennzahl', 'Ausgangswert', 'Quelle'], [
  ['Besucher der Website', 'rund 95 im Monat', 'Pricing 1.2'],
  ['Anmeldungen außerhalb des Netzwerks', 'rund 1,6 im Monat; nötig wären rund 12, wenn die Website 12 Praxen tragen soll', 'Pricing 1.2 und 2.1'],
  ['Nennungen in 15 KI-Antworten', 'ChatGPT 3, Perplexity 4, Gemini 0', 'Audit 2.3'],
  ['Google, Top 10', '2 von 20 Suchbegriffen; 0 von 8 Werkzeug-Suchen', 'Audit 2.4'],
  ['Fremde Quellen über PageCompliance', '2: LinkedIn, Munich Startup', 'Audit 2.6'],
], [34, 46, 20]);
r.h2('1.3 Leitfrage');
r.p('Daraus folgt die Leitfrage dieses Plans: **Welche Maßnahmen, in welcher Reihenfolge und von wem, machen PageCompliance in Google und in KI-Antworten so sichtbar, dass die Website den Gratis-Einstieg füllt?**');

// ───────────── 2
r.h1('2 Problemanalyse: Fünf Befunde bestimmen den Plan');
r.p('Die Befunde stammen aus dem GEO-Audit und seiner Nachprüfung, aus dem Marketing-Schlüssel vom 19. Oktober, dem Sprach-Leitfaden v1.0 vom 22. Oktober und aus den Dokumentationen von Google, Bing, OpenAI und DuckDuckGo. Jeder Befund steht für sich; zusammen begründen sie die vier Arbeitsfelder in Abschnitt 3.');
r.h2('2.1 Zwei Zeilen in der robots.txt kosten eine ganze Plattform');
r.p('Die robots.txt sperrt Google-Extended und DuckAssistBot. Beide liefern Antworten an Nutzer, nicht nur Trainingsdaten. Gemini nennt PageCompliance deshalb in keiner von 15 Antworten und hält den Namen für einen Gattungsbegriff. Die Korrektur kostet zwei Zeilen; sie ist trotzdem eine Entscheidung, weil Google die Texte dann auch für Training nutzen darf (E1). Daneben sperrt die robots.txt vier reine Trainingscrawler. Das kostet keine Zitate in Antworten, hält PageCompliance aber aus den Trainingsdaten der großen Modelle heraus; ein Modell kennt die Marke dann nur, wenn es gerade im Netz sucht (E5).');
r.h2('2.2 Was die Website sagt, sagen die KI-Systeme weiter');
r.p('Live stehen noch „Vorprüfung“, die alten Pakete Starter und Professional, „White-Label“ Zahlen, die der Leitfaden als unbelegt führt („Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“), und eine Agentur-Rechnung, die noch mit dem alten Paket Professional rechnet („trägt sich ab dem 24. Text“). Perplexity gibt „technische Vorprüfung“ weiter, Gemini über Munich Startup „FinTech“. Für einen Anbieter, der Werbeaussagen prüft, sind unbelegte Zahlen auf der eigenen Preisseite zudem ein Risiko nach § 5 UWG.[^uwg] Startseite v3 und Preise v2 sind im Prototyp fertig; das Problem ist der Abstand zwischen Prototyp und Live-Seite.');
r.h2('2.3 Gewonnen wird, wo eine Frage belegt und dünn besetzt ist');
r.p('Zwei Artikel stehen auf Platz 1, beide zu Fragen, die kaum jemand beantwortet. Wo Kanzleien, Ärzteportale und Behörden schreiben, kommen passgenaue Artikel nicht in die Top 10. Googles „Weitere Fragen“ und das Autocomplete zeigen, welche Fragen belegt sind: „Sind Heilversprechen strafbar?“ (4 von 20 Suchen), „Für wen gilt das Heilmittelwerbegesetz?“ (3), „Welche Werbung darf ein Arzt machen?“ (2). Zu allen drei fehlt ein Artikel. Zwei Grenzen gelten: „HWG“ allein gehört bei Google der Hochschule Ludwigshafen, und gegen Gesetzesportal, BVL und Verbraucherzentrale ist auf reinen Rechtsfragen nicht anzukommen.');
r.h2('2.4 Google sagt selbst: gute Seiten und echte Erwähnungen, keine Tricks');
r.p('Google schreibt, Optimierung für KI-Suche sei „still SEO“; es brauche weder llms.txt noch besonderes Markup. Gemini stützt seine Antworten auf den Google-Index. Zugleich warnt Google vor massenhaft erzeugten Seiten und vor unechten Erwähnungen.[^gai] FAQ-Rich-Results zeigt Google seit 7. Mai 2026 nicht mehr, und Software-Rich-Results verlangen Bewertungen.[^faq] Daraus folgt: wenige, tiefe Seiten; nur echte Erwähnungen; Markup nur dort, wo es eine Firma eindeutig beschreibt.');
r.h2('2.5 Jede Tür sucht anders');
r.p('Der Marketing-Schlüssel teilt die Käufer in vier Türen. Jede hat einen eigenen Schmerz, einen eigenen Satz und ein eigenes Paket.[^tueren] Für GEO zählt zusätzlich, wonach jede Tür sucht:');
r.table(['Tür', 'Wer sucht', 'Belegte Suchanlässe', 'Kernsatz', 'Paket'], [
  ['1 Agentur (Hauptkäufer)', 'die Texterin googelt die Praxisfragen ihrer Kunden; die Geschäftsführung fragt nach Werkzeug und Preis', '„HWG Richtlinien Healthcare Marketing Agentur“ (Platz 1); Kostenfrage', '„Ihr Kunde fragt nicht mehr, ob er das so schreiben darf.“', 'Agentur 99 €, Team 249 €'],
  ['2 Arztpraxis', 'Inhaberin oder Praxismanagerin', '„arzt werbung was ist erlaubt“, „botox werbung verboten“, Vorher-Nachher', '„Ihr ganzer Auftritt auf einer Fläche. Und was davon zu tun ist.“', 'Praxis 29 €, Einzel-Audit 149 €'],
  ['3 Heilberufe', 'Heilpraktiker, Physiotherapie, Osteopathie; entscheiden selbst und schnell', '„heilversprechen strafbar“, „heilmittelwerbegesetz heilpraktiker“, „heilmittelwerbegesetz physiotherapie“', '„Ihre Botschaft bleibt erhalten.“', 'Praxis 29 €'],
  ['4 Hersteller', 'Marketing und Qualität in einer Person', '„stärkt das Immunsystem“, Health-Claims-Beispiele', '„Etikett rein. Text raus. Ruhe.“', 'Hersteller 99 €'],
], [16, 22, 26, 22, 14], { size: 15 });
r.p('Der Fahrplan des Marketing-Schlüssels ordnet die Kampagnen: erst Agenturen, dann über Agenturen in die Praxen, dann Heilpraktiker direkt, dann Arztpraxen, Hersteller erst nach dem Preistest mit tigovit.[^fahrplan] Der Plan folgt dieser Reihenfolge, wo die Nachfrage belegt ist. Weil die Texterin die Praxisfragen googelt, trägt jeder Artikel einen Agentur-Hinweis: Jede Praxis-Seite erreicht auch Tür 1.');

// ───────────── 3
r.h1('3 Problemlösung: Ein Muster und vier Arbeitsfelder');
r.p('Das Muster (3.1) sorgt dafür, dass jede Seite gleich gebaut, verbreitet und gemessen wird. Die vier Arbeitsfelder setzen die Stützen der Kernaussage um: Türen öffnen (3.2), mit einer Stimme sprechen (3.3), belegte Fragen beantworten (3.4), fremde Stimmen sammeln (3.5). Abschnitt 3.6 zeigt, wie sich PageCompliance dabei vom Wettbewerb abgrenzt.');

r.h2('3.1 Jede Seite läuft durch dasselbe Muster');
r.p('Was nicht durch Schritt 1 kommt, wird nicht geschrieben. Was nach Schritt 5 nicht trägt, wird umgebaut oder aufgegeben. So wird aus einzelnen Artikeln ein Ablauf, der sich wiederholen lässt (Abbildung 3).');
r.figure(FIG('plan_muster.png'), 'Das Muster: fünf Schritte je Seite, danach eine von vier Entscheidungen');
r.numbered([
  '**Frage belegen.** Nur Fragen mit Nachweis: Google-Autocomplete, Googles „Weitere Fragen“, eine Frage aus dem Fragen-Panel oder ein Satz aus einem Kundengespräch.',
  '**Eine Seite im festen Format.** Kurzantwort in zwei Sätzen, der riskante Satz, Norm und Aktenzeichen, wann es doch geht, drei bessere Sätze, ein Agentur-Hinweis, „Ihren Satz kostenlos prüfen“, sichtbares Stand-Datum und Autor. Das Format ist die Produktvorführung: Befund, Norm, besserer Satz.',
  '**Zwei fremde Stimmen in 14 Tagen.** Ein LinkedIn-Beitrag (Firmenseite in Sie, Massis Profil in Du) und eine Fundstelle außerhalb von pagecompliance.de: Gastbeitrag bei einer Partner-Agentur (M9, Idee), Verband, Fachmedium oder Verzeichnis.',
  '**Eine Definition, überall gleich.** Jeder Text über PageCompliance nutzt die Definition aus Abschnitt 3.3 wörtlich.',
  '**Nach vier Wochen messen.** Search Console, Bing „AI Performance“, Fragen-Panel. Danach eine von vier Entscheidungen: halten, verlinken, umschreiben, aufgeben.',
]);
r.p('**Drei Regeln dazu:** Keine Kampfthemen gegen Behörden. „HWG“ nie allein im Title (Google liest es als Hochschule Ludwigshafen). Kein Artikel ohne Agentur-Hinweis.');

r.h2('3.2 Türen öffnen: die Technik in einem Arbeitstag');
r.p('Das Sofort-Paket kostet Leon zusammen etwa fünf Stunden. Es behebt alles, was Sichtbarkeit kostet, ohne dass ein Text fehlt. Die vollständige Liste mit Code steht im Blatt „Was Leon tun soll“.');
r.table(['#', 'Maßnahme', 'Warum'], [
  ['L17', 'Preisseite bereinigen: unbelegte Zahlen, „White-Label“, „Video-Audit“, „Spezialisten für jeden HWG-Paragrafen“ raus; Preisanker mit Quelle', 'Leon verantwortet die Preise; unbelegte Zahlen sind ein UWG-Risiko'],
  ['L1', 'Google-Extended (nach E1) und DuckAssistBot freigeben; nach E5 auch GPTBot, ClaudeBot, CCBot, Applebot-Extended; /api/, /admin/, /dashboard/ bleiben gesperrt', 'öffnet Gemini und DuckAssist; bringt die öffentlichen Texte in die Trainingsdaten der großen Modelle'],
  ['L2', '/login und /register auf noindex, nicht in der robots.txt sperren', '/login steht auf Platz 3 der Markensuche; eine Sperre würde Google das noindex nicht sehen lassen'],
  ['L3', 'Titles, Meta-Descriptions, H1: „Vorprüfung“ und „Healthcare Website Compliance Checker“ raus, Blog-Title korrigieren', 'der Title ist das Erste, was Google und KI-Systeme lesen'],
  ['L4', 'Blog-Fußzeile tauschen (nach E3)', 'wirkt auf alle 14 Artikel auf einmal'],
  ['L5', 'llms.txt neu: Definition wörtlich, „Prüfung“, keine alten Pakete', 'verbreitet heute die alte Geschichte'],
  ['L6', 'Sitemap: nur indexierbare Seiten, echtes Änderungsdatum', 'hilft Suchmaschinen, neue und geänderte Seiten zu finden'],
  ['L7', 'Search Console, Bing Webmaster Tools, IndexNow einrichten', 'ohne sie keine genaue Messung; Bing zeigt Zitate in Copilot'],
], [7, 50, 43]);
r.p('**Entscheidung E1.** Bei heute null Nennungen in Gemini ist die Freigabe ein lohnender Tausch. Sie ist notwendig, aber nicht ausreichend: Gemini zitiert zusätzlich, was bei Google rankt. Deshalb gehören die Arbeitsfelder 3.4 und 3.5 dazu.');
r.p('**Entscheidung E5.** Die Sperre für GPTBot, ClaudeBot, CCBot und Applebot-Extended stammt aus der bestehenden robots.txt. Sie schützt die Texte davor, Modelle zu trainieren, die dann dieselben Antworten kostenlos geben, und hält den Vorbehalt nach § 44b UrhG aufrecht. Dagegen steht der Engpass: Kaum ein Modell kennt PageCompliance. Was im Training steckt, weiß ein Modell auch ohne Websuche. CCBot wiegt am schwersten, weil Common Crawl breit für Trainingsdatensätze weiterverwendet wird. Öffentlich stehen Marketingtexte, die sich verbreiten sollen; die Prüflogik steht nicht auf der Website, und gewonnen wird laut Leitfaden über den Weg bis zur Freigabe. Empfehlung: freigeben für die öffentlichen Seiten. Zwei Vorbehalte: Der Effekt ist nicht belegt und frühestens mit der nächsten Modellgeneration sichtbar, und gesammelte Daten lassen sich nicht zurückholen.');

r.h2('3.3 Mit einer Stimme sprechen');
r.p('Jeder Text über PageCompliance trägt dieselbe Definition, wörtlich: Website, llms.txt, LinkedIn, Munich Startup, OMR Reviews, jeder Gastbeitrag.');
r.quote('PageCompliance ist die Plattform für Gesundheitswerbung. Agenturen, Praxen, Heilberufe und Hersteller prüfen ihre Texte KI-gestützt auf Risiken nach Heilmittelwerbegesetz (HWG), Health-Claims-Verordnung und UWG – bekommen für jede kritische Stelle den besseren Satz und geben gemeinsam frei.');
r.p('Dazu gehören der Kern aus dem Marketing-Schlüssel: Claim „PageCompliance – die Prüfung für Gesundheitswerbung“, Vision „Wahrheit ist die stärkste Werbung“, Mission „Schneller geprüft als geschrieben“, Nutzen „Der bessere Satz, der nach der Marke klingt. Bereit zur Freigabe.“ und der Weg Prüfen, Besser so, Abstimmen, Freigegeben, Planen, Wächter. Was live anders klingt, wird ersetzt:');
r.table(['Live heute', 'Neu', 'Grund'], [
  ['„Healthcare Website Compliance Checker“, „Vorprüfung“, „Vorfilter“', '„Prüfung“; Claim „die Prüfung für Gesundheitswerbung“', 'Markenbegriff seit 22.10.2026'],
  ['Starter 99 €, Professional 349 €, Enterprise 699 €', 'Gratis, Praxis, Hersteller, Agentur, Team, Enterprise (nach E2)', 'Pricing E‑008, E‑012, E‑014'],
  ['„Anwalt ab 3.000 €“', '„Anwaltliche Einzelprüfung ab 399 €“ mit abgelegter Quelle[^o2] oder 400 € netto je Internetseite bis 550 Wörter[^rechtvital]', '3.000 € ist unbelegt'],
  ['„Abmahnung ab 5.000 €“, „Vertragsstrafe 5.500 €“', 'raus; Vertragsstrafe nur mit Quelle am konkreten Fall', 'unbelegt laut Leitfaden'],
  ['„15 € je Text“, „trägt sich ab dem 24. Text“', 'Rechenbeispiel bleibt, klar als Beispiel: „Wenn Sie 15 € je Text weiterberechnen, trägt sich das Agentur-Paket ab dem 7. Text.“ (mit Preise v2)', 'Pitch-Beispiel, kein Messwert; den Preis legt jede Agentur selbst fest[^belegt]'],
  ['„1.000 geprüfte Texte“', 'raus; belegt ist „11 bis 53 Sekunden je Text, 54 Texte in 3 min 17 s“', 'unbelegt'],
  ['„Für jede Regel ein Spezialist“, „12 Paragrafen“', 'Spezialisten als endloser Strom zeigen, ohne Zahl', 'keine nachzählbaren Prüfer-Zahlen'],
  ['„White-Label“', '„In Ihrem Namen“', 'Wörterbuch'],
  ['„Video-Audit“', '„Einzel-Audit 149 €“', 'Video-Audit nicht aktiv bewerben'],
  ['„HWG-Wächter“, „rund um die Uhr geschützt“', '„Laufende Website-Prüfung“; Zeitform „kommt“, solange nicht live', 'E4; smugo nutzt „HWG-Wächter“'],
  ['„Stark werben. Sauber formulieren.“ (H1 von /blog)', '„Stark werben. Ruhig veröffentlichen.“', '„sauber“ ist ein Urteilswort'],
], [32, 44, 24], { size: 15 });
r.p('**Die Seiten, die zuerst gelesen werden.** Die Preisseite übernimmt Leon ganz, weil er die Preise verantwortet. Die übrigen Texte schreibt Massi, Leon baut sie ein:');
r.bullets([
  '**Preisseite (L17, Leon, sofort).** Alle unbelegten Zahlen raus, auch bevor Preise v2 live ist. Ein Prüf-Anbieter mit unbelegten Zahlen auf der eigenen Preisseite ist angreifbar. Der Pitch-Satz „rund 600 € statt 2.000 €“ steht nicht in der Belegt-Liste und gehört weder auf die Website noch in den Blog.',
  '**Startseite (M12, Leon L3 und L9).** Der Claim bleibt als H1. Direkt darunter eine Zeile mit Suchbegriff, etwa „Die Prüfung für Gesundheitswerbung nach Heilmittelwerbegesetz, Health-Claims-Verordnung (und UWG).“ Meta-Description und Blog-Title: Varianten in M12. „KI“ nicht in Title oder H1; KI zeigen, nicht hinschreiben.',
  '**Über uns (M3, Leon L8 und L10).** Faktenblock: S/E PageCompliance UG (haftungsbeschränkt), Sitz Grünwald, gegründet 2026, HRB 311850 Amtsgericht München, Leon V. Schwahn (CEO), Massimiliano Ehmann (CCO), Definition wörtlich, die drei Grundsätze. Perplexity zitiert genau diese Seite; die Gründerstory bleibt offen, die Fakten reichen.',
  '**Munich Startup und LinkedIn (M2).** Definition übernehmen, bei Munich Startup die Kategorien FinTech und InsurTech entfernen lassen. Die LinkedIn-Seite selbst prüfen; ohne Login ist sie nicht lesbar.',
]);
r.p('**Entscheidung E2.** Live stehen die alten Pakete, im Prototyp die neuen. Solange beide Welten existieren, lesen KI-Systeme zwei Preismodelle. Deshalb: Preise v2 geht mit dem Upgrade live. Bis dahin kein Preis-Markup und keine Preise in neuen Artikeln. Das Preis-Markup kommt danach zuerst für die entschiedenen Pakete (Gratis, Agentur, Team); Praxis und Hersteller folgen, wenn Leon die Preise nach den Gesprächen mit Praxen und tigovit festgelegt hat.');
r.p('**Entscheidung E4.** smugo nutzt „HWG-Wächter“. TMview zeigt keine Marke „HWG-Wächter“, aber rund 350 Einträge zu „Wächter“, darunter aktive Marken in Software-Klassen wie „PC WÄCHTER“ und „NET WÄCHTER“ (Klassen 9 und 42); für „PageCompliance“ keinen Treffer.[^tmview] Empfehlung: Die Seite für Google und KI heißt „Laufende Website-Prüfung“. Der Name setzt den Markenbegriff „Prüfung“ fort, ist deutsch, verspricht keinen Schutz und deckt alles ab, was auf einer Website steht, auch Leistungs- und Behandlungsseiten. Agenturen können ihn als Leistung weiterberechnen. Er steht immer mit dem Satz „PageCompliance liest Ihre Live-Seiten mit und meldet sich, wenn sich eine Seite oder die Rechtslage ändert.“ Der Monatsbericht heißt „Prüfbericht“. „Wächter“ bleibt Name in der App. Eine Markenrechtlerin prüft „Wächter“ und eine eigene Anmeldung von „PageCompliance“ vor dem Start.');

r.h2('3.4 Belegte Fragen je Tür beantworten');
r.p('Erst wird der Bestand repariert, dann kommen neue Seiten. Gemessen am 27. Oktober: Alle 14 Artikel haben Kurzantwort-Box und FAQ-Markup. Keiner hat ein sichtbares Stand-Datum, keiner nennt ein Aktenzeichen, keiner verlinkt auf einen anderen Artikel oder die Preisseite. Das behebt die neue Blog-Vorlage (L11) für alle auf einmal.');
r.h3('Die 14 bestehenden Artikel');
r.table(['Artikel (/blog/…)', 'Wörter', 'Tür', 'Aktion'], [
  ['schmerzfrei-werbung-praxis-hwg', '483', 'Ärzte, Heilberufe', 'halten (Platz 1); Links und Stand ergänzen'],
  ['hwg-compliance-leitfaden-healthcare-agenturen', '815', 'Agentur', 'halten (Platz 1); Links und Stand ergänzen'],
  ['vorher-nachher-bilder-praxis-hwg', '910', 'Ärzte', '**korrigieren:** BGH I ZR 170/24, auch Unterspritzungen (M4)'],
  ['vorfilter-hwg-pruefung-bedeutung', '752', 'alle', '**neu schreiben**, neuer Slug, Weiterleitung (M5, L12)'],
  ['immunsystem-staerken-health-claim-erlaubt', '445', 'Hersteller', 'in den nächsten Artikel einarbeiten, weiterleiten (M6, L12)'],
  ['nem-immunsystem-claims-erlaubt', '712', 'Hersteller', 'Ziel der Zusammenführung, mit Wortlaut der zugelassenen Claims (M6)'],
  ['heilpraktiker-website-wirkversprechen-hwg', '807', 'Heilberufe', 'umbauen auf „Heilmittelwerbegesetz Heilpraktiker“ und „Werbung Heilpraktiker was ist erlaubt“'],
  ['patientenbewertungen-testimonials-hwg', '443', 'Ärzte', 'ausbauen: Rechtsprechung mit Aktenzeichen, dann fremde Links'],
  ['health-claim-vs-hwg-unterschied', '658', 'Hersteller, Agentur', 'Kurzantwort schärfen (Frage 13 nennt uns nirgends)'],
  ['eu-health-claims-was-agenturen-wissen-muessen', '579', 'Agentur, Hersteller', 'umbauen auf „Health Claims Beispiele“ mit Wortlaut'],
  ['health-claims-verordnung-nem-erlaubt-vs-teuer', '672', 'Hersteller', 'halten; H2 „Nahrungsergänzungsmittel Werbung Recht“'],
  ['praxis-website-hwg-7-risikostellen', '893', 'Ärzte', 'halten; auf den Vorher-Nachher-Artikel verlinken'],
  ['akupunktur-migraene-praxis-website-erlaubt', '600', 'Heilberufe', 'halten; auf den Heilpraktiker-Artikel verlinken'],
  ['google-business-praxis-gesundheitsaussagen', '906', 'Ärzte', 'halten'],
], [38, 8, 16, 38], { size: 15 });
r.h3('Neue Artikel, in dieser Reihenfolge');
r.p('Die Reihenfolge folgt der belegten Nachfrage und dem Fahrplan des Marketing-Schlüssels. Die Rechtsgrundlagen sind am Gesetzestext geprüft; vor Veröffentlichung bleibt die fachliche Durchsicht Pflicht.[^hwg]');
r.table(['#', 'Arbeitstitel', 'Beleg', 'Tür', 'Geprüfte Grundlage'], [
  ['1', 'Sind Heilversprechen strafbar?', 'Autocomplete „heilversprechen strafbar“; Weitere Fragen 4 von 20', 'Heilberufe, alle', '§ 3 HWG verbietet irreführende Werbung, u. a. wenn ein Erfolg „mit Sicherheit erwartet werden kann“ (Satz 2 Nr. 2a). § 14 HWG: Freiheitsstrafe bis zu einem Jahr oder Geldstrafe, nur bei Vorsatz (§ 15 StGB). § 15 Abs. 2 und 3 HWG: fahrlässig eine Ordnungswidrigkeit, Geldbuße bis 20.000 €.'],
  ['2', 'Was kostet eine Prüfung nach dem Heilmittelwerbegesetz?', 'Fragen 3 und 6: alle drei Systeme nennen nur Kanzleipreise', 'Agentur, Praxis', 'Belegte Marktpreise: Kanzlei-Festpreis 350 € netto (Anzeige), 400 € netto (Internetseite bis 550 Wörter), 1.200 € netto (weitere Medien), RechtVital; Health Claims Check 49,90 € netto für 5 Seiten, Händlerbund. Eigene Preise erst nach E2. Kein „günstiger und schneller als der Anwalt“.[^olg]'],
  ['3', 'Welche Werbung darf ein Arzt machen?', 'Autocomplete „arzt werbung was ist erlaubt was verboten“; Weitere Fragen 2 von 20', 'Ärzte', 'HWG plus Berufsordnung der zuständigen Ärztekammer; Paragrafen vor dem Schreiben am Kammertext prüfen.'],
  ['4', 'Für wen gilt das Heilmittelwerbegesetz?', 'Weitere Fragen 3 von 20', 'alle', '§ 1 Abs. 1 HWG: Arzneimittel, Medizinprodukte, andere Mittel, Verfahren und Behandlungen mit Bezug auf Krankheiten, Leiden oder Beschwerden, sowie plastisch-chirurgische Eingriffe ohne medizinische Notwendigkeit.'],
  ['5', 'Heilversprechen: die besseren Sätze', 'Autocomplete „heilversprechen formulierungen“', 'Heilberufe, Agentur', '§ 3 Satz 2 Nr. 1 und 2a HWG. Lexikon-Format: Satz, Befund, besserer Satz.'],
  ['6', 'Physiotherapie und Osteopathie: was die Werbung darf', 'Autocomplete „heilmittelwerbegesetz physiotherapie“, „werbung physiotherapie erlaubt“', 'Heilberufe', 'Urteile (etwa KG Berlin 5 U 9/24) vor Nutzung am Volltext prüfen.'],
  ['7', 'Botox und Hyaluron: was die Werbung darf', 'Autocomplete „botox werbung verboten“', 'Ärzte', '§ 10 Abs. 1 HWG (verschreibungspflichtige Arzneimittel nur gegenüber Fachkreisen), § 11 Abs. 1 Satz 3 Nr. 1 HWG, BGH I ZR 170/24.'],
], [4, 18, 22, 12, 44], { size: 14 });
r.p('Danach, in dieser Reihenfolge: Zahnarzt-Werbung, Heilpraktiker für Psychotherapie (eigener Ton), die Liste der zugelassenen Health Claims als HTML-Seite. Herstellerthemen werden erst nach dem Preistest mit tigovit verstärkt; bis dahin erreichen sie Hersteller über deren Agenturen.');
r.p('**Zu Artikel 1:** Risiko vorne, Ruhe am Ende. Der Artikel endet mit dem besseren Satz und „Ihren Satz kostenlos prüfen“, nicht mit dem Strafrahmen. **Zu Artikel 2:** Fremde Preise nur mit Quelle, Datum und Screenshot. Die Seite stellt Kategorien dar, nicht Wettbewerber bloß (§ 6 UWG), und wird vor Veröffentlichung gegengelesen (M14).');
r.h3('Produktseiten je Tür (90 Tage)');
r.p('Auf den acht Werkzeug-Suchen rankt heute keine Produktseite; Wettbewerber tragen den Suchbegriff im Namen. Jede Tür bekommt deshalb eine Produktseite mit ihrem Kernsatz, ihrem Wow-Moment aus dem Prototyp und ihrem Paket. Texte schreibt Massi, Leon baut (L15).');
r.table(['Seite', 'Kernsatz', 'Wow-Moment (App v3)', 'Paket'], [
  ['/agenturen (besteht, auf „Sie“ umstellen)', '„Ihr Kunde fragt nicht mehr, ob er das so schreiben darf.“', 'Befund, besserer Satz, „An … senden“, Kunde tippt am Handy auf „Passt“', 'Agentur 99 €, Team 249 €'],
  ['/arztpraxen', '„Ihr ganzer Auftritt auf einer Fläche. Und was davon zu tun ist.“', '„Mein Auftritt“; ein Bild ist eine Stelle wie ein Satz', 'Praxis 29 €, Einzel-Audit 149 €'],
  ['/heilberufe', '„Ihre Botschaft bleibt erhalten.“', 'Sperrsätze aus der Unterlassungserklärung', 'Praxis 29 €'],
  ['/hersteller („Nahrungsergänzungsmittel“ in Title und H1)', '„Etikett rein. Text raus. Ruhe.“', 'Rezeptur-Werkstatt: eine Kapsel mehr, ein Claim kommt dazu', 'Hersteller 99 €'],
  ['/laufende-website-pruefung', '„Ruhe als Leistung.“', 'Prüfbericht „Ihre Website war im Oktober ohne Befund.“', 'in Praxis, Agentur, Hersteller; Zeitform „kommt“'],
], [22, 30, 30, 18], { size: 15 });
r.p('Ärzte und Heilberufe bekommen getrennte Seiten, obwohl dasselbe Paket dahinterliegt: Ärzte wollen nicht mit Heilpraktikern in einen Topf, und der Schmerz ist ein anderer. /heilberufe statt /heilpraktiker, weil Tür 3 laut Leitfaden auch Physiotherapie, Osteopathie und Psychotherapeuten umfasst. /hersteller statt /nahrungsergaenzungsmittel, weil OTC- und RX-Hersteller später dazukommen. Preise auf diesen Seiten erst nach E2; Praxis 29 € und Hersteller 99 € sind Arbeitswerte.');
r.p('Suchanlässe für die Seite „Laufende Website-Prüfung“, abgeleitet aus Plan v1, Suchvolumen nicht gemessen: „Website laufend prüfen Heilmittelwerbegesetz“, „Praxis-Website überwachen Werbung“, „Kunden-Websites überwachen Agentur Gesundheit“, „Unterlassungserklärung Vertragsstrafe vermeiden Website“ (Heilberufe). Vor dem Schreiben in Search Console oder Keyword-Planer prüfen. Keine zusätzlichen Seiten für Kaufbegriffe (Vorschlag der Strategie: /hwg-pruefung, /health-claims-pruefung). Sie würden mit vorhandenen Seiten um dieselben Suchbegriffe konkurrieren: Die Startseite übernimmt „Prüfung nach Heilmittelwerbegesetz“, die Hersteller-Seite „Health Claims prüfen“. Erst wenn die Search Console nach der ersten Messung viele Einblendungen für solche Begriffe ohne passende Seite zeigt, wird nachgebaut.');
r.p('**Entscheidung E3.** Unter allen 14 Artikeln steht „Er stellt keine Rechtsberatung dar“. Der Leitfaden sieht die Formel nur in den AGB vor, nicht im Marketing. Vorschlag ohne die Formel: „Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“ Entscheidung bei Leon und Massi.');

r.h2('3.5 Fremde Stimmen sammeln');
r.p('Autorität ist der Engpass hinter allem anderen. Sie entsteht nur über echte Erwähnungen. Vier Wege, geordnet nach Aufwand:');
r.bullets([
  '**Verzeichnisse (M7, 30 Tage).** Crunchbase einmal anlegen: bringt keine Kunden, aber eine fremde Quelle mit harten Fakten. OMR Reviews nur als Basis-Profil (kostenlos), dazu beide Kunden um eine ehrliche Bewertung bitten; ohne Bewertungen ist das Profil wertlos. Aktiv angehen erst ab etwa fünf echten Bewertungen (eigene Setzung) und nachdem die passende Kategorie geprüft ist. Kein G2: amerikanisch geprägt, für deutsche Gesundheitswerbung ohne erkennbaren Nutzen. Überall die Definition. Bewertungen nur von echten Kunden, nie gekauft. OMR nennt sich selbst die meistzitierte Quelle bei Software-Empfehlungen in DACH; das ist eine eigene Studie mit Eigeninteresse.[^omr]',
  '**Partner-Agenturen (M9, Idee).** envyo, get-luna, buntdigital, pixelrobots, huchel-medienagentur, adfera besetzen die Ratgeber-Suchen und verkaufen Websites, keine Prüfung. Angebot: Gastbeitrag, Tool-Erwähnung, Partnerschaft. Sie sind zugleich Tür 1. Eine Partner-Agentur bringt Link, Zielgruppe und über den Empfehlungsweg Praxen mit 15 % Gutschrift. Nicht smugo: smugo bietet Agenturen selbst einen HWG-Dienst als White-Label-Partnerschaft an.',
  '**LinkedIn (M11, laufend).** Jede neue Seite ein Beitrag. Die Serie aus dem Marketing-Schlüssel passt genau: „Ein Satz, drei Fassungen“, ein echter Satz aus dem Gesundheitsmarketing, der Befund, der bessere Satz, Ende „Bereit zur Freigabe“. Firmenseite in Sie, Massis Profil in Du.',
  '**Heilberufe direkt (laufend).** Fachverbände, Fachschulen und Instagram, wie im Fahrplan für Heilpraktiker vorgesehen.',
]);
r.p('Eine fünfte Stimme liefert das Produkt selbst: Jeder Freigabe-Link und jeder Prüfbericht einer Agentur trägt die Fußzeile „geprüft mit PageCompliance“.[^brücken] Das ist Wiedererkennung bei genau den Praxen, die später suchen, aber kein Ranking-Signal, weil diese Links nicht öffentlich sind. Was Praxen im Link gesehen haben, sollen sie auf der Website und im Suchergebnis wiederfinden: gleicher Name, gleiche Definition.');
r.p('**Vergleichsseite (M10, L16, 90 Tage).** ChatGPT baut Tool-Tabellen aus vorhandenen Vergleichen. Die Seite vergleicht Kategorien, nicht Firmen: Kanzlei, Chat-KI, Agentur-Dienstleistung, Plugin, Prüfsoftware. Sachlich nach § 6 UWG, mit Stand-Datum; kein Anbieter wird angegriffen.');

r.h2('3.6 Gegen den Wettbewerb gewinnt der Weg, nicht die Textprüfung');
r.p('Das Feld ist kleiner, als die Liste im Audit vermuten lässt. Drei der dort genannten Werkzeuge sind Agenturen oder Plattformen mit einem Nebenprodukt. Der direkteste Gegenentwurf ist smugo: Service statt Software. PageCompliance unterscheidet sich über den Weg bis zur Freigabe und über die Plattform, nicht über die reine Textprüfung:');
r.table(['smugo', 'PageCompliance'], [
  ['einmalige Prüfung', 'Prüfung bei jedem neuen Text; Beobachtung der Live-Seiten im Bau'],
  ['Agentur prüft und schreibt um', 'die Software prüft, der Kunde entscheidet und ändert selbst'],
  ['Festpreis nach Umfang', 'im Paket, in Einheiten'],
  ['Agentur arbeitet als White-Label-Partner', 'Agentur bietet die Prüfung in eigenem Namen an'],
], [50, 50]);
r.p('Diese Tabelle ist intern. Öffentlich wird kein Wettbewerber namentlich angegriffen.');

// ───────────── 4
r.h1('4 Umsetzung: Wer was bis wann macht');
r.h2('4.1 Aufgaben Massi: Inhalt und Autorität');
r.p('Massis Teil löst den eigentlichen Engpass: einheitliche Beschreibung, korrekte Inhalte, fremde Stimmen. Die Nummern M3, M5, M6, M7, M10 und M12 tauchen bei Leon als Abhängigkeit auf. Preisseite und Preisanker liegen bei Leon (L17).');
r.table(['#', 'Wann', 'Aufgabe', 'Fertig, wenn'], [
  ['M2', 'sofort', 'LinkedIn-Info und Munich Startup auf die Definition; „Vorprüfung“ und „rechtssicher“ auf LinkedIn ersetzen; Gründerprofile verknüpfen; FinTech und InsurTech entfernen lassen', 'beide Profile tragen die Definition wörtlich'],
  ['M3', 'sofort', 'Text für /ueber-uns mit Faktenblock', 'Text liegt bei Leon'],
  ['M4', 'sofort', 'Vorher-Nachher-Artikel um BGH I ZR 170/24 korrigieren, mit Link zur Quelle', 'Kurzantwort und Text nennen Unterspritzungen'],
  ['M5', '30 Tage', 'Vorfilter-Artikel neu schreiben, etwa „Was eine Prüfung für Gesundheitswerbung leistet und wo die Kanzlei übernimmt“', 'kein „Vorfilter“, kein „KEINE PRÜFUNG“'],
  ['M6', '30 Tage', 'Immunsystem-Artikel zusammenführen unter /blog/nem-immunsystem-claims-erlaubt', 'ein Artikel mit Wortlaut der zugelassenen Claims'],
  ['M7', '30 Tage', 'Crunchbase einmal anlegen; OMR-Basis-Profil anlegen und beide Kunden um Bewertung bitten; kein G2', 'zwei Profile mit Definition; zwei Bewertungen angefragt'],
  ['M8', '30 Tage', 'neue Artikel 1 bis 4 nach dem Muster', 'je Artikel Schritte 1 bis 3 erledigt'],
  ['M9', '30 Tage', 'Idee: sechs Partner-Agenturen ansprechen', 'mindestens zwei Zusagen für Gastbeitrag oder Erwähnung'],
  ['M11', 'laufend', 'jeder Artikel ein LinkedIn-Beitrag', 'Beitrag binnen 14 Tagen nach Veröffentlichung'],
  ['M12', '30 Tage', 'Startseiten-Texte: Ersatz für „Für jede Regel ein Spezialist“ und „12 Paragrafen“; Zeile unter der H1; Titles und Meta-Descriptions', 'Text liegt bei Leon'],
  ['M10', '90 Tage', 'Text für die Vergleichsseite nach Kategorien', 'gegengelesen (M14)'],
  ['M13', '90 Tage', 'Wiederholungsmessung: 20 Suchbegriffe, 15 Fragen je dreimal, Search Console, Bing', 'Vergleich mit den Ausgangswerten liegt vor'],
  ['M14', '90 Tage', 'anwaltlich gegenlesen lassen: Abmahnschutz-Formulierungen, Artikel 2, Vergleichsseite', 'Befunde eingearbeitet'],
], [6, 10, 50, 34], { size: 15 });

r.h2('4.2 Aufgaben Leon: Technik');
r.p('Die vollständige Liste mit Code, Textvorschlägen und „Fertig, wenn“ steht im Blatt „Was Leon tun soll“. Kurzfassung:');
r.table(['Wann', 'Aufgaben', 'Aufwand'], [
  ['sofort', 'L17 Preisseite bereinigen · L1 robots.txt (nach E1 und E5) · L2 noindex /login, /register · L3 Titles, Meta-Description, H1 · L4 Blog-Fußzeile (nach E3) · L5 llms.txt · L6 Sitemap · L7 Search Console, Bing, IndexNow', 'etwa 5 Stunden plus Preisseite'],
  ['30 Tage', 'L8 Firmen-Markup · L9 Suchbegriff unter der H1 · L10 /ueber-uns · L11 Blog-Vorlage (Stand, Autor, Aktenzeichen, Links) · L12 Weiterleitungen · L13 Messung in Plausible? · L14 Preis-Markup (nach E2)', 'etwa 4 Tage'],
  ['90 Tage', 'L15 Produktseiten je Tür · L16 Vergleichsseite', 'etwa 5 Tage'],
], [12, 70, 18]);

r.h2('4.3 Fünf Entscheidungen für diese Woche');
r.table(['#', 'Frage', 'Fakten', 'Empfehlung'], [
  ['E1', 'Google-Extended freigeben?', 'Der Token steuert, ob Inhalte für Training künftiger Gemini-Modelle und für Grounding in Gemini Apps und Vertex AI genutzt werden; auf Google-Suche und Ranking hat er keinen Einfluss. Gemini nennt PageCompliance in 0 von 15 Antworten.', 'Freigeben. Notwendig, aber nicht ausreichend: Gemini braucht zusätzlich Rankings.'],
  ['E2', 'Welches Preismodell zeigt die Website?', 'Live: Starter 99 €, Professional 349 €, Enterprise 699 €, Gratis 2.400 Wörter ohne Konto. Entschieden laut Pricing: Gratis, Agentur 99 €, Team 249 €. Arbeitswerte: Praxis 29 €, Hersteller 99 €, Einzel-Audit 149 €.', 'Leon entscheidet. Preise v2 mit dem Upgrade live. Bis dahin unbelegte Zahlen raus (L17), kein Preis-Markup, keine Preise in neuen Artikeln. Markup zuerst für Gratis, Agentur, Team.'],
  ['E3', 'Zeile „Er stellt keine Rechtsberatung dar“ unter allen 14 Artikeln?', 'Leitfaden 2.4: „Keine Rechtsberatung“ nur in den AGB, nicht im Marketing. Die Zeile steht heute in der Blog-Vorlage.', '„Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“'],
  ['E4', 'Name der Wächter-Seite und Marke?', 'smugo nutzt „HWG-Wächter“. TMview: keine Marke „HWG-Wächter“, rund 350 Einträge „Wächter“, aktive Marken in den Klassen 9 und 42; „PageCompliance“ ohne Treffer.', 'Seite „Laufende Website-Prüfung“; App-Name „Wächter“; Monatsbericht „Prüfbericht“. „Wächter“ und eine eigene Anmeldung von „PageCompliance“ vor dem Start prüfen lassen.'],
  ['E5', 'Trainingssperre für GPTBot, ClaudeBot, CCBot und Applebot-Extended aufheben?', 'GPTBot, ClaudeBot, CCBot und Applebot-Extended sammeln nur Trainingsdaten; die Zugänge für Antworten (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) sind getrennt und schon offen. Common Crawl (CCBot) wird breit für Trainingsdatensätze weiterverwendet. Einmal gesammelte Daten bleiben in den Archiven.', 'Freigeben für die öffentlichen Seiten; /api/, /admin/, /dashboard/ bleiben gesperrt. Der Engpass ist Bekanntheit, nicht Schutz: Öffentlich stehen Marketingtexte, die sich verbreiten sollen. Der Effekt ist nicht belegt und frühestens mit der nächsten Modellgeneration sichtbar.'],
], [6, 18, 40, 36], { size: 15 });

r.h2('4.4 Offene Punkte');
r.table(['Offener Punkt', 'Benötigte Information', 'Wer', 'Wofür'], [
  ['Preise für Praxis und Hersteller', 'Gespräche mit mindestens drei Praxen und tigovit nach dem Leitfaden', 'Leon', 'Preis-Markup, Produktseiten, Artikel 2'],
  ['Quelle „Anwalt ab 399 €“', 'öffentliche Fundstelle aus Recherche O2 mit Screenshot ablegen', 'Leon', 'Preisanker auf der Preisseite'],
  ['Heilpraktiker-Kernsatz', '„liest ab jetzt jemand mit“ klingt nach einem Menschen, der mitliest; Alternative „liest ab jetzt PageCompliance mit“ prüfen', 'Massi', 'Seite /heilberufe, Kampagne'],
  ['Abmahnschutz-Formulierungen', 'anwaltliche Durchsicht der Muster', 'Massi mit Anwältin (M14)', 'Artikel, Anzeigen'],
  ['Marken „Wächter“ und „PageCompliance“', 'Prüfung durch eine Markenrechtlerin', 'Leon', 'App-Name, Start'],
  ['Messwerkzeug', 'Plausible beibehalten oder ein anderes Werkzeug für L13?', 'Leon', 'Messung der Anmeldungen'],
  ['Ton für approbierte Psychotherapeuten', 'getrennt von Heilpraktikern festlegen', 'Massi', 'Artikel Heilpraktiker für Psychotherapie'],
], [24, 38, 18, 20], { size: 15 });

r.h2('4.5 Die Wirkung wird nach vier Wochen gemessen');
r.p('Fünf Kennzahlen zeigen, ob der Plan wirkt. Die Zielwerte nach 90 Tagen sind begründete Setzungen.[^kennz] Gemessen wird mit denselben 20 Suchbegriffen und 15 Fragen wie im Audit, jede Frage dreimal je System.');
r.table(['Kennzahl', 'Ausgang 26.10.', 'Ziel nach 90 Tagen', 'Woraus das Ziel folgt'], [
  ['Gemini beantwortet „Was ist PageCompliance?“ richtig', 'nein: Gattungsbegriff, FinTech', 'ja, mit Heilmittelwerbegesetz', 'E1, Definition, Munich Startup, Über uns'],
  ['Nennungen im Fragen-Panel', 'ChatGPT 3, Perplexity 4, Gemini 0 von 15', 'in jedem System mehr als heute, Gemini mindestens 1', 'neue Artikel auf die Fragen 3, 6, 8, 9'],
  ['Fremde Quellen über PageCompliance', '2', 'mindestens 5', 'Crunchbase, OMR und mindestens eine Fundstelle bei einem Verband, einer Fachschule oder einer Agentur'],
  ['Neue Artikel 1 bis 4 in den Top 10 ihrer Frage', '–', 'mindestens 2 von 4', 'Muster wie bei den beiden Platz-1-Artikeln'],
  ['Anmeldungen außerhalb des Netzwerks', 'rund 1,6 im Monat', 'mit Herkunft messen; Richtwert aus dem Pricing: rund 12 im Monat', 'Pricing 2.1; Plausible und Anmeldefeld (L13)'],
], [26, 20, 24, 30], { size: 15 });
r.p('Nach der Messung bekommt jede Seite eine von vier Entscheidungen: halten, verlinken, umschreiben, aufgeben. Ein Durchlauf ist ein Schnappschuss; erst drei Messungen zeigen einen Trend.');

r.h2('4.6 Die ersten vier Wochen');
r.table(['Schritt', 'Abgeschlossen, wenn'], [
  ['1 E1 bis E5 entscheiden', 'Leon und Massi haben alle fünf entschieden und notiert'],
  ['2 Sofort-Paket bauen (L1 bis L7) und Preisseite bereinigen (L17)', 'robots.txt, noindex, Titles und llms.txt sind live; keine unbelegte Zahl steht mehr auf der Website'],
  ['3 Eine Stimme herstellen (M2, M3, M12, L8 bis L10)', 'Website, LinkedIn und Munich Startup tragen die Definition wörtlich; /ueber-uns hat den Faktenblock'],
  ['4 Bestand reparieren (M4, M5, M6, L11, L12)', 'Vorher-Nachher korrigiert; Vorfilter neu; Immunsystem zusammengeführt; Vorlage mit Stand, Autor, Links'],
  ['5 Erste neue Artikel und Stimmen (M7 bis M9, M11)', 'Artikel 1 und 2 sind live, je mit LinkedIn-Beitrag; Crunchbase und OMR angelegt; falls M9 umgesetzt wird, sechs Agenturen angefragt'],
  ['6 Erste Messung (M13 verkürzt)', 'Fragen-Panel und Search Console zeigen den Stand vier Wochen nach dem Sofort-Paket'],
], [44, 56]);

// ───────────── Anhänge
r.h1('Anhang A: Woraus jede Maßnahme folgt', { pageBreak: true });
r.table(['Maßnahme', 'Inhalt', 'Beruht auf Befund', 'Quelle'], [
  ['L1, E1', 'Google-Extended und DuckAssistBot freigeben', 'Gemini ausgesperrt (Audit 2.2)', 'Google- und DuckDuckGo-Dokumentation'],
  ['L2, L3', 'noindex, Titles, H1', 'Technik-Lücken (Audit 2.1)', 'Roh-HTML 27.10.; Google noindex'],
  ['L17, M12, L5, E2', 'Preisseite, Startseite, llms.txt', 'alte Geschichte (Audit 2.5)', 'Leitfaden 2.1, 4, 7; Pricing 3.1'],
  ['M2, M3, L8, L10', 'Definition, Über uns, Firmen-Markup', 'Gemini und Munich Startup: FinTech (Audit 2.2, 2.5)', 'Munich Startup; Leitfaden 1'],
  ['M4', 'Vorher-Nachher korrigieren', 'Inhaltsfehler (Audit 2.5)', 'BGH I ZR 170/24'],
  ['M5, M6, L12', 'Vorfilter neu, Immunsystem zusammenführen', 'Widerspruch zum Claim; doppelte Seiten (Audit Anhang B)', 'Roh-HTML 27.10.'],
  ['M8, L11', 'neue Artikel im festen Format', 'Gewinn nur in dünn besetzten Fragen (Audit 2.4)', 'Weitere Fragen, Autocomplete'],
  ['L15', 'Produktseiten je Tür', '0 von 8 Werkzeug-Suchen (Audit 2.4); vier Türen', 'Marketing-Schlüssel 2'],
  ['M7, M9, M11', 'Verzeichnisse, Partner, LinkedIn', 'nur zwei fremde Stimmen (Audit 2.6)', 'Google KI-Leitfaden; OMR'],
  ['M10, L16', 'Vergleichsseite nach Kategorien', 'Kategorie frei (Audit 2.7)', '§ 6 UWG; Leitfaden 5.3'],
  ['E3, L4', 'Hinweiszeile im Blog', 'Widerspruch zum Leitfaden', 'Leitfaden 2.4'],
  ['E4', 'Laufende Website-Prüfung', 'smugo „HWG-Wächter“; Wächter-Marken', 'TMview 27.10.'],
  ['E5, L1', 'Trainingscrawler freigeben', 'kaum ein Modell kennt die Marke (Audit 2.3, 2.6)', 'Anthropic Help Center; OpenAI-Dokumentation; Common Crawl'],
  ['L13, M13', 'Messung', 'ein Durchlauf ist ein Schnappschuss (Audit 3.3)', 'Plausible, Search Console, Bing'],
], [16, 28, 32, 24], { size: 15 });

r.h1('Anhang B: Wo sich die Grundlagen widersprechen und was gilt');
r.p('Marketing-Schlüssel (19.10.), Strategiebericht Pricing (01.10.) und Sprach-Leitfaden (22.10.) passen fast überall zusammen. An sieben Stellen weichen sie voneinander ab. Für die Außendarstellung gilt, was rechts steht:');
r.table(['Thema', 'Abweichung', 'Was gilt'], [
  ['Rechnung für Agenturen', 'Schlüssel: 15 € Weiterberechnung, trägt sich ab dem 7. Text. Leitfaden: 15 € unbelegt, 12 € gemessen. Pricing: 12 € aus einem Gespräch mit einer kleinen Agentur (n = 1).', '15 € ist das Rechenbeispiel für kleine und mittlere Agenturen (99 € ÷ 15 € = 6,6, also ab dem 7. Text), immer als Beispiel formuliert. 12 € ist ein einzelner Datenpunkt. Was eine Agentur weiterberechnet, entscheidet sie selbst.'],
  ['Vertragsstrafe 5.500 €', 'Schlüssel und Pricing 2.2 nennen sie; Leitfaden: nur mit Quelle am konkreten Fall', 'nicht in Website, Blog oder Anzeigen ohne Quelle am Fall'],
  ['„Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“', 'Schlüssel: „zu belegen“; Leitfaden: unbelegt', 'raus; „ab 399 €“ mit abgelegter Quelle oder 400 € (RechtVital)'],
  ['Abmahnschutz', 'Schlüssel: „nie so“; Leitfaden: als Thema und Steigerung erlaubt, nie als Versprechen', 'Leitfaden, Regel 2.3'],
  ['„Wir stellen alle Fragen“', 'Schlüssel (Einwand ChatGPT); Leitfaden: Subjekt ist die Software', '„PageCompliance stellt alle Fragen“'],
  ['Praxis-Preis', 'Pricing: 19 oder 29 €; Schlüssel: 29 €', 'Arbeitswert 29 €, Entscheidung nach Leons Gesprächen'],
  ['Kernbotschaften je Tür', 'Pricing 3.4: Entwürfe vom 01.10.; Schlüssel: neue Kernsätze vom 19.10.', 'Kernsätze aus dem Schlüssel'],
], [22, 44, 34], { size: 15 });

r.h1('Anhang C: Sprache für Blog und Website');
r.p('Blog und Website laufen in **Sie**, ruhig, direkt, auf Augenhöhe. Grundlage ist der Sprach-Leitfaden v1.0. Sechs Regeln greifen im Blog am häufigsten:');
r.numbered([
  '**Risiko vorne, Ruhe am Ende.** Der Einstieg darf zuspitzen; das Ende ist der bessere Satz und „kostenlos prüfen“.',
  '**Die Software prüft, der Mensch entscheidet.** Nie „Wir prüfen Ihre Texte“, auch nicht „prüfen lassen“ im Aufruf.',
  '**„Prüfung“, nie „Vorprüfung“ oder „Vorfilter“.** KI nur nebenbei, nie in Title oder H1.',
  '**Abmahnschutz nur als Thema**, nie als Versprechen.',
  '**Den Anwalt einordnen, nicht schlechtmachen:** „Zum Anwalt geht nur, was rot bleibt.“ Kein Preis- oder Tempovergleich mit Anwälten ohne Quelle.',
  '**Zahlen nur aus der Belegt-Liste** oder mit eigener Quelle, Datum und Screenshot. Rechenbeispiele wie „15 € je Text“ immer als Beispiel formulieren.',
]);
r.table(['So sagen', 'Nie so'], [
  ['Prüfung, prüfen', 'Vorprüfung, Vorfilter'],
  ['Bereit zur Freigabe; ohne Befund', 'unbedenklich, sauber, entschärft, durchgelaufen'],
  ['der bessere Satz; Befund', 'rechtssicher, abmahnsicher, garantiert'],
  ['Einheit; Paket (Gratis, Praxis, Hersteller, Agentur, Team, Enterprise)', 'Credits, Tokens, Kontingent; Starter, Professional; unbegrenzt prüfen'],
  ['In Ihrem Namen', 'White-Label'],
  ['Laufende Website-Prüfung (gegenüber Kunden der Agentur); Prüfbericht', 'Compliance-Monitoring, HWG-Wächter, rund um die Uhr geschützt'],
  ['Kundentexte; Selbst ändern', 'Mandanten-Texte; Änderung wünschen'],
  ['Ihr Kunde gibt frei', 'rechtliche Freigabe, anwaltlich geprüft, von uns freigegeben'],
  ['kostenlos prüfen', 'günstig, billig'],
], [50, 50]);

r.h1('Quellen');
r.table(['Kurzname', 'Inhalt', 'Ablage oder Link'], [
  ['GEO-Audit (Teil 1)', 'Befunde, Ausgangswerte, Korrekturen', 'Strategiebericht GEO, Teil 1, 28.10.2026'],
  ['Strategiebericht Pricing', 'Ziele, Reichweite, Pakete, Empfehlungsweg', 'Ausgabe 1, 01.10.2026'],
  ['Marketing-Schlüssel', 'Kern, Türen, Preise, Brücken, Fahrplan', 'Stand 19.10.2026'],
  ['Sprach-Leitfaden', 'Definition, Wörterbuch, belegte Zahlen, Grenzen', 'v1.0, 22.10.2026'],
  ['Google', 'Crawler und Google-Extended; KI-Suche; noindex; FAQPage; Software-App-Markup', 'developers.google.com/crawling · /search/docs/fundamentals/ai-optimization-guide · /search/docs/crawling-indexing/block-indexing · /search/docs/appearance/structured-data/faqpage · /software-app'],
  ['Bing', 'AI Performance, Public Preview seit 10.02.2026', 'blogs.bing.com/webmaster (Februar 2026)'],
  ['OpenAI, DuckDuckGo', 'Crawler; DuckAssistBot', 'developers.openai.com/api/docs/bots · duckduckgo.com/duckduckgo-help-pages/results/duckassistbot/'],
  ['Gesetze', '§§ 1, 3, 10, 11, 14, 15 HWG; § 15 StGB', 'gesetze-im-internet.de/heilmwerbg · /stgb/__15.html'],
  ['Rechtsprechung', 'BGH I ZR 170/24; OLG Köln 6 U 263/19', 'verbraucherzentrale.nrw (Urteil BGH) · iww.de/mk/quellenmaterial/id/218138'],
  ['Marktpreise', 'RechtVital Festpreise; Händlerbund Health Claims Check', 'recht-vital.de/werbung-pruefung-zum-festpreis · haendlerbund.de/de/ratgeber/recht/3881-heilmittelwerbegesetz'],
  ['Wettbewerb', 'smugo, Caidera, Dr. Kaske, AppCore, leema, eckada, dripback', 'Links im Audit, Quellen'],
  ['Verzeichnisse', 'Munich Startup; OMR Reviews AGB und Studie', 'munich-startup.de/startups/pagecompliance · omr.com/de/reviews/vendor/agb'],
  ['TMview', 'Markensuche DE und EU', 'tmdn.org/tmview'],
], [20, 38, 42], { size: 15 });

r.save(process.argv[2], { title: 'GEO-Maßnahmenplan für PageCompliance' });
