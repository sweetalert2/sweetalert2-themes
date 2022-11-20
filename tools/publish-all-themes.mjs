import replaceInFile from 'replace-in-file'

if (!process.env.VERSION) {
  echo`process.env.VERSION must be set!`
  process.exit(1)
}

await $`echo '//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}' > ~/.npmrc`

const directories = fs.readdirSync('.').map(name => path.join('.', name)).filter(source => fs.lstatSync(source).isDirectory())

for (const directory of directories) {
  const changedFiles = await replaceInFile({
    files: path.join(directory, 'package.json'),
    from: /"version": ".*?"/,
    to: `"version": "${process.env.VERSION}"`,
  })
  .catch(() => {
    // ignore
  })

  if (changedFiles) {
    for (const changedFile of changedFiles) {
      await $`cd ${directory} && npm publish --access=public`
      await $`curl --silent https://purge.jsdelivr.net/npm/@sweetalert2/theme-${directory}/${directory}.css`
    }
  }
}

echo`OK!`
