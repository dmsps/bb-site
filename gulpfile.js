const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');
const less = require('gulp-less');
const del = require('del');
const imagemin = require('gulp-imagemin');


/*  Config */
const config = {
	dist: './dist/',                    // Build
	root: './src/',						// Root dev
	libs: 'libs',						// Libraries
	images: {							// Images
		src: 'img/**/*',
		dest: 'img/'
	},					
	css: {								// CSS
		src: 'precss/**/*.css',
		dest: 'css/'
	},
	less: {								// Less
		src: 'precss/**/*.less',
		dest: 'precss/'
	},
	js: {								// Js
		src: 'prejs/**/*.js',
		dest: 'js/'
	},
	html: '*.html'				// HTML
};


/*  Tasks  */

gulp.task('less', function () {
	gulp.src(config.root + config.less.src)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.root + config.less.dest));
});

gulp.task('css', ['less'], function(){
	gulp.src(config.root + config.css.src)
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: true
        }))
        .pipe(cleanCSS())
        .pipe(gcmq())
        .pipe(concat('../css/styles.css'))
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.root + config.css.dest))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(config.root + config.js.src)
    	.pipe(concat('../js/script.js'))
    	.pipe(gulp.dest(config.root + config.js.dest))
    	.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.root + config.less.src, ['less']);
	gulp.watch(config.root + config.css.src, ['css']);
	gulp.watch(config.root + config.js.src, ['js']);
	gulp.watch(config.root + config.html, browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: config.root
		}
	});
});

/*  Build  */

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    gulp.src(config.root + config.images.src)
      .pipe(imagemin({
      	interlaced: true,
      	progressive: true,
      	svgoPlugins: [{removeViewBox: false}]
      	}))
      .pipe(gulp.dest(config.dist + config.images.dest));
});

gulp.task('build',['clean', 'css', 'js', 'img'], function() {
    
	var buildCss = gulp.src([ // Переносим CSS стили в продакшен
        config.root + config.css.dest + 'styles.css'
        ])
    .pipe(gulp.dest(config.dist + config.css.dest))

    var buildFonts = gulp.src(config.root + 'fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest(config.dist + 'fonts'))

    var buildJs = gulp.src(config.root + config.js.dest + 'script.js') // Переносим скрипты в продакшен
    .pipe(gulp.dest(config.dist + config.js.dest))

    var buildHtml = gulp.src(config.root + config.html) // Переносим HTML в продакшен
    .pipe(gulp.dest(config.dist));



});