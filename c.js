const courses = {
    1: {
        "1.1": ["Structured Programming", "Discrete Mathematics","Probability and Statistics for Engineers-I","Calculus and Analytical Geometry","Soft Skill Communication","Technology and Society","Introduction to Software Engineering"],
        "1.2": ["Object-Oriented Programming", "Data Structures","Computer Organization","Bangla Literature","History and Emergence of Bangladesh","Probability and Statistics for Engineers-II","Ordinary Differential Equations"]
    },
    2: {
        "2.1": ["Algorithm Design", "Database Management Systems"],
        "2.2": ["Operating Systems", "Computer Networks"]
    },
    3: {
        "3.1": ["Algorithm Design", "Database Management Systems"],
        "3.2": ["Operating Systems", "Computer Networks"]
    },
    4: {
        "4.1": ["Algorithm Design", "Database Management Systems"],
        "4.2": ["Operating Systems", "Computer Networks"]
    },
};

const resources = {
    'Structured Programming': {
        class: [
            { title: "Class 1: Playlist", link:" https://youtu.be/0_8dOzwShtc?si=Ld93CNMFi4OV8bMp" },
           { title: "Class 2: C_10", link: "https://youtu.be/irqbmMNs2Bo?si=8823wMycrCK2aScx" },
            { title: "Class 3: C again", link: "https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=ionBqhFP80n33pZN" },
        ],
        notes: [
            { title: "C programming", link: "https://drive.google.com/file/d/1VouEbmz2Uf9pOxDxqcr6acfeLYll21PA/view?usp=sharing" },
            { title: "C more", link: "https://drive.google.com/file/d/1Db0Wg6Sw4w8hPLfr7JVNL68jac4HjcKt/view?usp=sharing" }
        ],
         pdf: [
            { title: "Teach Yourself C", link: "https://example.com/teach-yourself-c" },
            { title: "Effective Java", link: "https://example.com/effective-java" }
        ],
         question: [
        { title: "CT", link: "https://example.com/ct" },
        { title: "Main Exam", link: "https://example.com/main-exam" }
        ]
    },
    'Discrete Mathematics': {
        class: [
            { title: "Class: Playlist", link: "https://youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&si=-uRHCvMXPgAoCCVC" }
        ],
        notes: [
            { title: "Discrete Mathematics Notes", link: "https://drive.google.com/file/d/1hkbJZjufwLg-7Sc9BSw_bN5LzzepMuWZ/view?usp=sharing" }
        ],
        pdf: [
            { title: "Discrete Mathematics and Its Applications", link: "https://example.com/discrete-maths" },
            { title: "Introduction to Graph Theory", link: "https://example.com/graph-theory" }
        ],
        question: [
            { title: "CT", link: "https://example.com/ct" },
            { title: "Main Exam", link: "https://example.com/main-exam" }
        ]
    },
    'Probability and Statistics for Engineers-I': {
        class: [
            { title: "Class 1: All", link: "https://youtube.com/playlist?list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK&si=Orvqa3MMdG9PvsgI" }
        ],
        notes: [
            { title: "Probability and Stats Notes", link: "https://drive.google.com/file/d/1B4hTbDBuTuInGK6UuhYdd9PB2F5bfGC6/view?usp=sharing" }
        ],
        pdf: [
            { title: "Introduction to Probability", link: "https://example.com/probability-book" },
            { title: "Statistics for Engineers", link: "https://example.com/statistics-book" }
        ],
        question: [
            { title: "CT", link: "https://example.com/ct" },
            { title: "Main Exam", link: "https://example.com/main-exam" }
        ]
    },
    'Calculus and Analytical Geometry': {
        class: [
            { title: "Class 1: Graph", link: "https://youtu.be/C9TSePo6FKI?si=yaYJD9qUvaa3OZzc" }
        ],
        notes: [
            { title: "Math_1.1", link: "https://drive.google.com/file/d/10Y19LAAt2d9elbmDJj-8vuy3qENpyRvq/view?usp=sharing" },
            { title: "1st Assignment", link: "https://drive.google.com/file/d/10Y19LAAt2d9elbmDJj-8vuy3qENpyRvq/view?usp=sharing" },
            { title: "2nd Assignment", link: "https://drive.google.com/file/d/10Y19LAAt2d9elbmDJj-8vuy3qENpyRvq/view?usp=sharing" }
        ],
        pdf: [
            { title: "Calculus: Early Transcendentals", link: "https://example.com/calculus-book" },
            { title: "Analytical Geometry", link: "https://example.com/analytical-geometry-book" }
        ],
        question: [
            { title: "CT", link: "https://example.com/ct" },
            { title: "Main Exam", link: "https://example.com/main-exam" }
        ]
    },
    'Soft Skill Communication': {
        class: [
            { title: "Class 1: Communication Skill", link: "https://www.youtube.com/watch?v=ADJAcyTq1us&list=PLWPirh4EWFpFIElSxplDlEhRDZHkBD-0n" },
            { title: "Class 2: Improve speaking", link: "https://www.youtube.com/watch?v=icudf_w_pqU&pp=ygUZc29mdCBza2lsbHMgY29tbXVuaWNhdGlvbg%3D%3D" }
        ],
        notes: [
            { title: "Communication Skill Notes", link: "https://drive.google.com/file/d/1J_LM9pdsNt40smtT-RRZYMHNs0xu6xBU/view?usp=sharing" },
           
        ]
        // books: [
        //     { title: "Eloquent JavaScript", link: "https://example.com/eloquent-js" },
        //     { title: "Learning Web Design", link: "https://example.com/learning-web-design" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },
    'Technology and Society': {
        class: [
            { title: "Class 1: Microsoft PowerPoint", link: "https://youtu.be/bcl6YoZQfDM?si=D9ytYTRlG4yHqVAD" },
            { title: "Class 2: Microsoft Word", link: "https://youtu.be/QXu9AGTIxrM?si=t9D6SGHMkiXu1q9H" },
            { title: "Class 3: Microsoft Excel", link: "https://youtu.be/tvph9RuZvUg?si=Fk62YdocMe_1aonK" }
        ],
        notes: [
            { title: "Technology", link: "https://drive.google.com/file/d/10Y19LAAt2d9elbmDJj-8vuy3qENpyRvq/view?usp=sharing" }
        ],
        // books: [
        //     { title: "Eloquent JavaScript", link: "https://example.com/eloquent-js" },
        //     { title: "Learning Web Design", link: "https://example.com/learning-web-design" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },
    'Introduction to Software Engineering': {
        class: [
            { title: "Class: All", link: "https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&si=if6Au-Y0Y7UqgKtY" }
        ],
        notes: [
            { title: "Software Engineering Notes", link: "https://drive.google.com/file/d/183bIea5DkuwRrhtbIbuoOkCPelxMBgPC/view?usp=sharing" }
        ]
        // books: [
        //     { title: "Eloquent JavaScript", link: "https://example.com/eloquent-js" },
        //     { title: "Learning Web Design", link: "https://example.com/learning-web-design" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },
    'Computer Organization': {
        class: [
            { title: "Class: Playlist", link: "https://youtube.com/playlist?list=PL5Rc9H5eTGY6MHqCKAarxhxqT7nipKgun&si=iT7jjCi6fINpuMmB" }
        ],
        notes: [
            { title: "Computer Organization Notes", link: "https://drive.google.com/file/d/1Q9AqPHQ7Gdz8qC203bsZi42Wxr1i9lSD/view?usp=sharing" }
        ],
        // books: [
        //     { title: "Computer Organization and Design", link: "https://example.com/computer-org-design" },
        //     { title: "Computer Systems: A Programmer's Perspective", link: "https://example.com/computer-systems" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },
    'Bangla Literature': {
        class: [
            { title: "Bengali ", link: "https://www.youtube.com/watch?v=NAnriECaP30&list=PLjpitam1EJN3o7ujU8pDxYb3kTVOyazge" },
            { title: "Postmaster", link: "https://youtu.be/Z5__gMAwiN4?si=3Cf5sNoaBdEHGbc-" }
        ],
        notes: [
            { title: "Bangla Literature Notes - Part 1", link: "https://drive.google.com/file/d/1abc123abc123abc123/view?usp=sharing" },
            { title: "Bangla Literature Notes - Part 2", link: "https://drive.google.com/file/d/2xyz456xyz456xyz456/view?usp=sharing" }
        ],
        pdf: [
            { title: "Rabindranath Tagore: A Biography", link: "https://example.com/tagore-biography" },
            { title: "The Essential Kazi Nazrul Islam", link: "https://example.com/nazrul-essentials" }
        ],
        question: [
            { title: "CT", link: "https://example.com/ct" },
            { title: "Main Exam", link: "https://example.com/main-exam" }
        ]
    },
    'History and Emergence of Bangladesh': {
        class: [
            { title: "Class 1: The Language Movement", link: "https://youtu.be/DdqQrn7IG7I?si=vTH6uEL33VuBN1O-" },
            { title: "Class 2: Bangladesh Liberation War", link: "https://youtu.be/Ac6K72GL-_Q?si=_xQjJ5kWBXUlqsav" },
            { title: "Class 3: Bangladesh after Independence", link: "https://youtu.be/peLrksyhkew?si=3nMU3FQ9ToyVmbkF" },
            { title: "Class 4: History", link: "https://www.youtube.com/watch?v=_tQZ9J-P5Bo&list=PLToLm9SotZBEyD8hNML0Akhup7lyVO1LZ" },
        ]
        // notes: [
        //     { title: "Bangladesh History Notes - Part 1", link: "https://drive.google.com/file/d/1hgb234hgb234hgb234/view?usp=sharing" },
        //     { title: "Bangladesh History Notes - Part 2", link: "https://drive.google.com/file/d/2dfg345dfg345dfg345/view?usp=sharing" }
        // ],
        // books: [
        //     { title: "Bangladesh Liberation War: A Historical Overview", link: "https://example.com/liberation-war-book" },
        //     { title: "The Emergence of Bangladesh", link: "https://example.com/emergence-bd" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },

    ' Probability and Statistics for Engineers-II': {
        class: [
            { title: "Class 1: Basic", link: "https://youtube.com/playlist?list=PLe0kuc8wHcPT_Tagyp3Mkpggmv8hbY8OZ&si=3t0Yoieo-1LDQTGy" },
            { title: "Class 2: Advanced", link: "https://youtube.com/playlist?list=PLEIbY8S8u_DIJJ1nZWGDXaG_e2YxwgyiA&si=p8gGitOWc9b-cie9" },
            { title: "Class 3: Details", link: "https://youtu.be/peLrksyhkew?si=3nMU3FQ9ToyVmbkF" },
            { title: "Class 4: Visualization", link: "https://youtube.com/playlist?list=PL0o_zxa4K1BVsziIRdfv4Hl4UIqDZhXWV&si=tcSFbpIM1e_cgRK-" },
        ]
        // notes: [
        //     { title: "Bangladesh History Notes - Part 1", link: "https://drive.google.com/file/d/1hgb234hgb234hgb234/view?usp=sharing" },
        //     { title: "Bangladesh History Notes - Part 2", link: "https://drive.google.com/file/d/2dfg345dfg345dfg345/view?usp=sharing" }
        // ],
        // books: [
        //     { title: "Bangladesh Liberation War: A Historical Overview", link: "https://example.com/liberation-war-book" },
        //     { title: "The Emergence of Bangladesh", link: "https://example.com/emergence-bd" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },



    'Data Structure': {
        class: [
            { title: "Class 1: Basic", link: "https://youtube.com/playlist?list=PLgrAmbRAezugf1uH-OmJF43TEHdi5dg8w&si=G58FzIbZibC4qLA-" },
            { title: "Class 2: Advanced", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=7qOX0ycuNx8WjH3f" },
            { title: "Class 3: Visualization", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=RcMA8U8T18kbal84" },
            { title: "Class 4: Details", link: "https://youtube.com/playlist?list=PLxgZQoSe9cg00xyG5gzb5BMkOClkch7Gr&si=hkxReiFNRkLW9SLm" },
            
        ]
        // notes: [
        //     { title: "Bangladesh History Notes - Part 1", link: "https://drive.google.com/file/d/1hgb234hgb234hgb234/view?usp=sharing" },
        //     { title: "Bangladesh History Notes - Part 2", link: "https://drive.google.com/file/d/2dfg345dfg345dfg345/view?usp=sharing" }
        // ],
        // books: [
        //     { title: "Bangladesh Liberation War: A Historical Overview", link: "https://example.com/liberation-war-book" },
        //     { title: "The Emergence of Bangladesh", link: "https://example.com/emergence-bd" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },





    'Ordinary Differential Equations': {
        class: [
            { title: "Class 1: Basic", link: "https://www.youtube.com/watch?v=lrBg1DfUe9M&list=PL15fi6enGHNrpa9C5jD8fiaNu2i_tFqin" },
            { title: "Class 2: Advanced", link: "https://www.youtube.com/watch?v=bjJZKTrCBNw&list=PLU6SqdYcYsfIuZVt20v-eNZBfFLENrM1F" },
            { title: "Class 3: Visualization", link: "https://youtu.be/p_di4Zn4wz4?si=g3lkNb4ijJX0tnFW" },
            
        ]
        // notes: [
        //     { title: "Bangladesh History Notes - Part 1", link: "https://drive.google.com/file/d/1hgb234hgb234hgb234/view?usp=sharing" },
        //     { title: "Bangladesh History Notes - Part 2", link: "https://drive.google.com/file/d/2dfg345dfg345dfg345/view?usp=sharing" }
        // ],
        // books: [
        //     { title: "Bangladesh Liberation War: A Historical Overview", link: "https://example.com/liberation-war-book" },
        //     { title: "The Emergence of Bangladesh", link: "https://example.com/emergence-bd" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    },

    'Object Oriented Programming': {
        class: [
            { title: "Class 1: Java", link: "https://www.youtube.com/watch?v=z7QwTMDQ88o&list=PLgH5QX0i9K3oAZUB2QXR-dZac0c9HNyRa" },
            { title: "Class 2: OOP Concepts in Java", link: "https://youtu.be/bSrm9RXwBaI?si=xdAHbD3CuupZ0Dsp" },
            { title: "Class 3: OOP Design Patterns", link: "https://example.com/oop-design-patterns" }
        ],
        notes: [
            { title: "OOP Notes - Part 1", link: "https://drive.google.com/file/d/1xyz123abc123abc123/view?usp=sharing" },
            { title: "OOP Notes - Part 2", link: "https://drive.google.com/file/d/2abc456def456def456/view?usp=sharing" }
        ]
        // books: [
        //     { title: "Object-Oriented Design & Programming in Java", link: "https://example.com/oop-java-book" },
        //     { title: "Design Patterns: Elements of Reusable Object-Oriented Software", link: "https://example.com/design-patterns-book" }
        // ],
        // question: [
        //     { title: "CT", link: "https://example.com/ct" },
        //     { title: "Main Exam", link: "https://example.com/main-exam" }
        // ]
    }
};

function showSemesters(year) {
    const semesterContainer = document.getElementById("semester-container");
    semesterContainer.innerHTML = "";
    semesterContainer.classList.remove("hidden");

    Object.keys(courses[year]).forEach(semester => {
        const button = document.createElement("button");
        button.textContent = `Semester ${semester}`;
        button.classList.add("year-btn");
        button.onclick = () => showCourses(year, semester);
        semesterContainer.appendChild(button);
    });
}

function showCourses(year, semester) {
    const courseContainer = document.getElementById("course-container");
    courseContainer.innerHTML = "";
    courseContainer.classList.remove("hidden");

    courses[year][semester].forEach(course => {
        const button = document.createElement("button");
        button.textContent = course;
        button.classList.add("year-btn");
        button.onclick = () => showResources(course);
        courseContainer.appendChild(button);
    });
}

function showResources(course) {
    const resourceContainer = document.getElementById("resource-container");
    resourceContainer.innerHTML = "";
    resourceContainer.classList.remove("hidden");

    const courseResources = resources[course];

    if (courseResources) {
        Object.keys(courseResources).forEach(type => {
            const header = document.createElement("h3");
            header.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Resources`;
            resourceContainer.appendChild(header);

            courseResources[type].forEach(resource => {
                const link = document.createElement("a");
                link.href = resource.link;
                link.target = "_blank";
                link.textContent = resource.title;
                resourceContainer.appendChild(link);
            });
        });
    } else {
        resourceContainer.textContent = "No resources available.";
    }
}

window.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});



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
