var gulp = require('gulp');
var browserSync = require('browser-sync').create();
 
gulp.task('serve', function() {

    gulp.watch("app/**/*.js").on('change', browserSync.reload);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("templates/*.html").on('change', browserSync.reload);
    gulp.watch("css/**/*.css").on('change', browserSync.reload);
    
    browserSync.init({
        server: "./"
    });
    
});

gulp.task('default', ['serve']);