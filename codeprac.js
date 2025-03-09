function filterPlatforms() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let links = document.querySelectorAll('.platform');

    links.forEach(link => {
        let text = link.textContent.toLowerCase();
        link.style.display = text.includes(input) ? 'block' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".nav-links");
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.addEventListener("click", function() {
            navbar.classList.toggle("show");
        });
    }
});
