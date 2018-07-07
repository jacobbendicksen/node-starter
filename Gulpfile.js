'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    nodemon({
        script: 'index.js',
        ext: 'js html',
        ignore: ['node_modules/**']
    })
        .on('change', ['lint'])
        .on('restart', function() {
            console.log('restarted!');
        });
});
