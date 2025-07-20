document.body.classList.add("light-theme"); // ou "light-theme"
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const sunIcon = toggleBtn.querySelector(".light-theme-toggle-icon");
    const moonIcon = toggleBtn.querySelector(".dark-theme-toggle-icon");


    const setThemeIcon = () => {
        const isDark = document.body.classList.contains("dark-theme");
        sunIcon.style.display = isDark ? "inline" : "none";
        moonIcon.style.display = isDark ? "none" : "inline";
    };

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            document.body.classList.toggle("light-theme");
            setThemeIcon();
        });

        // Initialise au bon état
        setThemeIcon();
    }
});
