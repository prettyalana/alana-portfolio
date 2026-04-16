const month = new Date().getMonth() + 1;

const winterMonths = [12, 1, 2];
const springMonths = [3, 4, 5];
const summerMonths = [6, 7, 8];
const fallMonths = [9, 10, 11];

const seasons = ["winter", "spring", "summer", "fall"];

// snowflake images
const snowflakeAssets = [
  "images/snowflake1.svg",
  "images/snowflake2.svg",
  "images/snowflake3.svg",
];

function seasonsChange() {
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
  let content = document.querySelector(".content");

  workHistory.forEach((job) => {
    let header = document.createElement("h3");

    header.className = "company";

    header.textContent = job["company"];

    content.appendChild(header);

    let em = document.createElement("em");

    em.className = "role-and-dates";

    em.textContent = job["role_and_dates"];

    content.appendChild(em);

    let ul = document.createElement("ul");

    job["job_functions"].forEach((jobFunction) => {
      let li = document.createElement("li");

      li.className = "job-function";

      li.textContent = jobFunction;

      ul.appendChild(li);

    });

    content.appendChild(ul);
  });
}

populateWorkExperience();
