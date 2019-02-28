

console.log("Hello World!");

// This is how you make a comment! 

// When we click any .picture-frame,
// A const is a "constant" variable which means that is cannot be reassigned
const targetElements = document.querySelectorAll("[data-target]");

// we see an enlarged version of image that is inside that .picture-frame

function respondToClick(event) {
    console.log("Heller");
    console.log("Goodbye");
    console.log("Yeah");

    console.log(event.target.parentElement);
    // add the "big" class to the element that got clicked

    event.target.parentElement.classList.toggle("big")
}

function attachClickHandler(oneElement) {
    // This is how we handle one element.
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);



