# Marketing-Cockpit PageCompliance · Konzept v0.1

Stand: 23.10.2026 · Massi + Claude · Umsetzung: Leon

## Ziel

Ein internes Werkzeug, mit dem Massi (und Leon) Blogartikel SEO/GEO- und HWG-sicher schreiben,
die Sichtbarkeit in KI-Assistenten messen und die Mail-Strecken samt Signalen steuern.
Keine Kopie von Brevo, Sistrix oder Twenty: Die App macht nur, was diese Tools nicht können,
und verbindet sie.

## Nutzer

| Rolle | Macht in der App |
| --- | --- |
| Massi | schreibt Artikel und Mails, pflegt Prompts, sieht Signale, ruft an |
| Leon | veröffentlicht, verbindet Schnittstellen, pflegt Technik-Checks |

Später möglich: Teile davon als Funktion im Produkt (siehe unten).

## Module (Phase 1)

### 1 · Blog-Editor mit SEO/GEO + HWG-Check

Ablauf: Thema/Keyword wählen → Briefing → schreiben → Checks → Freigabe → an Leon / CMS.

- Keyword aus dem Keyword-Universum (222 Keywords, 8 Cluster, Wellen, Tür) zuordnen
- Pflichtstruktur aus der Strategie: Suchfrage im ersten Absatz beantwortet, Norm und Urteil
  mit Link, Abschluss „Kostenlos prüfen“ + Newsletter-Formular
- SEO-Check: Title, Meta, H1, Keyword-Platzierung, interne Links, Schema-Markup
- GEO-Check: Definition wortgleich, Normen und Aktenzeichen im Text, Quellen und Zitate,
  Autor und Datum sichtbar
- HWG-Check: Prüfung durch PageCompliance selbst (Dogfooding)
- Sprach-Check: Regeln aus dem Sprach-Skill (z. B. kein „Vorprüfung“, kein „jede kritische Stelle“)
- Faktencheck-Status je Aussage (rot / gelb / grün), wie bei den v7-Dokumenten

### 2 · GEO-Monitoring / Prompt-Panel

Ablauf: Prompts pflegen → regelmäßig gegen KI-Assistenten laufen lassen → Auswertung im Zeitverlauf.

- Prompt-Panel (Baseline: 40 Prompts), gruppiert nach Tür und Cluster
- je Lauf und Assistent: Wird PageCompliance genannt? An welcher Stelle? Welche Wettbewerber?
  Welche Quellen werden zitiert (z. B. OMR Reviews)? Stimmt die Definition?
- Trend: Nennungsrate pro Woche, pro Tür, pro Assistent
- Grenze: Antworten über API können von dem abweichen, was Nutzer in der App sehen
  (Websuche, Personalisierung). Das muss im Dashboard sichtbar sein.

### 3 · Mail-Strecken + Signale

Ablauf: Strecke planen → Mails schreiben (mit denselben Checks wie im Blog) → Versand über Mail-Tool →
Signale zurück → Anrufliste.

- Strecken: Onboarding (5 Mails / 14 Tage), „5 Sätze, 5 bessere Fassungen“ (5 Mails / 12 Tage),
  Monats-Newsletter (1. Dienstag), „Nach dem Anruf“
- Regeln als Leitplanken in der App, nicht nur im Playbook: Einwilligung vorhanden,
  max. 1 Werbemail pro Woche und Person, Klick zählt nur mit Einwilligung, Inaktive nach 6 Monaten raus
- Signale: Anmeldung, erste Prüfung, 3 Prüfungen verbraucht, Newsletter-Anmeldung, Klick „kostenlos prüfen“
- Anrufliste: ab 60 Punkten, nur mit Telefonnummer, Frist 48 Stunden

## Gemeinsamer Kern: die Prüf-Engine

HWG-Check + Sprach-Check + Faktencheck-Status werden in Blog **und** Mail gebraucht.
Wenn sie über dieselbe Schnittstelle wie das Produkt laufen, ist das der Teil,
der später ins Produkt wandern kann („PageCompliance im Schreibfluss“ für Agenturen).

| Modul | Potenzial fürs Produkt |
| --- | --- |
| Blog-Editor mit Prüfung | hoch: Kernnutzen für Agenturen (Tür 1) |
| GEO-Monitoring | niedrig bis mittel: eigenes Thema, höchstens Add-on |
| Mail-Strecken | keins: interner Vertriebsprozess |

## Bewusst nicht in der App

- Mailversand selbst → Mail-Tool (Brevo, CleverReach oder rapidmail, noch offen)
- Suchvolumen → Keyword Planner / Sistrix
- Kontakthistorie → Twenty
- Veröffentlichung der Website → CMS

## Offene Fragen

### An Massi
- siehe Chat, Runde 2

### An Leon
1. Hat PageCompliance eine API, über die wir Texte prüfen können (gleiche Engine wie das Produkt)?
2. Welches CMS läuft unter pagecompliance.de, und kann ein Artikel per API angelegt werden?
3. Welcher Tech-Stack für die App (gleicher wie das Produkt?) und wo wird gehostet?
4. Kommen Signale aus der App (Anmeldung, Prüfungen) per Webhook, und können wir sie mitlesen?
5. Login: eigene Accounts oder SSO über das Produkt?
6. Wie viel Zeit hat Leon realistisch für die App neben den 9 Stellschrauben vor dem 09.11.?

## Design

- Klickbarer HTML-Prototyp, Look wie die PageCompliance-App bzw. Aurora-Design
- Benötigt: Farben, Schriften, Logo, 2–3 Screenshots der App
