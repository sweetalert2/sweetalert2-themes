const execute = require('@sweetalert2/execute')
const fs = require('fs')
const { join } = require('path')
const replaceInFile = require('replace-in-file')

const log = console.log // eslint-disable-line

const themeName = process.argv[2]

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const copyFile = filename => fs.copyFileSync(join(sampleTheme, filename), join(themeName, filename))

if (!themeName) {
  console.error('Theme name is required: yarn create-new-theme <theme-name>')
  process.exit(1)
}

if (!themeName.match(/^[a-z0-9-]+$/)) {
  console.error('Theme name is invalid. Only lower case letters, digits and minus sign are allowed: yarn create-new-theme <theme-name>')
  process.exit(1)
}

const directories = fs.readdirSync('.').map(name => join('.', name)).filter(source => fs.lstatSync(source).isDirectory())
if (directories.includes(themeName)) {
  console.error('This theme name is already taken, choose another one.')
  process.exit(1)
}

const sampleTheme = 'default'

;(async () => {
  fs.mkdirSync(themeName)

  copyFile('README.md')
  copyFile('package.json')

  // Replace old theme name with a new one
  await replaceInFile({
    files: [
      join(themeName, 'README.md'),
      join(themeName, 'package.json')
    ],
    from: [
      new RegExp(sampleTheme, 'g'),
      new RegExp(capitalizeFirstLetter(sampleTheme), 'g'),
      'Giuseppe Verni (https://github.com/gverni)'
    ],
    to: [
      themeName,
      themeName.split('-').map(string => capitalizeFirstLetter(string)).join(' '),
      ''
    ]
  })

  // Create ${themeName}.scss
  fs.writeFileSync(
    join(themeName, `${themeName}.scss`),
    `@import 'sweetalert2/src/variables';\n\n` +
    `// override SASS variables here\n\n` +
    `@import 'sweetalert2/src/sweetalert2';\n`
  )

  await execute(`gulp watch --start-path ${themeName}`)

  log('OK!')
})().catch(console.error)
