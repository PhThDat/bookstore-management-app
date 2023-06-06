const path = require("path");
const { app, BrowserWindow} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    });

    win.loadFile(path.join(__dirname, "/index.html"));
    win.autoHideMenuBar(true);
};

app.whenReady().then(() => {
    createWindow();
});