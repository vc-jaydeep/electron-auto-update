const { app, BrowserWindow, dialog } = require('electron')
const url = require("url");
const path = require("path");
const ipc = require('electron').ipcMain;
const os = require('os');
const fs = require('fs');
let mainWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    fullscreen: false,
    show: false,
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
  mainWindow.webContents.executeJavaScript('localStorage.clear();', true);
  mainWindow.once("ready-to-show", () => {
    splash.hide();
    mainWindow.show();
    mainWindow.maximize();
  });
  mainWindow.on("close", () => {
    mainWindow = null;
    app.quit();
 });
}
app.on('ready', createWindow)

ipc.on('ping', (event, data) => {
  const printWindow = new BrowserWindow({
    width: 545,
    height: 455,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    }
  });
  mainWindow.maximize();
  const pdfPath = path.join(os.tmpdir(), 'print.html');
  let filteredHtml = trim(data);
  if (filteredHtml) {
    fs.writeFile(pdfPath, filteredHtml, 'utf8', function (error) {
      if (error) {
        throw error;
      }
    });
    printWindow.loadFile(pdfPath);
    printWindow.webContents.on('did-finish-load', async () => {
      const printers = await printWindow.webContents.getPrintersAsync();
      const defaultPrinter = printers.find(p => p.isDefault);
      if (!defaultPrinter) {
        dialog.showMessageBox({
          type: 'error',
          message: 'No default printer found'
        });
        event.sender.send('message-from-main', 'error');
        return;
      }
      if (printers != null && printers.length > 0) {
        printWindow.setContentSize(465, 299);
        printWindow.scaleFactor = 1;
        var options = {
          silent: true,
          color: false,
          landscape: false,
          copies:1,
          margin: {
            marginType: 'none'
          },
        }
        printWindow.webContents.print(options, (success, failureReason) => {
          if (success) {
            event.sender.send('message-from-main', 'success');
            filteredHtml = '';
          } else {
            event.sender.send('message-from-main', failureReason);
          }
        })
      }
    });
  } 
});

function trim(str) {
  if (str) {
    return str.replace(/\n/g, "");
  }
}

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

let tray = null;
app.on('minimize', function (event) {
  event.preventDefault();
  win.hide();
  tray = createTray();
});

app.on('restore', function (event) {
  win.show();
  tray.destroy();
});