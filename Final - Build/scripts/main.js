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
