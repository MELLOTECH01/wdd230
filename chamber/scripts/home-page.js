document.addEventListener("DOMContentLoaded", () => {
    // Toggle menu visibility
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Update last modified date
    document.getElementById("last-modified").textContent = document.lastModified;

    // Fetch Weather Data (Placeholder)
    document.getElementById("weather-info").textContent = "28°C, Partly Cloudy"; // Replace with API data
});
