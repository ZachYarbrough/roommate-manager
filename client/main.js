const { app, BrowserWindow, nativeTheme } = require('electron');

const darkBackgroundColor = 'black';
const lightBackgroundColor = 'white';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    titleBarStyle: 'hiddenInset',
    backgroundColor: nativeTheme.shouldUseDarkColors
      ? darkBackgroundColor
      : lightBackgroundColor,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }

  });

  mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

nativeTheme.on('updated', () => {
  const backgroundColor = nativeTheme.shouldUseDarkColors
      ? darkBackgroundColor
      : lightBackgroundColor;

  window.setBackgroundColor(backgroundColor);
});