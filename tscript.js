document.addEventListener("DOMContentLoaded", function() {
    console.log("Teacher information page is ready and functional.");
  });
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
