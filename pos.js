const { app, BrowserWindow, ipcMain } = require('electron')
const url = require("url");
const path = require("path");
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        fullscreen: false,
        show: false,
        modal: true,
        icon: `${__dirname}/assets/icons/win/everyticket.ico`,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    splash = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        alwaysOnTop: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    splash.loadFile('splash_assets/splash.html');
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, `/app/index.html`),
        protocol: "file:",
        slashes: true
    }));
    mainWindow.once("ready-to-show", () => {
        splash.hide();
        mainWindow.show();
        mainWindow.maximize();
        autoUpdater.checkForUpdatesAndNotify();
    });
}
app.on('ready', createWindow);


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
        mainWindow.focus();
    }
})

let tray = null;
app.on('minimize', function (event) {
    event.preventDefault();
    mainWindow.hide();
    tray = createTray();
});

app.on('restore', function () {
    mainWindow.minimize()
    mainWindow.show();
    app.focus();
    tray.destroy();
});

autoUpdater.on('update-available', () => {
    mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
    autoUpdater.quitAndInstall();
});

ipcMain.on('app_version', (event) => {
    event.sender.send('app_version', { version: app.getVersion() });
});