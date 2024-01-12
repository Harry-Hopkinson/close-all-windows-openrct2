# Close all Windows 

A plugin for [OpenRCT2][] that closes all current windows open on your screen. 
Great for when moving large amounts of guests or if you have a cluttered screen
and do not want to have to frantically click around to close them all.
## Installation

Download the [latest release][] from GitHub. Then, place the `.js` file
in your [OpenRCT2 plugin folder][].

- On macOS, this is `~/Library/Application Support/OpenRCT2/plugin`.
- On Windows, this is `%USERPROFILE%\Documents\OpenRCT2\plugin`.
- On Linux, this is `$XDG_CONFIG_HOME/OpenRCT2/plugin`.
  (`$XDG_CONFIG_HOME` is typically set to `~/.config`)

## Usage

This plugin adds a new dialog window to the "Map" menu, where all other
plugins are located, allowing you to choose under the "Close All Windows" option.
On click the plugin will close all of your current windows.
## Development

If you wish to contribute to this project, make sure it builds locally
before pushing your changes.

To do this, install dependencies with Yarn:

```bash
npm run install
```

```bash
npm run build
```

Then copy the folder to the plugins directory of OpenRCT2 and make sure that
"hot reloading" is enabled in your configs.
