document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});



function toggleMenu() {
    let menu = document.getElementById('dropdownMenu');
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Close the menu if clicked outside
document.addEventListener('click', function(event) {
    let menu = document.getElementById('dropdownMenu');
    let dots = document.querySelector('.dots');

    if (!menu.contains(event.target) && !dots.contains(event.target)) {
        menu.style.display = "none";
    }
});
