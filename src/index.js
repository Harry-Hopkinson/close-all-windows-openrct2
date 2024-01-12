"use strict";
var closeAllWindows = function () {
    for (var i = 0; i < ui.windows; i++) {
        var window = ui.getWindow(i);
        // Ignore sticky windows (e.g. main window and toolbars)
        if (!window.isSticky) {
            // loop through every window
            window.close();
        }
    }
};
var main = function () {
    // Add a menu item under the map icon on the top toolbar
    ui.registerMenuItem("Close all Windows", function () {
        closeAllWindows();
    });
};
registerPlugin({
    name: 'Close all Windows',
    version: '1.0',
    authors: ['Harry Hopkinson'],
    type: 'local',
    main: main,
    licence: "GPL-3.0",
    targetApiVersion: 56
});
