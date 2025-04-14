// Display a welcome message when the page loads
window.onload = function() {
    alert("Welcome to NSTU! Let's get started.");
};

// Form submission event listener
document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent form from actually submitting to a server for demonstration purposes
    event.preventDefault();
    
    // Get the values of form fields
    const name = document.getElementById('name').value.trim();
    const id = document.getElementById('id').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Simple validation to check if fields are empty
    if (!name || !id) {
        // Show error message if any field is empty
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Please fill out all fields correctly!";
    } else {
        // Hide error message if form is valid
        errorMessage.style.display = 'none';
        
        // Display a success message
        alert("Submitted successfully!");
    }
});


window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
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
