# PRD — Emibi Beauté Landing Page

## Problem statement (originale)
Landing page one-page in italiano per "Emibi Beauté", salone di nail art e cura delle unghie a Firenze (Via Pietro Gobetti 5). Stile luxury caldo e accogliente. Palette fissa: #F6E9E0, #A6753A, #CBA468, #4A2F17, #E6CDAE. Serif elegante per titoli, sans-serif spaziato per testi/menu. Struttura: Hero, Chi siamo, Servizi, Galleria, Perché sceglierci, Dove siamo, Footer. Mobile-first con menu hamburger sticky. CTA verso Instagram @emibi.beaute. Nessun form, e-commerce o pagamenti.

## Architettura
- Frontend-only React (CRA + craco): /app/frontend/src/App.js + App.css
- react-router-dom: 2 pagine — Home (/) e Servizi (/servizi), header/footer condivisi
- Nessun backend/DB richiesto (contenuti statici)
- Immagini in /app/frontend/public/images/: logo.jpg, nail-1..4.jpg (reali), corpo.jpg, viso.jpg, ciglia.jpg (stock)
- Font: Cormorant Garamond (titoli), Jost (testi/menu), Great Vibes (firma)
- Mappa: Google Maps embed su Via Pietro Gobetti 5, Camucia, Cortona AR
- Palette (25/09/2026): bg #F4F1EC, sezioni alt #E4DED4, primario #603C26, hover #45301F (sostituita palette oro/crema)
- Indirizzo corretto (25/09/2026): Via Pietro Gobetti 5, Camucia — Cortona (AR)
- CTA primaria: WhatsApp https://wa.me/393315978742 (header, hero, dove siamo, footer); Instagram @emibi.beaute secondaria

## User personas
- Cliente del salone che visita da smartphone e vuole vedere i lavori e contattare via Instagram
- Nuova cliente che cerca un salone di nail art a Firenze

## Core requirements (statici)
- 7 sezioni con ancore e menu sticky; fade-in on-scroll
- 4 card servizi senza prezzi ("prezzi su richiesta")
- Galleria: 2 colonne mobile / 4 desktop, didascalie fornite
- CTA Instagram ovunque; footer con indirizzo e copyright

## Implementato
- 22/09/2026: landing one-page con 7 sezioni, logo originale integrato (header/hero/footer/favicon)
- 25/09/2026: correzione indirizzo (Camucia — Cortona AR) ovunque + mappa e meta/title; nuova palette marrone/beige; struttura a 2 pagine (Home con hero + "La nostra storia" integrale + Dove siamo; Servizi con 4 card categoria senza prezzi + nota listino + galleria); CTA WhatsApp primaria ovunque; menu con routing Home/Servizi e bottone WhatsApp sempre visibile anche su mobile

## Backlog
- P1: foto aggiuntive in galleria; orari definitivi al posto di "indicativi"
- P2: carosello galleria mobile; meta OG image per anteprima social; prenotazione online quando richiesta

## Prossimi task
- Aggiungere altre foto lavori se fornite
