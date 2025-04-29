# PowerShell for Beginners: Step by Step Guide
by Logan S. Helms

***
## 1. What is PowerShell?

PowerShell is a powerful scripting language and command-line shell that was designed specifically for system administrators and power users. Its primary purpose is to automate tasks and manage system configurations, making it an indispensable tool for anyone working in IT. What sets PowerShell apart from other command-line interfaces is its deep integration with the .NET framework, allowing you to interact with both the operating system and the applications running on it.

One of the key benefits of PowerShell is its ability to automate repetitive tasks. Instead of manually configuring settings or running commands on multiple systems, you can write scripts that perform these tasks automatically, saving you a tremendous amount of time. For example, you can create scripts to manage user accounts, can thank your network settings, or even deploy software across an entire network.

PowerShell also offers a consistent, standardized way to interact with different systems, making it especially useful for system administrators managing large and complex environments. It can be used to control everything from individual servers to cloud resources, allowing you to write scripts that work across a variety of platforms.

Another major benefit is PowerShell is object-oriented nature. Unlike traditional command-line interfaces that return text-based results, PowerShell works with objects. This allows for more powerful and flexible scripting, as you can directly manipulate the data returned from commands, rather than just parsing plain text. This makes working with files, services, processes, and even network resources more intuitive and efficient. Moreover, PowerShell is built for extensibility. There are thousands of cmdlets – small, reusable commands that perform specific tasks – available out of the box, and you can easily add your own. It integrates seamlessly with many Microsoft products, like Active Directory, Exchange, and SQL Server, and has broad support for third-party tools as well.

In short, PowerShell is a versatile and indispensable tool for automating and managing complex systems. Whether you’re automating tasks on a single machine or managing a fleet of servers, it offers a streamlined, efficient way to handle your work.

https://learn.microsoft.com/en-us/powershell/

***
## 2. Installing PowerShell

**Installing PowerShell on Windows**

PowerShell comes pre-installed on most Windows systems, but it’s important to make sure you have the latest version. To get the most up-to-date version, you’ll use the PowerShell Core, which is the cross-platform version. Here’s a step-by-step guide to install it:

1. Download the installer: Go to the official PowerShell page. Find the latest stable release and select the appropriate .msi file for your version of Windows (either 64-bit or 32-bit).

2. Run the Installer: Once the installer file is downloaded, double-click to start the installation process. Follow the prompts and accept the terms of the license agreement. Make sure to select the option to add PowerShell to your PATH, which will make it accessible from any command prompt.

3. Confirm Installation: After installation, opening a new PowerShell window by typing “PowerShell” into the Start menu and hitting Enter. You should now be running the latest version of PowerShell!

**Installing PowerShell on macOS**

macOS doesn’t come with PowerShell pre-installed, but it’s easy to get it set up using Homebrew, a package manager for macOS.

1. Install Homebrew (if you don’t have it already). Open your Terminal and paste the following command to install Homebrew:

```bash
/bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”
```
 
2. Install PowerShell. Once Homebrew is installed, use the following command to install PowerShell:

```bash
brew install --cask powershell
```
 
3. Start PowerShell. Once the installation is complete, wants PowerShell by typing

 Once the installation is complete, launch PowerShell by typing pwsh into your terminal and hitting Enter. You should be up and running with PowerShell on macOS!

 

**Installing PowerShell on Linux**

Linux has a few more options depending on your distribution, but PowerShell can easily be installed using package managers like APT (for Ubuntu), YUM (for CentOS), or DNF (for Fedora).

On Ubuntu/Debian-based Systems:

1) Install Prerequisites. Open your terminal and run the following command to update your system and install the necessary dependencies:

Bash

sudo apt-get update

sudo apt-get install -y wget apt-transport-https software-properties-common

2) Add Microsoft Repository. Next, add the Microsoft package repository by running:

Bash

wget -q "https://packages.microsoft.com/config/ubuntu/$(lsb_release -rs)/packages-microsoft-prod.deb"

sudo dpkg -i packages-microsoft-prod.deb

3) Install PowerShell. Once the repository is set up, install PowerShell with:

bash

sudo apt-get update

sudo apt-get install -y powershell

4) Start PowerShell. Now you can start PowerShell by typing pwsh in the terminal.

On CentOS/Fedora/RHEL-based Systems:
Install Prerequisites

First, install the necessary packages:

 

Bash

sudo yum install -y wget
Add Microsoft Repository

Add the Microsoft repository by running:

 

Bash

 

wget https://packages.microsoft.com/config/rhel/7/prod.repo

sudo mv prod.repo /etc/yum.repos.d/Microsoft.repo

 
Install PowerShell

Install PowerShell using the following command:

 

Bash

 

Sudo yum install -y powershell

 
Start PowerShell

Once installed, type pwsh to start PowerShell.

 

Verifying the installation

No matter which operating system you are using, once the installation is complete, you can verify that PowerShell is working by opening a terminal or command prompt and typing:

 

Bash

 

$PSVersionTable.PSVersion

 

This will show you the version of PowerShell you have installed, confirming that everything is set up properly.

 

Conclusion

Now that you’ve install PowerShell, you’re ready to start exploring its powerful features. Regardless of whether you’re using Windows, macOS, or Linux, PowerShell offers a consistent experience across platforms, making it a versatile tool for managing systems and automating tasks. Let’s move on to using PowerShell in understanding its core commands in the next sections.
