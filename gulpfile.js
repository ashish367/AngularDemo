// include plug-ins
var gulp = require('gulp');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var config = {
    src: ['js/**/*.js']
}

gulp.task('inject',['webserver'], function () {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(config.src, { read: false });

    return target.pipe(inject(sources))
	  .pipe(gulp.dest(''));
});

gulp.task('webserver',function(){
  connect.server();
});


//Set a default tasks
gulp.task('default', ['inject'], function () { });
