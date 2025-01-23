const resources = {
    Quantitative: {
        youtube: [
            { title: "GRE Quantitative Strategies", link: "https://youtube.com/playlist?list=PLD0D070C218D8F5A3&si=wY44KDXLRLiUpgeW" },
            { title: "Quant Practice Questions", link: "https://youtube.com/playlist?list=PLuQiO02CaY94A3kILyhXaGeztX3B36pQA&si=bSG1WAVZVfmNqkUM" }
        ],
        pdf: [
            { title: "GRE Quant Formula Sheet", link: "https://drive.google.com/file/d/1wvM7uojKDaq76xhMiRFQqscUeqRuMbCl/view?usp=drive_link" }
        ],
        notes: [
            { title: "Quant Problem-Solving Tips", link: "https://www.ets.org/gre/test-takers/general-test/prepare/content/quantitative-reasoning.html" }
        ]
    },
    Verbal: {
        youtube: [
            { title: "GRE Verbal Reasoning Tips", link: "https://youtu.be/uvldTJydSWI?si=LumJI3d9yq1QHlzp" },
            { title: "Vocabulary Building for GRE", link: "https://youtube.com/playlist?list=PL4CGJcfvyjqfk55FZ29TodEztWDXr104N&si=LuTU_FkznnTVhdfE" }
        ],
        pdf: [
            { title: "GRE Word Lists", link: "https://example.com/WordLists" }
        ],
        notes: [
            { title: "Verbal Section Time Management", link: "https://www.princetonreview.com/grad-school-advice/gre-verbal-practice" }
        ]
    },
    "Analytical Writing": {
        youtube: [
            { title: "GRE Analytical Writing Guide", link: "https://youtube.com/playlist?list=PLGB8vOgYKbRHvN-AJBQfavh8joUkCvdHK&si=nvUpLFjjwLj0lKwP" },
            { title: "Sample Essays for GRE", link: "https://youtube.com/playlist?list=PLQnzh39SR2waW5ayYlqQ3nBdLALZTynyL&si=Txd1aFnzRA3SIQf5" }
        ],
        pdf: [
            { title: "Essay Templates", link: "https://example.com/EssayTemplates" }
        ],
        notes: [
            { title: "How to Write High-Scoring Essays", link: "https://example.com/HighScoringEssays" }
        ]
    },
    "General Tips": {
        youtube: [
            { title: "Overall GRE Preparation Plan", link: "https://youtu.be/GREPreparationPlan" },
            { title: "GRE Test Day Tips", link: "https://www.shiksha.com/studyabroad/exams/grehttps://youtube.com/playlist?list=PL1pf33qWCkmgP99SlSUveQu9KDtmreQH1&si=rXrXppsLbHomCkrX" }
        ],
        pdf: [
            { title: "Complete GRE Study Guide", link: "https://drive.google.com/file/d/1wvM7uojKDaq76xhMiRFQqscUeqRuMbCl/view?usp=drive_linkhttps://drive.google.com/drive/folders/1axuUsCLEjRp_ywrmwrktFOUYj3VeGgBn?fbclid=IwZXh0bgNhZW0CMTEAAR3c2o6PLT8nd0ftqdIw7MZGfkEgg0oZc8DsvM3dlCvIMUyj7jnPnym43gA_aem_Wm38kY80XfJnGcTfva7ZTg" }
        ],
        notes: [
            { title: "Guideline for GRE", link: "https://www.shiksha.com/studyabroad/exams/gre" }
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
