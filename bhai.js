// JavaScript to handle image popup
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.photo-grid img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const popup = document.createElement('div');
            popup.classList.add('image-popup');
            popup.innerHTML = `
                <div class="popup-content">
                    <img src="${image.src}" alt="Popup Image">
                    <button class="close-popup">Close</button>
                </div>
            `;
            document.body.appendChild(popup);

            const closeButton = popup.querySelector('.close-popup');
            closeButton.addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        });
    });
});

// CSS for image popup
const style = document.createElement('style');
style.innerHTML = `
    .image-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .popup-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        max-width: 90%;
        max-height: 90%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    .popup-content img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 8px;
    }

    .close-popup {
        background-color: #d9534f;
        margin-top: 10px;
    }

    .close-popup:hover {
        background-color: #c9302c;
    }
`;
document.head.appendChild(style);


window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
