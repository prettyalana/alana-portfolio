winterMonths = [12, 1, 2];
const springMonths = [3, 4, 5];
const summerMonths = [6, 7, 8];
const fallMonths = [9, 10, 11];

// snowflake images
const snowflakeAssets = [
  "images/snowflake1.svg",
  "images/snowflake2.svg",
  "images/snowflake3.svg",
];

function seasonsChange() {
  const month = new Date().getMonth() + 1;

  if (winterMonths.includes(month)) {
    // Set the src to one of the randomly chosen images
    document.querySelectorAll(".falling-svg").forEach((flake) => {
      // Choose one at random
      const randomAsset =
        snowflakeAssets[Math.floor(Math.random() * snowflakeAssets.length)];

      flake.src = randomAsset;
    });
  } else if (springMonths.includes(month)) {
    document.querySelectorAll(".falling-svg").forEach((petal) => {
      petal.src = "images/cherry-blossoms.svg";
    });
  } else if (summerMonths.includes(month)) {
    document.querySelectorAll(".falling-svg").forEach((sun) => {
      sun.src = "images/sun.svg";
    });
  } else {
    document.querySelectorAll(".falling-svg").forEach((leaf) => {
      leaf.src = "images/leaf.svg";
    });
  }
}

seasonsChange();

const workHistory = [
  {
    company: "Allegion",
    role_and_dates:
      "Software Engineer MES, Carmel, IN May 2026 - Present",
    job_functions: [
      "Design and develop data-driven applications and dashboards using Power BI to support manufacturing operations and decision-making",
      "Collaborate with cross-functional teams to translate business requirements into technical solutions",
      "Integrate Manufacturing Execution Systems (MES) data into scalable reporting and analytics solutions",
      "Build and maintain automated data pipelines and workflows to streamline reporting and reduce manual processes"
    ],
  },
  {
    "company": "Creating Coding Careers",
    "role_and_dates": "Instructor – Student Support (Contract, Part Time), Remote February 2026 - Present",
    "job_functions": [
      "Teach full-stack web development concepts including HTML, CSS, JavaScript, and React to adult students of varying technical backgrounds",
      "Mentor students through debugging, project architecture decisions, and implementation of industry best practices",
      "Assess student projects and provide structured, actionable technical feedback to improve code quality and problem-solving skills",
      "Collaborate with instructors and leadership to refine curriculum materials and enhance student learning outcomes"
    ]
  },
  {
    "company": "UX Woman",
    "role_and_dates": "UX Apprentice, Remote February 2026 - Present",
    "job_functions": [
      "Selected as 1 of 2 participants for the highly competitive UX Woman Spring 2026 UX Apprenticeship",
      "Leading an end-to-end UX project for a startup concept, from discovery research through wireframing, prototyping, and iteration",
      "Conducting user discovery research and synthesizing insights to inform product and design decisions",
      "Creating core UX deliverables including personas, journey maps, UX flows, wireframes, and prototypes",
      "Developing business and product context through market analysis, positioning, and UX-driven product pitches"
    ]
  },
  {
    company: "Meta x MLH Fellowship",
    role_and_dates:
      "Production Engineer (Site Reliability Engineer) Fellow, Remote June 2025 - September 2025",
    job_functions: [
      "Selected for the highly competitive Meta x MLH Fellowship, with an acceptance rate of just 2.5%, to contribute to impactful real-world infrastructure projects",
      "Engineered and deployed a scalable, containerized application using Docker and Nginx on DigitalOcean",
      "Automated CI/CD pipelines with GitHub Actions to improve deployment speed and reliability",
      "Administered Linux servers, writing Bash scripts, and monitoring system performance to ensure uptime",
      "Implemented unit tests to validate key application functionality",
      "Partnered with Meta engineers to implement production-grade infrastructure and best practices",
    ],
  },
  {
    company: "Build Carolina Academy",
    role_and_dates: "Teaching Assistant, Remote April 2025 - August 2025",
    job_functions: [
      "Assisted 7 students in a 20-week part-time coding bootcamp with assignments and technical challenges, providing one-on-one and small group support",
      "Addressed student questions, escalating unresolved issues to the instructor or relevant staff",
      "Fostered collaboration by connecting students with similar challenges and guiding peer-to-peer problem solving",
      "Collaborated with the instructor to develop and review content, ensuring all materials are approved prior to distribution",
      "Gained hands-on experience with foundational Python, React, FastAPI, and Supabase/PostgreSQL",
    ],
  },
  {
    company: "Everyone Can Code Chicago",
    role_and_dates:
      "iOS App Developer Intern, Chicago, IL — June 2024 to August 2024",
    job_functions: [
      "Gained foundational knowledge of the Swift programming language, enhancing coding proficiency for future impactful iOS development projects",
      "Collaborated with a team of 3 developers to design, build, and implement functional app features",
      "Utilized Figma to create a wireframe and designed a Storyboard for early app ideas",
      "Delivered a Minimum Viable Product (MVP) pitch to Apple executives",
      "Employed Git version control to manage source code changes in a team-based environment",
      "Built interactive user interfaces and custom views with SwiftUI and MapKit",
    ],
  },
  {
    company: "Discovery Partners Institute",
    role_and_dates:
      "Software Developer Apprentice, Chicago, IL — February 2024 to May 2024",
    job_functions: [
      "Developed scalable full-stack applications using Ruby on Rails and PostgreSQL, applying object-oriented programming principles and a problem-first approach",
      "Executed weekly sprint deliverables in an agile environment, participating in daily stand-ups and retrospectives",
      "Implemented front-end features with HTML, CSS, and jQuery, ensuring responsive and user-friendly interfaces",
      "Utilized AWS for image storage, enhancing application functionality and performance",
      "Wrote clean, maintainable code by following industry best practices",
      "Managed Git repositories, including branching, merging, and pull requests both independently and in team-based challenges",
    ],
  },
];

function populateWorkExperience() {
  let workHistoryContainer = document.querySelector(".work-history");

  workHistory.forEach((job, index) => {
    const div = document.createElement("div");

    div.classList.add("timeline-item");

    if (index % 2 == 0) {
      div.classList.add("left");
    } else {
      div.classList.add("right");
    }

    const innerDiv = document.createElement("div");

    innerDiv.classList.add("content");

    let header = document.createElement("h3");

    header.className = "company";

    header.textContent = job.company;

    innerDiv.append(header);

    let em = document.createElement("em");

    em.className = "role-and-dates";

    em.textContent = job.role_and_dates;

    innerDiv.append(em);

    let ul = document.createElement("ul");

    job.job_functions.forEach((jobFunction) => {
      let li = document.createElement("li");

      li.className = "job-function";

      li.textContent = jobFunction;

      ul.append(li);
    });

    innerDiv.append(ul);
    div.append(innerDiv);
    workHistoryContainer.append(div);
  });
}

if (document.querySelector(".work-history")) {
  populateWorkExperience();
}

function dropdownAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".menu-button");
    button.addEventListener("click", function (event) {
      const activeState = document.querySelector(".menu-content");

      const icon = document.querySelector("i");

      if (activeState.classList.toggle("is-active")) {
        icon.classList.replace("fa-bars", "fa-x");
      } else if (activeState) {
        icon.classList.replace("fa-x", "fa-bars");
      }
    });
  });
}

dropdownAnimation();

function switchModes() {

  let darkMode = document.getElementById("theme-toggle");
  
  darkMode.addEventListener("click", function (event) {
      let theme = document.documentElement.getAttribute('data-theme');

      let button = document.querySelector("#theme-toggle");

      let icon = button.querySelector("i");

      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark")

        icon.classList.replace("fa-moon", "fa-sun");
      }
      else {
        let lightMode = document.documentElement.setAttribute("data-theme", "light")

        icon.classList.replace("fa-sun", "fa-moon");
      }
    });

}

switchModes();
