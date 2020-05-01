var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(callback){
    browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));

    callback();
});

gulp.task('copy', function(callback){
    gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));

    gulp.src('src/css/*.*')
    .pipe(gulp.dest('dist/css'));

    gulp.src('src/js/vendors/*.*')
    .pipe(gulp.dest('dist/js'));
    callback();
});

gulp.task('default', gulp.series(['browserify', 'copy']), function(){
    return gulp.watch('src/**/*.*', gulp.series(['browserify', 'copy']));
});