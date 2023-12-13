const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const url = require('url');

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Rpg Progress',
    width: 900,
    height: 640,
  });

  const initUrl = url.format({
    pathname: path.join(__dirname, 'index.html'),
  });

  win.loadURL(initUrl);
};

app.whenReady().then(() => {
  createWindow();
});
