Source: How to Exit Vim (2017, Worfolk Media), Kindle book by Chris Worfolk, 23 pages

## Introduction

Vim is a command-line text editor for Linux. If you are reading this, the chances are
that you already know that. This book is not about how to use Vim. There are many good
books out there for that. This book is purely about one thing: how to get out of Vim
once you have gotten into it.

It is a tricky beast. Ctrl C does not work. It works for almost everything else in
Linux! "Why, why is it doing this" I hear you scream.

Well, don't worry. This book will solve the problem. It will teach you how to exit Vim
in almost any situation, getting the results you want.

**Why learn Vim?**

There are two good reasons to learn Vim.

First, if you are editing a file on a remote server, you need to use a command-line
text editor. There are plenty of good ones, but Vim is typically available on a lot of
Unix flavors. Second, you will impress people. People have moved away from the
terminal: these days even software engineers may not bother doing Git from the
command-line. If you know all the Vim commands by heart you will be regarded as a
wizard to be equally worshipped and feared.

**A very short history of Vim**

If you are familiar with the history of computers, you may have heard of Bill Joy. He
played a large part in the development of BSD Unix, co-founded Sun Microsystems, and,
in 1976, released a command-line editor called Vi.

Vi took off and is now available on almost every Unix platform in the world. In 1991,
Bram Moolenaar came along and made a better version of it. This program became known
as Vi IMproved. Vim had been born.

**About the author**

Chris Worfolk is a software consultant based in Leeds, United Kingdom. He has spent
over ten years working in the IT industry and teaches the IT Contracting Master Class
to people looking to move from permanent to contractor.

He is the author of several open source projects, including the Rauma PHP framework
and the ShoutCloud Wordpress plugin.

[https://vim.fandom.com/wiki/Vim_Tips_Wiki](https://vim.fandom.com/wiki/Vim_Tips_Wiki)

| Vim Modes               | Key(s)                                                       |
| ----------------------- | ------------------------------------------------------------ |
| Normal Mode             | <kbd>Esc</kbd> or <kbd>Ctrl-[</kbd><br /><kbd>:</kbd> from Status Bar |
| Insert Mode             | <kbd>i</kbd> for 'insert', this immediately switches Vim to insert mode.<br /><kbd>a</kbd> for 'append', moves cursor after current character and enters insert mode.<br /><kbd>o</kbd> inserts a new line below the current line and enters insert mode on the new line.<br /><kbd>I</kbd> moves the cursor to the beginning of the line and enters insert mode.<br /><kbd>A</kbd> moves the cursor to the end of the line and enters insert mode.<br /><kbd>O</kbd> inserts a new line above the current line and enters insert mode on the new line. |
| Visual Mode             | <kbd>v</kbd> to enter visual mode.<br /><kbd>V</kbd> to enter visual line mode, this will make text selections by line.<br /><kbd>Ctrl-V</kbd> to enter visual block mode, this will make text selections by blocks.<br /><kbd>Shift+v</kbd> to enter linewise-visual, always select full lines. |
| Subtypes of Visual Mode | visual<br />block-visual to select any rectangular region.<br /><kbd>Shift + v</kbd> to enter linewise-visual, always select full lines. |
| Command Mode            | <kbd>:</kbd> enters command mode<br /><kbd>%</kbd> means across all lines<br /><kbd>s</kbd> means 'substitute'.<br /><kbd>/foo</kbd> is regex to find things to replace.<br /><kbd>/bar/</kbd> is regex to replace things with.<br /><kbd>/g</kbd> means global, otherwise it would only execute once per line. |
| Replace Mode            | Replace mode allows you to replace existing text by typing over it directly. Before entering this mode, get into normal mode and put your cursor on top of the first character that you want to replace. Then press <kbd>Shift+r</kbd> to enter replace mode. Now, whatever you type will replace the existing text. The cursor automatically moves to the next character, just like in insert mode. The only difference is that every character you type will replace the existing one. |
| Help documentation      | Vim has a number of other methods that you can read about in the help documentation, <kbd>:h</kbd> or <kbd>:help</kbd>. |

| VIM's main help file                   | Command(s) |
| -------------------------------------- | ---------- |
| Invoke VIM's main help file `help.txt` | `:help`    |

| VIM's BASIC help files                                       | Command(s)       |
| ------------------------------------------------------------ | ---------------- |
| **quickref** - Overview of the most common commands you will use | `:help quickref` |
| **tutor**  - 30-minute interactive course for beginners      | `:help tutor`    |
| **copying** - About copyrights                               | `:help copying`  |
| **iccf** - Helping poor children in Uganda                   | `:help iccf`     |
| **sponsor** - Sponsor Vim development, become a registered Vim user | `:help sponsor`  |
| **www** - Vim on the World Wide Web                          | `:help www`      |
| **bugs** - Where to send bug reports                         | `:help bugs`     |



| Moving Around                                                | Key(s)                       |
| ------------------------------------------------------------ | ---------------------------- |
| Move one character up                                        | &uarr; or k                  |
| Move one character down                                      | &darr; or j                  |
| Move one character left                                      | &larr; or h                  |
| Move one character right                                     | &rarr; or l                  |
| Move to upper left corner                                    | H                            |
| Move to middle line                                          | M                            |
| Move to lower left corner                                    | L                            |
| Move one word forward                                        | w                            |
| Move one word backward                                       | b                            |
| Move to end of next word                                     | e                            |
| Move to next instance of current word                        | * or n                       |
| Move to previous instance of current word                    | #                            |
| Move to first non-whitespace character in a line             | ^ or _                       |
| Move to last non-whitespace character in a line              | g_                           |
| Move to beginning of line (including whitespace)             | 0 (zero)                     |
| Move to end of line                                          | $                            |
| Move to the beginning of next sentence                       | )                            |
| Move to the beginning of previous sentence                   | (                            |
| Move to the next paragraph                                   | }                            |
| Move to the previous paragraph                               | {                            |
| Move to beginning of file                                    | 1G or gg                     |
| Move to end of file                                          | G                            |
| Move to line n                                               | :n or nG                     |
| Move page forward                                            | <kbd>Ctrl</kbd>+<kbd>F</kbd> |
| Move page backward                                           | <kbd>Ctrl</kbd>+<kbd>B</kbd> |
| Scroll up (half a screen)                                    | <kbd>Ctrl</kbd>+<kbd>U</kbd> |
| Scroll down (half a screen)                                  | <kbd>Ctrl</kbd>+<kbd>D</kbd> |
| Show relative file path and current position (total # of lines in file and the current line #/total # of lines as a %) | <kbd>Ctrl</kbd>+<kbd>G</kbd> |
| Show absolute file path on status bar                        | `:echo expand(':p')`         |

| Changing Text                                                | Key(s)                        |
| ------------------------------------------------------------ | ----------------------------- |
| Delete (Cut) current character                               | <kbd>x</kbd>                  |
| Delete (Cut) previous word                                   | <kbd>d</kbd>+<kbd>b</kbd>     |
| Delete (Cut) word                                            | <kbd>d</kbd>+<kbd>w</kbd>     |
| Delete (Cut) n words                                         | <kbd>d</kbd>+`n`+<kbd>w</kbd> |
| Delete (Cut) a line, cursor will then appear on next line of text | <kbd>d</kbd>+<kbd>d</kbd>     |
| Delete (Cut) a line, cursor then appears on the same line without any text | <kbd>D</kbd>                  |
| Delete (Cut) n lines                                         | `n`+<kbd>d</kbd>+<kbd>d</kbd> |
| Delete (Cut) a sentence                                      | <kbd>d</kbd>+<kbd>)</kbd>     |
| Delete (Cut) n sentences                                     | <kbd>d</kbd>+`n`+<kbd>)</kbd> |
| Delete (Cut) a paragraph                                     | <kbd>d</kbd>+<kbd>}</kbd>     |
| Delete (Cut) n paragraphs                                    | <kbd>d</kbd>+`n`+<kbd>}</kbd> |
| Yank (Copy) a word                                           | <kbd>y</kbd>+<kbd>w</kbd>     |
| Yank (Copy) a line, copied text is placed on new line when pasted | <kbd>y</kbd>+<kbd>y</kbd>     |
| Yank (Copy) n lines, copied text is placed on new line when pasted | `n`+<kbd>y</kbd>+<kbd>y</kbd> |
| Yank (Copy) a line, copied text is placed on the same line as cursor when pasted | <kbd>y</kbd>+<kbd>$</kbd>     |
| Paste after cursor                                           | <kbd>p</kbd>                  |
| Paste before cursor                                          | <kbd>P</kbd>                  |

| Editing Text                         | Key(s)                       |
| ------------------------------------ | ---------------------------- |
| Insert at cursor                     | <kbd>i</kbd>                 |
| Insert at beginning of line          | <kbd>I</kbd>                 |
| Append after cursor                  | <kbd>a</kbd>                 |
| Append at end of line                | <kbd>A</kbd>                 |
| Append at end of word                | <kbd>e</kbd>+<kbd>a</kbd>    |
| Insert blank line below current line | <kbd>o</kbd>                 |
| Insert blank line above current line | <kbd>O</kbd>                 |
| Exit Insert Mode                     | <kbd>Esc</kbd>               |
| Replace a single character           | <kbd>r</kbd>                 |
| Replace (typeover)                   | <kbd>R</kbd>                 |
| Replace a single word                | <kbd>c</kbd>+<kbd>w</kbd>    |
| Replace entire line                  | <kbd>c</kbd>+<kbd>c</kbd>    |
| Replace to end of line               | <kbd>c</kbd>+<kbd>$</kbd>    |
| Join line below to current line      | <kbd>J</kbd>                 |
| Undo last change                     | <kbd>u</kbd>                 |
| Undo all changes on line             | <kbd>U</kbd>                 |
| Indent current line                  | <kbd>>></kbd>                |
| Unindent current line                | <kbd><<</kbd>                |
| Indent current line in Insert Mode   | <kbd>Ctrl</kbd>+<kbd>T</kbd> |
| Unindent current line in Insert Mode | <kbd>Ctrl</kbd>+<kbd>D</kbd> |

| Search and Replace                                           | Command(s)                |
| ------------------------------------------------------------ | ------------------------- |
| Search for `text`                                            | `/text`                   |
| Search backwards for `text`                                  | `?text`                   |
| Search for `john` or `joan`                                  | `/jo[ha]n`                |
| Search for `the` or `then` or `their` (string at beginning of a word) | `/\<the`                  |
| Search for `the` or `breathe`  (string at the end of a word) | `/the\>`                  |
| Search for `the` <ins>only</ins>  (search for an exact match, exclusively) | `/\<the\>`                |
| Search for `john` or `joan`                                  | `/john\ljoan`             |
| Search for 4 letter words                                    | `/\<\w\w\w\w\>`           |
| Search for 4 digit numbers                                   | `/\<\d\d\d\d\>`           |
| Repeat search in the same direction                          | `n`                       |
| Repeat search in the opposite direction                      | `N`                       |
| Replace `old` with `new` (applies to first instance in current line) | `:s/old/new/`             |
| Replace `old` with `new`, globally (applies to every instance in current line) | `:s/old/new/g`            |
| Replace `old` with `new`, globally (applies to every instance in current line, with confirmation prompt for each instance) | `:s/old/new/gc`           |
| Replace `old` with `new` (applies to first instance in every line) | `:1,$ s/old/new/`         |
| Replace `old` with `new`, globally (applies to every instance in every line) | `:1,$ s/old/new/g`        |
| Replace `old` with `new`, globally (applies to every instance in every line, ignore case) | `:1,$ s/old/new/gi`       |
| Replace `old` with `new`, globally (lines `x` through `y`)   | `:x,y s/old/new/g`        |
| Replace `old` with `new`, globally (lines `x` through `EOF`) | `:x,$ s/old/new/g`        |
| Replace beginning of each line with `text`                   | `:1,$ s/^/text/g`         |
| Replace end of each line with `text`                         | `:1,$ s/$/text/g`         |
| Delete all lines containing `text`                           | `:g/text/d`               |
| Delete all lines <ins>not</ins> containing `text`            | `:v/text/d`               |
| Delete all HTML tags                                         | `:1,$ s#<[^>]\+>##g`      |
| Delete lines appearing twice                                 | `:1,$ s/^\(.*\)\n\1$/\1/` |

| Changing Case                                  | Command(s)         |
| ---------------------------------------------- | ------------------ |
| Convert line to lowercase                      | `guu` or `Vu`      |
| Convert line to uppercase                      | `gUU` or `VU`      |
| Invert line case                               | `g~~`              |
| Convert word to uppercase                      | `vEU`              |
| Convert word to lowercase                      | `vEu`              |
| Invert word case                               | `vE~`              |
| Convert all text to lowercase                  | `ggguG`            |
| Convert all text to uppercase                  | `gggUG`            |
| Convert first letter of each word to lowercase | `:1,$ s/\<./\l&/g` |
| Convert first letter of each word to uppercase | `:1,$ s/\<./\u&/g` |
| Convert first letter of each line to lowercase | `:1,$ s/.*/\l&`    |
| Convert first letter of each line to uppercase | `:1,$ s/.*/\u&`    |

| Visual Selection                                            | Command(s)                      |
| ----------------------------------------------------------- | ------------------------------- |
| Enter line-wise visual mode                                 | <kbd>Shift</kbd> + <kbd>v</kbd> |
| Extend selection down one line, or `n` lines                | `j` or `n` + <kbd>j</kbd>       |
| Extend selection up one line, or `n` lines                  | `k` or `n` + <kbd>k</kbd>       |
| Delete selection (line-wise visual mode)                    | <kbd>Shift</kbd> + <kbd>d</kbd> |
| Enter visual block mode                                     | <kbd>Ctrl</kbd> + <kbd>v</kbd>  |
| Extend selection right one block, or `n` blocks             | `l` or `n` + <kbd>l</kbd>       |
| Extend selection left one block, or `n` blocks              | `h` or `n` + <kbd>h</kbd>       |
| Delete selection (visual block mode)                        | `d`                             |
| Change (visual block mode), subsequently enters insert mode | `c`                             |
| Commit changes after insertion                              | <kbd>Enter</kbd>                |

| Named Registers                                              | Command(s)                                       |
| ------------------------------------------------------------ | ------------------------------------------------ |
| Begin new line below cursor, subsequently entering insert mode | `o`                                              |
| Back to Normal mode                                          | <kbd>Esc</kbd> or <kbd>Ctrl</kbd> + <kbd>c</kbd> |
| Invoke named register (a-z, A-Z) 26 + 26 = 52 named registers | `"`                                              |
| Yank current line into named register `a`, and then paste after cursor | `"ayy` + `p`                                     |
| Paste before cursor, automatically moving the cursor down to next line | `gP`                                             |

# Marks

[https://vim.fandom.com/wiki/Using_marks](https://vim.fandom.com/wiki/Using_marks)

Marks are hidden positions that allow us to jump back to that specific location or line. Lowercase marks are shared within a file (local to the current buffer). Uppercase marks are shared among all files.

### Jumps [Source: https://vimtricks.com/p/vim-jump-list/](https://vimtricks.com/p/vim-jump-list/)

One trick which will certainly power-up your Vim proficiency is to  make use of the Vim jump list. Jumps are cursor movements stored in a  list called the jumplist. When making certain movements, such as jumping to line 42 with `42G`, Vim will save it as a “jump” in the jumplist. You can list jumps using the `:jumps` command.

- To move backwards through the jump list to an older jump use `<ctrl-o>`.

- To move to a newer jump use `<ctrl-i>`. You can also press `<tab>`.

Many shorter movements, like regular `hjkl` and those based on motions do not modify the jumplist. So their movements will not be navigable with `<ctrl-o>` and `<ctrl-i>`. Similarly, the colon line number (`:42`) movement does not modify the jump list. Use `<line number>G` instead of `:<line number>` to create a point in your jump history.

Examples movements which modify the jump list are:

- `/pattern` searches and `?pattern` searches (forward and backward pattern matching)
- `*` and `#` (forward and backward search for the word under the cursor.
- `%` (jump to a matching enclosing character like paren, brace, bracket, etc)
- Any inter-file navigation like `gf`

Keep in mind that the Vim jump list is a stack, similar to your browsing  history. If you jump back several points and then create a new jump  point in the middle of your history, then jump list points after that  will be cleared. Your next jumps will continue building the stack.

#### Viewing and Clearing the Vim Jump List

You can view the jump list with the `:jumps` command. Vim  shows a jump number, the line and column number, and the file name or  text of each jump in your history. The left column can be useful for  jumping faster through your history. Note the number there is a number  relative to your current position in the history. You can prepend that  number before `<ctrl-o>` or `<ctrl-i>` to move more rapidly.

Vim will store up to 100 locations in your jump list. If you ever want to clear them all out, run the command `:clearjumps` and your jumplist history will be wiped clean.

For more info, check out `:help jumplist` in Vim. Also be sure to read about the [Vim change list](https://vimtricks.com/p/vim-jump-to-last-change/) which is similar to but different from the Vim jump list.

#### How is this different from the Vim change list?

The Vim jump list is a history of jumps you have made across files. The  Vim change list is a similar history but of changes you've made. A  change does not have to be made to add it to the Vim jumplist.

#### How do I clear the Vim jump list?

You can clear out the Vim jump list -- wipe your history -- by calling the `:clearjumps` command at any point.

| Marks                                                        | Command(s)  |
| ------------------------------------------------------------ | ----------- |
| Create a mark named `a` (You can use a-z,A-Z as marks) 26 + 26 = 52 marks | `m{a-zA-Z}` |
| (Backtick) Jump to exact position of the mark.               | ``m`        |
| (Single quote) Jump to the beginning of the line that holds the mark. | `'m`        |
| Delete from current line to line of mark **a**               | `d'a`       |
| Delete from current cursor position to position of mark **a** | **d`a**     |
| Change text from current line to line of mark **a**          | `c'a`       |
| Yank text to unnamed buffer from cursor to position of mark **a** | **y`a**     |
| List all the current marks                                   | `:marks`    |
| List marks **a**, **B**                                      | `:marks aB` |

Commands like `d'a` operate "linewise" and include the start and end lines.
 Commands like **d`a** operate "characterwise" and include the start but not the end character.

It is possible to navigate between lowercase marks:

## Navigating between lowercase marks

| Description                                   | Command(s) |
| --------------------------------------------- | ---------- |
| Jump to next line with a lowercase mark.      | `]'`       |
| Jump to previous line with a lowercase marks. | `['`       |
| Jump to next lowercase mark.                  | **]`**     |
| Jump to previous lowercase mark.              | **[`**     |

## Special marks

Vim has some special marks which it sets automatically. Here are some of the most useful:

| Description                                                  | Command |
| ------------------------------------------------------------ | ------- |
| Jump to position where last change occurred in current buffer. | ``.`    |
| Jump to position where last exited current buffer.           | ``"`    |
| Jump to position in last file edited (when exited Vim).      | ``0`    |
| Like ``0` but the previous file (also **2`** etc).           | ``1` |         |
| jump back (to line in current buffer where jumped from).     | `''`    |
| Jump back (to position in current buffer where jumped from). | **``**  |
| Jump to beginning/end of previously changed or yanked text.  |         |
| Jump to beginning/end of last visual selection.              |         |

See the full list at [:help '[](http://vimdoc.sourceforge.net/cgi-bin/help?tag='[) and following.

# Buffers 

[Source: https://vim.fandom.com/wiki/Buffers](https://vim.fandom.com/wiki/Buffers)

A buffer is an area of Vim's memory used to hold text read from a  file. In addition, an empty buffer with no associated file can be  created to allow the entry of text.

The `:e *filename*` command can edit an existing  file or a new file. When a file is edited, the file is read into a new  buffer that holds a temporary copy of the file (or an empty buffer for a new file). Editing makes changes to the buffer. To save a file, the  original file is replaced by writing the buffer to disk.

The `:new` command creates a new window displaying the contents of a new (empty) buffer.

To list all buffers use the `:ls` command which is equivalent to `:buffers`. Each buffer is assigned a number that is displayed in the first column.

The second column describes the state of the buffer. The different states are explained at [:help :ls](http://vimdoc.sourceforge.net/cgi-bin/help?tag=%3Als). The third column is the file name associated with the buffer.

## Overview

![](https://static.wikia.nocookie.net/vim/images/4/45/Tabs-windows-buffers.png/revision/latest?cb=20110615103913)

The image shows a session of Vim created with these steps:

| `gvim scan.py`              | start GUI Vim editing file scan.py in first tab              |
| --------------------------- | ------------------------------------------------------------ |
| `:tabe example.txt`         | edit file example.txt in a new tab                           |
| `:vimgrep /0$/ example.txt` | search for lines ending with 0 in file example.txt           |
| `:cwin`                     | open quickfix window (window 4)                              |
| `Ctrl-W w`                  | move cursor to other window                                  |
| `:vsp`                      | split window vertically (windows 2 and 3 showing example.txt) |
| `:help quickfix`            | open help (window 1)                                         |
| (commands not shown)        | scroll and size each window                                  |

In the image, the label for the current tab shows `4 example.txt` because there are four windows in the tab, and the cursor is in window 3 which shows the buffer for file `example.txt`. This label results from the default setting of `'guitablabel'`; see [here](https://vim.fandom.com/wiki/Show_tab_number_in_your_tab_line) for an example of changing the default.

## Working with Buffers

The commands `:bnext` and `:bprev` allow navigating between buffers. They can be shortened to `:bn` and `:bp` respectively.

The `:b` command accepts either a number or a string  argument specifying which buffer to display. The buffers are numbered as they are created and can be viewed in a list using `:ls` or `:buffers`. Supplying a number after `:b` displays that buffer (`:b12` displays buffer 12).

If a string is supplied, the buffer with a matching file name is  displayed. You do not need to write the full name of the file as the  best match will be used. After typing the first couple of characters,  you can press Tab for completion of the name. For example, if a buffer  is named example.txt, typing `:b ex` and pressing Enter will  switch to the example.txt buffer, provided no other buffer matches "ex". If the command fails (because more than one buffer matches), press `:` then Up arrow to recall the command, then press Tab to choose the wanted name.

## Jumping around

Vim keeps a history of all the jumps you make in your buffers. You  can go to any place you jumped from with the Ctrl-O and Ctrl-I command  (normal mode). This also works across buffers.

To toggle between the current and the last buffer use the Ctrl-^  (normal mode) command (on most keyboards, hold down Ctrl and press the 6 key on the main keyboard).

## Splits

You can use `:split` and `:vsplit` to divide  the current area into two windows with the same buffer. If you supply an argument then one of the new windows is created with the argument as a  file name used for the buffer in the new window

To gain more control over how the splits are created, you can combine the `:vertical`, `:leftabove` and `:rightbelow` commands. Also of use are the the `:sfind` and `:sb` commands.

### Examples

- `:vertical sb 3`

  Create a vertical split and show buffer number 3 in the window to the left.

- `:vertical rightbelow sfind file.txt`

  Create a vertical split and read file.txt into the buffer in the right window.

- `:rightbelow sfind file.txt`

  Create a horizontal split and read file.txt into the buffer in the bottom window.

### Navigating splits

Use Ctrl-W followed by one of the `hjkl` movement keys.

## Managing buffers

Buffers are a convenient way to manage multiple files within a  project in Vim. If you are managing multiple projects, consider opening a separate Vim for each project. This way each Vim instance contains only related buffers in the buffer list. This is an advantage over other  methods for managing multiple files; such as a combination of buffers, [windows](https://vim.fandom.com/wiki/Category:Split_windows), and [tabs](https://vim.fandom.com/wiki/Category:Tabs).

Here are the essential buffer commands:

| `:ls`          | List the current buffers (including their numbers).          |
| -------------- | ------------------------------------------------------------ |
| `:b <number>`  | Display the buffer with the given number.                    |
| `:b <partial>` | Display the first buffer matching the partial name (or press Tab for name completion). |
| `:bd`          | Delete the current buffer; will fail if unsaved (nothing is deleted). |
| `:bd!`         | Delete the current buffer; will discard any changes (changes are lost). |

There are many plugins for managing buffers, but it is often easier to just use the above commands. Enter `:ls` to list the buffers, then (while the list is still displayed), enter a command like `:b12` to display buffer 12 (no space is needed).

## Managing tabs



| Command                       | Description                                |
| ----------------------------- | ------------------------------------------ |
| `:tabnew`                     | Create a new tab.                          |
| `:tabedit <filename>`         | Open file `<filename>` in new tab.         |
| `:tabf <filename>*`           | Open files `<filename>*` in new tabs.      |
| `:tabfirst`                   | Show first tab.                            |
| `:tablast`                    | Show last tab.                             |
| `:tabn`                       | Show next tab.                             |
| `:tabp`                       | Show previous tab.                         |
| `gt`                          | Switch tabs.                               |
| `:tabm n`                     | Move current tab to position n.            |
| `:tabdo <command>`            | Execute command `<command>` in all tabs.   |
| `:tab ball`                   | Place all open files in tabs.              |
| `vi -p file1 file2 file3 ...` | Start Vi and open specified files in tabs. |

## Managing Windows (Viewports)

| Command                                                   | Description                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| `:split <filename>`                                       | Split window and open file `<filename>`(horizontal).         |
| `:vsplit <filename>`                                      | Split window and open file `<filename>` (vertical).**About the author**<br/><br/>Chris Worfolk is a software consultant based in Leeds, United Kingdom. He has spent<br/>over ten years working in the IT industry and teaches the IT Contracting Master Class<br/>to people looking to move from permanent to contractor.<br/><br/>He is the author of several open source projects, including the Rauma PHP framework<br/>and the ShoutCloud Wordpress plugin. |
| `:Sex`                                                    | Split window and open built-in file explorer.                |
| `:browse e`                                               | Open graphical file explorer.                                |
| `:cd directory`                                           | Change directory to `directory`.                             |
| <kbd>Ctrl</kbd>-<kbd>W</kbd> <kbd>Ctrl</kbd>-<kbd>W</kbd> | Cycle between windows.                                       |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>    &uarr;    or     `k`      | Move one window up.                                          |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>    &darr;    or     `j`      | Move one window down.                                        |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>    &larr;    or     `h`      | Move one window left.                                        |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>    &rarr;    or     `l`      | Move one window right.                                       |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>-<kbd>+</kbd>                 | Increase window size.                                        |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>-<kbd>-</kbd>                 | Decrease window size.                                        |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>-<kbd>=</kbd>                 | Make windows equal size.                                     |
| <kbd>Ctrl</kbd>-<kbd>W</kbd>-<kbd>q</kbd>                 | Close active window.                                         |

## Executing commands

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `:cd directory` | Change directory to `directory`.          |
| `:sh`           | Drop to shell (execute commands)          |
| `:! command`    | Execute command `command`.                |
| `:%! command`   | Execute command `command`, insert output. |
| `:%!xxd`        | Enter hex mode.                           |
| `:%!xxd -r`     | Exit hex mode.                            |
| `ggVGg?`        | Change text to ROT13.                     |

## Syntax highlighting

| Command       | Description                   |
| ------------- | ----------------------------- |
| `:syntax on`  | Turn syntax highlighting on.  |
| `:syntax off` | Turn syntax highlighting off. |



## Changing settings

| Set Commands (enter `:set` followed by a parameter) | Description              |
| --------------------------------------------------- | ------------------------ |
| `:set number`                                       | Turn line numbering on.  |
| `:set nonumber`                                     | Turn line numbering off. |



## Vim's configuration file

Depending on your operating system, Vim's configuration file will be in a different location. On Mac and Linux, it's `.vimrc` under your home directory. On Windows, it will be `C:/Users/<yourlogin>_vimrc`. If you work on many systems, try to avoid too much customization in your `.vimrc` file. It will make it hard to use vanilla Vim on other systems you are using. Vim users intend for their `.vimrc` files to be used over a period of several years (even decades).

## Exiting/Writing to File(s)

| Command                                           | Description                                                  |
| ------------------------------------------------- | ------------------------------------------------------------ |
| `:q`                                              | This command will work as long as you have not made any changes to your document. If you have, this command will fail and you will get an error message:<br />`No write since last change (add! to override)` |
| `:q!`                                             | What if you have made changes to a document, but want to exit without saving? You need<br/>to add the override. Changes to the document are discarded. |
| In sequence: `:w:q`<br /><br />One command: `:wq` | You have made changes to the document, and now you want to save the changes and exit.<br/>You could do this in sequence.<br />However, it is quicker to do it all as one command, using write and quit.<br />If you do not have write permission, you will get an error:<br />`E45:'readonly' option is set (add! to override)`<br />The file's last updated timestamp will be updated, even if you do not make any changes<br/>to the file. |
| `:wq!`                                            | If you need to write to a file, even though it is open as read-only, you need to use<br/>force write and quit. You can even pass in a sudo command to fix permission problems, but that is outside<br/>the scope of this book. |
| `:x`                                              | Using _write quit_ will update the file's last updated timestamp, even if you have not made any changes to the file. What if you only want to write changes if there are some actual changes to write?Use _write if required_ instead.<br />There is no q on the end. Just x will achieve the result and exit. It is also worth noting that the x is lowercase. Running :X will encrypt your file instead. It is best not to mix those up. |
| `:conf q`                                         | If you try to close most GUI application documents without saving, it will prompt you<br/>to save, discard, or cancel. What if you want Vim to do the same? If you have made changes to the file, Vim will ask you what you want to do: <br />`Save changes to readme.md? [Y]es,[N]o, [C]ancel:`<br />If you have not made any changes to the file, Vim will exit immediately. |
| `:qa`                                             | Like most good text editors, Vim supports tabs. This feature allows you to open multiple files at once and switch between them. However, this adds a whole new level of complexity to exiting. If you use the standard commands, you will only exit the tab you are currently working on. But what if you want to exit all tabs? _Quit all_ to the rescue.<br />This will close all tabs. Assuming there are no unsaved changes, of course. |
| `:qa!`                                            | What if you have multiple tabs open, you have made changes, and you want to discard them all?<br/>This closes everything you have open and writes nothing. |
| `:wqa`                                            | You have made changes to several tabs, and now you want to write all of the changes and exit Vim. As with quit, if you do not have permission, the command will fail, and you will be shown an error message. |
| `:wqa!`                                           | You have made changes to several tabs, some of which are read-only, and you want to force write the changes anyway. |
| `:xa`                                             | You have a bunch of tabs open. Some of them you have made changes to, others you have not. If you do not want to update the last updated timestamps for the files you have not changed. This goes through each file, writes the changes if some have been made, leaves the file untouched if not, and then exits. |
| `:conf qa`                                        | You have many tabs open and you have made changes to a bunch of them. You cannot remember which ones you have changed, and you want to keep some, but not others. So, you want to be individually prompted for each one. This command will generate a prompt, including the option to deal with all files at once.<br />`Save changes to file2.txt? [Y]es, [N]o, Save [A]ll, [D]iscard All, [C]ancel:`<br />Assuming you choose individually, it will prompt you for each file in turn. |
| `:w`                                              | Write file, don't exit.                                      |
| `:wa`                                             | Write all files, don't exit.                                 |
| `:w filename`                                     | Write to file `filename`, don't exit.                        |
| `:wq`                                             | Write file, exit.                                            |
| `:x,y w filename`                                 | Write lines `x` through `y` to file `filename`.              |
| `:x,y w >> filename`                              | Append lines `x` through `y` to file `filename`.             |
| `:r filename`                                     | Insert contents of file `filename`.                          |
| `:xr filename`                                    | Insert contents of file `filename` under line `x`.           |

