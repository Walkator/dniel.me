(() => {
    const themeToggle = document.querySelector(".theme-toggle");
    
    if (!themeToggle) {
        return;
    }

    const applyTheme = (lightMode) => {
        document.body.classList.toggle("light", lightMode);
        themeToggle.textContent = lightMode ? "Light" : "Dark";
        themeToggle.setAttribute("aria-pressed", String(!lightMode));
    };

    applyTheme(true);

    themeToggle.addEventListener("click", () => {
        applyTheme(!document.body.classList.contains("light"));
    });
})();