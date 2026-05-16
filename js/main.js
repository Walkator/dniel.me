(() => {
    const themeToggle = document.querySelector(".theme-toggle");

    if (themeToggle) {
        const applyTheme = (lightMode) => {
            document.documentElement.classList.toggle("light", lightMode);
            document.body.classList.toggle("light", lightMode);
            themeToggle.textContent = lightMode ? "Light" : "Dark";
            themeToggle.setAttribute("aria-pressed", String(!lightMode));
        };

        const startsInMobileLayout = window.matchMedia("(max-width: 680px)").matches;

        applyTheme(!startsInMobileLayout);

        themeToggle.addEventListener("click", () => {
            applyTheme(!document.body.classList.contains("light"));
        });
    }

    const kailiusVideo = document.querySelector(".kailius-video");

    if (kailiusVideo) {
        const userAgent = navigator.userAgent;
        const isSafari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(userAgent);
        const source = isSafari ? kailiusVideo.dataset.mov : kailiusVideo.dataset.webm;

        if (source) {
            kailiusVideo.classList.toggle("is-safari-video", isSafari);
            kailiusVideo.src = source;
            kailiusVideo.load();
        }
    }
})();
