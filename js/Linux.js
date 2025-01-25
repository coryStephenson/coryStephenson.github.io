document.addEventListener("click", (event) => {
  const dropdown = document.getElementById("myDropdown");
  if (!dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
