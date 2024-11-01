const icon = document.getElementById("icon");
const sign = document.querySelector(".sign");
const toolTipText = document.querySelector(".tooltiptext");

icon.addEventListener("change", function () {
  if (icon.checked) {
    sign.innerHTML = "✓";
    toolTipText.textContent = "Remove from Your Library";
  } else {
    sign.innerHTML = "+";
    toolTipText.textContent = "Add to Your Library";
  }
});

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
