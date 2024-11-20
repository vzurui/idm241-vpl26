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
