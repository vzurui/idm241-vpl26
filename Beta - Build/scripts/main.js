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

const sign = document.querySelector(".sign");

const popover = document.getElementById("my-popover");

icon.addEventListener("change", function () {
  if (icon.checked) {
    sign.textContent = "\u2713";
    popover.textContent = "Added to Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  } else {
    sign.textContent = "+";
    popover.textContent = "Removed from Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  }
});
