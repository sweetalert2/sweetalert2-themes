#!/usr/bin/env zx
import { fs, path } from 'zx'
import { replaceInFile } from 'replace-in-file'

const themeName = argv['_'][0]

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const copyFile = filename => fs.copyFileSync(path.join(sampleTheme, filename), path.join(themeName, filename))

if (!themeName) {
  console.error('Theme name is required: yarn create-new-theme <theme-name>')
  process.exit(1)
}

if (!themeName.match(/^[a-z0-9-]+$/)) {
  console.error('Theme name is invalid. Only lower case letters, digits and minus sign are allowed: yarn create-new-theme <theme-name>')
  process.exit(1)
}

const directories = fs.readdirSync('.').map(name => path.join('.', name)).filter(source => fs.lstatSync(source).isDirectory())
if (directories.includes(themeName)) {
  console.error('This theme name is already taken, choose another one.')
  process.exit(1)
}

const sampleTheme = 'default'

fs.mkdirSync(themeName)

copyFile('README.md')
copyFile('package.json')

// Replace old theme name with a new one
await replaceInFile({
  files: [
    path.join(themeName, 'README.md'),
    path.join(themeName, 'package.json')
  ],
  from: [
    new RegExp(sampleTheme, 'g'),
    new RegExp(capitalizeFirstLetter(sampleTheme), 'g'),
  ],
  to: [
    themeName,
    themeName.split('-').map(string => capitalizeFirstLetter(string)).join(' '),
  ]
})

// Create ${themeName}.scss
fs.writeFileSync(
  path.join(themeName, `${themeName}.scss`),
  `// override SCSS variables here\n\n` +
  `@uimportse 'sweetalert2/src/sweetalert2';\n`
)

echo`OK!`
