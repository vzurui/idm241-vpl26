// ALBUM MODAL POP UP
// Select modal elements
const modal = document.getElementById("customModal");
const showButton = document.getElementById("szaButton");
const closeButton = document.getElementById("closeModal");

// Open the modal
showButton.addEventListener("click", () => {
  modal.classList.remove("hidden"); // Show the modal
});

// Close the modal with fade-out effect
closeButton.addEventListener("click", () => {
  modal.classList.add("hidden"); // Trigger fade-out animation
});

// Close modal if user clicks outside modal-content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});

// PLAY BUTTON PULSE AND TOGGLE

function togglePlayPause(element) {
  const playIcon = element.querySelector(".play-icon");
  const pauseIcon = element.querySelector(".pause-icon");
  const tooltipPlay = element.parentElement.querySelector(".tooltip-play");

  if (playIcon.style.display === "none") {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    tooltipPlay.textContent = "Play"; // Update tooltip to "Play"
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    tooltipPlay.textContent = "Pause"; // Update tooltip to "Pause"
  }

  const pulseRing = element.querySelector(".pulse-ring");
  pulseRing.style.opacity = 1;
  element.classList.add("active");

  setTimeout(() => {
    element.classList.remove("active");
    pulseRing.style.opacity = 0;
  }, 600);
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
    ? "translateY(15px) scaleY(1)"
    : "translateY(5px) scaleY(-1)";
  document.querySelector(".icon2").style.transform = isToggled
    ? "translateY(5px) scaleY(1)"
    : "translateY(15px) scaleY(-1)";

  // Update the tooltip text
  const tooltip = document.querySelector(".tooltiptext-three");
  tooltip.textContent = isToggled ? "Enable Shuffle" : "Disable Shuffle";

  // Toggle the shuffle state
  isToggled = !isToggled;
}

// HEART BUTTON CLICK

let heartIsActive = false; // Tracks heart button state

const heartIcon = document.querySelector(".heart-icon");
const heartTooltip = document.querySelector(".tooltiptext-heart");
const notification = document.querySelector(".notification");

heartIcon.onclick = function () {
  if (!heartIcon.classList.contains("active")) {
    // Add active class to fill the heart and trigger animations
    heartIcon.classList.add("active");

    // Update tooltip text
    heartTooltip.textContent = "Remove from Your Library";

    // Display "Saved to Library" notification
    showNotification("Saved to Library");

    // Trigger the bubble and particles animations
    heartIcon.classList.add("animate-bubble");
    heartIcon.classList.add("animate-particles");

    // Remove the animation classes after the animation ends
    setTimeout(() => {
      heartIcon.classList.remove("animate-bubble");
      heartIcon.classList.remove("animate-particles");
    }, 1000); // Match the animation duration (1s)
  } else {
    // Remove the active class to unfill the heart
    heartIcon.classList.remove("active");

    // Update tooltip text
    heartTooltip.textContent = "Add to Your Library";

    // Display "Removed from Library" notification
    showNotification("Removed from Library");
  }

  heartIsActive = !heartIsActive; // Toggle the state
};

// Show Notification Function
function showNotification(message) {
  // Set the notification message
  notification.textContent = message;

  // Show the notification
  notification.classList.add("visible");

  // Hide the notification after 2.5 seconds
  setTimeout(() => {
    notification.classList.remove("visible");
  }, 2500);
}

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
