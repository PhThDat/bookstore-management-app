const { app, BrowserWindow} = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    });

    win.loadFile("./dist/index.html");
    win.autoHideMenuBar(true);
};

app.whenReady().then(() => {
    createWindow();
});