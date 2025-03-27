// select the span element with currentyear as id name
let currentyear = document.querySelector("#currentyear");

// create an instance of date object
let today = new Date();

// manipulate the content of currentyear
currentyear.innerHTML = today.getFullYear();

// get lastModified property of document object
let lastModified = document.querySelector("#lastModified");

// manipulate the content of paragraph element with lastModified as id name
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Store the selected elements
const mainnav = document.querySelector('nav')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

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