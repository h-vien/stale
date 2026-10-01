(() => {
  const supported = ["vi", "en"];
  const stored = localStorage.getItem("stale-site-locale");
  const browser = navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
  const initial = supported.includes(stored) ? stored : browser;

  function setLocale(locale) {
    document.documentElement.dataset.locale = locale;
    document.documentElement.lang = locale;
    localStorage.setItem("stale-site-locale", locale);
    document.querySelectorAll("[data-locale-button]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.localeButton === locale));
    });
    document.querySelectorAll("[data-title-vi]").forEach((element) => {
      document.title = locale === "vi" ? element.dataset.titleVi : element.dataset.titleEn;
    });
  }

  document.querySelectorAll("[data-locale-button]").forEach((button) => {
    button.addEventListener("click", () => setLocale(button.dataset.localeButton));
  });

  setLocale(initial);
})();
