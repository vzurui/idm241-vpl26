// PLAY BUTTON PULSE AND TOGGLE

function togglePlayPause(element) {
  // Toggle icons
  const playIcon = element.querySelector(".play-icon");
  const pauseIcon = element.querySelector(".pause-icon");

  if (playIcon.style.display === "none") {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  }

  // Trigger the burst effect
  const pulseRing = element.querySelector(".pulse-ring");
  pulseRing.style.opacity = 1; // Ensure the ring is visible
  element.classList.add("active");

  // Remove the active class after the animation ends
  setTimeout(() => {
    element.classList.remove("active");
    pulseRing.style.opacity = 0; // Reset visibility
  }, 600); // Matches the animation duration
}

//SHUFFLE BUTTON TOGGLE

let isToggled = false;

function togglePositionAndColor() {
  // Define toggle colors
  const toggleColor = "#1db954"; // New color on click
  const defaultColor = "#B3B3B3"; // Default color

  // Determine new colors based on the toggle state
  const newIcon1Color = isToggled ? defaultColor : toggleColor;
  const newIcon2Color = isToggled ? defaultColor : toggleColor;

  // Update the CSS variables for each icon's color
  document.documentElement.style.setProperty("--icon1-color", newIcon1Color);
  document.documentElement.style.setProperty("--icon2-color", newIcon2Color);

  // Toggle positions and flipping of icons using transform
  document.querySelector(".icon1").style.transform = isToggled
    ? "translateY(25px) scaleY(1)"
    : "translateY(20px) scaleY(-1)";
  document.querySelector(".icon2").style.transform = isToggled
    ? "translateY(15px) scaleY(1)"
    : "translateY(32px) scaleY(-1)";

  // Flip the toggle state
  isToggled = !isToggled;
}

// HEART BUTTON CLICK

let heartIcon = document.querySelector(".heart-icon");

heartIcon.onclick = function () {
  if (!heartIcon.classList.contains("active")) {
    // Add active class to fill the heart and trigger animations
    heartIcon.classList.add("active");

    // Trigger the bubble and particles animations
    heartIcon.classList.add("animate-bubble");
    heartIcon.classList.add("animate-particles");

    // Remove the animation classes after the animation ends
    setTimeout(() => {
      heartIcon.classList.remove("animate-bubble");
      heartIcon.classList.remove("animate-particles");
    }, 1000); // Match the animation duration (1s)
  } else {
    // Remove the active class to unfill the heart (no particles)
    heartIcon.classList.remove("active");
  }
};

// OPTIONS BUTTON TOOL TIP AND MENU

const buttonsContainer = document.querySelector(".buttons");
const menu = document.querySelector(".menu");
const tooltipText = document.querySelector(".tooltiptext-two");

// Toggle menu on container click
buttonsContainer.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent event from propagating to document
  const isMenuVisible = menu.style.display === "block";
  menu.style.display = isMenuVisible ? "none" : "block";
  tooltipText.textContent = isMenuVisible ? "More Options" : "Less Options";
});

// Close menu when clicking outside
document.addEventListener("click", function () {
  menu.style.display = "none";
  tooltipText.textContent = "More Options";
});
