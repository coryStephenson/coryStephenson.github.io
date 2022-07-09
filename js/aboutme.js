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
