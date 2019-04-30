const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const tildeImporter = require('node-sass-tilde-importer')
const rename = require('gulp-rename')
const autoprefix = require('gulp-autoprefixer')
const sassLint = require('gulp-sass-lint')
const browserSync = require('browser-sync').create()

const themes = fs.readdirSync('.')
  .filter(function (file) {
    if (file.match(/(.git|node_modules|dist|tools)/)) {
      return false
    }
    return fs.statSync(path.join('.', file)).isDirectory()
  })

const scssFiles = themes.map(i => i + '/*.scss')
const cssFiles = themes.map(i => i + '/*.css')

gulp.task('lint', () => {
  return gulp.src(scssFiles)
    .pipe(sassLint())
    .pipe(sassLint.format())
})

gulp.task('sass', gulp.series('lint', function compile () {
  return gulp.src(scssFiles, {base: '.'})
    .pipe(sass({ importer: tildeImporter }))
    .pipe(autoprefix())
    .pipe(gulp.dest('./'))
}))

gulp.task('css.min', gulp.series('sass', function minify () {
  return gulp.src(cssFiles)
    .pipe(cleanCSS())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist'))
}))

gulp.task('build', gulp.series('sass'))

gulp.task('default', gulp.series('build'))

gulp.task('watch', gulp.series('default', function launchServer () {
  browserSync.init({
    notify: false,
    reloadOnRestart: true,
    https: false,
    server: ['./']
  })

  gulp.watch(cssFiles.concat(['index.html'])).on('change', browserSync.reload)

  gulp.watch(scssFiles, gulp.series('sass'))
}))
