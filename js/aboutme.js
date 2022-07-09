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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5ffd7cb (Added darkMode() and lightMode())

function darkMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
}
      

function lightMode() {
        var element = document.body;
        var content = document.getElementById("DarkModetext");
        element.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
}
<<<<<<< HEAD
=======
>>>>>>> 8e4d14e (Create aboutme.js)
=======
>>>>>>> 5ffd7cb (Added darkMode() and lightMode())
