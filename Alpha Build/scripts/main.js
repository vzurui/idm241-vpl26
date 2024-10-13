const icon = document.getElementById("icon");

const label = icon.nextElementSibling;

icon.addEventListener("change", function () {
  if (icon.checked) {
    label.textContent = "&#x2713";
  } else {
    label.textContent = "+";
  }
});
