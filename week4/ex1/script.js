// select empty div and assign to a variable

const myEmptyDiv = document.querySelector("#myEmptyDiv");

// put an h1 inside of the div
// create new element

const heading = document.createElement("h1");

heading.innerHTML = "Hello class! It is a snowy day!";
heading.style.cursor = "pointer";
heading.addEventListener("click", handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
    document.body.style.backgroundColor = "blue";
}