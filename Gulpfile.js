'use strict';
var gulp = require('gulp');

gulp.task('default', ['js', 'less']);

gulp.task('watch', ['default'], function() {
    gulp.watch('./src/styles/**/*.less', ['less']);
    gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('js', function() {
    var webpack = require('gulp-webpack');
    var config = require('./webpack.config.js');
    return gulp.src('./src/index.js')
      .pipe(webpack(config))
      .pipe(gulp.dest('./dist'));
});

gulp.task('less', function() {
    var less = require('gulp-less');
    var minifyCSS = require('gulp-minify-css');

    return gulp.src('./src/styles/**/*.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/css'));
});
