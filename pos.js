const { app, BrowserWindow, ipcMain } = require('electron')
const url = require("url");
const path = require("path");
const { autoUpdater } = require('electron-updater');

let mainWindow;

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

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
app.on('ready', () => {
  createWindow();
  autoUpdater.checkForUpdates();
});


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

autoUpdater.on('update-not-available', () => {
  mainWindow.webContents.send('update_not_available');
});

autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  mainWindow.webContents.send('progress', log_message);
})

//Global exception handler
process.on("uncaughtException", function (err) {
  console.log(err);
});

ipcMain.on('downloadUpdate', () => {
  console.log('Downloading');
  let pth = autoUpdater.downloadUpdate();
  console.log(pth);
  mainWindow.showMessage(pth);
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.on('check_for_updates', () => {
  autoUpdater.checkForUpdatesAndNotify();
});

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});