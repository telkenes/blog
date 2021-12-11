---
date: 10/12/2021
---
# Why macOS key binds on Linux may just be impossible
## Why am I doing this in the first place?
For most of my life, I have used macOS. I think from around 2011(not exactly sure?) until 2020. If you did not know, macOS keyboards have a different layout compared to Windows which uses a standard keyboard. With all these years of using macOS, I was more to the power user side using quite a lot of key binds such as command + tab to switch between applications rather than using the dock. 

## Differences between keybinds
### Differences in macOS keyboard and standard ANSI
![macOS keyboard layout vs standard (ANSI)]()
If you see the ANSI keyboard layout for the macOS, you will realize that the bottom row is control, alt, and command (command key is basically the Windows key and causes many issues with making Linux mimic macOS). This is difference compared to the standard keyboard is quite jarring as the alt and command/windows key is swapped. This is not a big issue as most keyboard manufacturers allow rebinding meaning we can create a macOS keyboard just by swapping those two keys.

### Differences in Software keybinds
While hardware may not be an issue, software on the other hand is a much bigger issue. 
1. The biggest programmer meme of ctrl+c and ctrl+v is inapplicable to macOS users. For copying and pasting, macOS requires you to use command+c and command+v. Albeit bias, I feel that it is much more comfortable to press command+c and command+v compared to ctrl. 
2. Another important difference is cycling applications (not application windows). While Windows and Linux DEs commonly use alt+tab to cycle through application windows (not just the app), macOS decides to take a different approach and have command+tab to cycle through applications and command+` to cycle between the windows the application has open. Honestly I find these keybinds to be dumb as it ruins multitasking with multiple browser windows.
3. Command and ctrl As explained above in point 1, copy pasting is done with command+c and command+v this extends to other applications where browsers... FUCKING browsers is something which also has fucked up keybinds. For starters, if you were given a mac laptop, your instinct would be to use ctrl+t to open a new tab (if you are familiar with keybinds) but not... browsers in macOS decided that command+t is for new tabs... closing tabs is command+w but wait... cycling tabs is ctrl+tab??? This is one of the more difficult sections to overcome when trying to mimic macOS keybinds on another operating system (and in this case, Linux)

## Recreating macOS keybinds
### DE (Desktop Environment) choice
I chose KDE to recreate macOS as I think it is one of the DEs which has a robust GUI for customization. While customizing keybinds may differ from DE to DE (and WMs), I think that there are some aspects that we just cannot fix. 

### Hardware
The hardware differences is something which is an easy fix where my keyboard (xd87) can be flashed with VIA allowing each key to be remapped. This made it easy to make the default layout have the windows key beside the space bar and have the alt key in between the windows key and ctrl. 

### Software
As macOS has many keybinds, most of the keybinds discussed here are what I mainly use so if a keybind you commonly use is not listed here, I am sorry that I did not use that keybind.

#### Cycling windows
Moving to the software side, cycling windows can be easily changed to meta (or super... I will continue saying meta rather than super) + tab and for cycling back, it can be changed to meta+shift+tab. 

#### Copy pasting
Copy pasting is something which macOS users are too used to doing with command+c rather than ctrl+c. So I think this is one of the most important keybinds to change. This was an easy fix until we realize that copy pasting requires meta+c and meta+v. Well that is not an issue as KDE allows you to rebind copy pasting in the Shortcuts → Shortcuts → Common Actions → Edit and change the copy pasting. Finally, we have an OS which mimics macOS in terms of basic OS usage. But wait... when we try to use the keybind, it does not work in certain apps(? this might have been user error). We are quite forced to swap ctrl and meta in software. This would mean that all keybinds which require command to act as ctrl in macOS to work as intended. 

#### Effect of changing meta and ctrl around
But switching these two keys introduces more issues... for starters, now we must rebind cycling of windows to ctrl+tab (as we changed meta to ctrl). For some reason KDE does not like me having ctrl+tab, and honestly I don't really care so on my own machine, I have been using alt+tab to cycle windows. This also means that apps and other programs will also have these keys switched. This might be an issue, but you can probably get used to it over time.

#### Browser
As we changed meta and ctrl around, this causes keybinds to be whack when cycling tabs. I tried to use extension with Google Chrome to customize keybinds, but extensions don't work on the start page. I also tried Firefox, but it also suffered with extensions not working to customize keybinds and no real way to change keybinds. Yet I knew a browser which allowed me to customize each and every keybind, Vivaldi. After switching tab cycling to meta+tab to keep the ctrl+tab in macOS, browser keybinds work great. This probably is one of the better experiences with "macOS like" keybinds in Linux. 

#### Screenshot
This was probably the easiest with KDE as spectacle allows you to assign custom keybinds. As I don't like to store screenshots, I just kept the keybind to ctrl+shift+4 

## Thoughts on "macOS keybinds" in Linux
Nothing rlly to add here but just wanted to point out (again) that due to us changing meta and ctrl around, all apps will have them switched as well. Tbh this isn't that hard to get used to so yea... I consider myself to be weird for having these keybinds, but I do prefer them over normal keybinds.

## So why is it impossible
If you do want the true experience with macOS keybinds in Linux, that will likely never happen as you would need to change each keybind for each app as apps on macOS sometimes use ctrl like Windows app, but others replace ctrl with command (meta). Some apps even use both which is awkward... when using the swapped meta and ctrl, apps which just use ctrl will feel quite natural as everything is just where the meta key is. As some of these apps do not allow you to customize keybinds (such as browsers...) then you are stuck with an unauthentic experience. One example of this is how navigating servers through Discord I now have to press alt + meta + arrow keys rather than alt + ctrl + arrow keys (which is the keybind on Windows and macOS). So yea... if you consider this a large compromise, then I suggest trying to get used to Windows keybinds as more people use Windows and most Linux DEs have similar keybinds. Either way, I don't think it is that big of an issue as it is just 3 keys swapped around (alt and meta swapped physically and meta and ctrl swapped in software).