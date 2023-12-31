'use strict';
const modalButtons = document.querySelectorAll(".show-modal");
const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

modalButtons?.forEach(element => {
    element?.addEventListener("click", () => {
        // Assuming modalElement and overlayElement are instances of HTMLElement.
        modalElement.classList.remove("hidden");
        overlayElement.classList.remove("hidden");
    });

});

function closeModalHandler() {
    modalElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModalHandler);
overlayElement.addEventListener("click", closeModalHandler);

