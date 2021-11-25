---
date: 12/11/2021
---
# Using QMK/VIA (with XD87)

## What is QMK and VIA?
QMK or Quantum Mechanical Keyboard is software which allows you to greatly customize your keyboard with keymaps and layers. 

VIA on the other hand is an extension of QMK where editing your keymap and layers do not require you to **re-flash** your keyboard. 

**If you want to follow this blog/guide, please check [here](https://qmk.fm/keyboards/) for QMK compatibility and [here](https://caniusevia.com/docs/supported_keyboards/) for VIA compatibility. If your keyboard isn't supported, the following will not work**

## Why QMK/VIA
Personally, I love to customize my things. This lead me to use KDE on linux and customizing my keyboard layout is just another thing that is waiting to be personalized. By far, VIA is one of the more powerful but easy to understand tools that I have used to configuring a keyboard as it allows different layers, remaping of the fn (function) key, and macros. Currently, I do not have much changed on my keyboard as I do not know what I want to change just yet. Having the choice is nice though.

## Getting started
To use QMK, we need to install qmk. Stuff mentioned below are taken from [here](https://beta.docs.qmk.fm/tutorial/newbs_getting_started)

## Installation
### Macos
```
brew install qmk/qmk/qmk
```

### Windows

Install [QMK MSYS](https://msys.qmk.fm)

### Linux (What I use)
- Debian / Ubuntu / Devuan: sudo apt install -y git python3-pip
- Fedora / Red Hat / CentOS: sudo yum -y install git python3-pip
- Void: sudo xbps-install -y git python3-pip
- Solus: sudo eopkg -y install git python3
- Sabayon: sudo equo install dev-vcs/git dev-python/pip
- Gentoo: sudo emerge dev-vcs/git dev-python/pip
Then run `python3 -m pip install --user qmk`
For arch just run `sudo pacman -S qmk`

### Set up
After installation, run `qmk setup`, wait for it to do it stuff (mostly just cloning the qmk repo) and you are ready to start compiling keymaps!

## Compiling a keymap
Go to the directory/folder that was mentioned in the setup process (For me it was `/home/telk/qmk_firmware`). Go to keyboards and find your keyboard **normally it is \<company\>/\<keyboardName\>**(For me it was xiudi/xd87). Make sure that a `via` folder exists and check in `rules.mk` that `VIA_ENABLE = yes` is there. If everything is fine, you can edit your keymap a bit in the `keymap.c` file but we can do all this later in VIA.

Before compiling, if you want to make a custom keymap, feel free to copy the via folder and create a new one. There are a few things that you can add to the firmware namely **Mouse Support**. This will allow the keyboard act as a mouse (I don't use this I just find it fun). To enable this, simply add `MOUSEKEY_ENABLE = yes` in rules.mk below `VIA_ENABLE = yes`. If you want to dive deeper into qmk, visit [their documentation site](https://beta.docs.qmk.fm/using-qmk/guides)

### Important tweaks
One important thing is to enable 1000 HZ and 12 key scan. **This is very important if you play rythm games**

Simply add a file called `config.h` in the keymap folder so `/qmk_firmware/keyboards/xiudi/xd87/keymaps/via/config.h` (If you are using a different keyboard, replace xiudi/xd87 with your keyboard).

```
#define USB_POLLING_INTERVAL_MS 1
#define QMK_KEYS_PER_SCAN 12 
```
You also want to enable NKRO on your keyboard by adding `NKRO_ENABLE = yes` in `rules.mk` below `VIA_ENABLE = yes` (some keyboards have this enabled by default)

To compile the keymap we simply just need to run the command
```
qmk compile -kb <keyboard> -km via
```

If you made a new folder for a custom keymap, make sure to replace `via` with the corresponding file name

And viola, your new keymap is compiled. If you have trouble finding the file, it will be in the original directory (in my case, `/home/telk/qmk_firmware`) and it will be called `<company><keyboardName>_<keymapName>.bin` or .hex

## Flashing the keyboard
To flash the keyboard, I would personally just use the GUI tool that QMK provides, [QMK Toolbox](https://github.com/qmk/qmk_toolbox). If you are not familiar with github, go to **Tags** and download the binary from there. While it is possible to flash your keyboard on linux, I honestly do not like using the command line for this kind of stuff (especially when it is a keyboard as you need another keyboard plugged in or an on screen keyboard) and the period of which the bootloader is open is sometimes very short.

Using QMK Toolbox isn't super difficult as all you need to do is choose the local file (The keymap we compiled in the previous step), turn on Auto-Flash, and put your keyboard in bootloader mode. Going into bootloader mode may vary between boards, for the xd87, I had to short 2 holes between del and end. Other boards may require you to press spacebar + b and others may have a completely different keybind. I suggest looking up this yourself for your specific keyboard. 

Once you are in bootloader mode, the keyboard should automatically flash and you are done! You now can install the VIA app and customize your keyboard.

## Closing notes
I find it weird that QMK doesnt have all keyboards come with 1000 Hz and NKRO by default but it is something that can easily be fixed so that is fine. While VIA is nice as you do not need to re-flash your keyboard everytime you make a change, raw QMK allows more customizability at a cost of requiring more time. 