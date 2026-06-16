/* =============================================================================
   GERMAN DEVELOPMENT PARTNERS — SITE LOGIC
   You normally never need to edit this file. Project content lives in
   data/projects.js. This file just renders that data and runs the funnel.
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

  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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
  function mediaFor(images, altBase) {
    if (images && images.length) {
      const imgs = images.map((src, i) =>
        `<img src="${IMG_PATH}${esc(src)}" alt="${esc(altBase)} — photo ${i + 1}" loading="lazy">`).join("");
      return `<div class="project-gallery">${imgs}</div>`;
    }
    return `<div class="placeholder-photo"><span>Add photos in data/projects.js</span></div>`;
  }

  function renderProjects() {
    const el = document.getElementById("project-list");
    if (!el) return;
    if (!data.CURRENT_PROJECTS.length) {
      el.innerHTML = `<p class="section-lead">New projects are being prepared. Book a call to hear about upcoming releases.</p>`;
      return;
    }
    el.innerHTML = data.CURRENT_PROJECTS.map(p => {
      const status = STATUS_LABELS[p.status] ? p.status : "selling";
      const highlights = (p.highlights || []).map(h => `<li>${esc(h)}</li>`).join("");
      const price = p.priceFrom
        ? `<div class="project-price">from ${esc(p.priceFrom)} ${p.priceNote ? `<small>${esc(p.priceNote)}</small>` : ""}</div>`
        : "";
      const avail = p.availability ? `<div class="project-availability">${esc(p.availability)}</div>` : "";
      return `
      <article class="project-card" id="${esc(p.id)}">
        <div class="project-media">
          <span class="status-badge status-${status}">${STATUS_LABELS[status]}</span>
          ${mediaFor(p.images, p.name)}
        </div>
        <div class="project-body">
          <span class="project-loc">${esc(p.location)}</span>
          <h3 class="project-name">${esc(p.name)}</h3>
          <p class="project-type">${esc(p.type)}</p>
          ${p.tagline ? `<p class="project-tagline">${esc(p.tagline)}</p>` : ""}
          <ul class="project-highlights">${highlights}</ul>
          <div class="project-meta">
            ${price}
            ${avail}
          </div>
          <a href="#discovery" class="btn btn-primary project-cta">Enquire about ${esc(p.name)}</a>
        </div>
      </article>`;
    }).join("");
  }

  /* ----------------------- Render: track record ----------------------- */
  function renderTrack() {
    const el = document.getElementById("track-grid");
    if (!el) return;
    el.innerHTML = data.COMPLETED_PROJECTS.map(p => {
      const media = p.image
        ? `<img src="${IMG_PATH}${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`
        : `<div class="placeholder-photo"><span>Photo</span></div>`;
      return `
      <div class="track-card">
        <div class="track-media">${media}</div>
        <div class="track-info">
          <div class="track-name">${esc(p.name)}</div>
          <div class="track-loc">${esc(p.location)}</div>
        </div>
      </div>`;
    }).join("");
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

      // If a real form endpoint is configured, let it POST normally.
      const action = form.getAttribute("action") || "";
      const isPlaceholder = action.includes("your-form-id") || action.trim() === "";

      if (isPlaceholder) {
        // No backend yet: show the in-page confirmation instead of erroring.
        e.preventDefault();
        steps.forEach(s => s.classList.remove("is-active"));
        successStep.classList.add("is-active");
        form.querySelector(".funnel-controls").style.display = "none";
        bar.style.width = "100%";
        successStep.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      // else: real submit proceeds (e.g. Formspree handles the redirect/thanks).
    });

    show(0);
  }

  /* ----------------------- Init ----------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderStats();
    renderProjects();
    renderTrack();
    initNav();
    initFunnel();
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
