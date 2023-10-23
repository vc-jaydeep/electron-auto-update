const { ipcRenderer, BrowserWindow } = require('electron');
var printFunction = (function () {

 

  return {
    silentPrint: function () {
      console.log('function 1 called');
      return new Promise((resolve, rejects)=> {
        const printWindow = new BrowserWindow({
          show: false,

        });
        printWindow.once('ready-to-show', () => {
          printWindow.webContents.print({
            silent: true
          });
        });
        resolve('done')
      });
    },
    func2: function () {
      alert('function 2 called');
    }
  }

 

})(printFunction || {})