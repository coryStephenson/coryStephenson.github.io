// Add an event listener to the search box
  document.getElementById("searchBox").addEventListener("input", function() {
    filterLinks(this.value);
  });

  function filterLinks(searchTerm) {
    // Get all the <ul> elements representing groups
    const groups = document.querySelectorAll("ul");

    // Loop through each group and filter its links
    groups.forEach((group) => {
      const links = group.getElementsByTagName("a");
      Array.from(links).forEach((link) => {
        const linkText = link.textContent.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        if (linkText.includes(searchTermLower)) {
          // If the link text includes the search term, display the link
          link.style.display = "block";
        } else {
          // Otherwise, hide the link
          link.style.display = "none";
        }
      });
    });
  }
