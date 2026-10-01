# Aurora Cinema Experience

Design a modern, premium cinema website UI called "Аврора" (Aurora). This is a UI/visual design only: use realistic mock data, no backend. All interface text must be in Russian. PAGES (build all as separate routes with a shared navbar and footer): 1. Home / Афиша: hero banner with a featured film (large backdrop, title, genre, rating, "Купить билет" button), search bar, filters by genre and date, grid of film cards (poster, title, genre, age rating, session time pills). 2. Movie detail: big poster, description, trailer button, cast, duration, list of today's sessions grouped by date as clickable time pills with hall name and price. 3. Seat booking: interactive hall map with a "screen" at the top, seats in rows; states: free, selected, taken, VIP. Sticky side panel with selected seats, total price and "Оплатить" button. 4. Client profile: tabs for active tickets (with barcode/QR), booking history, payments, profile settings. 5. Cashier desk: fast session search, seat selection, sell/refund ticket, payment summary. Dense, efficient, keyboard-friendly layout. 6. Ticket controller: big barcode input field, large green "Valid" / red "Invalid" result card with ticket details. 7. Manager dashboard: metric cards (revenue, tickets sold, hall occupancy), sales line chart, top films bar chart, tables for films/halls/sessions with add/edit buttons. 8. Login and registration pages. STYLE: - Dark cinematic theme, premium and clean, not generic. Subtle gradients, soft glow on hover, smooth transitions, generous spacing. - Color palette as CSS variables in one place: background #14151a, surface #1f212b, border #31353f, text #f4f3f0, muted text #9195a3, primary accent red #e5304c, secondary accent gold #eeb84a. (Change these if you can suggest a noticeably better palette.) - Fonts: Bebas Neue for headings and film titles, Inter for body and UI. - Rounded cards (14px), pill-shaped session buttons (fully rounded), colored status badges. - Fully responsive, mobile-first, with a burger menu on mobile. TECH REQUIREMENTS (important, the design will later be ported to Django templates + Bootstrap-like CSS): - Keep the design system in CSS variables and reusable components (FilmCard, SessionPill, Seat, StatCard, Badge, Navbar). - Use simple semantic HTML structure and avoid heavy animation libraries or complex client-side state. - Use placeholder images from public URLs for posters. 
сделай шапку компактнее», «поменяй акцентный цвет на синий

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/81292fa0-aa1b-49ab-93ae-688c6f4e593e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
