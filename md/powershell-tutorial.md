# PowerShell for Beginners: Step by Step Guide
by Logan S. Helms

***
## 1. What is PowerShell?

**PowerShell** is a powerful scripting language and command-line shell that was designed specifically for system administrators and power users. **Its primary purpose is to automate tasks and manage system configurations, making it an indispensable tool for anyone working in IT. What sets PowerShell apart from other command-line interfaces is its deep integration with the .NET framework, allowing you to interact with both the operating system and the applications running on it.**

One of the key benefits of PowerShell is its ability to automate repetitive tasks. Instead of manually configuring settings or running commands on multiple systems, you can write scripts that perform these tasks automatically, saving you a tremendous amount of time. For example, you can create scripts to manage user accounts, configure network settings, or even deploy software across an entire network.

PowerShell also offers a consistent, standardized way to interact with different systems, making it especially useful for system administrators managing large and complex environments. It can be used to control everything from individual servers to cloud resources, allowing you to write scripts that work across a variety of platforms.

**Another major benefit is PowerShell's object-oriented nature. Unlike traditional command-line interfaces that return text-based results, PowerShell works with objects. This allows for more powerful and flexible scripting, as you can directly manipulate the data returned from commands, rather than just parsing plain text. This makes working with files, services, processes, and even network resources more intuitive and efficient. Moreover, PowerShell is built for extensibility. There are thousands of cmdlets – small, reusable commands that perform specific tasks – available out of the box, and you can easily add your own. It integrates seamlessly with many Microsoft products, like Active Directory, Exchange, and SQL Server, and has broad support for third-party tools as well.**

In short, PowerShell is a versatile and indispensable tool for automating and managing complex systems. Whether you’re automating tasks on a single machine or managing a fleet of servers, it offers a streamlined, efficient way to handle your work.

https://learn.microsoft.com/en-us/powershell/

***
## 2. Installing PowerShell

**Installing PowerShell on Windows**

**PowerShell comes pre-installed on most Windows systems**, but it’s important to make sure you have the latest version. To get the most up-to-date version, you’ll use the PowerShell Core, which is the cross-platform version. Here’s a step-by-step guide to install it:

1. **Download the installer**: Go to the official PowerShell page. Find the latest stable release and select the appropriate .msi file for your version of Windows (either 64-bit or 32-bit).

2. **Run the Installer**: Once the installer file is downloaded, double-click to start the installation process. Follow the prompts and accept the terms of the license agreement. Make sure to select the option to add PowerShell to your PATH, which will make it accessible from any command prompt.

3. **Confirm Installation**: After installation, opening a new PowerShell window by typing “PowerShell” into the Start menu and hitting Enter. You should now be running the latest version of PowerShell!

**Installing PowerShell on macOS**

**macOS doesn’t come with PowerShell pre-installed**, but it’s easy to get it set up using Homebrew, a package manager for macOS.

1. **Install Homebrew (if you don’t have it already).** Open your Terminal and paste the following command to install Homebrew:

```bash
/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”
```
 
2. **Install PowerShell.** Once Homebrew is installed, use the following command to install PowerShell:

```bash
brew install --cask powershell
```
 
3. **Start PowerShell.** Once the installation is complete, launch PowerShell by typing `pwsh` into your terminal and hitting Enter. You should be up and running with PowerShell on macOS!

**Installing PowerShell on Linux**

Linux has a few more options depending on your distribution, but PowerShell can easily be installed using package managers like APT (for Ubuntu), YUM (for CentOS), or DNF (for Fedora).

*On Ubuntu/Debian-based Systems*:

1. **Install Prerequisites.** Open your terminal and run the following command to update your system and install the necessary dependencies:

```bash
sudo apt-get update
sudo apt-get install -y wget apt-transport-https software-properties-common
```

2. **Add Microsoft Repository.** Next, add the Microsoft package repository by running:

```bash
wget -q "https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb"
sudo dpkg -i packages-microsoft-prod.deb
```

3. **Install PowerShell.** Once the repository is set up, install PowerShell with:

```bash
sudo apt-get update
sudo apt-get install -y powershell
```

4. **Start PowerShell.** Now you can start PowerShell by typing pwsh in the terminal.

*On CentOS/Fedora/RHEL-based Systems:*

1. **Install Prerequisites**

First, install the necessary packages:

```bash
sudo yum install -y wget
```

2. **Add Microsoft Repository**

Add the Microsoft repository by running:

```bash
wget https://packages.microsoft.com/config/rhel/7/prod.repo
sudo mv prod.repo /etc/yum.repos.d/Microsoft.repo
```
 
3. **Install PowerShell**

Install PowerShell using the following command:

```bash
sudo yum install -y powershell
```
 
4. **Start PowerShell**

Once installed, type `pwsh` to start PowerShell.

 
**Verifying the installation**

No matter which operating system you are using, once the installation is complete, you can verify that PowerShell is working by opening a terminal or command prompt and typing:

```bash
$PSVersionTable.PSVersion
```
 
This will show you the version of PowerShell you have installed, confirming that everything is set up properly.

 
**Conclusion**

Now that you’ve install PowerShell, you’re ready to start exploring its powerful features. Regardless of whether you’re using Windows, macOS, or Linux, PowerShell offers a consistent experience across platforms, making it a versatile tool for managing systems and automating tasks. Let’s move on to using PowerShell and understanding its core commands in the next sections.

***
## 3. PowerShell Editions

*Explanation of different versions (Windows PowerShell vs. PowerShell Core)*

Let’s dive into the different editions of PowerShell. **Understanding the distinction between Windows PowerShell and PowerShell Core is crucial for mastering this tool.**

**Windows PowerShell, the original version, was built specifically for Windows. It’s tightly integrated with the Windows operating system, offering cmdlets and features that are optimized for managing Windows environments. This edition is based on the .NET framework, which means it’s limited to running on Windows systems only.**

**On the other hand, PowerShell Core is the cross-platform, open-source version of PowerShell. Introduced as part of the PowerShell 7 series, PowerShell Core is based on .NET Core, enabling it to run on Windows, macOS, and Linux. This version is designed for greater flexibility and portability, allowing you to manage a wider range of systems with the same scripts and commands.**

**Now, why should you care? If you are working in a Windows-only environment, Windows PowerShell might still be sufficient, especially for legacy systems. However, if you plan to work in mixed environments or non-Windows systems, PowerShell Core is the way to go. It offers the same cmdlets and functionality, but with the added bonus of portability, making it ideal for cross-platform automation.**

**Both versions are continually updated, but PowerShell Core is where most of the new features and PowerShell improvements are being focused. So, while Windows PowerShell may still be relevant, transitioning to PowerShell Core is often recommended for future-proofing your scripts and workflows.**

***
## 4. Navigating the Interface

*Introduction to the PowerShell console and Integrated Scripting Environment (ISE)*

Now that you’ve been introduced to PowerShell, it’s time to get familiar with its primary interfaces: the **PowerShell Console** and the **Integrated Scripting Environment (ISE)**. **These are the two main environments where you’ll interact with PowerShell, and each serves a unique purpose.**

Let’s start with the PowerShell Console. This is a command-line interface where you’ll execute most of your commands. It’s simple and efficient for quick tasks, allowing you to type individual commands and see the results immediately. When you open PowerShell, you’re presented with a prompt, often labeled with your system’s name followed by a dollar sign (`PS C:\>`). This is where you’ll type in your commands. The console is perfect for executing one-off commands, like managing files, checking system information, or running scripts.

Now, the Integrated Scripting Environment (ISE) is a more advanced tool designed to help you write and debug your PowerShell scripts. It provides a graphical interface with multiple panes that you can use to view your script, run your commands, and see the output in real-time. The ISE is especially useful when you’re working on larger scripts, as it provides a richer environment for writing, testing, and troubleshooting. You’ll find features like syntax highlighting, code completion, and an intuitive debugging tool that will help you write cleaner, more efficient scripts.

When using PowerShell, think of the Console as your go-to for running quick, one-off commands and the ISE as your development workspace for more complex scripting tasks. Each interface has its strengths, and learning to use both will give you the flexibility to tackle a wide range of tasks efficiently.

As you move forward, it’s important to become comfortable with switching between the Console and ISE depending on the task at hand. The more familiar you become what these environments, the easier it will be to harness the full power of PowerShell.
