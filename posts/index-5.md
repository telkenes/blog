---
date: 20/11/2021
---
# Forcing my brother to use linux on his potato

## Creating bootable media
If you are familiar with installing an operating system, you would know that you need to make a bootable media (in most cases this would be a USB). As I have installed linux on my machines a few times, I already had a few bootable USBs with my distro of choice, Arch and one that had Ventoy, something which allows a USB to boot into multiple ISOs. This meant that I didn't have to make a new bootable USB but if you wanted to, just install your ISO of choice, then install [etcher](https://www.balena.io/etcher/) or [rufus](https://rufus.ie/) to flash your USB and you are good to go.

## Choice of distro
As I use Arch as my daily driver, I was considering giving my brother vanilla Arch or an Arch based distro but this lead to some issues. My brother's laptop had secure boot on and a BIOS that was locked with a password which no one knows of. While the BIOS password could be reset with some jumping of pins and stuff, I did not want to bother with this (it is an old Lenovo laptop btw). Due to this, I not only had to do some extra steps with Ventoy (if you are facing this issue, visit [this site](https://www.ventoy.net/en/doc_secure.html)) I soon realize that not all distros supported secure boot by default, so it left me with a few options... I ended up choosing Ubuntu as it was the only distro that supported secure boot by default that I had on ventoy.

## Installation
I installed Ubuntu and went through the installation with him. It was quite a decent experience with choosing very generic options (us layout, English, and automatic partition stealing from the bloatware partition) cuz it is what it is. As I knew my brother's laptop was old and slow, I wanted to give him a lighter DE (Desktop Environment) such as xfce. Thus, after installing the bloatware default GNOME DE, I installed xfce, logged out then changed DE to xfce. It was all good and snappy, but I realize that both had around the same ram usage when only having the system monitor open. While I do agree that idle RAM usage does not really matter, I felt it is quite weird how xfce (and KDE... ill explain in a while) both have the same IDLE ram usage, but many say that "GNOME bloated compared to xfce nooo don't use it". As I felt that the RAM usage was quite the same, I felt like just installing KDE and seeing if it was the same. Apparently it was quite the same so yea... I ended up giving him KDE as while there are some major issues with it, like the widget system being a bit ass to download with different menus and other stuff, I honestly like KDE for how easy it is to customize the look of the desktop quite easily (compared to xfce and gnome).

## Lag
Everything was good after installing KDE with customizing the look to have a combination of mac and windows with a bar on top and rather than a dock, a window's panel at the bottom. Quite cursed cuz most actions can be done on the top and bottom. Suddenly, the browser would lag when creating a new tab (for the 10th and so on) and typing in the search bar sometimes didn't register. As I am lazy to debug all the packages which might be missing or maybe something running in the background with having 3 DEs installed and stuff, I decided to just reinstall Ubuntu (this time using Kubuntu)

## Reinstallation
So for reinstallation, I decided to just plugged in my Ventoy USB again to install Kubuntu and wanted to manually partition to delete the old Ubuntu partition and install Kubuntu, but damn is it fucking ass. I ended up booting into Windows, deleting the Ubuntu partition then resizing it to bloatware level again then choosing to automatically partition it. Now it works great for his potato now. Idles at around 1.2 GB (is the same for all desktop environments to my surprised... could have gone with LXQT but meh)

## Overall thoughts
I honestly do not like Ubuntu as I don't really like apt nor do I like both the GNOME software store or the Discover app on Kubuntu/KDE Neon. As a person who uses Arch, I am quite spoiled with the AUR and the simplicity of installing software with googling the package in google and attaching "AUR" at the end then slapping that into terminal with yay. I'm not sure, but my experience with GUI Installers is that they feel very slow, and apparently I'm an outlier... possibly cuz I have only run these GUI Installers on potato machines. 

But tbf his machine runs much better, so I think that is a win eitherway.