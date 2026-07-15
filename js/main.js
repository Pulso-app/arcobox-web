/* ═══════════════════════════════════════════════════════
   ARCOBOX — lógica del sitio
   Idiomas, proyectos, filtros, menú móvil y animaciones.
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const LANG_KEY = "arcobox-lang";
  let currentLang = "es";
  let currentFilter = "all";

  /* ── i18n ── */
  function t(path) {
    return path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[currentLang]);
  }

  function detectLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && I18N[saved]) return saved;
    const nav = (navigator.language || "es").toLowerCase();
    if (nav.startsWith("ca")) return "ca";
    if (nav.startsWith("es")) return "es";
    return "en";
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.title = t("meta.title");
    const meta = $('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.desc"));

    $$("[data-i18n]").forEach((el) => {
      const val = t(el.dataset.i18n);
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-html]").forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (typeof val === "string") el.innerHTML = val;
    });

    $$(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

    buildMarquee();
    renderProjects();
    renderRights();
  }

  /* ── marquesina ── */
  function buildMarquee() {
    const track = $("#marquee-track");
    if (!track) return;
    const items = t("marquee") + " · ";
    track.innerHTML = "";
    for (let i = 0; i < 2; i++) {
      const span = document.createElement("span");
      span.textContent = (items + items + items).trim() + " ·";
      span.style.paddingRight = "0.6em";
      track.appendChild(span);
    }
  }

  /* ── proyectos ── */
  function placeholderArt(i) {
    // Plano de relleno: fachada esquemática con una ventana "encendida".
    const cols = 3 + (i % 2);
    const rows = 3;
    const w = 400, h = 300;
    const bx = 70, by = 40, bw = w - 140, bh = h - 80;
    const cw = bw / cols, ch = bh / rows;
    let windows = "";
    let n = 0;
    const lit = i % (cols * rows);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = bx + c * cw + cw * 0.24;
        const y = by + r * ch + ch * 0.2;
        const wwidth = cw * 0.52, wheight = ch * 0.6;
        const fill = n === lit ? 'fill="var(--accent)"' : 'fill="none"';
        const arch = i % 3 === 0
          ? `<path d="M ${x} ${y + wheight} V ${y + wheight * 0.35} Q ${x + wwidth / 2} ${y - wheight * 0.15} ${x + wwidth} ${y + wheight * 0.35} V ${y + wheight}" ${fill} stroke="var(--ink)" stroke-width="1.4"/>`
          : `<rect x="${x}" y="${y}" width="${wwidth}" height="${wheight}" ${fill} stroke="var(--ink)" stroke-width="1.4"/>`;
        windows += arch;
        n++;
      }
    }
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="${w}" height="${h}" fill="var(--paper)"/>
      <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <line x1="${bx - 26}" y1="${by + bh}" x2="${bx + bw + 26}" y2="${by + bh}" stroke="var(--ink)" stroke-width="2"/>
      <line x1="${bx - 10}" y1="${by}" x2="${bx + bw + 10}" y2="${by}" stroke="var(--ink)" stroke-width="2.4"/>
      ${windows}
      <text x="${w - 18}" y="${h - 14}" font-family="'Space Mono', monospace" font-size="12" text-anchor="end" fill="var(--ink)" opacity="0.55">A-${String(i + 1).padStart(2, "0")}</text>
    </svg>`;
  }

  function renderProjects() {
    const grid = $("#projects-grid");
    const empty = $("#projects-empty");
    if (!grid) return;

    const list = PROJECTS.filter((p) => currentFilter === "all" || p.cat === currentFilter);
    grid.innerHTML = "";

    list.forEach((p, i) => {
      const li = document.createElement("li");
      li.className = "project-card";

      const fig = document.createElement("figure");
      if (p.image) {
        const img = document.createElement("img");
        img.src = p.image;
        img.alt = p.title[currentLang] || p.title.es;
        img.loading = "lazy";
        fig.appendChild(img);
      } else {
        fig.innerHTML = placeholderArt(PROJECTS.indexOf(p));
      }
      li.appendChild(fig);

      const info = document.createElement("div");
      info.className = "pc-info";

      const h3 = document.createElement("h3");
      h3.textContent = p.title[currentLang] || p.title.es;
      info.appendChild(h3);

      const meta = document.createElement("p");
      meta.className = "pc-meta";
      meta.textContent = `${p.location} · ${p.year}`;
      info.appendChild(meta);

      const tag = document.createElement("span");
      tag.className = "pc-tag";
      tag.textContent = t(`projects.cats.${p.cat}`) || p.cat;
      info.appendChild(tag);

      li.appendChild(info);

      if (p.sample) {
        const stamp = document.createElement("span");
        stamp.className = "pc-stamp";
        stamp.textContent = t("projects.sample");
        li.appendChild(stamp);
      }

      grid.appendChild(li);
    });

    empty.hidden = list.length > 0;
  }

  /* ── pie / cajetín ── */
  function renderRights() {
    const year = new Date().getFullYear();
    const rights = $("#tb-rights");
    if (rights) rights.textContent = t("tb.rights").replace("{year}", year);
  }

  function renderDate() {
    const el = $("#tb-date");
    if (!el) return;
    const d = new Date();
    el.textContent = `${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
  }

  /* ── contacto ── */
  function renderContact() {
    const mapsLink = $("#maps-link");
    if (mapsLink) mapsLink.href = SITE_CONFIG.mapsUrl;

    const emailEl = $("#contact-email");
    if (emailEl && SITE_CONFIG.email) {
      emailEl.classList.remove("pending");
      emailEl.removeAttribute("data-i18n");
      emailEl.innerHTML = `<a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>`;
    }
    const phoneEl = $("#contact-phone");
    if (phoneEl && SITE_CONFIG.phone) {
      phoneEl.classList.remove("pending");
      phoneEl.removeAttribute("data-i18n");
      phoneEl.innerHTML = `<a href="tel:${SITE_CONFIG.phone.replace(/\s/g, "")}">${SITE_CONFIG.phone}</a>`;
    }
  }

  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!SITE_CONFIG.email) {
        alert(t("form.noEmail"));
        return;
      }
      const data = new FormData(form);
      const body = `${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`;
      const url = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(t("form.subject"))}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    });
  }

  /* ── filtros ── */
  function initFilters() {
    $$(".filters button").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        $$(".filters button").forEach((b) => b.classList.toggle("active", b === btn));
        renderProjects();
      });
    });
  }

  /* ── idioma ── */
  function initLang() {
    $$(".lang button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  /* ── menú móvil ── */
  function initBurger() {
    const burger = $("#burger");
    const nav = $("#nav");
    if (!burger || !nav) return;
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("a", nav).forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ── animación de entrada ── */
  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ── arranque ── */
  document.addEventListener("DOMContentLoaded", () => {
    renderDate();
    renderContact();
    initLang();
    initFilters();
    initForm();
    initBurger();
    applyLang(detectLang());
    initReveal();
  });
})();
