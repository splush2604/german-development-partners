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

   NOTE: values marked  "—"  or  // TODO  still need to be confirmed by you.
   Clicking a current project's photo opens a full gallery of all its renderings.
   ============================================================================= */

const CURRENT_PROJECTS = [
  {
    id: "ayora-villas",
    name: "Ayora Villas",
    location: "Cemagi — Pink Zone",
    type: "3–4 Bedroom Luxury Villas",
    status: "selling",
    priceFrom: "€350,000",
    priceNote: "fully furnished & turnkey",
    tagline: "Legal short-term rental villas in Canggu's Green Zone.",

    // Short description — what exactly was/is built:
    description:
      "Standalone luxury villas in Cemagi's Pink Zone (tourism-designated, " +
      "ideal for legal short-term rental), designed for both short-term rental " +
      "and luxury living. 167 m² of living space, available " +
      "as a 3-bedroom layout with pool area or a 4-bedroom configuration. " +
      "Cathedral-ceiling living opens to a private pool and garden — the plot " +
      "can be extended up to 4 Are for a larger garden. Private sauna, premium " +
      "European windows and high-end natural-material finishes, delivered fully " +
      "furnished and turnkey within 12 months, with weekly progress updates.",

    // Key facts shown as a spec grid on the card:
    specs: {
      bedrooms: "3 or 4",
      bathrooms: "3",
      style: "Contemporary tropical",
      location: "Cemagi — Pink Zone",
      landSize: "2.6–4 Are",
      buildingSize: "167 m²",
      ownership: "Leasehold · 29 yrs (extendable)",
      handover: "Within 12 months",
      rental: "Commercial licence possible (legal STR)"
    },

    highlights: [
      "Designed for short-term rental & luxury living",
      "Pink Zone (tourism) — ideal for legal short-term rental",
      "Private sauna · fully furnished · handover within 12 months"
    ],
    availability: "1 villa already sold — 1 build slot still available.",
    brochure: "assets/brochures/ayora-villas.pdf",
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
    location: "Ungasan",
    type: "Townhouses · 6 units",
    status: "available",
    priceFrom: "€220,000",
    priceNote: "rooftop terrace option available",
    tagline: "Six contemporary townhouses — only four remaining.",

    description:
      "A boutique collection of six contemporary townhouses in Ungasan — four " +
      "still available. Designed for effortless, practical living and pared back " +
      "to the essentials, with no unnecessary frills. 80 m² of building on an " +
      "80–100 m² plot, with an optional rooftop terrace — an affordable entry " +
      "into the Bali property market.",

    specs: {
      bedrooms: "",                    // TODO: confirm (left blank = hidden)
      bathrooms: "",                   // TODO: confirm (left blank = hidden)
      style: "Contemporary · pared-back",
      location: "Ungasan",
      landSize: "80–100 m²",
      buildingSize: "80 m²",
      ownership: "Leasehold (extendable)",
      handover: "",                    // TODO: confirm (left blank = hidden)
      rental: "Rooftop terrace option available"
    },

    highlights: [
      "Effortless, practical living — built for expats",
      "Pared back to the essentials, no unnecessary frills",
      "Optional rooftop terrace · affordable entry to the Bali market"
    ],
    availability: "2 of 6 sold — 4 units still available.",
    brochure: "assets/brochures/noru-townhouses.pdf",
    images: [
      "noru-1.jpg",  // exterior — the townhouses
      "noru-2.jpg",  // pool & daybed
      "noru-3.jpg",  // living room, round window
      "noru-4.jpg",  // bedroom with garden view
      "noru-5.jpg",  // kitchen & dining
      "noru-6.jpg"   // bathroom
    ]
  }

  // ---- ADD YOUR NEXT CURRENT PROJECT BELOW (copy a block above) ----
];


/* ---------------------------------------------------------------------------
   COMPLETED / REFERENCE PROJECTS
   ---------------------------------------------------------------------------
   Delivered projects shown as a track-record gallery.
   - Add an "image" file name to show a photo (leave "" for an elegant placeholder).
   - Add a "description" (what was built) — for projects with a photo, clicking
     the card opens it enlarged together with this description.
   --------------------------------------------------------------------------- */

const COMPLETED_PROJECTS = [
  // --- Delivered projects with photos (shown first) ---
  {
    name: "Keanu & Kimono Villas", location: "Bali", image: "keanu.jpg",
    description: "Two adjoining contemporary villas with timber-clad upper " +
      "volumes, full-height glazing and a landscaped entry — built to German " +
      "quality standards."
  },
  {
    name: "Villa Ivan", location: "Bali", image: "ivan.jpg",
    description: "A warm, natural-material villa with a vaulted timber-beam " +
      "living and kitchen space, arched steel windows and a serene main suite."
  },
  {
    name: "Villa Carlos", location: "Padonan", image: "carlos.jpg",
    description: "A modern two-storey villa in Padonan wrapped around a private " +
      "pool deck, with a poolside pavilion and lush tropical planting."
  },
  {
    name: "Dylan Villa", location: "Bali", image: "dylan.jpg",
    description: "A compact, elegant villa with an arched open-plan living " +
      "pavilion opening onto a private plunge pool and stone terrace."
  },
  {
    name: "Unikorn Villas", location: "Bali", image: "unikorn.jpg",
    description: "Single-storey villas with a floating timber roof, dramatic " +
      "evening lighting and a private walled garden entrance."
  },

  // --- Delivered (photos available on request — add an image file name) ---
  { name: "Villa Rob",             location: "Bali",    image: "", description: "" },
  { name: "Buduk Project",         location: "Buduk",   image: "", description: "" },
  { name: "Apartments · Piece of Paradise", location: "Cemagi", image: "", description: "" },
  { name: "Townhouses · Piece of Paradise", location: "Cemagi", image: "", description: "" },
  { name: "Studio · Piece of Paradise",     location: "Cemagi", image: "", description: "" },
  { name: "Uluwatu",               location: "Uluwatu", image: "", description: "" },
  { name: "Project Bingin",        location: "Bingin",  image: "", description: "" },
  { name: "Project Laszlo",        location: "Bali",    image: "", description: "" }
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
