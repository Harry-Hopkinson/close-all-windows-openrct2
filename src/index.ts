var CloseAllWindows = function () {
  if (ui.windows !== undefined) {
    for (var i = 0; i < ui.windows; i++) {
      if (!ui.getWindow(i).isSticky) window.close();
    }
  }
};

var main = function () {
  ui.registerMenuItem("Close all Windows", function () {
    CloseAllWindows();
  });
};

registerPlugin({
  name: "Close all Windows",
  version: "1.0.2",
  authors: ["Harry Hopkinson"],
  type: "local",
  main: main,
  licence: "MIT",
  targetApiVersion: 83,
});
