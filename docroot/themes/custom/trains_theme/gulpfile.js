var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
sass.compiler = require('node-sass');

var autoprefixerOptions = {
  overrideBrowserslist: ['> 0%', 'IE 9'],
  cascade: false,
};

gulp.task('imagemin', function () {
    return gulp.src('./images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images'));
});
gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer(autoprefixerOptions)]))
        .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function() {
  gulp.src('./lib/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('./js'))
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./lib/*.js', ['uglify']);
    gulp.watch(['/css/main.css', './**/*.twig', './js/*.js'], function (files){
        livereload.changed(files)
    });
});
