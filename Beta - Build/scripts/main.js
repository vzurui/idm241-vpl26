// TOOL TIP TEXT FOR HEART/SAVE BUTTON
const icon = document.getElementById("toggle-heart");
const toolTipText = document.querySelector(".tooltiptext");

icon.addEventListener("change", function () {
  if (icon.checked) {
    toolTipText.textContent = "Remove from Your Library";
  } else {
    toolTipText.textContent = "Save to Your Library";
  }
});

//MODE FOR HEART + SAVE BUTTON

const popover = document.getElementById("my-popover");

icon.addEventListener("change", function () {
  if (icon.checked) {
    popover.textContent = "Added to Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  } else {
    popover.textContent = "Removed from Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  }
});

// TOOL TIP TEXT FOR SHUFFLE

const shuffle = document.querySelector(".container");
const toolTipTextThree = document.querySelector(".tooltiptext-three");

let isShuffleEnabled = false; // State to track shuffle status

// Add click event listener to the container
shuffle.addEventListener("click", function () {
  isShuffleEnabled = !isShuffleEnabled; // Toggle shuffle state

  // Update tooltip text based on the state
  toolTipTextThree.textContent = isShuffleEnabled
    ? "Disable Shuffle"
    : "Enable Shuffle";
});

// MODE FOR SHUFFLE BUTTON *****

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
    ? "translateY(-15px) scaleY(1)" // white toggled down arrow
    : "translateY(-20px) scaleY(-1)"; // green toggled down arrow
  document.querySelector(".icon2").style.transform = isToggled
    ? "translateY(-115px) scaleY(1)" // white toggled down arrow
    : "translateY(-100px) scaleY(-1)"; // green toggled up arrow

  // Flip the toggle state
  isToggled = !isToggled;
}
