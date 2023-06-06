const path = require("path");
const { app, BrowserWindow} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        autoHideMenuBar: true
    });

    win.loadFile(path.join(__dirname, "/index.html"));
};

app.whenReady().then(() => {
    createWindow();
});