const resources = {
    Listening: {
        youtube: [
            { title: "IELTS Listening Tips", link: "https://youtu.be/lnOoH07NinE?si=nuf96VXBZXLjYnWM" },
            { title: "Cambridge Listening Practice Test", link: "https://youtube.com/@ielts-practicer?si=RgLJzyfUbJdRP3Cd" }
        ],
        pdf: [
            { title: "IELTS Listening Practice PDF", link: "https://practicepteonline.com/cambridge-ielts-10-tests/" }
        ],
        notes: [
            { title: "Listening Strategies", link: "https://example.com/ListeningStrategies" }
        ]
    },
    Reading: {
        youtube: [
            { title: "IELTS Reading Techniques", link: "https://youtu.be/3IELTSReadingTips" },
            { title: "Reading Practice Test", link: "https://youtu.be/UfdDaYv8Qp4?si=7xAqIt8_hoaV4FEW" }
        ],
        pdf: [
            { title: "IELTS Reading Question Types", link: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests/reading" }
        ],
        notes: [
            { title: "Skimming and Scanning Notes", link: "https://ieltsonlinetests.com/" }
        ]
    },
    Writing: {
        youtube: [
            { title: "IELTS Writing Task 1", link: "https://youtu.be/FVqSiFUVX78?si=Ik8xq6LvOak5PugC" },
            { title: "IELTS Writing Task 2", link: "https://youtube.com/playlist?list=PLz49jcnhCN-iPNYD6RU2xqoik144fEraI&si=kBg3t_p8mqPxvowV" }
        ],
        pdf: [
            { title: "Writing Samples and Band Descriptors", link: "https://www.ielts-mentor.com/" }
        ],
        notes: [
            { title: "Common Grammar Mistakes", link: "https://example.com/GrammarMistakesNotes" }
        ]
    },
    Speaking: {
        youtube: [
            { title: "IELTS Speaking Tips", link: "https://youtube.com/@barctv?si=m6LH3UvsY94LiyxS" },
            { title: "Mock Speaking Test", link: "https://youtube.com/@ieltsadvantage?si=l6mW7EWpCt8WVTYV" }
        ],
        pdf: [
            { title: "Speaking Cue Card Samples", link: "https://www.ielts-mentor.com/cue-card-sample" }
        ],
        notes: [
            { title: "Pronunciation Guide", link: "https://www.learnthat.org/pages/view/learn_english_ELL.html?gad_source=1&gclid=Cj0KCQiA7se8BhCAARIsAKnF3rxFRaWDWJdGKbGFoqwZ2d-0IVv0_QsoeOYhWsrvyg8bKbnyjvf1n4AaAraGEALw_wcB" }
        ]
    }
};

function showResources(category) {
    const resourcesContainer = document.getElementById("resources-container");
    const detailsContainer = document.getElementById("details-container");

    resourcesContainer.innerHTML = "";
    detailsContainer.innerHTML = "";

    resourcesContainer.classList.remove("hidden");
    detailsContainer.classList.add("hidden");

    const categoryResources = resources[category];

    if (categoryResources) {
        // YouTube Resources
        if (categoryResources.youtube) {
            const youtubeHeader = document.createElement("h3");
            youtubeHeader.textContent = "YouTube Resources";
            resourcesContainer.appendChild(youtubeHeader);

            categoryResources.youtube.forEach((item) => {
                const youtubeLink = document.createElement("button");
                youtubeLink.textContent = item.title;
                youtubeLink.classList.add("category-btn");
                youtubeLink.onclick = () => showDetails(item.link);
                resourcesContainer.appendChild(youtubeLink);
            });
        }

        // PDF Resources
        if (categoryResources.pdf) {
            const pdfHeader = document.createElement("h3");
            pdfHeader.textContent = "PDF Resources";
            resourcesContainer.appendChild(pdfHeader);

            categoryResources.pdf.forEach((item) => {
                const pdfLink = document.createElement("button");
                pdfLink.textContent = item.title;
                pdfLink.classList.add("category-btn");
                pdfLink.onclick = () => showDetails(item.link);
                resourcesContainer.appendChild(pdfLink);
            });
        }

        // Notes
        if (categoryResources.notes) {
            const notesHeader = document.createElement("h3");
            notesHeader.textContent = "Notes Resources";
            resourcesContainer.appendChild(notesHeader);

            categoryResources.notes.forEach((item) => {
                const notesLink = document.createElement("button");
                notesLink.textContent = item.title;
                notesLink.classList.add("category-btn");
                notesLink.onclick = () => showDetails(item.link);
                resourcesContainer.appendChild(notesLink);
            });
        }
    }
}

function showDetails(link) {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.classList.remove("hidden");
    detailsContainer.innerHTML = `
        <h3>Selected Resource</h3>
        <a href="${link}" target="_blank">Open Resource</a>
    `;
}
