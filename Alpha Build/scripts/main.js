const icon = document.getElementById("icon");
const label = icon.nextElementSibling;

const popover = document.getElementById("my-popover");

icon.addEventListener("change", function () {
  if (icon.checked) {
    label.textContent = "\u2713";
    popover.textContent = "Added to Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  } else {
    label.textContent = "+";
    popover.textContent = "Removed from Your Library";
    popover.showPopover();

    setTimeout(() => {
      popover.hidePopover();
    }, 3000);
  }
});

const sign = document.querySelector(".sign");
const toolTipText = document.querySelector(".tooltiptext");

icon.addEventListener("change", function () {
  if (icon.checked) {
    sign.innerHTML = "✓";
    toolTipText.textContent = "Hello Vy";
  } else {
    sign.innerHTML = "+";
    toolTipText.textContent = "Test";
  }
});
