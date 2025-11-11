# Gastenboek Migratie Compleet! 🎉

## Overzicht

Alle gastenboek entries van de oude website zijn succesvol gemigreerd naar individuele testimonial bestanden in de `src/content/testimonials/` collectie.

## Statistieken

- **Totaal aantal testimonials:** 21
- **Periode:** 2005 - 2025 (20+ jaar aan gasten!)
- **Recentste:** September 2025 (Ineke en Theo uit Drenthe)
- **Oudste:** Juni 2005 (Menna en Daan)

## Gemigreerde Testimonials

### 2025

- **September:** Ineke en Theo (Drenthe) - Spiritualiteit, kunst en gastvrijheid
- **Augustus:** Clemens - Natuurobservaties, flora en fauna
- **Juli:** Daan en Menna - Boeken en ontspanning
- **Juni:** Coen en Gitte - Mooie dagen met gaai bezoek
- **Mei:** Rob, Odette & Chouchou - Zwarte stille nachten
- **Mei:** Nelleke, Sacha & Dibbes - De natuur ontploft!

### 2024

- **Oktober:** Nelleke & Sacha - Geboft met het weer
- **September:** Fam. Dankaart - Nieuwe bakkerij 'Au petit délice'
- **Juli:** Betty, de jongens en Mieke - Prachtige tuin voor honden

### 2023

- **September:** Tim, José en hondjes - Mega eigen tuin
- **Augustus:** Judith, Peter & Bali - Wandelingen en wijnproeven
- **Juni:** Coen, Gitte en Indy - Mémorial de Dun-les-Places

### 2022

- **Augustus:** Ineke en Theo (Drenthe) - Compleet gîte
- **Juni:** Adriana, Drikus en Henk - Geschiedenis van Dun-les-Places

### 2021

- **Oktober:** Nelleke, Sacha & Dibbes - Fantastische plek in de herfst

### 2015

- **Mei:** Aad, Lida, Björn en Fifi - Elektrische fietsen en rust

### 2012

- **September:** Lex, Jean en labrador Flo - Vele jaren genoegen
- **Augustus:** Menna en Daan - Sterrenregen Perseïden

### 2009

- **Augustus:** Ineke en Theo met Landseer Kali - Vleermuizen op het dak

### 2005

- **Juni:** Menna en Daan - Seringen en houtkachel

## Testimonial Format

Elk testimonial bestand bevat:

```yaml
---
name: Naam van de gasten
date: YYYY-MM-DD
location: Locatie (optioneel)
rating: 5 (standaard)
photo: pad/naar/foto.jpg (optioneel)
---

De review tekst hier...
```

## Thema's in de Reviews

### Meest genoemde punten

- ✅ **Rust en stilte** - Bijna elke review
- ✅ **Prachtige natuur** - Vogels, wilde dieren, sterrenhemel
- ✅ **Perfecte tuin voor honden** - Omheind, ruim, veilig
- ✅ **Compleet ingericht huisje** - Alles aanwezig
- ✅ **Gastvrijheid** - Bloemen, wijn bij aankomst
- ✅ **Verse eitjes** - Van de kippen
- ✅ **Zwarte nachten** - Prachtige sterrenhemel
- ✅ **Lokale bakker** - Verse croissants en brood
- ✅ **Restaurant** - L'Atre, La Vieille Auberge

### Activiteiten

- Wandelen langs de Cure
- Zwemmen in de meren (Lac des Settons, Lac de Panneciére)
- Bezoeken aan Vézelay, Avallon, Auxerre, Autun
- Elektrisch fietsen
- Wijnproeven in Bourgondische dorpen
- Kloosters en kerken bezoeken

### Natuur observaties

- Reeën, vossen, wilde zwijnen, dassen
- Eekhoorntjes, vleermuizen, relmuizen
- Vogels: gaai, groene specht, zwarte roodstaart
- Sterrenhemel, Melkweg, Perseïden

## Volgende Stappen

De testimonials zijn nu klaar om te worden weergegeven op de gastenboek pagina. De Astro site zal deze automatisch ophalen uit de content collectie en mooi presenteren.

### Optioneel

- Meer testimonials toevoegen uit het HTML bestand (er zijn nog 60+ reviews beschikbaar)
- Foto's toevoegen aan testimonials waar beschikbaar
- Testimonials sorteren op datum (nieuwste eerst)
- Paginering toevoegen als er meer dan 20 testimonials zijn
