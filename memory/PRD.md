# PRD — Emibi Beauté Landing Page

## Problem statement (originale)
Landing page one-page in italiano per "Emibi Beauté", salone di nail art e cura delle unghie a Firenze (Via Pietro Gobetti 5). Stile luxury caldo e accogliente. Palette fissa: #F6E9E0, #A6753A, #CBA468, #4A2F17, #E6CDAE. Serif elegante per titoli, sans-serif spaziato per testi/menu. Struttura: Hero, Chi siamo, Servizi, Galleria, Perché sceglierci, Dove siamo, Footer. Mobile-first con menu hamburger sticky. CTA verso Instagram @emibi.beaute. Nessun form, e-commerce o pagamenti.

## Architettura
- Frontend-only React (CRA + craco): /app/frontend/src/App.js + App.css
- Nessun backend/DB richiesto (contenuti statici)
- Immagini reali fornite, compresse in /app/frontend/public/images/nail-1..4.jpg
- Font: Cormorant Garamond (titoli), Jost (testi/menu), Great Vibes (script logo)
- Mappa: Google Maps embed (no API key) su Via Pietro Gobetti 5, Firenze
- Logo: file non allegato dall'utente → ricreato come wordmark tipografico (script "Emibi" oro + "BEAUTÉ" spaziato + loto SVG). Sostituibile con il file reale in futuro.

## User personas
- Cliente del salone che visita da smartphone e vuole vedere i lavori e contattare via Instagram
- Nuova cliente che cerca un salone di nail art a Firenze

## Core requirements (statici)
- 7 sezioni con ancore e menu sticky; fade-in on-scroll
- 4 card servizi senza prezzi ("prezzi su richiesta")
- Galleria: 2 colonne mobile / 4 desktop, didascalie fornite
- CTA Instagram ovunque; footer con indirizzo e copyright

## Implementato (22/09/2026)
- Tutte e 7 le sezioni con testi esatti dal documento fornito
- Header sticky + hamburger mobile (touch-friendly 48px), navigazione ad ancore
- Palette e tipografia come da brief; linee dorate decorative con loto SVG
- 4 foto reali compresse (26–102 KB ciascuna) con lazy loading
- Mappa Google funzionante, orari indicativi
- Verificato: nessuno scroll orizzontale su mobile (390px), link Instagram corretti, nessun errore console bloccante

## Backlog
- P0: sostituire il wordmark tipografico con il file logo reale (appena fornito)
- P1: foto aggiuntive in galleria; orari definitivi al posto di "indicativi"
- P2: carosello galleria mobile; meta OG image per anteprima social; prenotazione online quando richiesta

## Prossimi task
- Caricare il logo originale e inserirlo in header/hero/footer
- Aggiungere altre foto lavori se fornite
