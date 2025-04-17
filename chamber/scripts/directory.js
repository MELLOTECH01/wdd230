// Code for directory page
const directoryContainer = document.querySelector('#directory');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

const baseURL = "https://mellotech01.github.io/wdd230/chamber/";
const membersURL = `${baseURL}data/members.json`;

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