const baseURL = "https://mellotech01.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const list = document.getElementById("learning-activities");

    weeks.forEach((week) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;

            listItem.appendChild(anchor);

            if (index < week.links.length - 1) {
                listItem.appendChild(document.createTextNode(" | "));
            }
        });

        list.appendChild(listItem);
    });
}

getLinks();