var THEME_KEY = "corystephenson_theme";
            function set_theme(theme) {
                var element = document.getElementsByTagName("html")[0];
                var content = document.getElementById("DarkModetext");
                if (!element) {
                  return;
                }

                if (theme === "dark-mode" ) {
                    element.className = "dark-mode";
                    content.innerText = "Dark Mode is ON";
                } else {
                    element.className = "light-mode";
                    content.innerText = "Dark Mode is OFF";
                }

                localStorage.setItem(THEME_KEY, theme);
            }

            function load_theme() {
              var theme = localStorage.getItem(THEME_KEY);
              if (theme) {
                set_theme(theme);
              }
            }

            // Attempt immediate application of html style
            load_theme();

            // Backup: do it onload. Will flash, but better than nothing.
            window.addEventListener("load", function(){
              load_theme();
            });

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
