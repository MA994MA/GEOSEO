# Zusammenfassung GEO/SEO-Projekt PageCompliance (Stand 29.10.2026)

Übergabe für einen neuen Chat. Enthält alle aktuellen Entscheidungen und Erkenntnisse aus der Arbeit vom 28./29.10.2026. Bei Widerspruch zu älteren Dokumenten gilt diese Datei.

---

## 1. Kontext

- **Firma:** S/E PageCompliance UG (haftungsbeschränkt), Sitz Grünwald, gegründet 2026, HRB 311850 Amtsgericht München.
- **Leon V. Schwahn (CEO):** Technik und Preise.
- **Massimiliano „Massi“ Ehmann (CCO):** Inhalte, Sprache, fremde Stimmen, Kampagnen.
- **Produkt:** KI-gestützte Prüfung von Gesundheitswerbung nach HWG, Health-Claims-Verordnung (HCVO) und UWG; besserer Satz je Fundstelle; Freigabe per Link.
- **Definition (wörtlich, überall gleich):**
  > PageCompliance ist die Plattform für Gesundheitswerbung. Agenturen, Praxen, Heilberufe und Hersteller prüfen ihre Texte KI-gestützt auf Risiken nach Heilmittelwerbegesetz (HWG), Health-Claims-Verordnung und UWG – bekommen für jede kritische Stelle den besseren Satz und geben gemeinsam frei.
- **Claim:** „PageCompliance – die Prüfung für Gesundheitswerbung“. Die Kategorie „Gesundheitswerbung“ bleibt (bewusst nicht geändert).
- **Vier Türen (Zielgruppen):** 1 Agenturen (Hauptkäufer) · 2 Arztpraxen · 3 Heilberufe (Heilpraktiker, Physio, Osteopathie, Psychotherapeuten) · 4 Hersteller (NEM; OTC/RX später).

## 2. Ziel und Ausgangslage (aus Strategiebericht Pricing, 01.10.2026)

- **Ziel bis April 2027:** 3.980 € wiederkehrend im Monat, 20 zahlende Organisationen, kein Kunde über 30 %.
- **Stand Ende September:** 2 Kunden, 198 € im Monat, rund 95 Besucher im Monat, rund 1,6 Anmeldungen von außen im Monat, Kaufquote 1 von 6.
- **Engpass ist Reichweite, nicht Preis.** Damit die Website 12 Praxen trägt, wären rund 12 Anmeldungen im Monat nötig.
- **Gratis mit 3 Prüfungen im Monat ist aktiv** (laut Massi, 28.10.).

## 3. Kernaussage des GEO-Audits (Erhebung 26.10., Nachprüfung 27.10.)

**PageCompliance ist gut gebaut, aber von außen kaum bestätigt.**

| Messung | Wert |
|---|---|
| Nennungen in 15 KI-Fragen | ChatGPT 3 · Perplexity 4 · Gemini 0 |
| Google, 20 Suchbegriffe | 2 in den Top 10, beide Platz 1 (Blog: „schmerzfrei werben“, „HWG Richtlinien Healthcare Marketing Agentur“) |
| Werkzeug-Suchen bei Google | 0 von 8 |
| Fremde Quellen über PageCompliance | 2 (LinkedIn, Munich Startup) |
| Technik | gut: serverseitig gerendert, alle Seiten im Index |

**Drei Ursachen**
1. **Gemini selbst ausgesperrt:** robots.txt sperrt Google-Extended. Gemini hält „PageCompliance“ für einen Gattungsbegriff und ordnet es FinTech zu (auch über Munich Startup, dort Kategorie FinTech).
2. **Website erzählt die alte Geschichte:** „Vorprüfung“, alte Pakete, unbelegte Zahlen. KI-Systeme geben das weiter; für einen Prüf-Anbieter zusätzlich ein Risiko nach § 5 UWG.
3. **Nur zwei fremde Stimmen.** Perplexity zitiert uns zu 3 von 4 über LinkedIn.

**Chancen**
- Die Frage „Welche Alternativen gibt es zur anwaltlichen Prüfung?“ beantwortet keines der drei Systeme mit einem Werkzeug.
- Auf die Preisfrage nennen alle nur Kanzleipreise.
- „HWG“ allein gehört bei Google der Hochschule Ludwigshafen. Immer „Heilmittelwerbegesetz“ ausschreiben oder „HWG“ mit Arzt, Heilpraktiker oder Agentur kombinieren.
- Google zeigt in diesem Feld keine KI-Übersichten.

## 4. Strategie in einem Satz

**Erst mit einer Stimme sprechen, dann belegte Fragen beantworten, dann fremde Stimmen sammeln.** Vier Arbeitsfelder: Türen öffnen (Technik) · eine Stimme · belegte Fragen je Tür · fremde Stimmen.

**Verbindung zu Kampagnen:** Kampagne weckt Interesse → Leute googeln oder fragen ChatGPT → Landeplatz ist der **Blog** → Aufruf **„Drei Texte im Monat kostenlos prüfen“** → Gratis → Paket.
- Der Blog ist Landeplatz für **alle vier Türen, auch Agenturen**.
- Jeder Artikel hat denselben Kern wie die LinkedIn-Serie „Ein Satz, drei Fassungen“: riskanter Satz, Norm, besserer Satz. Einmal schreiben, zweimal nutzen.

**Muster je Seite:** 1 Frage belegen → 2 Seite im festen Format → 3 zwei fremde Stimmen in 14 Tagen → 4 Definition wörtlich → 5 nach 4 Wochen messen (halten, verlinken, umschreiben, aufgeben).

## 5. Entscheidungen

### 5.1 Fünf Entscheidungen fürs Gespräch mit Leon (Empfehlungen, noch gemeinsam zu bestätigen)

| # | Frage | Empfehlung |
|---|---|---|
| E1 | Google-Extended freigeben? | ja |
| E2 | Welche Preise zeigt die Website? | **Leon entscheidet.** Preise v2 mit dem Upgrade; bis dahin unbelegte Zahlen sofort raus, kein Preis-Markup, keine Preise in neuen Artikeln |
| E3 | Zeile „Er stellt keine Rechtsberatung dar“ unter den Artikeln? | ersetzen durch „Dieser Artikel zeigt typische Risikostellen. Den Einzelfall bewertet Ihre Kanzlei.“ (ohne Anwältin) |
| E4 | Name der Wächter-Seite? | **„Laufende Website-Prüfung“**, Adresse `/laufende-website-pruefung`; App-Name bleibt „Wächter“; der Monatsbericht heißt „Prüfbericht“ (z. B. „Prüfbericht Oktober: Ihre Website war ohne Befund.“) |
| E5 | Trainingssperre aufheben (GPTBot, ClaudeBot, CCBot, Applebot-Extended)? | ja, für öffentliche Seiten; /api/, /admin/, /dashboard/ bleiben gesperrt. Wirkung nicht belegt. |

### 5.2 Von Massi entschieden (gilt)

- **15 € je Text** ist ein **Pitch-Rechenbeispiel** für kleine und mittlere Agenturen: 99 € ÷ 15 € → trägt sich ab dem **7. Text**, immer als Beispiel formuliert. 12 € ist nur ein Datenpunkt (eine kleine Agentur, n = 1). Was Agenturen weiterberechnen, ist ihre Sache.
- **Preisseite und Preisanker macht Leon** (L17).
- **Partner-Agenturen (M9) sind nur eine IDEE.**
- **OMR Reviews erst, wenn wir größer sind** und genug echte Bewertungen sammeln können. **G2 entfällt. Crunchbase** einmal anlegen, nicht pflegen.
- **Keine Extraseiten** `/hwg-pruefung` und `/health-claims-pruefung` (Vorschlag der Strategie vom 23.10.). Sie würden mit Startseite bzw. `/hersteller` konkurrieren. Nur nachbauen, wenn die Search Console Nachfrage ohne passende Seite zeigt.
- **Seitennamen je Tür:** `/agenturen` (besteht; „Ihr“ auf „Sie“ umstellen), `/arztpraxen`, `/heilberufe`, `/hersteller` („Nahrungsergänzungsmittel“ in Title und H1), `/laufende-website-pruefung`.
- **Blog-Kategorien für alle vier Türen** (L18, Leon): `/blog/agenturen`, `/blog/aerzte`, `/blog/heilberufe`, `/blog/hersteller`.
- **Aufruf am Ende jedes Artikels:** „Drei Texte im Monat kostenlos prüfen“.
- **Kurzlinks** (`pagecompliance.de/go/…`) sind eine **offene Frage**, keine Aufgabe.
- **Plausible:** Empfehlung behalten. Kampagnen-Links mit UTM markieren.
- **Dokumente in Helvetica.**

### 5.3 Texte für die Startseite und den Blog (Vorschläge in M12, L3, L9)

- **Title Startseite:** „PageCompliance – die Prüfung für Gesundheitswerbung“
- **Meta-Description, zwei Varianten:**
  1. „Gesundheitstexte nach HWG, HCVO und UWG prüfen. Für Agenturen, Praxen, Heilberufe und Hersteller: jeder Befund mit besserem Satz, bereit zur Freigabe.“ (150 Zeichen, Favorit)
  2. „Gesundheitstexte prüfen, für Agenturen, Praxen, Heilberufe und Hersteller. Jeder Befund mit Norm und dem besseren Satz, bereit zur Freigabe.“
- **Zeile unter der H1:** „Die Prüfung für Gesundheitswerbung nach Heilmittelwerbegesetz, Health-Claims-Verordnung (und UWG).“
- **Blog-Title:** „Ratgeber für Gesundheitstexte | PageCompliance“
- **Blog-H1:** „Stark werben. Sauber formulieren.“ → „Stark werben. Ruhig veröffentlichen.“ („sauber“ ist ein Urteilswort)

## 6. Aufgaben

### Leon: Technik und Preise (insgesamt etwa 10 Arbeitstage über 3 Monate)

**Sofort, etwa 5 Stunden plus Preisseite**
- **L17 Preisseite bereinigen:** raus mit „Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“, „1.000 geprüfte Texte“, „White-Label“, „Video-Audit“, „Spezialisten für jeden HWG-Paragrafen“. „Anwalt ab 399 €“ nur mit abgelegter Quelle, sonst 400 € netto (RechtVital). 15 € als Beispiel. Gratis 3 Prüfungen im Monat zeigen.
- **L1 robots.txt:** eine Gruppe mit Google-Extended, DuckAssistBot und (nach E5) GPTBot, ClaudeBot, CCBot, Applebot-Extended; `Allow: /` plus Disallow /api/, /admin/, /dashboard/ wiederholen.
- **L2** noindex für /login und /register (nicht per robots.txt sperren).
- **L3** Titles, Meta-Description, H1 (siehe 5.3).
- **L4** Blog-Fußzeile (E3).
- **L5** llms.txt neu, mit Definition.
- **L6** Sitemap prüfen.
- **L7** Search Console (DNS), dann Bing per Import, IndexNow.

**In 30 Tagen, etwa 4 Tage**
- **L8** Organization-Markup mit sameAs: LinkedIn, Munich Startup, Crunchbase.
- **L9** Zeile unter der H1.
- **L10** /ueber-uns mit Faktenblock und Person-Markup für Leon und Massi.
- **L11** Blog-Vorlage: Stand-Datum, Autor, Aktenzeichen, interne Links, Agentur-Hinweis, Aufruf.
- **L12** Weiterleitungen: Vorfilter-Artikel auf neuen Slug; `immunsystem-staerken-health-claim-erlaubt` → `nem-immunsystem-claims-erlaubt`.
- **L13** Messung (Plausible?): KI-Quellen als Gruppe, Ziel „Anmeldung“, Anmeldefeld „Wie haben Sie uns gefunden?“, UTM.
- **L14** Preis-Markup erst nach E2.
- **L18** Blog-Kategorien je Tür.

**In 90 Tagen, etwa 5 Tage**
- **L15** Seiten je Tür.
- **L16** Vergleichsseite nach Kategorien (Kanzlei, Chat-KI, Agentur-Dienstleistung, Plugin, Prüfsoftware), keinen Wettbewerber namentlich angreifen.

**Außerdem:** Gespräche mit mindestens drei Praxen und tigovit (Preise Praxis 29 €, Hersteller 99 € sind Arbeitswerte); Markenrechtlerin für „Wächter“ und „PageCompliance“.

### Massi: Sprache, Inhalte, fremde Stimmen

**Sofort**
- **M2** LinkedIn und Munich Startup auf die Definition umstellen; FinTech und InsurTech entfernen lassen; auf LinkedIn „Vorprüfung“ und „rechtssicher“ ersetzen; Gründerprofile verknüpfen.
- **M3** Faktenblock für „Über uns“.
- **M4** Vorher-Nachher-Artikel um BGH I ZR 170/24 (31.07.2025, auch Unterspritzungen) korrigieren.

**In 30 Tagen**
- **M12** Startseiten-Texte.
- **M5** Vorfilter-Artikel neu schreiben.
- **M6** Immunsystem-Artikel zusammenführen.
- **M7** Crunchbase anlegen.
- **M8** neue Artikel 1 bis 4.
- **M9** Partner-Agenturen (Idee).
- **M11** jeder Artikel ein LinkedIn-Beitrag mit UTM-Link.
- Einleitungen für die Blog-Kategorien.

**In 90 Tagen**
- **M10** Text Vergleichsseite.
- **M13** Wiederholungsmessung (20 Suchbegriffe, 15 Fragen je dreimal).
- **M14** anwaltlich gegenlesen: Abmahnschutz-Formulierungen, Artikel 2, Vergleichsseite.

### Blog

**Neue Artikel, in dieser Reihenfolge**
1. Sind Heilversprechen strafbar?
2. Was kostet eine Prüfung nach dem Heilmittelwerbegesetz? (eigene Preise erst nach E2; kein „günstiger und schneller als der Anwalt“, OLG Köln 6 U 263/19)
3. Welche Werbung darf ein Arzt machen?
4. Für wen gilt das Heilmittelwerbegesetz?
5. Heilversprechen: die besseren Sätze
6. Physiotherapie und Osteopathie
7. Botox und Hyaluron

Danach: Zahnarzt, Heilpraktiker für Psychotherapie, Health-Claims-Liste.

**Bestand (14 Artikel):** Platz-1-Artikel halten · Vorher-Nachher korrigieren · Vorfilter neu · Immunsystem zusammenführen · Heilpraktiker-Artikel umbauen · Patientenbewertungen ausbauen. Details im Maßnahmenplan 3.4.

## 7. Kampagnen (Fahrplan aus dem Marketing-Schlüssel, Vorschlag zur Diskussion)

| Schritt | Kampagne | UTM `utm_campaign` | Landeplatz |
|---|---|---|---|
| 1 Agenturen | „Ein Satz, drei Fassungen“; „Bringen Sie zum Pitch mit, was Sie gefunden haben“ | `agentur-satz` | Blog (Kategorie Agenturen), `/agenturen` |
| 2 Über Agenturen in die Praxen | „Ihre Kunden prüfen selbst. Sie bleiben dran. 15 % für Sie.“ | `praxis-empfehlung` | Blog, `/arztpraxen`, `/heilberufe` |
| 3 Heilpraktiker direkt | „Der Satz, den Sie nicht mehr sagen dürfen“ | `hp-satz` | Artikel 1 und 5, Kategorie Heilberufe |
| 4 Arztpraxen direkt | „So sieht ein Patient Ihre Praxis“ | `arzt-auftritt` | Artikel 3 und 7, Kategorie Ärzte |
| 5 Hersteller (nach tigovit) | „Eine Kapsel mehr“ | `hersteller-kapsel` | Immunsystem-Artikel, `/hersteller` |

**UTM-Regeln:** immer kleinschreiben, Bindestriche; `utm_source` z. B. linkedin, instagram, newsletter, flyer; `utm_medium` social, email, print, partner. Nie UTM auf interne Links. Details in `Kampagnen-Links_UTM_Kurzlinks.md`.

## 8. Sprache (Sprach-Leitfaden v1.0, 22.10.2026)

- **„Prüfung“**, nie „Vorprüfung“ oder „Vorfilter“. Die Software prüft, der Mensch entscheidet; nie „Wir prüfen Ihre Texte“.
- **KI** nur beiläufig, nie in Title oder H1. **Abmahnschutz** nur als Thema, nie als Versprechen.
- **„Keine Rechtsberatung“** nur in den AGB.
- **Nie:** rechtssicher, abmahnsicher, garantiert, unbedenklich, sauber, White-Label (→ „In Ihrem Namen“), Credits (→ Einheit), günstig/billig, Starter/Professional, Compliance-Monitoring/HWG-Wächter (→ „Laufende Website-Prüfung“).
- **Anrede:** Website und Firmenseite in **Sie**; Massis LinkedIn und Instagram in **Du**.
- **Dramaturgie:** Risiko vorne, Ruhe am Ende.
- **Belegte Zahlen:** 11 bis 53 Sekunden je Text; 54 Texte in 3 min 17 s; BGH I ZR 170/24; Gratis 3 Prüfungen im Monat.
- **Nicht verwenden:** „Anwalt ab 3.000 €“, „Abmahnung ab 5.000 €“, „Vertragsstrafe 5.500 €“ (nur mit Quelle am Fall), „~600 € statt 2.000 €“ (nur im Gespräch, nicht auf Website oder Blog).

## 9. Messung (Ziele nach 90 Tagen, eigene Setzungen)

- Gemini beantwortet „Was ist PageCompliance?“ richtig, mit Heilmittelwerbegesetz.
- Nennungen steigen in jedem System, Gemini mindestens 1 von 15.
- Fremde Quellen: mindestens 4 (LinkedIn und Munich Startup korrigiert, Crunchbase, mindestens eine Fundstelle bei Verband, Fachschule oder Agentur).
- Mindestens 2 der neuen Artikel 1 bis 4 in den Top 10 ihrer Frage.
- Anmeldungen mit Herkunft messen; Richtwert aus dem Pricing: rund 12 im Monat.

**Plausible zählt nur den letzten Kontakt.** Wer einen Post sieht und später googelt, zählt als Google. Deshalb zusätzlich das Anmeldefeld auswerten.

## 10. Offen

**Mit Leon**
- E1 bis E5 bestätigen
- Plausible behalten?
- Kurzlinks ja oder nein
- Markenrechtlerin
- Preise Praxis und Hersteller (Gespräche)
- Quelle „Anwalt ab 399 €“ ablegen (Recherche O2)
- Wo die Anmeldung technisch passiert (Plausible muss dort messen)

**Bei Massi**
- **Sprach-Leitfaden nachziehen:** 15 € als Rechenbeispiel statt „unbelegt“; „Compliance-Monitoring“ → „Laufende Website-Prüfung“; Monatsbericht → „Prüfbericht“.
- **Marketing-Schlüssel nachziehen:** Monatsbericht, 15 €.
- Heilpraktiker-Kernsatz („liest ab jetzt jemand mit“ → besser „liest ab jetzt PageCompliance mit“?).
- Ton für approbierte Psychotherapeuten.
- LinkedIn-Firmenseite selbst prüfen.
- Instagram nur verlinken (Fußzeile, sameAs), wenn regelmäßig bespielt.

**Bekannte Abweichung:** Die Strategie vom 23.10. (`reports/SEO GEO Strategie PageCompliance.md`) nennt noch `/aerzte`, `/nahrungsergaenzungsmittel` und die Extraseiten. Es gilt der Maßnahmenplan.

**Nicht verifiziert:**
- ob KI-Systeme Crunchbase nutzen
- OMRs Studie (Eigeninteresse)
- „ClaimGuard“ = smugos englischer Dienst (aus Plan v1)
- Details der Kampagnen-Ansicht in Plausible
- Datenschutz bei Bitly

## 11. Dokumente (Repo `ma994ma/geoseo`, Branch `claude/lucid-noether-rcc4rb`, Ordner `reports/2026-10-28_GEO/`)

| Datei | Inhalt |
|---|---|
| `GEO-Audit_PageCompliance_Teil1` (.docx/.pdf) | Diagnose, 17 S. |
| `GEO-Massnahmenplan_PageCompliance_Teil2` (.docx/.pdf) | Plan, 20 S., Struktur wie Strategiebericht Pricing |
| `Was_Leon_tun_soll` (.docx/.pdf) | Aufgaben L1 bis L18 mit Warum und Fertig, wenn |
| `Was_Massi_tun_soll.docx` | Aufgaben M2 bis M14 |
| `Fragen_Rankings_Wettbewerb.docx` | 15 Fragen, 20 Suchbegriffe, Konkurrenz, leere Messtabelle |
| `Sprechskript_Leon.docx` | 8 Folien, etwa 11 Minuten: Worum es geht · Wo wir stehen · Suche und Kampagnen · Sprache sofort ändern · Was du machst · Was ich mache · Was wir entscheiden · Was es bringt |
| `Kampagnen-Links_UTM_Kurzlinks.md` | Arbeitsnotiz UTM, Kurzlinks, Auswertung |
| `ZUSAMMENFASSUNG_fuer_neuen_Chat.md` | diese Datei |

**Build:** Skripte in `tools/geo-reports/` (docx-js, Helvetica, Diagramme per Playwright, PDF über LibreOffice mit `topdf.py`). Aufruf z. B. `NODE_PATH=$(npm root -g) node plan.js out.docx`, dann `python3 topdf.py out.docx out.pdf`. Für Helvetica-nahe PDFs muss `fonts-urw-base35` (Nimbus Sans) installiert sein.

**Quellen, die nicht im Repo liegen** (im neuen Chat bei Bedarf neu hochladen):
- Strategiebericht Pricing (PDF, 01.10.)
- PageCompliance Marketing-Schlüssel (HTML, 19.10.)
- alter Maßnahmenplan v1/v1.2 und Audit-Erstfassung (DOCX)

Der Sprach-Leitfaden ist als Skill „pagecompliance-sprache“ verfügbar.
