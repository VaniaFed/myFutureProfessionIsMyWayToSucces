var gulp 				 = require('gulp'),
		stylus 			 = require('gulp-stylus'),
		browserSync  	 = require('browser-sync'),
		concat 			 = require('gulp-concat'),
		uglify 			 = require('gulp-uglifyjs');
		del 			 = require('del'),
		imagemin		 = require('gulp-imagemin'),
		pngquant		 = require('imagemin-pngquant'),
		autoprefixer     = require('gulp-autoprefixer');


gulp.task('stylus', function() {
	return gulp.src('app/stylus/**/*.styl')
	.pipe(stylus())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
	return gulp.src([
		//'app/libs/jquery/dist/jquery.min.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js/'));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	/*.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{ removeViewBox: false}],
		une: [pngquant()]
	}))*/
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch',['browser-sync', 'stylus', 'scripts'], function() {
	gulp.watch('app/stylus/**/*.styl', ['stylus']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'img', 'stylus', 'scripts'], function() {
	var buildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist'));
});
