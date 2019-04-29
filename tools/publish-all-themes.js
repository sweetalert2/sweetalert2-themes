const execute = require('@sweetalert2/execute')
const replaceInFile = require('replace-in-file')
const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const log = console.log // eslint-disable-line

if (!process.env.VERSION) {
  log (`process.env.VERSION must be set!`)
  process.exit(1)
}

;(async () => {
  const directories = readdirSync('.').map(name => join('.', name)).filter(source => lstatSync(source).isDirectory())

  for (directory of directories) {
    const changedFiles = await replaceInFile({
      files: join(directory, 'package.json'),
      from: /"version": ".*?"/,
      to: `"version": "${process.env.VERSION}"`,
    })
    .catch(() => {
      // ignore
    })

    if (changedFiles) {
      for (changedFile of changedFiles) {
        await execute(`git add ${changedFile.file}`)
        await execute(`npm publish --access=public`)
      }
    }
  }

  log('OK!')
})().catch(console.error)
