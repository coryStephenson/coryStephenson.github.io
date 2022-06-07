# Advanced Linux: The Linux Kernel

## Getting the kernel version

`uname -r`

## What is the size of the kernel file your system is running?

Look at the size corresponding to the soft link **vmlinuz** after you run the command `ls -l /boot`.

## How much RAM is available to your running kernel?

Note: It may or may not be the amount of physical RAM on your system.

Look at the quantity of memory in the **available** column after you run the command `free`.

Similar information can be obtained by running the command `head /proc/meminfo`.

## The command `strace` will display the system calls that a process makes as it runs. Using the `man` command, determine what option for `strace` will show a summary with a count of the number of times a process called each system call. Using that option, what system call is called the most by the command `date`?

`man strace` and type `/Statistics`. This will snap to the heading **Statistics** in the man page for `strace`. We want the `-c` option, which will count time, calls, and errors for each system call and report a summary on program exit. Running `strace -c date` gives us:
