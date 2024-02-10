// select empty div and assign to a variable

const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put an h1 inside of it
// create new element

const heading = document.createElement("h1");
heading.innerHTML = "Hello class! It is a snowy day!";
myEmptyDiv.appendChild(heading);