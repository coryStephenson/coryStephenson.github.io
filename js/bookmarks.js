
  document.getElementById("searchBox").addEventListener("input", function() {
    filterLinks(this.value);
  });

  function filterLinks(searchTerm) {
    const groups = document.querySelectorAll("ul");

    groups.forEach((group) => {
      const links = group.getElementsByTagName("a");
      Array.from(links).forEach((link) => {
        const linkText = link.textContent.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        if (linkText.includes(searchTermLower)) {
          link.parentElement.style.display = "block"; // Show the parent <li> element
        } else {
          link.parentElement.style.display = "none"; // Hide the parent <li> element
        }
      });
    });
  }
