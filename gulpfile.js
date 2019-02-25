'use sctrict';

var gulp 		= 		require('gulp'),
	gp			=		require('gulp-load-plugins')(),
	browserSync = 		require('browser-sync').create();

gulp.task('pug', function(){
	return gulp.src('app/*.pug')
	.pipe(gp.pug({
		pretty: true,
	}))
	.pipe(gulp.dest('dist'))
	.on('end' , browserSync.reload);
});

gulp.task('serve', function(){
	browserSync.init({
		server:{
			baseDir: './dist'
		}
	});
});

gulp.task('less', function(){
	return gulp.src('app/less/*.less')
	.pipe(gp.sourcemaps.init())
	.pipe(gp.less({}))
	.pipe(gp.autoprefixer({
		browsers: ['last 10 versions']
	}))
	.on('error', gp.notify.onError({
		title: 'style'
	}))
	.pipe(gp.csso())
	.pipe(gp.sourcemaps.write())
	.pipe(gulp.dest('dist/css/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});


gulp.task('scripts', function(){
	return gulp.src('app/js/common.js')
	.pipe(gulp.dest('dist/js'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('watch' , function(){
	gulp.watch('app/**/*.pug', gulp.series('pug'));
	gulp.watch('app/less/**/*.less', gulp.series('less'))
	gulp.watch('app/js/**/*.js', gulp.series('scripts'));
});

gulp.task('default' , gulp.series(
	gulp.parallel('pug' , 'less' , 'scripts'),
	gulp.parallel('watch' , 'serve')
	));
