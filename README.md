# Advanced Linux: The Linux Kernel

The name of the kernel: vmlinuz-<KERNEL VERSION>, which is located in the `/boot` directory.
  
I believe that the rationale behind the filename for the kernel is that it is eventually loaded into virtual memory, and the "z" indicates that it's some sort of compressed filed.
  
The kernel is loaded with a bootloader that is stored in the boot sector of the hard disk.
  
The virtual filesystems in Linux are /proc, /sys, and /debugfs.
  
The kernel enforces privileges, known as capabilities.

```  
cd /boot          # Change directory to /boot
uname -r          # Displays kernel version
ls -lh vmlinuz-<KERNEL VERSION>   # Output shown below
```

Output of `ls -lh vmlinuz-5.13.0-44-generic`:

```  
-rw------- 1 root root 9.8M May 18 07:58 vmlinuz-5.13.0-44-generic
```
  
Output of `ls -lh vmlinuz-5.13.0-41-generic`:

```
-rw------- 1 root root 9.8M Apr 14 11:41 vmlinuz-5.13.0-41-generic
```
 
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

```
Tue Jun  7 01:56:59 PM CDT 2022
% time     seconds  usecs/call     calls    errors syscall
------ ----------- ----------- --------- --------- ----------------
  0.00    0.000000           0         3           read
  0.00    0.000000           0         1           write
  0.00    0.000000           0         6           close
  0.00    0.000000           0         1           lseek
  0.00    0.000000           0         9           mmap
  0.00    0.000000           0         4           mprotect
  0.00    0.000000           0         1           munmap
  0.00    0.000000           0         3           brk
  0.00    0.000000           0         4           pread64
  0.00    0.000000           0         1         1 access
  0.00    0.000000           0         1           execve
  0.00    0.000000           0         2         1 arch_prctl
  0.00    0.000000           0         1           set_tid_address
  0.00    0.000000           0         4           openat
  0.00    0.000000           0         6           newfstatat
  0.00    0.000000           0         1           set_robust_list
  0.00    0.000000           0         1           prlimit64
  0.00    0.000000           0         1           getrandom
------ ----------- ----------- --------- --------- ----------------
100.00    0.000000           0        50         2 total
```
