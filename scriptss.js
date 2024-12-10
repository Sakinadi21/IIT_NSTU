function showDetails(clubId) {
    const detailsSections = document.querySelectorAll('.club-details');
    detailsSections.forEach(section => {
        section.style.display = 'none'; // Hide all details
    });

    const selectedClub = document.getElementById(clubId);
    if (selectedClub) {
        // Toggle display of the selected club details
        selectedClub.style.display = selectedClub.style.display === 'block' ? 'none' : 'block';
    }
}
