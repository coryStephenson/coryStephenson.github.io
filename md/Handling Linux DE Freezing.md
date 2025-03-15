## What to do when a Linux Desktop Environment Freezes
### https://unix.stackexchange.com/questions/31818/what-to-do-when-a-linux-desktop-freezes

---


If all else fails, you **Raise The Elephant**.  There are [Magic SysRq key sequences](https://en.wikipedia.org/wiki/Magic_SysRq_key) (<kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>?</kbd>) that the Linux kernel handles specially.

**Most distributions currently disable access to some SysRq functions by default due to security reasons. To know whether its enabled do: `cat /proc/sys/kernel/sysrq`. A value of `0` means all are disabled and `1` means all are enabled and anything else means some are enabled. This should enable all SysRq functions: `echo "1" | sudo tee /proc/sys/kernel/sysrq`**

If your Linux box freezes and simply won't yield to any other  key-commands, you should definitely try one particular key sequence  before a hard reboot.

The key sequence is popularly remembered with the mnemonic:

> **R**aising **E**lephants **I**s **S**o **U**tterly **B**oring

or

> **R**eboot **E**ven **I**f **S**ystem **U**tterly **B**roken


- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>R</kbd> switch keyboard to 'raw' mode
- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>E</kbd> send SIGTERM (termination) signal to all processes except mother init
- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>I</kbd> send SIGKILL signal to all processes, a little more aggressive
- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>S</kbd> sync all filesystems to prevent data loss
- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>U</kbd> remount filesystems as read-only
- <kbd>Alt</kbd>+<kbd>SysRq</kbd>+<kbd>B</kbd> forcefully reboot

For the full list of possible commands and additional tips on how to type these commands, see the [Wikipedia page](https://en.wikipedia.org/wiki/Magic_SysRq_key).

---

You can try <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>*</kbd> to kill the front process ([Screen locking programs on Xorg 1.11](https://seclists.org/oss-sec/2012/q1/191)) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd> to open a terminal, launch a command like `ps`, `top`, or `htop` to see running processes, and then launch `kill` on non-responding process.

**Note: if not installed, install htop with `sudo apt-get install htop`.**

Also, once done in your virtual console, return to the desktop with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F7</kbd>.

In most distros pressing <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Backspace</kbd> kills the X11 (graphic) interface and restarts it. Make sure this is enabled in Mint by searching for 'Startup Applications' in the menu, and then making sure 'Ctrl Alt Backspace' is checked. 

**As far as I know, the newer fancy `xorg evdev` input drivers disable the 'zapping' by default. However, there is a way to reenable them on startup in `/etc/xorg.conf` or `/etc/xorg.conf.d/XX-somefile` or set it in a per-user xorg startup script (maybe put `setxkbmap -option "terminate:ctrl_alt_bksp"` into `~/.xinitrc`) by adding the line Option `"XKbOptions" "terminate:ctrl_alt_bksp"` into a corresponding Section "InputClass", or by setting another switch in your OS that relays to do that.**

**In Fedora, open gnome-tweaks and check 'key sequence to kill Xserver' in the mouse/keyboard section.**

**Run `dpkg-reconfigure keyboard-configuration` to enable it (in the last step) in Ubuntu.**

---

Besides what was already mentioned, I also use these tricks:

- If by any chance the unresponsive program was started in a terminal, I try <kbd>Ctrl</kbd>+<kbd>D</kbd> or <kbd>Ctrl</kbd>+<kbd>C</kbd>. If nothing happens, I try <kbd>Ctrl</kbd>+<kbd>Z</kbd> followed by a ruthless `kill`.
- If I know the responsible program, I open a terminal and use `killall` (e.g. `killall firefox`).
- Alternatively, under Gnome, I launch **run command** and invoke `xkill`, which allows you to kill a program by simply clicking on a window it owns.
- Finally, *just in case my keyboard melts*, I have a ***System Monitor*** applet (also under Gnome) which will pop up the **gnome-system-monitor** when clicked. From there, I can kill any process I own using only my mouse.

---

Adding one more possible solution to the mix, and (apart from the  accepted answer) one of the least destructive of the answers so far.

If you cannot:

- Use keyboard/mouse to A) Run the <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>*</kbd> option [above](https://unix.stackexchange.com/questions/31818/what-to-do-when-a-linux-desktop-freezes/31819#31819), B) Navigate to a utility that can be used to terminate the offending program, C) Launch a terminal to initiate a `pkill <process name>` (or similar, as detailed above)

-OR-

- Switch to another virtual console (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+any one of F1-6), to initiate a `pkill <process name>` (or similar, as detailed above)

... then [assuming MagicSysRq support is compiled into the kernel](https://unix.stackexchange.com/questions/31818/what-to-do-when-a-linux-desktop-freezes/107082#comment46353_33891) (From http://en.wikipedia.org/wiki/Magic_keys), on a QWERTY keyboard (alternatives for the below f are provided in the aforementioned article), one can try:

<kbd>Alt</kbd>+<kbd>SysRq</kbd>(Note caveats on http://en.wikipedia.org/wiki/Magic_keys#Commands)+f to
 "Call oom_kill, which kills a process to alleviate an [**O** ut **O** f **M** emory condition](http://en.wikipedia.org/wiki/Out_of_memory)", which (at least for me) often kills the program that is causing the  issue, as it is the largest RAM consuming process running at the time.

---

**Note: I believe the following suggestion implies the implementation of the System V init system, as the `shutdown` command is part of that system (speaking from experience here). Use `ps -p1 -o comm=` in order to see which init system is implemented.**

On **laptops** you might need to press <kbd>Ctrl</kbd>+<kbd>Fn</kbd>+<kbd>F1</kbd> to open terminal, what I do is type `reboot now` to restart from terminal. 

To go back to the GUI from terminal  on my laptop (HP G56) I have to <kbd>Ctrl</kbd>+<kbd>Fn</kbd>+<kbd>F8</kbd> (apparently it could also be <kbd>Ctrl</kbd>+<kbd>Fn</kbd>+<kbd>F7</kbd>) and you should be back to graphical interface. 

Also check http://community.linuxmint.com/tutorial/view/244

Stopping & Starting

- `shutdown -h now` – Shutdown the system now and do not reboot 
- `halt` – Stop all processes - same as above 
- `shutdown -r 5` – Shutdown the system in 5 minutes and reboot 
- `shutdown -r now` – Shutdown the system now and reboot 
- `reboot` – Stop all processes and then reboot - same as above 
- `startx` – Start the X system


`init 6` is cooler than `reboot now`.

---



<kbd>Alt</kbd>+<kbd>PrtSc</kbd> or <kbd>SysRq</kbd> + <kbd>r</kbd> Really (return my keyboard to me)

<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F1</kbd> Wait. Go get some coffee, or make tea, or let the dog out. Sometimes with high CPU use it can take a while for this to work. If you get a console, then `ps fu -e --sort -%cpu | head -n5` to track down the villian.

<kbd>Alt</kbd>+<kbd>PrtSc</kbd> or <kbd>SysRq</kbd> + <kbd>j</kbd> **J**ust (unfreeze it)

<kbd>Alt</kbd>+<kbd>PrtSc</kbd> or <kbd>SysRq</kbd> + <kbd>f</kbd> **F**'ing (call the OOM)

<kbd>Alt</kbd>+<kbd>PrtSc</kbd> or <kbd>SysRq</kbd> + <kbd>x</kbd> fi**X** (it: Will kill the foreground including XWindows)

This should get you back to a terminal login. Login and figure out if anything is wedged. Then either reboot, or often you can just <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>⟵Backspace</kbd> to restart XWindows (? Wayland).

---
### Dropping down to the terminal

The key combination to drop into the terminal used to be <kbd>Ctl</kbd>+<kbd>Alt</kbd>+
<kbd>F1</kbd>. 

But that was before. It has been changed and fairly recently, with 20.04 I think. Anyway, the key combination is now <kbd>Ctl</kbd>+<kbd>Alt</kbd>+<kbd>Fn</kbd>+<kbd>F3</kbd> (or <kbd>F2</kbd>, <kbd>F4</kbd>, <kbd>F5</kbd>, or <kbd>F6</kbd>). To return to the desktop, use
<kbd>Ctl</kbd>+<kbd>Alt</kbd>+<kbd>Fn</kbd>+<kbd>F1</kbd>.

This should work in cases where your interface freezes and nothing else works. It is a real
terminal, not a terminal emulator or a terminal multiplexer. This type of terminal is sometimes called a "Glass TTY". The vernacular phrase for doing this is "Dropping down to the terminal"
because you are now at a layer below the desktop and window manager. If you are using a
terminal emulator on the desktop, if the desktop freezes, so does your terminal emulator, but the real terminal may still be functioning. Every Linux/Unix system has at least one terminal running at all times.

