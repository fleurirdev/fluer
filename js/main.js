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
  // FAQ Accordion
  // ============================================================
  function initFAQ() {
    const faqList = document.getElementById("faq-list");
    if (!faqList) return;

    faqList.addEventListener("click", (e) => {
      const button = e.target.closest(".faq__question");
      if (!button) return;

      const item = button.closest(".faq__item");
      const isOpen = item.classList.contains("faq__item--open");

      // Close all
      faqList.querySelectorAll(".faq__item--open").forEach((openItem) => {
        openItem.classList.remove("faq__item--open");
        openItem.querySelector(".faq__question").setAttribute("aria-expanded", "false");
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add("faq__item--open");
        button.setAttribute("aria-expanded", "true");
      }
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
  // Initialize everything
  // ============================================================
  function init() {
    initTheme();
    initMobileMenu();
    initScrollspy();
    initHeaderScroll();
    initReveal();
    initFAQ();
    initFloatingWA();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
