/**
 * FleurCode — Main JavaScript
 * Menangani interaksi & animasi halaman (konten sudah statis di index.html).
 */

(function () {
  "use strict";

  // ============================================================
  // Theme toggle
  // ============================================================
  function initTheme() {
    const toggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    if (!toggle) return;

    // Default: system preference
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("fleurcode-theme");
    const isDark = savedTheme ? savedTheme === "dark" : systemDark;

    if (isDark) {
      html.setAttribute("data-theme", "dark");
      toggle.setAttribute("aria-pressed", "true");
    } else {
      html.setAttribute("data-theme", "light");
      toggle.setAttribute("aria-pressed", "false");
    }

    toggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("fleurcode-theme", next);
      toggle.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    });

    // Listen to system changes if no saved preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("fleurcode-theme")) {
        const next = e.matches ? "dark" : "light";
        html.setAttribute("data-theme", next);
        toggle.setAttribute("aria-pressed", e.matches ? "true" : "false");
      }
    });
  }

  // ============================================================
  // Mobile menu
  // ============================================================
  function initMobileMenu() {
    const hamburger = document.getElementById("nav-hamburger");
    const menu = document.getElementById("nav-menu");
    const links = menu ? menu.querySelectorAll(".nav__link") : [];

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("nav__menu--open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("nav__menu--open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ============================================================
  // Scrollspy: highlight nav link based on visible section
  // ============================================================
  function initScrollspy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("nav__link--active", link.getAttribute("data-section") === id);
            });
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ============================================================
  // Header shadow on scroll
  // ============================================================
  function initHeaderScroll() {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 10) {
          header.classList.add("header--scrolled");
        } else {
          header.classList.remove("header--scrolled");
        }
      },
      { passive: true }
    );
  }

  // ============================================================
  // Scroll reveal animations
  // ============================================================
  function initReveal() {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    // Fallback: kalau IntersectionObserver tidak didukung, tampilkan semua
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => {
        el.classList.add("reveal--visible", "reveal-left--visible", "reveal-right--visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // stagger delay untuk item dalam container yang sama
            const delay = index < 5 ? index * 60 : 300;
            setTimeout(() => {
              if (entry.target.classList.contains("reveal-left")) {
                entry.target.classList.add("reveal-left--visible");
              } else if (entry.target.classList.contains("reveal-right")) {
                entry.target.classList.add("reveal-right--visible");
              } else {
                entry.target.classList.add("reveal--visible");
              }
            }, delay);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Safety net: paksa tampilkan semua elemen setelah 4 detik
    // (mencegah konten terkunci tersembunyi kalau observer gagal)
    setTimeout(() => {
      revealElements.forEach((el) => {
        el.classList.add("reveal--visible", "reveal-left--visible", "reveal-right--visible");
      });
    }, 4000);
  }

  // ============================================================
  // Process card spotlight — reached steps stay lit, current card in viewport is bright
  // ============================================================
  function initProcessCardLighting() {
    const cards = document.querySelectorAll(".process-card");
    if (!cards.length) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-lit"));
      return;
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;

    // mark cards already scrolled past the viewport center as reached (cumulative)
    cards.forEach((card) => {
      const r = card.getBoundingClientRect();
      if (r.top + r.height / 2 < vh / 2) {
        card.classList.add("is-lit");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-lit"); // reached steps stay lit (opacity 1)
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    cards.forEach((card) => observer.observe(card));
  }

  // ============================================================
  // FAQ Accordion
  // ============================================================
  function initFAQ() {
    const faqList = document.getElementById("faq-list");
    if (!faqList) return;

    const answers = faqList.querySelectorAll(".faq__answer");
    answers.forEach((answer) => {
      answer.style.maxHeight = "0px";
    });

    faqList.addEventListener("click", (e) => {
      const button = e.target.closest(".faq__question");
      if (!button) return;

      const item = button.closest(".faq__item");
      const isOpen = item.classList.contains("faq__item--open");

      // Close all
      faqList.querySelectorAll(".faq__item--open").forEach((openItem) => {
        openItem.classList.remove("faq__item--open");
        openItem.querySelector(".faq__question").setAttribute("aria-expanded", "false");
        const a = openItem.querySelector(".faq__answer");
        if (a) a.style.maxHeight = "0px";
      });

      // Open clicked if it was closed (animate to exact content height)
      if (!isOpen) {
        item.classList.add("faq__item--open");
        button.setAttribute("aria-expanded", "true");
        const a = item.querySelector(".faq__answer");
        if (a) a.style.maxHeight = a.scrollHeight + "px";
      }
    });

    // keep an open answer correctly sized if the viewport reflows
    window.addEventListener("resize", () => {
      const open = faqList.querySelector(".faq__item--open .faq__answer");
      if (open) open.style.maxHeight = open.scrollHeight + "px";
    });
  }

  // ============================================================
  // Floating WA tooltip auto-show once
  // ============================================================
  function initFloatingWA() {
    const btn = document.getElementById("floating-wa");
    if (!btn) return;

    setTimeout(() => {
      btn.classList.add("floating-wa--show-tooltip");
      setTimeout(() => {
        btn.classList.remove("floating-wa--show-tooltip");
      }, 4000);
    }, 3000);
  }

  // ============================================================
  // Timeline glow — progress line fills as the section scrolls
  // ============================================================
  function initTimelineGlow() {
    const grid = document.getElementById("process-timeline");
    if (!grid) return;
    const section = grid.closest(".process");
    if (!section) return;

    let ticking = false;

    function update() {
      const rect = grid.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = vh / 2;
      // progress anchored to the viewport center, not the bottom
      let p = (center - rect.top) / rect.height;
      p = Math.max(0, Math.min(1, p));
      grid.style.setProperty("--timeline-progress", (p * 100).toFixed(2) + "%");
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  // ============================================================
  // ============================================================
  // Portfolio cover-flow: center card scales up, 3 visible at once
  // ============================================================
  function initPortfolioCoverFlow() {
    const scroller = document.querySelector(".portfolio__scroller");
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll(".portfolio-card"));
    if (!cards.length) return;

    const setCenter = (card) => {
      cards.forEach((c) => c.classList.remove("is-center"));
      card.classList.add("is-center");
    };

    // Start centered on a middle card so 3 images are visible immediately
    const startIndex = Math.floor((cards.length - 1) / 2);
    requestAnimationFrame(() => {
      const card = cards[startIndex];
      scroller.scrollLeft = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;
      setCenter(card);
    });

    // Mark the card crossing the horizontal center line as active.
    // rootMargin shrinks left/right by 50%, leaving a center vertical strip.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCenter(entry.target);
        });
      },
      { root: scroller, rootMargin: "0px -50% 0px -50%", threshold: 0 }
    );
    cards.forEach((c) => io.observe(c));
  }

  // Initialize everything
  // ============================================================
  function init() {
    initTheme();
    initMobileMenu();
    initScrollspy();
    initHeaderScroll();
    initReveal();
    initProcessCardLighting();
    initTimelineGlow();
    initFAQ();
    initFloatingWA();
    initPortfolioCoverFlow();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
