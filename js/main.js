const I18N = {
  en: {
    nav: {
      label: "EN",
      link1: "Casino",
      link2: "Sport",
      linkCasino: "https://meridianbet.be/en/betting",
      linkSport: "https://meridianbet.be/en/registration",
    },
    card1: {
      title: "SPORTS BETTING",
      desc: "Don’t miss the Action! Explore the Latest Sports Events and Exclusive Promotions Now.",
      cta: "GO TO SPORT",
      reg: "REGISTER NOW",
      link: "https://meridianbet.be/en/betting",
      linkReg: "https://meridianbet.be/en/registration",
    },
    card2: {
      title: "CASINO",
      desc: "Experience the Thrill in Real-Time! Dive into the Largest Selection of Live Betting Events.",
      cta: "GO TO CASINO",
      reg: "REGISTER NOW",
      link: "https://meridianbet.be/en/betting",
      linkReg: "https://meridianbet.be/en/registration",
    },
    store: {
      availableOn: "Available on",
      googlePlay: "Google Play",
      appStore: "App Store",
      text: "Download our apps",
    },
    banner: {
      kicker: "More selections",
      title: "Bigger Potential Returns",
      boostPrefix: "1500%",
      boostAccent: "FULL BOOST",
      body: "Welcome to the House of Boosted Odds, where your odds increase as you add more selections.\nMaximize your betting strategy and let the system do the work — the more you play, the more your ticket is boosted.",
      cta: "Join the Action",
      details: "Promotion Details",
    },
    seo: {
      tag: "Betting",
      h1: "Online Betting Belgium: welcome to Meridianbet",
      introTitle: "Introduction to Online Betting in Belgium",
      introBody:
        "Online betting in Belgium has grown rapidly, with more players seeking reliable platforms that offer excitement, variety, and security. Meridianbet stands out as a leading site for <strong>online betting Belgium</strong>, thanks to its innovative features, vast sports coverage, and user-friendly experience. Whether you are new to online betting or a seasoned punter, understanding what sets Meridianbet apart can help elevate your <strong>online betting</strong> strategy.",
      restHtml: `...`,
      more: "Show more",
      less: "Show less",
    },
  },

  fr: {
    nav: {
      label: "FR",
      link1: "Casino",
      link2: "Paris sportifs",
      linkCasino: "https://meridianbet.be/fr/pari",
      linkSport: "https://meridianbet.be/fr/inscription",
    },
    card1: {
      title: "PARIS SPORTIFS",
      desc: "Ne manquez pas l’action ! Découvrez les derniers événements sportifs et les promotions exclusives dès maintenant.",
      cta: "ALLER AU SPORT",
      reg: "S’INSCRIRE",
      link: "https://meridianbet.be/fr/pari",
      linkReg: "https://meridianbet.be/fr/inscription",
    },
    card2: {
      title: "CASINO",
      desc: "Vivez le frisson en temps réel ! Plongez dans la plus grande sélection d’événements de paris en direct.",
      cta: "ALLER AU CASINO",
      reg: "S’INSCRIRE",
      link: "https://meridianbet.be/fr/pari",
      linkReg: "https://meridianbet.be/fr/inscription",
    },
    store: {
      availableOn: "Disponible sur",
      googlePlay: "Google Play",
      appStore: "App Store",
      text: "Télécharger nos apps",
    },
    banner: {
      kicker: "Plus de sélections",
      title: "Des retours potentiels plus élevés",
      boostPrefix: "1500%",
      boostAccent: "BOOST TOTAL",
      body: "Bienvenue dans la Maison des cotes boostées : vos cotes augmentent à mesure que vous ajoutez des sélections.\nOptimisez votre stratégie et laissez le système faire le travail — plus vous jouez, plus votre ticket est boosté.",
      cta: "REJOINDRE L’ACTION",
      details: "Détails de la promotion",
    },
    seo: {
      tag: "Paris Sportif",
      h1: "Paris Sportif",
      introTitle: "Paris en ligne en Belgique",
      introBody: `...`, // ostaje tvoje
      restHtml: `...`, // ostaje tvoje
      more: "Afficher plus",
      less: "Afficher moins",
    },
  },

  nl: {
    nav: {
      label: "NL",
      link1: "Casino",
      link2: "Sportweddenschappen",
      linkCasino: "https://meridianbet.be/nl/weddenschappen",
      linkSport: "https://meridianbet.be/nl/registratie",
    },
    card1: {
      title: "SPORTWEDDENSCHAPPEN",
      desc: "Mis de actie niet! Ontdek de nieuwste sportevenementen en exclusieve promoties.",
      cta: "GA NAAR SPORT",
      reg: "NU REGISTREREN",
      link: "https://meridianbet.be/nl/weddenschappen",
      linkReg: "https://meridianbet.be/nl/registratie",
    },
    card2: {
      title: "CASINO",
      desc: "Beleef de spanning in real time! Duik in het grootste aanbod van live weddenschappen.",
      cta: "GA NAAR CASINO",
      reg: "NU REGISTREREN",
      link: "https://meridianbet.be/nl/weddenschappen",
      linkReg: "https://meridianbet.be/nl/registratie",
    },
    store: {
      availableOn: "Beschikbaar op",
      googlePlay: "Google Play",
      appStore: "App Store",
      text: "Download onze apps",
    },
    banner: {
      kicker: "Meer selecties",
      title: "Hogere potentiële winsten",
      boostPrefix: "1500%",
      boostAccent: "VOLLEDIGE BOOST",
      body: "Welkom in het Huis van Boosted Odds, waar je quoteringen stijgen naarmate je meer selecties toevoegt.\nOptimaliseer je strategie — hoe meer je speelt, hoe sterker je ticket wordt geboost.",
      cta: "DOE NU MEE",
      details: "Promotiedetails",
    },
    seo: {
      tag: "Weddenschappen",
      h1: "Online wedden in België: welkom bij Meridianbet",
      introTitle: "Introductie tot online wedden in België",
      introBody:
        "Online wedden in België groeit snel. Meridianbet onderscheidt zich door innovatieve functies, een uitgebreid sportaanbod en een gebruiksvriendelijke ervaring.",
      restHtml: "", // ako nema, ostavi prazno
      more: "Meer tonen",
      less: "Minder tonen",
    },
  },
};

const DEFAULT_LANG = "en";

// helpers
function setTextAll(sel, value) {
  document
    .querySelectorAll(sel)
    .forEach((el) => (el.textContent = value ?? ""));
}
function setHTMLAll(sel, value) {
  document.querySelectorAll(sel).forEach((el) => (el.innerHTML = value ?? ""));
}

// flags for dropdown
const FLAG_BY_LANG = {
  en: { src: "./images/icons/en.svg", alt: "English" },
  fr: { src: "./images/icons/fr.svg", alt: "Français" },
  nl: { src: "./images/icons/nl.svg", alt: "Nederlands" },
};

function setActiveFlag(lang) {
  const meta = FLAG_BY_LANG[lang] || FLAG_BY_LANG[DEFAULT_LANG];
  const img = document.getElementById("lang-current-flag");
  if (img) {
    img.src = meta.src;
    img.alt = meta.alt;
  }

  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.setAttribute(
      "aria-selected",
      btn.dataset.langOption === lang ? "true" : "false"
    );
  });
}

function openLangMenu() {
  const menu = document.getElementById("lang-menu");
  const trigger = document.getElementById("lang-trigger");
  if (!menu || !trigger) return;
  menu.classList.remove("hidden");
  trigger.setAttribute("aria-expanded", "true");
}

function closeLangMenu() {
  const menu = document.getElementById("lang-menu");
  const trigger = document.getElementById("lang-trigger");
  if (!menu || !trigger) return;
  menu.classList.add("hidden");
  trigger.setAttribute("aria-expanded", "false");
}

function toggleLangMenu() {
  const menu = document.getElementById("lang-menu");
  if (!menu) return;
  menu.classList.contains("hidden") ? openLangMenu() : closeLangMenu();
}

function applyLang(lang) {
  const t = I18N[lang] || I18N[DEFAULT_LANG];

  // Nav
  setTextAll('[data-i18n="nav.link1"]', t.nav?.link1);
  document
    .querySelectorAll('[data-i18n-href="nav.linkCasino"]')
    .forEach((el) => {
      el.href = t.nav.linkCasino;
    });
  setTextAll('[data-i18n="nav.link2"]', t.nav?.link2);
  document
    .querySelectorAll('[data-i18n-href="nav.linkSport"]')
    .forEach((el) => {
      el.href = t.nav.linkSport;
    });

  // Cards
  setTextAll('[data-i18n="card1.title"]', t.card1?.title);
  setTextAll('[data-i18n="card1.desc"]', t.card1?.desc);
  setTextAll('[data-i18n="card1.cta"]', t.card1?.cta);
  setTextAll('[data-i18n="card1.reg"]', t.card1?.reg);
  document.querySelectorAll('[data-i18n-href="card1.link"]').forEach((el) => {
    el.href = t.card1.link;
  });
  document
    .querySelectorAll('[data-i18n-href="card1.linkReg"]')
    .forEach((el) => {
      el.href = t.card1.linkReg;
    });

  setTextAll('[data-i18n="card2.title"]', t.card2?.title);
  setTextAll('[data-i18n="card2.desc"]', t.card2?.desc);
  setTextAll('[data-i18n="card2.cta"]', t.card2?.cta);
  setTextAll('[data-i18n="card2.reg"]', t.card2?.reg);
  document.querySelectorAll('[data-i18n-href="card2.link"]').forEach((el) => {
    el.href = t.card2.link;
  });
  document
    .querySelectorAll('[data-i18n-href="card2.linkReg"]')
    .forEach((el) => {
      el.href = t.card2.linkReg;
    });

  // Store
  setTextAll('[data-i18n="store.availableOn"]', t.store?.availableOn);
  setTextAll('[data-i18n="store.googlePlay"]', t.store?.googlePlay);
  setTextAll('[data-i18n="store.appStore"]', t.store?.appStore);
  setTextAll('[data-i18n="store.text"]', t.store?.text);

  // Banner
  setTextAll('[data-i18n="banner.kicker"]', t.banner?.kicker);
  setTextAll('[data-i18n="banner.title"]', t.banner?.title);
  setTextAll('[data-i18n="banner.boostPrefix"]', t.banner?.boostPrefix);
  setTextAll('[data-i18n="banner.boostAccent"]', t.banner?.boostAccent);
  setHTMLAll(
    '[data-i18n="banner.body"]',
    (t.banner?.body || "").replace(/\n/g, "<br />")
  );
  setTextAll('[data-i18n="banner.cta"]', t.banner?.cta);
  setTextAll('[data-i18n="banner.details"]', t.banner?.details);

  // SEO
  setTextAll('[data-i18n="seo.tag"]', t.seo?.tag);
  setTextAll('[data-i18n="seo.h1"]', t.seo?.h1);
  setTextAll('[data-i18n="seo.introTitle"]', t.seo?.introTitle);
  setHTMLAll('[data-i18n="seo.introBody"]', t.seo?.introBody);

  const moreWrap = document.getElementById("seo-more");
  const toggleBtn = document.getElementById("seo-toggle");

  if (moreWrap) {
    moreWrap.innerHTML = t.seo?.restHtml || "";
    moreWrap.classList.add("hidden");
  }

  if (toggleBtn) {
    toggleBtn.textContent = t.seo?.more || "Show more";
    // ako nema restHtml, sakrij dugme
    toggleBtn.classList.toggle("hidden", !t.seo?.restHtml);
  }

  // html lang + storage + flag
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  setActiveFlag(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  // DEFAULT ENG
  const saved = localStorage.getItem("lang") || DEFAULT_LANG;
  applyLang(saved);

  // SEO toggle
  const toggleBtn = document.getElementById("seo-toggle");
  const moreWrap = document.getElementById("seo-more");

  if (toggleBtn && moreWrap) {
    toggleBtn.addEventListener("click", () => {
      const lang = localStorage.getItem("lang") || DEFAULT_LANG;
      const t = I18N[lang] || I18N[DEFAULT_LANG];

      const isHidden = moreWrap.classList.contains("hidden");
      moreWrap.classList.toggle("hidden", !isHidden);

      toggleBtn.textContent = isHidden ? t.seo?.less : t.seo?.more;
    });
  }

  // Dropdown wiring
  const wrapper = document.getElementById("lang-switch");
  const trigger = document.getElementById("lang-trigger");
  const menu = document.getElementById("lang-menu");

  if (wrapper && trigger && menu) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLangMenu();
    });

    document.querySelectorAll("[data-lang-option]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.langOption;
        applyLang(lang);
        closeLangMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!wrapper.contains(e.target)) closeLangMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenu();
    });
  }
});
