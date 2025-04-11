import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendCommand: (cmd: string) => ipcRenderer.invoke('send-command', cmd),
  onAlert: (cb: (event: any, data: any) => void) => ipcRenderer.on('alert', cb),
});
