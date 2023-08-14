const bookingButton = document.getElementById("bookingButton");
const bookingBox = document.getElementById("bookingBox");

const submitButton = document.getElementById("submitButton");

const header = document.querySelector('header');
const homeSection = document.querySelector('.home');

const promoLink = document.getElementById("promoLink");
const promo = document.getElementById("promo");
const otherSections = document.querySelectorAll("section:not(#promo)");

const home = document.getElementById("home");
const booking = document.getElementById("home");
const destination = document.getElementById("home");
const services = document.getElementById("home");
const gallery = document.getElementById("home");
const contactUs = document.getElementById("home");
const footer = document.getElementById("footer");

bookingButton.addEventListener("click", () => {
    bookingButton.style.display = "none";
    bookingBox.style.display = "flex";
    submitButton.style.display = "inline-block";
});

submitButton.addEventListener("click", () => {
    submitButton.style.display = "none";
    bookingBox.style.display = "none";
    bookingButton.style.display = "inline-block";
});

function updateHeaderBackground() {
    if (window.scrollY >= homeSection.offsetHeight) {
        header.classList.add('home-scrolled');
    } else {
        header.classList.remove('home-scrolled');
    }
}

updateHeaderBackground();
window.addEventListener('scroll', updateHeaderBackground);

function hideAllSectionsExceptPromo() {
    otherSections.forEach(section => {
        section.style.display = "none";
    });
    footer.style.display = "none"
    promo.style.display = "block";
}

promoLink.addEventListener("click", function (event) {
    event.preventDefault();
    hideAllSectionsExceptPromo();
});

const navLinks = document.querySelectorAll(".navbar li .nav-list");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute("data-section-id");
        showAllSectionsExceptPromo();
        scrollToSection(sectionId);
    });
});

function showAllSectionsExceptPromo() {
    otherSections.forEach(section => {
        section.style.display = "block";
    });
    footer.style.display = "block";
    promo.style.display = "none";
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}
