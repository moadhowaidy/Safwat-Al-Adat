# Safwat Al-Adat / صفوة العادات

Bilingual corporate website for Safwat Al-Adat for Food Products Import.

## How to run the site locally

1. Ensure you have Node.js installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL (typically `http://localhost:5173`) in your browser.

## TODO items to fill in

Search the codebase for `TODO:` comments, or update the following directly:

1. **Business Email:** Update `info@safwatadat.ly` to the final registered email in `src/data/company.ts`.
2. **Street Address:** Add the physical street address for Libya in both English and Arabic in `src/data/company.ts`.
3. **Logo File:** Replace the placeholder SVG in `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, and `src/components/home/Hero.tsx` with your transparent PNG/SVG logo once ready. Also replace `public/vite.svg` with your actual favicon.

## Placeholder images to replace

1. **Hero Image:** Update the `backgroundImage` URL in `src/components/home/Hero.tsx` with a high-quality food still-life image.
2. **About Section Image:** Update the `img src` URL in `src/components/home/AboutPreview.tsx` with a real company/warehouse image.
3. **Product Images:** Update the `imageUrl` properties for all products in `src/data/products.ts` with real product photography. Currently using `placehold.co` mockups.

---
Built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.
