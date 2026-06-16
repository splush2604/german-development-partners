/* =============================================================================
   GERMAN DEVELOPMENT PARTNERS — PROJECT DATA
   =============================================================================

   THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD/UPDATE PROJECTS.
   The website builds all project cards automatically from the data below.

   ---------------------------------------------------------------------------
   HOW TO ADD A NEW CURRENT PROJECT (for sale):
   ---------------------------------------------------------------------------
   1. Copy one full { ... } block inside CURRENT_PROJECTS.
   2. Paste it and change the values.
   3. Drop your photos into  assets/img/  and reference the file names.
   4. Save. Done — the new card appears on the site.

   STATUS options (controls the colored label on the card):
     "available"   -> green   "Available"
     "selling"     -> gold    "Now Selling"
     "construction"-> blue    "Under Construction"
     "sold"        -> grey     "Sold"
     "coming"      -> purple  "Coming Soon"

   To mark a project sold, just change its "status" to "sold".
   ============================================================================= */

const CURRENT_PROJECTS = [
  {
    id: "ayora-villas",
    name: "Ayora Villas",
    location: "Canggu — Green Zone",
    type: "3–4 Bedroom Luxury Villas",
    status: "selling",              // see STATUS options above
    priceFrom: "€350,000",
    priceNote: "fully furnished & turnkey",
    // Short headline shown under the title:
    tagline: "Legal short-term rental villas in Canggu's Green Zone.",
    // Bullet highlights shown on the card:
    highlights: [
      "Green Zone location — commercial licence possible for 100% legal short-term rentals",
      "Private sauna, premium windows & high-end finishes throughout",
      "Dedicated project manager with weekly progress updates",
      "Payment plan tied to construction milestones (~1 year build)"
    ],
    // Availability note:
    availability: "1 villa already sold — 1 build slot still available.",
    // Photos: drop files in assets/img/ and list them here.
    // Leave the array empty [] to show an elegant placeholder instead.
    images: [
      "ayora-1.jpg",  // pool & villa exterior
      "ayora-2.jpg",  // grand living / dining
      "ayora-3.jpg",  // living room, cathedral window
      "ayora-4.jpg",  // master bedroom with pool view
      "ayora-5.jpg",  // private sauna & gym
      "ayora-6.jpg"   // ensuite bathroom
    ]
  },

  {
    id: "noru-townhouses",
    name: "Noru Townhouses",
    location: "Bali",                 // TODO: confirm exact area (e.g. Canggu / Uluwatu)
    type: "Townhouses · 6 units",
    status: "available",              // see STATUS options above
    priceFrom: "€220,000",
    priceNote: "rooftop terrace option available",
    tagline: "Six contemporary townhouses — only four remaining.",
    highlights: [
      "Rooftop terrace option available",
      "Private plunge pool & lush tropical courtyard",
      "Open-plan living with floor-to-ceiling glazing",
      "Contemporary design with premium finishes"
    ],
    availability: "2 of 6 sold — 4 units still available.",
    images: [
      "noru-1.jpg",  // exterior — the townhouses
      "noru-2.jpg",  // pool & daybed
      "noru-3.jpg",  // living room, round window
      "noru-4.jpg",  // bedroom with garden view
      "noru-5.jpg",  // kitchen & dining
      "noru-6.jpg"   // bathroom
    ]
  }

  // ---- ADD YOUR NEXT CURRENT PROJECT BELOW (copy the block above) ----
  // ,{
  //   id: "your-project-id",
  //   name: "Project Name",
  //   location: "Area",
  //   type: "e.g. 2 Bedroom Villas",
  //   status: "construction",
  //   priceFrom: "€000,000",
  //   priceNote: "fully furnished & turnkey",
  //   tagline: "One-line hook.",
  //   highlights: ["Point one", "Point two"],
  //   availability: "X units available.",
  //   images: []
  // }
];


/* ---------------------------------------------------------------------------
   COMPLETED / REFERENCE PROJECTS
   ---------------------------------------------------------------------------
   Simple list of delivered projects, shown as a track-record gallery.
   Add an image file name to show a photo, or leave image: "" for a placeholder.
   --------------------------------------------------------------------------- */

const COMPLETED_PROJECTS = [
  // --- Delivered projects with photos (shown first) ---
  { name: "Keanu & Kimono Villas", location: "Bali",    image: "keanu.jpg" },
  { name: "Villa Ivan",            location: "Bali",    image: "ivan.jpg" },
  { name: "Villa Carlos",          location: "Padonan", image: "carlos.jpg" },
  { name: "Dylan Villa",           location: "Bali",    image: "dylan.jpg" },
  { name: "Unikorn Villas",        location: "Bali",    image: "unikorn.jpg" },

  // --- Delivered (photos available on request — drop a file name to add one) ---
  { name: "Villa Rob",             location: "Bali",    image: "" },
  { name: "Buduk Project",         location: "Buduk",   image: "" },
  { name: "Apartments · Piece of Paradise", location: "Cemagi", image: "" },
  { name: "Townhouses · Piece of Paradise", location: "Cemagi", image: "" },
  { name: "Studio · Piece of Paradise",     location: "Cemagi", image: "" },
  { name: "Uluwatu",               location: "Uluwatu", image: "" },
  { name: "Project Bingin",        location: "Bingin",  image: "" },
  { name: "Project Laszlo",        location: "Bali",    image: "" }
];


/* ---------------------------------------------------------------------------
   COMPANY-WIDE STATS (the trust bar under the hero)
   --------------------------------------------------------------------------- */

const COMPANY_STATS = [
  { value: "15",     label: "Projects delivered" },
  { value: "~80",    label: "Units built" },
  { value: "2021",   label: "Building in Bali since" },
  { value: "2",      label: "Locations — Bali & Lombok" }
];

// Make data available to the renderer (do not edit):
window.GDP_DATA = { CURRENT_PROJECTS, COMPLETED_PROJECTS, COMPANY_STATS };
