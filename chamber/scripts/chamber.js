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


// Code for discover page
document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");

    const currentTime = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = currentTime - lastVisitTime;
        const daysBetween = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} ${daysBetween === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);
});


// Code for directory page
const directoryContainer = document.querySelector('#directory');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

const baseURL = "https://mellotech01.github.io/wdd230/chamber/";
const membersURL = `${baseURL}data/links.json`;

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  directoryContainer.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p><strong>Level:</strong> ${member.membership}</p>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
    `;

    directoryContainer.appendChild(card);
  });
}

// Toggle Views
gridBtn.addEventListener('click', () => {
  directoryContainer.classList.add('grid-view');
  directoryContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  directoryContainer.classList.add('list-view');
  directoryContainer.classList.remove('grid-view');
});

getMembers();
