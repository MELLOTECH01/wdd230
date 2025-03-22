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