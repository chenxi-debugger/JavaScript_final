// Function to update the image div when hovering or focusing
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt || "No description available";
    imageDiv.style.color = "#fff";
    console.log("upDate triggered for:", previewPic.alt);
}

// Function to revert the image div to its default state
function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.color = "#555";
    console.log("unDo triggered");
}

// Function to add event listeners to all preview images
function initializeGallery() {
    console.log("Gallery initialized");

    // Select all images with the class 'preview'
    const images = document.querySelectorAll(".preview");

    // Loop through each image and add event listeners
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0"); // Add tabindex attribute
        console.log(`Tabindex added to image: ${images[i].alt}`);

        // Add event listeners for mouse and keyboard interactions
        images[i].addEventListener("mouseover", () => upDate(images[i]));
        images[i].addEventListener("mouseleave", unDo);
        images[i].addEventListener("focus", () => upDate(images[i])); // Add focus event
        images[i].addEventListener("blur", unDo); // Add blur event
    }
}

// Function to add a 'tabfocus' attribute to all preview images
function addTabFocus() {
    console.log("Adding tabfocus attribute to all images");

    // Select all images with the class 'preview'
    const images = document.querySelectorAll(".preview");

    // Loop through each image and add the 'tabfocus' attribute
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabfocus", "true");
        console.log(`Tabfocus added to image: ${images[i].alt}`);
    }
}

// Add an onload listener to initialize the gallery and add the tabfocus attribute
window.onload = function () {
    console.log("Window loaded");
    initializeGallery(); // Initialize gallery with event listeners
    addTabFocus(); // Add tabfocus attributes
};
