#!/usr/bin/env zx
import { $, echo, fs } from 'zx'

import packageJson from '../package.json' assert { type: 'json' }
const version = process.env.VERSION || packageJson.version

const banner = `/*
* ${packageJson.name} v${version}
* Released under the ${packageJson.license} License.
*/\n\n`

const themes = fs.readdirSync('.')
  .filter(function (file) {
    if (file.match(/(.git|.netlify|node_modules|dist|tools)/)) {
      return false
    }
    return fs.statSync(path.join('.', file)).isDirectory()
  })

const scssFiles = themes.map(theme => `${theme}/${theme}.scss`)

if (argv.watch) {
  await $`sass --watch --no-source-map --load-path node_modules ${scssFiles.map(scssFile => `${scssFile}:${scssFile.replace('.scss', '.css')}`)}`
} else {
  for (const scssFile of scssFiles) {
    const cssFile = scssFile.replace('.scss', '.css')
    echo``
    echo`${scssFile} -> ${cssFile}`
    await $`sass ${scssFile} ${cssFile} --no-source-map --load-path=node_modules`
    await $`sass ${scssFile} ${scssFile.replace('.scss', '.min.css')} --no-source-map --style=compressed --load-path=node_modules`
    fs.writeFileSync(cssFile, `${banner}${fs.readFileSync(cssFile, 'utf-8')}`)
  }

  echo``
  echo`Done!`
}
