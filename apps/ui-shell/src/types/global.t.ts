export {};

declare global {
  interface Window {
    electronAPI: {
      sendCommand: (cmd: string) => Promise<any>;
      onAlert: (cb: (event: any, data: any) => void) => void;
    };
  }
}
