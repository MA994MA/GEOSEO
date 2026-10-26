# Weg 1 – Live-Check mit deinem eigenen Browser

**Ziel:** Echte Ergebnisse von google.de, ChatGPT, Perplexity und Gemini – so, wie ein Kunde in Deutschland sie sieht. Dazu ein Technik-Check von pagecompliance.de. Ergebnis ist die **Baseline (Nullmessung)**, gegen die wir ab jetzt jeden Monat messen.

**Warum dein Rechner?** Die Cloud-Session, in der der Report entstanden ist, darf diese Seiten nicht aufrufen. Claude in Chrome arbeitet in *deinem* Chrome, mit deutscher IP und deinen Logins.

**Zeitbedarf:** ca. 15 Min. Einrichtung + 60–90 Min. Laufzeit (Claude arbeitet, du schaust gelegentlich drauf).

---

## Ablauf auf einen Blick

```
[1] Chrome-Profil anlegen ──▶ [2] Erweiterung + Claude verbinden ──▶ [3] Logins im neuen Profil
                                                                          │
[6] Ergebnis zurück ins Repo ◀── [5] Claude arbeitet ◀── [4] Prompt einfügen
```

---

## Voraussetzungen

- Bezahlter Claude-Plan (Pro, Max, Team oder Enterprise) – laut Anthropic-Support Pflicht für Claude in Chrome.
- **Google Chrome** oder **Microsoft Edge**. Brave und Arc werden laut Doku nicht unterstützt.
- Claude Desktop-App (Mac/Windows) **oder** Claude Code im Terminal.

---

## Schritt 1 – Eigenes Chrome-Profil anlegen (empfohlen)

Claude in Chrome handelt in deinem echten Browser, mit allen Logins, die dort aktiv sind. Ein eigenes Profil schützt dein Mail-Postfach, Banking und CRM und liefert sauberere Google-Ergebnisse.

1. Chrome → oben rechts auf dein Profilbild → **Hinzufügen** → Profil z. B. „PageCompliance Check“ nennen.
2. In diesem Profil **nur** einloggen bei: ChatGPT, Gemini (Google-Konto), optional Perplexity. **Nicht** bei Gmail-Postfach-Arbeit, Banking oder eurem CRM.

## Schritt 2 – Claude in Chrome verbinden

**Variante A – Claude Desktop-App (einfacher, empfohlen für dich):**
1. Desktop-App öffnen → unten links auf deine Initialen → **Settings**.
2. **Connectors** → **Claude in Chrome** → **Configure**.
3. Schalter einschalten, Erweiterung installieren, falls noch nicht geschehen (im Chrome-Profil aus Schritt 1).
4. Wichtig: Der Connector ist **pro Unterhaltung standardmäßig aus**. In der neuen Unterhaltung musst du ihn einschalten.

**Variante B – Claude Code im Terminal (schreibt Ergebnisse direkt ins Repo):**
1. Repo klonen: `git clone https://github.com/ma994ma/geoseo.git && cd geoseo && git checkout claude/funny-hopper-tqtd9t`
2. Starten mit `claude --chrome` (oder in einer laufenden Session `/chrome` eingeben).
3. Mindestversionen laut Doku: Claude Code 2.0.73, Erweiterung 1.0.36.

Quellen: [Anthropic Support – Claude in Chrome](https://support.claude.com/en/articles/12012173-get-started-with-claude-in-chrome) · [Claude Code Doku – Chrome](https://code.claude.com/docs/en/chrome)

## Schritt 3 – Vorbereitung im Browser (2 Minuten)

- **ChatGPT:** einen **temporären Chat** nutzen (oben im Chat-Fenster). Sonst fließen Memory und frühere Chats in die Antworten ein und die Messung ist verfälscht.
- **Gemini:** wenn möglich ohne persönlichen Kontext bzw. mit neuem Chat je Frage.
- **Google:** im neuen Profil ohne Suchverlauf. Ob du eingeloggt bist, notiert Claude mit.
- Wenn Chrome fragt, ob Claude auf einer Seite handeln darf: für google.de, chatgpt.com, perplexity.ai, gemini.google.com und pagecompliance.de **erlauben**.

## Schritt 4 – Prompt einfügen

- Neue Unterhaltung starten, Claude in Chrome einschalten.
- Den kompletten Inhalt von **`02_PROMPT_FUER_CLAUDE.md`** einfügen (Desktop-App: Datei anhängen oder Text kopieren).

## Schritt 5 – Laufen lassen

- Claude öffnet eigene Tabs und arbeitet die Liste ab.
- **Captcha oder „ungewöhnlicher Traffic“ bei Google:** Claude stoppt und fragt dich. Du löst das Captcha, dann geht es weiter.
- **Du musst nirgends Daten eingeben.** Wenn Claude nach einem Login, einer Zahlung oder einer Anmeldung fragt: ablehnen.

## Schritt 6 – Ergebnis zurückbringen

- **Variante A:** Claude gibt am Ende eine Markdown-Datei bzw. einen Block aus. Speichere ihn als `weg1-live-check/ergebnisse/baseline_JJJJ-MM-TT.md`, oder füge ihn einfach in die Cloud-Session ein, in der der Report entstanden ist.
- **Variante B:** Claude speichert direkt in `weg1-live-check/ergebnisse/` und committet.

Danach baue ich die echten Daten in den Report ein: SERP-Lücken bestätigt oder widerlegt, Wettbewerber in KI-Antworten, Technik-Befunde.

---

## Was du realistisch erwarten kannst

- **Google-Ergebnisse sind trotzdem leicht personalisiert** (Standort, Profil). Für eine Baseline reicht das, für exakte Rankings braucht es später Sistrix o. ä.
- **KI-Antworten schwanken.** Dieselbe Frage kann morgen andere Tools nennen. Deshalb: jeden Monat dieselben Fragen, gleiche Bedingungen.
- **PageCompliance taucht vermutlich kaum auf.** Das ist kein Fehler der Messung, sondern die Nullmessung.
