const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=cf7178f9e8aff2c2c5937e1f06a6ec3a&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data){
     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
     let desc = data.weather[0].description;
     weatherIcon.setAttribute("src", iconsrc);
     weatherIcon.setAttribute("alt", "Weather Icon");
     captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);  
}

apiFetch();