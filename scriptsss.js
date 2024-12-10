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
