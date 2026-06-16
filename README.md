# German Development Partners — Website

Marketing landing page for German Development Partners, a German-led real estate
development firm operating in Bali and Lombok. The whole page is designed to
funnel visitors toward a **Discovery Call**.

Built as a single-page, dependency-free site (plain HTML / CSS / JavaScript — no
build step required).

## Structure

```
index.html         The page
css/styles.css     Design system (brand colors are CSS variables at the top)
js/main.js         Renders projects from data + runs the funnel form
data/projects.js   ← YOU EDIT THIS to add/update projects (no markup changes)
assets/img/        Logo, hero image and project photos go here
```

## Add or update a project (no code changes needed)

Open `data/projects.js` and copy one block inside `CURRENT_PROJECTS`:

```js
{
  id: "your-project-id",
  name: "Project Name",
  location: "Canggu",
  type: "3 Bedroom Villas",
  status: "selling",          // selling | construction | sold | available | coming
  priceFrom: "€450,000",
  priceNote: "fully furnished & turnkey",
  tagline: "One-line hook.",
  highlights: ["Point one", "Point two"],
  availability: "2 units available.",
  images: ["your-photo-1.jpg"] // drop files in assets/img/
}
```

- Mark a project as sold: change `status` to `"sold"`.
- Completed/reference projects live in `COMPLETED_PROJECTS` in the same file.
- Top-line stats live in `COMPANY_STATS`.

## Run locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Placeholders to replace before launch

- **Logo & brand colors** — add `assets/img/logo.svg` (see commented `<img>` in
  `index.html`) and update the color variables at the top of `css/styles.css`.
- **Hero & project photos** — add files to `assets/img/` and reference them.
- **Contact** — email & phone in the footer of `index.html`.
- **Calendly link** — replace `https://calendly.com/your-link/discovery-call`.
- **Form endpoint** — set the `<form action="...">` in `index.html` to a
  Formspree (or similar) URL so funnel submissions arrive by email. Until then
  the form shows an in-page confirmation only.

## Deploy

Any static host works (the site is just static files):

- **Netlify** — drag the folder in, or connect this repo.
- **GitHub Pages** — enable Pages on the `main` branch, root folder.
- **Vercel** — import the repo, no build command needed.
