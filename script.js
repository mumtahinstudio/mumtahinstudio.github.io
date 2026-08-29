
// ========================= Type Writter =========================

const textElement = document.getElementById("typewriter-text");

const words = [
    "Product Listing",
    "PDF to Excel",
    "PDF to Word",
    "Excel Formatting"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1800);
            return;
        }
    } else {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeWriter, isDeleting ? 45 : 85);
}

typeWriter();




// ==================== Contact Form - Email JS ====================

(function () {
    emailjs.init({
        publicKey: "OycfdTALeteoui3AI"
    });
})();


const contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_lz7vpdp",
        "template_n1zxf2t",
        this
    )
        .then(function () {

            alert("Your message has been sent !")

            contactForm.reset();

        })
        .catch(function (error) {

            alert("Failed to send message !")

            console.error("EmailJS Error:", error);

        });

});



// ==================== Dark Mode ====================



// Website dark and ligh mode setup
const themeButtons = document.querySelectorAll(".dark-mode");
const body = document.body;


// Restore saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
}


// Change theme
themeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

});








// ==================== Responsive Navbar ====================



const menuBtn = document.getElementById("menu-icon");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.querySelector(".nav-links");


// Open
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active")
    closeBtn.classList.toggle("active")
});


// // Close
closeBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active")
    closeBtn.classList.toggle("active")

});


// Close when link is clicked
const links = document.querySelectorAll(".nav-link");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        closeBtn.classList.toggle("active");
        menuBtn.classList.toggle("active")
    });

});