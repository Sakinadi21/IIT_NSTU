document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    alert('Your message has been sent!'); // Placeholder for form submission
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    alert('You have subscribed to the newsletter!'); // Placeholder for subscription
});

document.getElementById('post-button').addEventListener('click', function() {
    const postContent = document.getElementById('forum-post').value;
    if (postContent) {
        const forumPosts = document.getElementById('forum-posts');
        const newPost = document.createElement('div');
        newPost.classList.add('forum-post');
        newPost.textContent = postContent;
        forumPosts.appendChild(newPost);
        document.getElementById('forum-post').value = ''; // Clear the input
    } else {
        alert('Please enter a message before posting.'); // Alert if no input
    }
});
