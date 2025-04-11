// apps/electron-shell/src/main.ts
import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4200'
      : `file://${path.join(__dirname, '../ui-shell/index.html')}`;

  win.loadURL(url);
}

app.whenReady().then(() => {
  createWindow();
});
