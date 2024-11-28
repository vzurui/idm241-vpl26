// ALBUM MODAL POP UP
const modal = document.getElementById("customModal");
const showButton = document.getElementById("szaButton");
const closeButton = document.getElementById("closeModal");

showButton.addEventListener("click", () => {
  modal.classList.remove("hidden"); // Show modal
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide modal
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden"); // Close modal on click outside
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
    tooltipPlay.textContent = "Play";
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    tooltipPlay.textContent = "Pause";
  }

  const pulseRing = element.querySelector(".pulse-ring");
  pulseRing.style.opacity = 1;
  element.classList.add("active");

  setTimeout(() => {
    element.classList.remove("active");
    pulseRing.style.opacity = 0;
  }, 600);
}

// SHUFFLE BUTTON TOGGLE
let isToggled = false;

function togglePositionAndColor() {
  const toggleColor = "#1db954"; // Active color
  const defaultColor = "#B3B3B3"; // Default color

  const newIcon1Color = isToggled ? defaultColor : toggleColor;
  const newIcon2Color = isToggled ? defaultColor : toggleColor;

  document.documentElement.style.setProperty("--icon1-color", newIcon1Color);
  document.documentElement.style.setProperty("--icon2-color", newIcon2Color);

  document.querySelector(".icon1").style.transform = isToggled
    ? "translateY(15px) scaleY(1)"
    : "translateY(5px) scaleY(-1)";
  document.querySelector(".icon2").style.transform = isToggled
    ? "translateY(5px) scaleY(1)"
    : "translateY(15px) scaleY(-1)";

  const tooltip = document.querySelector(".tooltiptext-three");
  tooltip.textContent = isToggled ? "Enable Shuffle" : "Disable Shuffle";

  isToggled = !isToggled;
}

// HEART BUTTON CLICK
let heartIsActive = false;

const heartIcon = document.querySelector(".heart-icon");
const heartTooltip = document.querySelector(".tooltiptext-heart");
const notification = document.querySelector(".notification");

heartIcon.onclick = function () {
  if (!heartIcon.classList.contains("active")) {
    heartIcon.classList.add("active");
    heartTooltip.textContent = "Remove from Your Library";
    showNotification("Saved to Library");
    heartIcon.classList.add("animate-bubble");
    heartIcon.classList.add("animate-particles");

    setTimeout(() => {
      heartIcon.classList.remove("animate-bubble");
      heartIcon.classList.remove("animate-particles");
    }, 1000);
  } else {
    heartIcon.classList.remove("active");
    heartTooltip.textContent = "Add to Your Library";
    showNotification("Removed from Library");
  }
  heartIsActive = !heartIsActive;
};

function showNotification(message) {
  notification.textContent = message;
  notification.classList.add("visible");
  setTimeout(() => {
    notification.classList.remove("visible");
  }, 2500);
}

// OPTIONS BUTTON TOOLTIP AND MENU
const buttonsContainer = document.querySelector(".buttons");
const menu = document.querySelector(".menu");
const tooltipText = document.querySelector(".tooltiptext-two");

buttonsContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  const isMenuVisible = menu.style.display === "block";
  menu.style.display = isMenuVisible ? "none" : "block";
  tooltipText.textContent = isMenuVisible ? "More Options" : "Less Options";
});

document.addEventListener("click", () => {
  menu.style.display = "none";
  tooltipText.textContent = "More Options";
});

// MOUSE DOWN ACTIONS
function addMouseDownListeners() {
  // Heart button
  heartIcon.addEventListener("mousedown", () => {
    heartIcon.style.opacity = "0.5";
  });

  heartIcon.addEventListener("mouseup", () => {
    heartIcon.style.opacity = "1";
  });

  // Options button
  buttonsContainer.addEventListener("mousedown", () => {
    buttonsContainer.style.opacity = "0.5";
  });

  buttonsContainer.addEventListener("mouseup", () => {
    buttonsContainer.style.opacity = "1";
  });

  // Shuffle button
  const shuffleButton = document.querySelector(".container");
  shuffleButton.addEventListener("mousedown", () => {
    shuffleButton.style.transform = "scale(0.9)";
  });

  shuffleButton.addEventListener("mouseup", () => {
    shuffleButton.style.transform = "scale(1)";
  });

  // Album cover
  const albumCover = document.querySelector("#szaButton");
  albumCover.addEventListener("mousedown", () => {
    albumCover.style.transform = "scale(1)";
  });

  albumCover.addEventListener("mouseup", () => {
    albumCover.style.transform = "scale(1.1)";
  });

  // Play button
  const playButton = document.querySelector(".circle");
  playButton.addEventListener("mousedown", () => {
    playButton.style.opacity = "0.5";
  });

  playButton.addEventListener("mouseup", () => {
    playButton.style.opacity = "1";
  });
}

// Initialize listeners
addMouseDownListeners();
