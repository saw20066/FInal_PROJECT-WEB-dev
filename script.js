/*   
    HAMBURGER MENU TOGGLE
  */

const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("show");
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const emailInput = document.getElementById("email");
        const emailValue = emailInput.value.trim();

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            alert("Please enter a valid email address.");
            e.preventDefault(); 
        }
    });
}
