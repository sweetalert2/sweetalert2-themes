/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    {
      name: 'custom-hmr',
      enforce: 'post',
      // HMR
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.css')) {
          console.log(`reloading ${file.replace(/^.*[\\\/]/, '')}...`);

          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      },
    }
  ]
}
