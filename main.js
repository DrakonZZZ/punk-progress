const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const url = require('url');

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Rpg Progress',
    width: 900,
    height: 640,
  });

  win.webContents.openDevTools();
  //change this location in packaging stage
  //   win.loadFile(path.join(__dirname, './rpg/public/index.html'));
  win.loadURL('http://localhost:3000');
};

app.whenReady().then(() => {
  createWindow();
});
