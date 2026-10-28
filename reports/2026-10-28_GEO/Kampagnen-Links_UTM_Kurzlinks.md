# Kampagnen-Links: UTM, Kurzlinks und Auswertung

Stand 28.10.2026 · Arbeitsgrundlage für Massi und Leon · gehört zu L13 (Messung), L18 (Blog-Kategorien) und M11 (LinkedIn)

**Status Kurzlinks: offene Frage**, noch nicht entschieden. UTM-Markierungen gelten unabhängig davon.

## Kurz gesagt

- Jeder Link in einer Kampagne führt über einen **Kurzlink auf der eigenen Domain** (`pagecompliance.de/go/…`).
- Der Kurzlink leitet auf die Zielseite weiter. Die **UTM-Markierung steckt im Ziel**.
- **Plausible** zeigt, welche Kampagne Besucher und Anmeldungen bringt.
- **Feste Namensregeln**, sonst zerfällt die Auswertung.

## 1. Aufbau eines UTM-Links

```
https://pagecompliance.de/blog/schmerzfrei-werbung-praxis-hwg
   ?utm_source=instagram      ← woher: Plattform
   &utm_medium=social         ← welche Art: social, email, print, partner
   &utm_campaign=hp-satz      ← welche Kampagne
   &utm_content=story         ← optional: welche Variante (story, bio, post-1)
```

- Plausible liest `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` sowie `ref` und `source` ([Plausible Docs](https://docs.plausible.io/manual-link-tagging/)).
- Werkzeug zum Zusammenbauen: [Plausible UTM Builder](https://plausible.io/utm-builder) (kostenlos).

## 2. Kurzlinks über die eigene Domain

```
pagecompliance.de/go/hp-satz
   →  https://pagecompliance.de/blog/…?utm_source=instagram&utm_medium=social&utm_campaign=hp-satz&utm_content=story
```

**Warum eigene Domain statt Bitly**

- **Vertrauen:** Ärzte und Heilpraktiker sehen „pagecompliance.de“, keinen fremden Kurzlink.
- **Keine Abhängigkeit** von einem Drittanbieter.
- **Wenig Aufwand:** Next.js kann Weiterleitungen direkt. Angehängte Parameter werden laut Doku mitgegeben ([Next.js Docs](https://nextjs.org/docs/pages/api-reference/next-config-js/redirects)); wir schreiben die UTM aber direkt ins Ziel.
- **Nicht geprüft:** Datenschutz und kostenlose Limits von Bitly.

**Wo Kurzlinks nötig sind**

- **Instagram:** Links in normalen Beiträgen sind nicht klickbar (Meta testet das nur für einen kleinen Kreis, [Planoly](https://www.planoly.com/blog/instagram-is-finally-testing-links-in-captions.md)). Kurzlinks gehören in die Bio oder in einen Story-Link.
- **Print, QR-Codes, Folien, Messen:** derselbe Kurzlink als QR-Code, mit `utm_medium=print`.
- **LinkedIn, Mails, Verbände, Partner:** sieht sauberer aus und ist leichter zu merken.

## 3. Namensregeln (verbindlich)

Plausible unterscheidet Groß- und Kleinschreibung: `LinkedIn` und `linkedin` werden zwei Einträge ([Plausible Docs](https://docs.plausible.io/manual-link-tagging/)).

- immer **kleinschreiben**, **Bindestrich** statt Leerzeichen
- **nie UTM auf Links innerhalb der eigenen Website**, sonst wird die echte Herkunft überschrieben
- jeden Link **vor dem Posten selbst testen**: Er muss im Plausible-Echtzeitbericht mit Kampagne erscheinen

**Feste Werte**

| Feld | Erlaubte Werte |
|---|---|
| `utm_source` | `linkedin`, `instagram`, `newsletter`, `flyer`, `verband-<name>`, `agentur-<name>` |
| `utm_medium` | `social`, `email`, `print`, `partner` |
| `utm_content` | optional: `post-1`, `post-2`, `story`, `bio`, `qr` |

**Kampagnennamen nach dem Fahrplan im Marketing-Schlüssel**

| Fahrplan | `utm_campaign` | Kurzlink (Vorschlag) |
|---|---|---|
| 1 Agenturen | `agentur-satz` | `/go/agentur` |
| 2 Über Agenturen in die Praxen | `praxis-empfehlung` | `/go/praxis` |
| 3 Heilpraktiker direkt | `hp-satz` | `/go/hp-satz` |
| 4 Arztpraxen direkt | `arzt-auftritt` | `/go/arzt` |
| 5 Hersteller (nach tigovit) | `hersteller-kapsel` | `/go/kapsel` |

## 4. Wohin Kampagnen-Links führen

| Art der Kampagne | Ziel des Kurzlinks |
|---|---|
| **Themen-Kampagne** (ein riskanter Satz, eine Frage), für alle vier Türen inklusive Agenturen | der passende **Blogartikel** oder die **Blog-Kategorie der Tür** (`/blog/agenturen`, `/blog/aerzte`, `/blog/heilberufe`, `/blog/hersteller`). Der Artikel muss vor dem Start der Kampagne online sein. |
| **Angebots-Kampagne** (Paket, Funktionen für Kaufbereite) | **Seite der Zielgruppe** (`/agenturen` gibt es schon; `/arztpraxen`, `/heilberufe`, `/hersteller` folgen), bis dahin die Blog-Kategorie oder die Startseite |
| **Direkt zur Prüfung** (z. B. Story „Ihr Satz, kostenlos geprüft“) | `/kostenlos-pruefen` |
| **Nie als Kampagnenziel** | Preisseite, Über uns |

Jeder Artikel endet mit **„Drei Texte im Monat kostenlos prüfen“**. Gratis mit 3 Prüfungen im Monat ist aktiv.

## 5. Kampagnen-Link-Liste (Vorlage)

| Kurzlink | Ziel-Seite | source | medium | campaign | content | Start | Kanal / Notiz |
|---|---|---|---|---|---|---|---|
| `/go/hp-satz` | `/blog/…` | instagram | social | hp-satz | story | TT.MM. | Story-Link |
| | | | | | | | |

## 6. Auswertung in Plausible

1. Dashboard öffnen, Zeitraum wählen.
2. In der Quellen-Kachel auf die Kampagnen-Ansicht wechseln (Source, Medium, Campaign getrennt).
3. Eine Kampagne anklicken: Das Dashboard zeigt nur noch diese Besucher.
4. Bei den Zielen ablesen, wie viele sich **angemeldet** haben. Das ist die eigentliche Zahl.

Die genaue Bedienung der Kampagnen-Ansicht ist nicht nachgeprüft; im Dashboard selbst nachsehen.

**Lesehilfe**

- **Kleine Zahlen sind normal.** Heute rund 1,6 Anmeldungen von außen im Monat. Erst über Wochen vergleichen.
- **Nur der letzte Kontakt zählt.** Wer den Post sieht und später googelt, steht bei „Google“. Deshalb zusätzlich das Feld „Wie haben Sie uns gefunden?“ auswerten.
- **Plausible sieht nur Klicks.** Wie oft ein Post gesehen wurde, zeigen LinkedIn und Instagram selbst.

## 7. Was Massi von Leon braucht

| Was | Warum |
|---|---|
| Zugang zu Plausible | selbst auswerten |
| Ziel „Anmeldung“ in Plausible | ohne Ziel nur Besucher, keine Ergebnisse; laut Pricing-Bericht wird im Produkt bisher nur der Klick auf den Upgrade-Knopf erfasst |
| Antwort: Wo passiert die Anmeldung? | liegt sie auf einer anderen Adresse als die Website, muss Plausible dort auch messen, sonst reißt die Spur vor dem Ziel ab |
| Kurzlink-Funktion `/go/…` | einmal einrichten, danach nur Einträge ergänzen |
| Fester Ablauf für neue Kurzlinks | z. B. Massi schickt eine Zeile aus der Liste, Leon trägt ein; oder eine Liste, die Massi selbst pflegt |
| Test: kommen die Markierungen an? | manche Setups schneiden Parameter ab |
| Zusage: keine Adressänderung ohne Weiterleitung | sonst laufen alte Kurzlinks und QR-Codes ins Leere |
| Auswertung des Anmeldefelds | Antworten auf „Wie haben Sie uns gefunden?“ einsehen |

## 8. Offen

- **Kurzlinks:** offene Frage für Massi und Leon (steht im Plan unter 4.4).
- Kampagnen-Link-Liste als gemeinsame Tabelle anlegen.
- **Entschieden:** Blog-Kategorien für alle vier Türen (L18, Leon, 30 Tage).
