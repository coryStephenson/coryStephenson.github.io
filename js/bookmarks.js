  document.getElementById("searchBox").addEventListener("input", function() {
    filterLinks(this.value);
  });

  function filterLinks(searchTerm) {
    const groups = document.querySelectorAll("ul");
    const filteredLinksContainer = document.getElementById("filteredLinksContainer");
    filteredLinksContainer.innerHTML = ""; // Clear previous results

    groups.forEach((group) => {
      const links = group.getElementsByTagName("a");
      Array.from(links).forEach((link) => {
        const linkText = link.textContent.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        if (linkText.includes(searchTermLower)) {
          // Clone the link and append it to the filteredLinksContainer
          const clonedLink = link.cloneNode(true);
          filteredLinksContainer.appendChild(clonedLink);
        }
      });
    });
  }
