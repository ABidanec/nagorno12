var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

// sass
gulp.task('sass', function(){
	gulp.src('app/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'));
});

// browserSync
gulp.task('browser-sync', function(){
	browserSync({
		server : {
			baseDir : 'app'
		},
		notify : false
	})
});

// watch
gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);