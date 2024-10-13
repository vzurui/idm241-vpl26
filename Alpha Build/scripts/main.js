const icon = document.getElementById("icon");

const label = icon.nextElementSibling;

icon.addEventListener("change", function () {
  if (icon.checked) {
    label.textContent = "✓";
  } else {
    label.textContent = "+";
  }
});
