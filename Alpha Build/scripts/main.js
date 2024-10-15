const icon = document.getElementById("icon");
const label = icon.nextElementSibling;

icon.addEventListener("change", function () {
  if (icon.checked) {
    label.textContent = "\u2713";
  } else {
    label.textContent = "+";
  }
});

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
