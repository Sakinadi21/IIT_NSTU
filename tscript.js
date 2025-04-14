document.addEventListener("DOMContentLoaded", function() {
  console.log("Teacher information page is ready and functional.");

  // Hamburger Menu (Mobile Navigation)
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("show");
      });
  }

  // Google-Style Three Dots Menu
  const dots = document.querySelector(".dots");
  const menu = document.getElementById("dropdownMenu");

  if (dots && menu) {
      dots.addEventListener("click", function(event) {
          event.stopPropagation(); // Prevent immediate closure
          menu.style.display = (menu.style.display === "block") ? "none" : "block";
      });

      // Close the menu if clicked outside
      document.addEventListener("click", function(event) {
          if (!menu.contains(event.target) && !dots.contains(event.target)) {
              menu.style.display = "none";
          }
      });
  }
});
