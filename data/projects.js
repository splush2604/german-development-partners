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
    type: "3-Bedroom Villa · optional 4th",
    status: "selling",
    priceFrom: "€330,000",
    priceNote: "fully furnished & equipped",
    tagline: "A private sanctuary in Cemagi — 300 m to the beach, legal short-term rental.",

    // Short description — what exactly was/is built:
    description:
      "A compact luxury villa in the quiet village of Cemagi, just 300 m from " +
      "the coast and optimised for holiday living and legal short-term rental. " +
      "Its heart is a dramatic 47 m² double-height living and dining area under " +
      "a pitched roof with triangular skylight. Three 18 m² en-suite bedrooms " +
      "(two master suites upstairs, a pool-access guest room below), an " +
      "integrated Finnish sauna and fitness studio opening to the pool deck, and " +
      "a private pool framed by tropical planting. Pitched slate roof and natural " +
      "stone facades, delivered fully furnished within 12 months — with the spa " +
      "convertible into an optional fourth bedroom.",

    // Key facts shown as a spec grid on the card:
    specs: {
      bedrooms: "3 (optional 4th)",
      bathrooms: "3 en-suite + guest",
      style: "Contemporary tropical",
      location: "Cemagi — Pink Zone",
      landSize: "2.6–4 Are",
      buildingSize: "167 m²",
      ownership: "Leasehold · 29 yrs (extendable)",
      handover: "Within 12 months",
      rental: "Pink Zone (commercial) — legal short-term rental"
    },

    highlights: [
      "Integrated Finnish sauna & fitness studio opening to the pool deck",
      "Double-height 47 m² living under a triangular skylight",
      "Pink Zone (commercial) — legally permitted short-term rental",
      "300 m to the beach · fully furnished · handover within 12 months"
    ],
    availability: "One villa already sold — the final unit is available now.",
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
    type: "2-Bed Townhouses · 6 units",
    status: "available",
    priceFrom: "€220,000",
    priceNote: "semi-furnished",
    tagline: "Six private townhouses in Ungasan — effortless living, exceptional value.",

    description:
      "Six private townhouses in a gated, dead-end setting in Ungasan — minutes " +
      "from Bingin and Uluwatu and a short drive to the airport. Designed for " +
      "effortless expat living: a modern terrazzo kitchen with integrated wine " +
      "cooler, a sunken living area with floor-to-ceiling glass opening to the " +
      "pool, two bedrooms (one perfect as a home office), and a semi-open " +
      "bathroom framed by a tropical garden. A private pool with sun deck and " +
      "daybed alcove completes the retreat. 100 m² of living on a 120 m² plot, " +
      "semi-furnished and built in 12 months.",

    specs: {
      bedrooms: "2 (1 as office)",
      bathrooms: "1 (semi-open)",
      style: "Contemporary · pared-back",
      location: "Ungasan",
      landSize: "1.2 Are (120 m²)",
      buildingSize: "100 m² living",
      ownership: "Leasehold (extendable)",
      handover: "12 months",
      rental: "Ideal long-term expat rental"
    },

    highlights: [
      "Private pool with sun deck & daybed alcove",
      "Sunken living with floor-to-ceiling glass · terrazzo kitchen with wine cooler",
      "2 bedrooms (one ideal as a home office) + storage room",
      "Gated dead-end road — 5 min to Bingin, 8 min to Uluwatu"
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
