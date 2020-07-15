const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const stylelint = require('gulp-stylelint');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const fileArgs = require('yargs').argv;

// Directories to search SCSS files to compile. By default, node-sass does not
// compile files that begin with _.
const scssFilePaths = [
  "web/modules/custom/**/*.scss",
  "web/themes/custom/**/*.scss",
];

// Directories to search ES6 JavaScript files to compile. Files will be compiled
// to a .js file extension.
const javascriptFilePaths = [
  "web/modules/custom/**/*.es6.js",
  "web/themes/custom/**/*.es6.js",
];

// Default task.
gulp.task('default', ['build']);

// Build tasks.
gulp
  .task('build', ['build:js', 'build:sass'])
  .task('build:js', () => {
    return gulp
      .src(javascriptFilePaths)
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(rename((path) => {
        path.basename = path.basename.replace('.es6', '');
      }))
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  })
  .task('build:sass', () => {
    return gulp
      .src(scssFilePaths)
      .pipe(sassGlob())
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(sass({
        includePaths: [
          "node_modules",
          "web/libraries",
        ]
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  });

// Watch tasks.
gulp
  .task('watch', ['watch:js', 'watch:sass'])
  .task('watch:js', () => {
    return gulp.watch(javascriptFilePaths, ['build:js']);
  })
  .task('watch:sass', () => {
    return gulp.watch(scssFilePaths, ['build:sass']);
  });

// Validate tasks.
gulp
  .task('validate', ['validate:js', 'validate:sass'])
  .task('validate:sass', () => {
    return gulp
      .src(fileArgs.file ? fileArgs.file : scssFilePaths)
      .pipe(stylelint({
        reporters: [
          {
            formatter: 'verbose',
            console: true,
          }
        ],
        debug: true,
      }));
  })
  .task('validate:js', () => {
    return gulp
      .src(fileArgs.file ? fileArgs.file : javascriptFilePaths)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

// Syntax fixer tasks.
gulp
  .task('fix', ['fix:js', 'fix:sass'])
  .task('fix:js', () => {
    return gulp
      .src(fileArgs.file ? fileArgs.file : javascriptFilePaths)
      .pipe(eslint({fix: true}))
      .pipe(gulp.dest((file) => {
        return file.base;
    }))
  })
  .task('fix:sass', () => {
    return gulp
      .src(fileArgs.file ? fileArgs.file : scssFilePaths)
      .pipe(stylelint({fix: true}))
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  });
