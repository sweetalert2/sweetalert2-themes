const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const header = require('gulp-header')
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename')
const autoprefix = require('gulp-autoprefixer')
const stylelint = require('gulp-stylelint')
const browserSync = require('browser-sync').create()
const packageJson = require('./package.json')
const version = process.env.VERSION || packageJson.version
const log = require('fancy-log')

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
const cssFiles = themes.map(theme => `${theme}/${theme}.css`)

gulp.task('lint', () => {
  return gulp.src(scssFiles)
    .pipe(stylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
})

gulp.task('sass', gulp.series('lint', function compile () {
  return gulp.src(scssFiles, { base: '.' })
    .pipe(sass({ includePaths: './node_modules' }))
    .pipe(autoprefix())
    .pipe(header(banner))
    .pipe(gulp.dest('./'))
}))

gulp.task('css.min', function minify () {
  return gulp.src(cssFiles, { base: '.' })
    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./'))
})

gulp.task('build', gulp.series('sass', 'css.min'))

gulp.task('default', gulp.series('build'))

gulp.task('watch', gulp.series('default', function launchServer () {
  const theme = process.argv[4] || 'default'

  if (!fs.existsSync(`./${theme}`)) {
	  return new Promise((resolve, reject) => {
		  log.error('\x1b[31m%s\x1b[0m', `Error    'Theme ${theme} not found.'`)
		  resolve()
	  })
  }

  browserSync.init({
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./'],
    startPath: `?theme=${theme}`
  })

  gulp.watch(cssFiles.concat(['index.html'])).on('change', browserSync.reload)

  gulp.watch(scssFiles, gulp.series('sass'))
}))
