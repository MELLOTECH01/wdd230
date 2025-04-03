// Select the span element with currentyear as id name
let currentyear = document.querySelector("#currentyear");

// Create an instance of date object
let today = new Date();

// Manipulate the content of currentyear
currentyear.innerHTML = today.getFullYear();

// Get lastModified property of document object
let lastModified = document.querySelector("#lastModified");

// Manipulate the content of paragraph element with lastModified as id name
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Store the selected elements
const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// Toggle dark/light mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes(" ")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = " ";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = " ";
    }
});

// Page visit counter
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
document.querySelector("#visit-count").textContent = visitCount;