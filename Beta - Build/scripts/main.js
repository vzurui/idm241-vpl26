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

//MODE FOR HEART/SAVE BUTTON

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

// MODE FOR SHUFFLE BUTTON *****

// Select the items
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");

// Function to apply transformations
function applyTransformations(
  clickedItem,
  otherItem,
  clickedTransform,
  otherTransform
) {
  clickedItem.style.transform = clickedTransform;
  otherItem.style.transform = otherTransform;
}

// Function to reset transformations
function resetTransformations(item) {
  item.style.transform = "none";
}

// Function to toggle background color
function toggleBackgroundColor(item) {
  item.style.backgroundColor =
    item.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
}

// Function to swap items
function swapItems(event) {
  const clickedItem = event.currentTarget; // The item that was clicked
  const otherItem = clickedItem === item1 ? item2 : item1; // Determine the other item

  // Apply initial transformations for visual effect
  applyTransformations(
    clickedItem,
    otherItem,
    "translateY(20px)",
    "translateY(-20px)"
  );

  // Wait for the transition to complete, then swap items
  setTimeout(() => {
    // Swap positions
    const clickedItemNextSibling = clickedItem.nextElementSibling;

    if (clickedItemNextSibling === otherItem) {
      // If clicked item is directly before the other item
      clickedItem.parentNode.insertBefore(otherItem, clickedItem); // Move other item before clicked item
    } else {
      // If clicked item is directly after the other item
      clickedItem.parentNode.insertBefore(clickedItem, otherItem); // Move clicked item before other item
    }

    // Reset transforms and change colors
    resetTransformations(clickedItem);
    resetTransformations(otherItem);
    toggleBackgroundColor(clickedItem);
    toggleBackgroundColor(otherItem);
  }, 300); // Timeout matches the transition duration
}

// Add click event listeners
item1.addEventListener("click", swapItems);
item2.addEventListener("click", swapItems);

// Function to apply transformations
function applyTransformations(
  clickedItem,
  otherItem,
  clickedTransform,
  otherTransform
) {
  clickedItem.style.transform = `${clickedTransform} scale(0.95)`; // Scale down slightly
  otherItem.style.transform = `${otherTransform} scale(0.95)`; // Scale down slightly
}
