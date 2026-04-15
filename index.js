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
    const winter = document
      .querySelectorAll(".falling-svg")
      .forEach((flake) => {
        // Choose one at random
        const randomAsset =
          snowflakeAssets[Math.floor(Math.random() * snowflakeAssets.length)];

        flake.src = randomAsset;
      });
  } else if (springMonths.includes(month)) {
    const spring = document
      .querySelectorAll(".falling-svg")
      .forEach((petal) => {
        petal.src = "images/cherry-blossoms.svg";
      });
  } else if (summerMonths.includes(month)) {
    const summer = document.querySelectorAll(".falling-svg").forEach((sun) => {
      sun.src = "images/sun.svg";
    });
  } else {
    const fall = document.querySelectorAll(".falling-svg").forEach((leaf) => {
      leaf.src = "images/leaf.svg";
    });
  }
}

seasonsChange();
