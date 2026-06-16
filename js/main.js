/* =============================================================================
   GERMAN DEVELOPMENT PARTNERS — SITE LOGIC
   You normally never need to edit this file. Project content lives in
   data/projects.js. This file renders that data and runs the funnel + gallery.
   ============================================================================= */
(function () {
  "use strict";

  const data = window.GDP_DATA || { CURRENT_PROJECTS: [], COMPLETED_PROJECTS: [], COMPANY_STATS: [] };
  const IMG_PATH = "assets/img/";

  const STATUS_LABELS = {
    available:    "Available",
    selling:      "Now Selling",
    construction: "Under Construction",
    sold:         "Sold",
    coming:       "Coming Soon"
  };

  // Spec rows shown on a current-project card (label -> key in specs object)
  const SPEC_FIELDS = [
    ["Bedrooms",  "bedrooms"],
    ["Bathrooms", "bathrooms"],
    ["Style",     "style"],
    ["Location",  "location"],
    ["Land",      "landSize"],
    ["Building",  "buildingSize"],
    ["Ownership", "ownership"],
    ["Handover",  "handover"]
  ];

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  // Galleries registry for the lightbox, keyed by a generated id.
  const galleries = {};

  /* ----------------------- Render: stats bar ----------------------- */
  function renderStats() {
    const el = document.getElementById("stats-grid");
    if (!el) return;
    el.innerHTML = data.COMPANY_STATS.map(s => `
      <div class="stat">
        <div class="stat-value">${esc(s.value)}</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`).join("");
  }

  /* ----------------------- Render: current projects ----------------------- */
  function specRows(specs) {
    if (!specs) return "";
    const rows = SPEC_FIELDS
      .filter(([, key]) => specs[key] != null && String(specs[key]).trim() !== "")
      .map(([label, key]) => `
        <li><span>${esc(label)}</span><strong>${esc(specs[key])}</strong></li>`)
      .join("");
    return rows ? `<ul class="spec-grid">${rows}</ul>` : "";
  }

  function renderProjects() {
    const el = document.getElementById("project-list");
    if (!el) return;
    if (!data.CURRENT_PROJECTS.length) {
      el.innerHTML = `<p class="section-lead">New projects are being prepared. Book a call to hear about upcoming releases.</p>`;
      return;
    }

    // Two-up layout when there is more than one available project.
    el.classList.toggle("is-grid", data.CURRENT_PROJECTS.length > 1);

    el.innerHTML = data.CURRENT_PROJECTS.map((p, idx) => {
      const status = STATUS_LABELS[p.status] ? p.status : "selling";
      const hasImgs = p.images && p.images.length;
      const gid = "cur-" + idx;
      if (hasImgs) galleries[gid] = { title: p.name, description: p.description || "", images: p.images.slice() };

      const cover = hasImgs
        ? `<img src="${IMG_PATH}${esc(p.images[0])}" alt="${esc(p.name)}" loading="lazy">
           <span class="gallery-cue"><span class="cue-ico">⤢</span> View ${p.images.length} renderings</span>`
        : `<div class="placeholder-photo"><span>Add photos in data/projects.js</span></div>`;

      const media = hasImgs
        ? `<button type="button" class="project-media" data-gallery="${gid}"
                   aria-label="Open photo gallery for ${esc(p.name)}">
             <span class="status-badge status-${status}">${STATUS_LABELS[status]}</span>
             ${cover}
           </button>`
        : `<div class="project-media">
             <span class="status-badge status-${status}">${STATUS_LABELS[status]}</span>
             ${cover}
           </div>`;

      const price = p.priceFrom
        ? `<div class="project-price">from ${esc(p.priceFrom)} ${p.priceNote ? `<small>${esc(p.priceNote)}</small>` : ""}</div>`
        : "";
      const avail = p.availability ? `<div class="project-availability">${esc(p.availability)}</div>` : "";
      const desc = p.description ? `<p class="project-desc">${esc(p.description)}</p>` : "";
      const brochure = p.brochure
        ? `<a class="btn btn-ghost btn-brochure" href="${esc(p.brochure)}" download
              aria-label="Download the ${esc(p.name)} brochure (PDF)">
             <span class="cue-ico">⤓</span> Download brochure
           </a>`
        : "";

      return `
      <article class="project-card vcard" id="${esc(p.id)}">
        ${media}
        <div class="project-body">
          <span class="project-loc">${esc(p.location)}</span>
          <h3 class="project-name">${esc(p.name)}</h3>
          <p class="project-type">${esc(p.type)}</p>
          ${p.tagline ? `<p class="project-tagline">${esc(p.tagline)}</p>` : ""}
          ${specRows(p.specs)}
          ${desc}
          <div class="project-meta">
            ${price}
            ${avail}
          </div>
          ${p.investment ? `<p class="project-invest"><span>Investment</span>${esc(p.investment)}</p>` : ""}
          <div class="project-actions">
            <a href="#discovery" class="btn btn-primary">Enquire about ${esc(p.name)}</a>
            ${brochure}
          </div>
        </div>
      </article>`;
    }).join("");
  }

  /* ----------------------- Render: track record ----------------------- */
  function renderTrack() {
    const el = document.getElementById("track-grid");
    if (!el) return;
    el.innerHTML = data.COMPLETED_PROJECTS.map((p, idx) => {
      const hasImg = !!p.image;
      const gid = "done-" + idx;
      if (hasImg) galleries[gid] = { title: p.name, description: p.description || "", images: [p.image] };

      const media = hasImg
        ? `<img src="${IMG_PATH}${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">
           ${p.description ? `<span class="track-cue">View</span>` : ""}`
        : `<div class="placeholder-photo"><span>Photo</span></div>`;

      const clickable = hasImg ? `tabindex="0" role="button" data-gallery="${gid}"
           aria-label="View ${esc(p.name)}"` : "";

      return `
      <div class="track-card ${hasImg ? "is-clickable" : ""}" ${clickable}>
        <div class="track-media">${media}</div>
        <div class="track-info">
          <div class="track-name">${esc(p.name)}</div>
          <div class="track-loc">${esc(p.location)}</div>
        </div>
      </div>`;
    }).join("");
  }

  /* ----------------------- Lightbox gallery ----------------------- */
  function initLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    const imgEl   = lb.querySelector(".lb-img");
    const titleEl = lb.querySelector(".lb-title");
    const descEl  = lb.querySelector(".lb-desc");
    const countEl = lb.querySelector(".lb-count");
    const btnPrev = lb.querySelector(".lb-prev");
    const btnNext = lb.querySelector(".lb-next");
    const btnClose= lb.querySelector(".lb-close");

    let current = null, index = 0, lastFocus = null;

    function show(i) {
      const imgs = current.images;
      index = (i + imgs.length) % imgs.length;
      imgEl.src = IMG_PATH + imgs[index];
      imgEl.alt = current.title + " — image " + (index + 1);
      titleEl.textContent = current.title;
      descEl.textContent = current.description || "";
      const multi = imgs.length > 1;
      countEl.textContent = multi ? (index + 1) + " / " + imgs.length : "";
      btnPrev.hidden = btnNext.hidden = !multi;
    }
    function open(gid) {
      current = galleries[gid];
      if (!current) return;
      lastFocus = document.activeElement;
      show(0);
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      btnClose.focus();
    }
    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      imgEl.src = "";
      if (lastFocus) lastFocus.focus();
    }

    // Open from any element carrying data-gallery
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-gallery]");
      if (trigger) { e.preventDefault(); open(trigger.getAttribute("data-gallery")); }
    });
    // Keyboard activation for track cards
    document.addEventListener("keydown", (e) => {
      const t = e.target.closest("[data-gallery]");
      if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(t.getAttribute("data-gallery")); }
    });

    btnPrev.addEventListener("click", () => show(index - 1));
    btnNext.addEventListener("click", () => show(index + 1));
    btnClose.addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft" && !btnPrev.hidden) show(index - 1);
      else if (e.key === "ArrowRight" && !btnNext.hidden) show(index + 1);
    });
  }

  /* ----------------------- Mobile nav ----------------------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }));
  }

  /* ----------------------- Discovery funnel ----------------------- */
  function initFunnel() {
    const form = document.getElementById("discovery-form");
    if (!form) return;

    const steps = Array.from(form.querySelectorAll(".step")).filter(s => s.dataset.step !== "done");
    const successStep = form.querySelector('[data-step="done"]');
    const btnBack = document.getElementById("btn-back");
    const btnNext = document.getElementById("btn-next");
    const btnSubmit = document.getElementById("btn-submit");
    const bar = document.getElementById("funnel-bar");
    let current = 0;

    function show(i) {
      steps.forEach((s, idx) => s.classList.toggle("is-active", idx === i));
      btnBack.hidden = i === 0;
      btnNext.hidden = i === steps.length - 1;
      btnSubmit.hidden = i !== steps.length - 1;
      bar.style.width = ((i + 1) / steps.length * 100) + "%";
      current = i;
    }
    function validStep(i) {
      const inputs = steps[i].querySelectorAll("input, select, textarea");
      for (const inp of inputs) {
        if (!inp.checkValidity()) { inp.reportValidity(); return false; }
      }
      return true;
    }

    btnNext.addEventListener("click", () => { if (validStep(current)) show(current + 1); });
    btnBack.addEventListener("click", () => show(current - 1));

    form.addEventListener("submit", function (e) {
      if (!validStep(current)) { e.preventDefault(); return; }
      const action = form.getAttribute("action") || "";
      const isPlaceholder = action.includes("your-form-id") || action.trim() === "";
      if (isPlaceholder) {
        e.preventDefault();
        steps.forEach(s => s.classList.remove("is-active"));
        successStep.classList.add("is-active");
        form.querySelector(".funnel-controls").style.display = "none";
        bar.style.width = "100%";
        successStep.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    show(0);
  }

  /* ----------------------- Init ----------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderStats();
    renderProjects();
    renderTrack();
    initLightbox();
    initNav();
    initFunnel();
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
