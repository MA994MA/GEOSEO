# PageCompliance – Ist-Zustand Online-Präsenz, SEO & KI-Sichtbarkeit (Stand 2026-10-23)

> **Methodik und harte Einschränkung (unbedingt lesen):** In dieser Recherche-Umgebung war **kein direkter Seitenabruf möglich**. `curl` auf pagecompliance.de/.com/.io/.app und page-compliance.de wurde vom Egress-Proxy mit HTTP 403 (Policy-Sperre) abgelehnt. `WebFetch` scheiterte bei **jeder** Domain an DNS (`getaddrinfo ENOTFOUND`), auch bei pagecompliance.de, munich-startup.de und en.wikipedia.org – es handelt sich also um eine Störung des Tools, nicht um einen Befund über die Website. Deshalb konnten **Title-Tags, Meta-Descriptions, H1/H2, JSON-LD, robots.txt, sitemap.xml, llms.txt, SSR oder reines JS-Rendering NICHT geprüft werden.** Alle Aussagen unten stammen aus WebSearch-Ergebnissen (Titel, URLs und von der Suchmaschine zitierte Textausschnitte). WebSearch ist laut Tool-Beschreibung „US-only“, die Ergebnisse geben also **nicht** das Google.de-Ranking für deutsche Nutzer wieder. Traffic, Domain Rating, Backlinks und Ranking-Positionen waren nicht messbar und werden hier nicht angegeben.

## 1. Offizielle Domain und Website (Technik und Inhalt)

### Takeaway
Die offizielle Domain ist **pagecompliance.de**. Im Suchindex taucht davon nur eine Unterseite auf: **/ueber-uns**. Die technische Onpage-Prüfung (Meta, Structured Data, robots, Sitemap, llms.txt, Rendering) konnte nicht durchgeführt werden, weil Seitenabrufe blockiert waren. Sie muss manuell nachgeholt werden.

### Cited Findings
- Die Domain pagecompliance.de ist im Index vorhanden. Gefunden wurde die Seite „Über uns“ unter https://pagecompliance.de/ueber-uns — [Über uns](https://pagecompliance.de/ueber-uns)
- Die Suchmaschine zitiert von der Website die Positionierung „Healthcare Website Compliance Checker für eine automatische Vorprüfung auf HWG- und EU-Compliance“ und die Prüfgrundlage „gegen über 2.500 EU Health Claims und das Heilmittelwerbegesetz“ — [Über uns](https://pagecompliance.de/ueber-uns)
- Die Seite nennt als Zielgruppe „Agenturen, Praxen und Hersteller“, die Risiken in der Gesundheitswerbung früh erkennen sollen. Zitiertes Prinzip: „Das KI-gestützte SaaS-Tool filtert vor, der Mensch entscheidet.“ — [Über uns](https://pagecompliance.de/ueber-uns)
- Laut Website ist das Tool keine reine Warnliste: Es soll Risiken sichtbar machen und konkrete Formulierungsvorschläge liefern — [Über uns](https://pagecompliance.de/ueber-uns)
- Die Über-uns-Seite stellt das Unternehmen als kleines Team aus zwei Gründern dar: Leon (CEO, Strategie, Produkt, technisches Fundament) und Massimiliano (Chief Commercial Officer, Wachstum und Partnerschaften) — [Über uns](https://pagecompliance.de/ueber-uns)
- Laut Suchzusammenfassung nennt die deutsche Website als Rechtsform eine UG (haftungsbeschränkt) — [Über uns](https://pagecompliance.de/ueber-uns) (nur Snippet, nicht im Impressum geprüft)
- Eine `site:pagecompliance.de`-Abfrage lieferte nur **eine** Seite der Domain (/ueber-uns). Alle übrigen Treffer stammten von fremden Seiten (Wikipedia, StepStone) — [Über uns](https://pagecompliance.de/ueber-uns)
- Eine Suche nach den Paketnamen (Gratis, Praxis, Agentur) zusammen mit PageCompliance lieferte **keine** Preisseite von PageCompliance. Es erschienen nur fremde Anbieter von Praxis-Websites, z. B. paceways.com und praxis-agentin.de — [Paceways](https://paceways.com/de/praxis-website/), [Praxis Agentin](https://praxis-agentin.de/)

### Inferences
- Startseite, Preisseite, Blog und FAQ waren im genutzten Index nicht auffindbar. Möglich ist, dass sie noch nicht indexiert sind, dass sie per JavaScript gerendert werden und dadurch schlecht crawlbar sind, oder dass das Such-Tool sie nur schwach abdeckt. Welche Ursache zutrifft, ließ sich nicht klären.
- Die Formulierung „Healthcare Website Compliance Checker“ ist wahrscheinlich ein Title-Tag oder eine Meta-Description. Die Suchmaschine gibt sie nämlich gleichlautend als Seitenbeschreibung wieder. Sie ist englisch-deutsch gemischt und weicht vom Markenclaim im Brand Guide ab („Die Plattform für Gesundheitswerbung“). Außerdem enthält sie nicht die Begriffe, nach denen Agenturen auf Deutsch suchen dürften, etwa „HWG-Prüfung“, „Heilmittelwerbegesetz prüfen“ oder „Health Claims prüfen“.
- Die Angabe „über 2.500 EU Health Claims“ birgt ein Glaubwürdigkeitsrisiko. Das Health-Claims-Tool von Bohillebrand nennt **240 zugelassene Claims für 82 Nährstoffe** nach VO 432/2012 ([Bohillebrand Health-Claims-Checker](https://www.bohillebrand.de/en/lebensmittelrecht/health-claims-checker/)). Die Zahl 2.500 bezieht sich daher vermutlich auf das gesamte EU-Register einschließlich abgelehnter oder anhängiger Claims. Wird das auf der Website nicht erklärt, können Fachleute und LLMs die Zahl als Übertreibung lesen. Das sollte geprüft und präziser formuliert werden.
- Der Brand Guide nennt neben HWG und Health-Claims-Verordnung auch das UWG. In den indexierten Ausschnitten kommt das UWG nicht vor.

### Gaps
- Nicht prüfbar: Title, Meta-Description, H1/H2 je Seite, JSON-LD (Organization, SoftwareApplication, FAQPage, Offer), robots.txt, sitemap.xml, llms.txt, Canonicals, hreflang, Rendering (SSR oder CSR), Ladezeit, Impressum-Details. **Diese Checks sollten manuell mit `curl -A Googlebot https://pagecompliance.de/` sowie /robots.txt, /sitemap.xml und /llms.txt, mit der Google Search Console und dem Rich Results Test nachgeholt werden.**
- Nicht geklärt: ob es überhaupt Blog, Wissensbereich, Preisseite und FAQ als eigene URLs gibt.
- Nicht prüfbar: ob pagecompliance.com, .io oder .app registriert sind oder auf .de weiterleiten. Alle Abrufe wurden gesperrt, und eine WHOIS- oder DNS-Abfrage war nicht möglich.

## 2. Namenskollisionen („PageCompliance“ / „Page Compliance“)

### Takeaway
Es gibt **keine starke Namenskollision**. Bei der reinen Brand-Suche „PageCompliance“ (Anführungszeichen, US-Index) erscheint die Firma aber **gar nicht**. Stattdessen kommen generische Treffer zu „page“ plus „compliance“: Pagefreezer, Egnyte/Page, „Compliance page“-Funktionen. Für Suchmaschinen und LLMs ist der Name damit eher **generisch-mehrdeutig** als von einem bestimmten Konkurrenten belegt.

### Cited Findings
- Die Suche `"PageCompliance"` lieferte keinen Treffer zum Unternehmen. Die Ergebnisse waren u. a. eine Egnyte-Fallstudie zur Architekturfirma „Page“, eine „Compliance“-Seite in Astras Security-Tool, die Pagefreezer-Integration bei Yext und die Browser-Erweiterung „Compliance Deputy“ — [Egnyte/Page](https://www.egnyte.com/events/summit/2024/globalsummit/on-demand/how-page-uses-egnyte-to-protect-data-and-deliver-projects-on-time), [Astra](https://help.getastra.com/en/article/what-is-the-compliance-page-1felcyv), [Yext/Pagefreezer](https://www.yext.com/integrations/pagefreezer), [Compliance Deputy](https://chrome.google.com/webstore/detail/compliance-deputy-v6/bidggighgeapfnoagdpjjniolldibdfa/support)
- Die Suche `"Page Compliance" company` fand ebenfalls keine Firma dieses Namens. Am nächsten kam Pagefreezer (Kanada, Archivierung von Web- und Social-Daten), daneben erschienen Visual Compliance, LegitScript und ComplyRight — [PageFreezer (Wikipedia)](https://en.wikipedia.org/wiki/PageFreezer), [Visual Compliance](https://en.wikipedia.org/wiki/Visual_Compliance), [LegitScript](https://en.wikipedia.org/wiki/LegitScript)
- RocketReach führt ein Profil „Page Compliance Information“. Der Inhalt war nicht abrufbar, die Zuordnung ist unklar — [RocketReach](https://rocketreach.co/page-compliance-profile_b438f730c19461c6)
- Eine Suchzusammenfassung nannte pagecompliance.com.br als brasilianische E-Learning-Plattform für Compliance-Schulungen. Eine gezielte Suche fand **keine** Seite dieser Domain. Die Kollision ist damit **nicht bestätigt** — (Suchzusammenfassung zu „pagecompliance.de“, ohne eigenständige Quelle; Gegencheck ohne Treffer)
- Verwechslungsrisiko bei Personennamen: Bei der Gründersuche erschienen „Willy Ehmann“ (Schallauge GmbH, LinkedIn) und „Leon Ehmann“ (ResearchGate bzw. instantlead.io). Beide sind andere Personen und nicht die PageCompliance-Gründer — [LinkedIn Willy Ehmann](https://www.linkedin.com/in/willy-ehmann-0aa7111b8/), [ResearchGate Leon Ehmann](https://www.researchgate.net/profile/Leon-Ehmann), [instantlead.io](https://www.instantlead.io/)

### Inferences
- „PageCompliance“ besteht aus zwei generischen englischen Wörtern. Ohne Kontext wie HWG, Gesundheitswerbung oder München können Suchmaschinen und LLMs die Marke nur schwer als eigene Entität erkennen. Hilfreich wären konsistente Entity-Signale: Organization-Schema mit `sameAs`, gleiche Schreibweise überall, LinkedIn-Firmenseite, Northdata- und Handelsregistereintrag, Wikidata erst bei ausreichender Notability.
- Die Gründernamen „Leon Schwahn“ und „Massimiliano Ehmann“ sind selten. Bei Ehmann kommt es jedoch zu Verwechslungen mit anderen Personen dieses Nachnamens. Ein klares Personenprofil (LinkedIn, Autorenseite auf der Website) würde die Zuordnung stärken.

### Gaps
- Markenrechtliche Kollisionen (DPMA/EUIPO) wurden nicht geprüft.
- Inhaber und Inhalt von pagecompliance.com, .io und .com.br sind nicht verifiziert.

## 3. Indexierung und Brand-Ranking

### Takeaway
Die Marke ist **nur über den Domainnamen oder über Kontext** auffindbar, etwa „pagecompliance.de“ oder „PageCompliance HWG Prüfung“. Dann erscheinen der Munich-Startup-Eintrag und /ueber-uns ganz oben. Bei der reinen Brand-Suche „PageCompliance“ rankt die Marke im genutzten (US-)Index **nicht**. Indexiert ist faktisch nur eine Seite.

### Cited Findings
- Die Suche „PageCompliance HWG Prüfung“ brachte auf Platz 1 den Munich-Startup-Eintrag und auf Platz 2 pagecompliance.de/ueber-uns. Danach folgten Wettbewerber bzw. Ratgeber: smugo HWG-Wächter, BVMed, Pharma Text Checker (hub-strategy.com), caidera.ai, huchel-medienagentur.de — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/), [Über uns](https://pagecompliance.de/ueber-uns), [smugo HWG-Wächter](https://smugo.de/hwg-waechter/), [Pharma Text Checker](https://hub-strategy.com/pharma-text-checker-hwg.html)
- Die Suche „pagecompliance.de“ brachte auf Platz 1 Munich Startup und auf Platz 4 /ueber-uns. Dazwischen standen weitere Munich-Startup-Seiten, die nichts mit PageCompliance zu tun haben — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/)
- Die Suche „PageCompliance“ in Anführungszeichen ergab keinen Treffer zur Firma (siehe Abschnitt 2) — [Egnyte/Page](https://www.egnyte.com/events/summit/2024/globalsummit/on-demand/how-page-uses-egnyte-to-protect-data-and-deliver-projects-on-time)
- Bei generischen Suchen wie „Tool zur HWG-Prüfung KI Werbetexte Heilmittelwerbegesetz Software“, „HWG Checker online Health Claims Prüfung Agentur Tool 2026“ und „Healthcare Website Compliance Checker“ kam PageCompliance **nicht vor** — [Händlerbund](https://www.haendlerbund.de/de/ratgeber/recht/3881-heilmittelwerbegesetz), [WordPress HWG Check](https://wordpress.org/plugins/hwg-check/), [Siteimprove](https://www.siteimprove.com/industries/healthcare/)

### Inferences
- Wer den Firmennamen bereits kennt und Kontext ergänzt, findet PageCompliance über Munich Startup und /ueber-uns. Für Non-Brand-Suchen nach dem Problem („HWG prüfen“, „Health Claims Check“) ist die Marke derzeit unsichtbar.
- Dass Munich Startup bei Brand-Suchen vor der eigenen Domain steht, spricht für geringe Autorität und eine dünne Indexierung von pagecompliance.de.

### Gaps
- Echte Google.de-Positionen, Search-Console-Daten (Impressionen, indexierte Seiten) und Traffic sind nicht verfügbar. Die Search Console ist die maßgebliche Quelle und sollte ausgewertet werden.
- Bing, das ChatGPT-Suche und Copilot speist, wurde nicht separat geprüft.

## 4. Präsenz auf Plattformen, Verzeichnissen, Registern und in der Presse

### Takeaway
Der **einzige belegte externe Eintrag ist Munich Startup** (Gründung 2026, Seed, B2B, Grünwald bei München, Gründer Leon Schwahn als CEO und Massimiliano Ehmann als CCO). Nicht gefunden wurden: LinkedIn-Firmenseite, LinkedIn-Profile der Gründer, Instagram, OMR Reviews, Capterra, G2, Product Hunt, Crunchbase, Northdata/Handelsregister und Presseartikel.

### Cited Findings
- Munich Startup beschreibt PageCompliance so: Das Münchner Startup „entwickelt eine KI-gestützte SaaS-Lösung zur Prüfung von Werbeinhalten im Gesundheitsmarkt“, die KI „markiert kritische Formulierungen und schlägt Alternativen vor“. Gründungsjahr 2026, Phase Seed, Modell B2B, Sitz laut Suchzusammenfassung Grünwald bei München — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/)
- Munich Startup nennt die Gründer: „Leon Schwahn (CEO) – Strategie, Produkt, Engineering. Massimiliano Ehmann (CCO) – Sales & Marketing.“ — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/)
- Die LinkedIn-Suche nach Firma und Gründern fand **keine** Profile von Leon Schwahn oder Massimiliano Ehmann und keine Firmenseite. Laut Suchzusammenfassung erwähnt das Profil von Willy Ehmann PageCompliance in einem Beitrag; eine Gegensuche konnte das nicht bestätigen — [LinkedIn Willy Ehmann](https://www.linkedin.com/in/willy-ehmann-0aa7111b8/)
- Die Suche nach `linkedin.com/company pagecompliance` brachte keinen Treffer, nur LinkedIn-Hilfeseiten und Compliance.ai — [Compliance.ai LinkedIn](https://www.linkedin.com/company/compliance.ai)
- Northdata und Handelsregister: Die Suche fand keinen Eintrag zu PageCompliance UG in Grünwald. Gefunden wurde nur eine andere UG aus Grünwald (Face.Identity UG) — [Northdata Face.Identity UG](https://www.northdata.de/?id=5451224522686464)
- Instagram, Product Hunt, OMR Reviews und Capterra: keine Treffer für PageCompliance — [Capterra Compliance Software](https://www.capterra.com/compliance-software/)
- Zu Finanzierung, Kunden oder Traktion gab es in den Suchergebnissen keine Angaben — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/)

### Inferences
- Das Fehlen auf LinkedIn ist für einen B2B-Anbieter, der vor allem an Agenturen verkauft, die größte Lücke in der Off-Page-Präsenz. Es kann auch an der Indexierung liegen, denn LinkedIn-Seiten werden oft nur verzögert oder unvollständig indexiert. Deshalb sollte es direkt auf LinkedIn geprüft werden.
- Ein fehlender Northdata-Eintrag kann bedeuten, dass die UG noch nicht eingetragen ist, unter anderem Namen firmiert (z. B. eine Holding oder ein anderer Firmenname) oder dass Northdata ihn noch nicht erfasst hat. Ein Register-/Northdata-Eintrag wäre ein starkes Entity-Signal für LLMs.

### Gaps
- Instagram, Crunchbase, G2, Product Hunt und OMR Reviews konnten nicht direkt aufgerufen werden. Die Aussage „nicht vorhanden“ beruht nur auf fehlenden Suchtreffern.
- Handelsregisternummer, Amtsgericht und Eintragungsdatum sind nicht verifiziert. Direkte Abfrage über handelsregister.de (Amtsgericht München) empfohlen.
- Gesucht wurde in Fachmedien nur indirekt über Brand-Suchen. Es wurde kein Pressebericht gefunden (Fachpresse wie kma, Apotheke Adhoc, Lebensmittelpraxis, W&V oder t3n wurde nicht einzeln durchsucht).

## 5. KI-Antworten (GEO): Was LLMs zu PageCompliance und „Tool zur HWG-Prüfung“ finden würden

### Takeaway
ChatGPT, Perplexity und Gemini konnten nicht direkt abgefragt werden. Ein LLM mit Websuche fände zu PageCompliance derzeit **im Wesentlichen zwei Quellen**: Munich Startup und /ueber-uns. Bei der generischen Frage nach einem „Tool zur HWG-Prüfung“ würde es **andere Anbieter** nennen: smugo HWG-Wächter, das WordPress-Plugin „HWG Check“, Pharma Text Checker, SmileGPT, MediCheck (Dr. Kaske), Händlerbund Health Claims Check, caidera.ai. **PageCompliance taucht in diesen Quellen nicht auf.**

### Cited Findings
- Die Suchmaschine fasst die Lage selbst so zusammen: „Die Suche liefert vor allem die Selbstdarstellung von PageCompliance; unabhängige Berichte oder Testergebnisse habe ich nicht gefunden.“ Das entspricht dem Bild, das ein LLM mit Websuche bekäme — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/), [Über uns](https://pagecompliance.de/ueber-uns)
- Wettbewerber und Alternativen, die bei generischen HWG-Tool-Suchen erscheinen:
  - **smugo HWG-Wächter**: prüft Websites nach HWG und Health Claims, schreibt Texte neu, kostenloser Erst-Check, Dienstleistung statt Self-Service — [smugo](https://smugo.de/hwg-waechter/)
  - **HWG Check (WordPress-Plugin)**: scannt Websites auf riskante Health Claims, Modi für DE, AT, CH, EU, US und IL, PDF-Audit-Report, geplante Scans — [WordPress.org](https://wordpress.org/plugins/hwg-check/)
  - **Pharma Text Checker** (hub-strategy): Vorprüfung mit Ampelbewertung und Alternativvorschlägen, ausdrücklich „keine Rechtsberatung“ — [hub-strategy.com](https://hub-strategy.com/pharma-text-checker-hwg.html)
  - **SmileGPT / smileai.de**: pharmaspezifische KI-Content-Erstellung mit HWG-Prüfung — [smileai.de](https://www.smileai.de/blog/ki-gesteuerte-inhalts-generierung-in-der-pharmaindustrie)
  - **MediCheck (Dr. Kaske)**: KI-Tool für HWG- und Pharmakovigilanz-Monitoring — [drkaske.de](https://drkaske.de/medicheck-compliance/)
  - **Händlerbund Health Claims Check**: prüft 5 Seiten mit Formulierungsvorschlägen, 49,90 € netto einmalig — [Händlerbund](https://www.haendlerbund.de/de/ratgeber/recht/3881-heilmittelwerbegesetz)
  - **Bohillebrand Health-Claims-Checker**: kostenlose Datenbank, 240 zugelassene Claims für 82 Nährstoffe, nur Lebensmittel — [Bohillebrand](https://www.bohillebrand.de/en/lebensmittelrecht/health-claims-checker/)
  - **caidera.ai**: Blogartikel „Heilmittelwerbegesetz: Einfach erklärt“ und „HWG Compliance“, ein Content-Wettbewerber mit Ratgeber-Inhalten — [caidera.ai](https://www.caidera.ai/de/blog/heilmittelwerbegesetz), [caidera.ai Compliance](https://www.caidera.ai/de/blog/heilmittelwerbegesetz-compliance)
- Ratgeberseiten von Agenturen ranken für das Thema HWG, z. B. huchel-medienagentur.de („HWG & Website: Was Ärzte sagen dürfen“) und gptagency.io („Heilmittelwerbegesetz und KI-Marketing“) — [Huchel](https://huchel-medienagentur.de/wissen/heilmittelwerbegesetz-website), [gptagency.io](https://gptagency.io/wissen/beitraege/heilmittelwerbegesetz-ki-marketing-aerzte)
- Autoritative Rechtsquellen, die LLMs zum HWG bevorzugt zitieren dürften: BVMed, Händlerbund, omsels.info — [BVMed](https://www.bvmed.de/themen/recht/hwg/hwg-was-ist-erlaubt), [omsels.info](https://www.omsels.info/die-verbote-oder-was-darf-ich-nicht/2-heilmittelwerbegesetz/dzuwendungen-7-hwg)

### Inferences
- Fragt ein Nutzer ein LLM nach „PageCompliance“, ist die Antwort heute wahrscheinlich dünn und stützt sich nur auf Munich Startup und die eigene Website. Möglich ist auch, dass das Modell die Marke gar nicht kennt, denn die Gründung 2026 liegt nach dem Trainingsstand vieler Modelle, oder dass es sie mit generischen „page compliance“-Begriffen verwechselt.
- Bei „Welches Tool prüft Werbetexte auf HWG?“ würde PageCompliance derzeit nicht genannt. Die Wettbewerber haben indexierte, themenspezifische Landingpages oder Blogartikel mit klaren Begriffen wie „HWG-Wächter“, „HWG Check“ oder „Pharma Text Checker HWG“.
- Die Ratgeber-Themen, die LLMs zitieren („Was ist erlaubt?“, „HWG einfach erklärt“, „§ 7 HWG Zuwendungen“), sind von BVMed, Händlerbund, Agenturen und caidera belegt. Für PageCompliance liegt hier die Content-Chance (siehe Abschnitt 6).

### Gaps
- Es gab keine direkte Abfrage von ChatGPT, Perplexity, Gemini, Copilot oder Google AI Overviews. Empfehlung: ein manuelles Prompt-Panel, z. B. 20 Prompts in DE, jeweils in ChatGPT-Suche, Perplexity, Gemini und Google AI Mode, mit dokumentierten Screenshots als Baseline.
- Unbekannt ist, ob die Website KI-Crawler (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) per robots.txt zulässt oder blockiert, da robots.txt nicht abrufbar war.

## 6. Konkrete Schwächen und Quick Wins

### Takeaway
Die größten belegbaren Schwächen sind: **eine einzige indexierte Seite**, **keine Sichtbarkeit für die reine Marke und für Non-Brand-Suchen**, **keine Drittquellen außer Munich Startup**, **keine auffindbare LinkedIn- oder Registerpräsenz** und eine **Positionierungsformel im Snippet, die nicht zum Brand Guide passt**. Die Quick Wins liegen in Indexierung, Entity-Signalen und Listings.

### Cited Findings
- Nur /ueber-uns ist über `site:` auffindbar — [Über uns](https://pagecompliance.de/ueber-uns)
- Das Snippet der Website lautet „Healthcare Website Compliance Checker“, der Brand Guide sagt „Plattform für Gesundheitswerbung“ — [Über uns](https://pagecompliance.de/ueber-uns)
- Bei den Brand-Suchen rankt Munich Startup vor der eigenen Domain — [Munich Startup](https://www.munich-startup.de/startups/pagecompliance/)
- Die Wettbewerber nutzen Produktnamen mit dem Keyword darin („HWG-Wächter“, „HWG Check“, „Pharma Text Checker HWG“) — [smugo](https://smugo.de/hwg-waechter/), [WordPress HWG Check](https://wordpress.org/plugins/hwg-check/), [hub-strategy](https://hub-strategy.com/pharma-text-checker-hwg.html)
- Die Zahl „2.500 EU Health Claims“ steht neben 240 zugelassenen Claims laut Bohillebrand — [Über uns](https://pagecompliance.de/ueber-uns), [Bohillebrand](https://www.bohillebrand.de/en/lebensmittelrecht/health-claims-checker/)

### Inferences (Quick Wins, priorisiert)
1. **Technik-Audit nachholen** (in dieser Recherche nicht möglich): `curl` auf Startseite, /robots.txt, /sitemap.xml und /llms.txt. Wenn das rohe HTML nur ein JS-Shell ohne Text ist, SSR oder Prerendering einführen. Prüfen, ob KI-Crawler zugelassen sind.
2. **Google Search Console und Bing Webmaster Tools** einrichten bzw. prüfen, Sitemap einreichen, Indexierung von Startseite, Preisen, FAQ und Blog anstoßen. Bing ist wichtig für ChatGPT-Suche und Copilot.
3. **Title und Meta auf Deutsch und auf die Suchbegriffe ausrichten**, z. B. „PageCompliance – HWG-Prüfung & Health-Claims-Check für Gesundheitswerbung“. Den Brand-Claim „Plattform für Gesundheitswerbung“ übernehmen und HWG, HCVO und UWG ausdrücklich nennen.
4. **Structured Data**: `Organization` (Name, Logo, Gründer, Sitz Grünwald, `sameAs` zu LinkedIn und Munich Startup), `SoftwareApplication` mit `Offer` je Paket (Gratis bis Enterprise), `FAQPage`.
5. **llms.txt** mit kurzer Faktenbeschreibung: was PageCompliance ist, für wen, welche Pakete, was das Tool nicht ist (keine Rechtsberatung).
6. **LinkedIn-Firmenseite und Gründerprofile** anlegen oder optimieren, mit konsistentem Wording und Verlinkung von der Website.
7. **Listings mit Backlink und Entity-Wirkung**: OMR Reviews (wichtig im DACH-Raum), Capterra/GetApp, G2, Product Hunt (Launch), Crunchbase, StartupDetector, deutsche-startups.de. Northdata und Handelsregister ergeben sich automatisch aus der Eintragung.
8. **Ratgeber- und Vergleichs-Content** zu den Themen, für die Wettbewerber und Verbände heute zitiert werden: „HWG: Was ist erlaubt?“, „Health Claims prüfen“, „IGeL-Werbung“, „Heilpraktiker-Werbung“, „HWG-Tools im Vergleich“. Inhalte rechtlich korrekt und mit Quellen, damit LLMs sie zitieren.
9. **„2.500 Health Claims“ präzisieren**, z. B. als „rund 2.500 Einträge im EU-Register, davon ca. 260 zugelassen“ (die genaue Zahl vor Veröffentlichung verifizieren), um Glaubwürdigkeitsverluste zu vermeiden.
10. **PR**: Gründungs- bzw. Launch-Meldung an Fachmedien für Gesundheitsmarketing und an Münchner Startup-Medien, um unabhängige Drittquellen zu schaffen. Derzeit gibt es außer Munich Startup keine.

### Gaps
- Ohne Rohabruf der Seiten bleibt offen, ob die Probleme technischer Natur sind (Rendering, noindex, fehlende Sitemap) oder nur an der Jugend der Domain liegen. Das ist die wichtigste offene Frage für die Strategie.
