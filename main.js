const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const url = require('url');

let win;
const createWindow = () => {
  win = new BrowserWindow({
    frame: false,
    title: 'Rpg Progress',
    width: 1020,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.setMenuBarVisibility(false);
  win.webContents.openDevTools();
  //change this location in packaging stage
  //   win.loadFile(path.join(__dirname, './rpg/public/index.html'));
  win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
