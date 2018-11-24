import e from 'electron'

export function activate() {
  const app = e.remote.getGlobal('application')
  e.remote.ipcMain.on('new-window', (_event, data) => {
    const composer_window = app.windowManager.get(data.windowKey)

    composer_window.browserWindow.setAutoHideMenuBar(true)
    composer_window.browserWindow.setMenuBarVisibility(false)
  })
}
