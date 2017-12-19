const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');
const less = require('gulp-less');
const del = require('del');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const include = require("gulp-include");
const smartgrid = require('smart-grid');


/*  Config */

const config = {
	build: './dist/',                   // Build
	src: './src/',						// Root dev
	html: {								// HTML
		src: '*.html',
		temp: 'templates/*.html',
		comp: 'templates/components/*.html'
	},
	css: {								// CSS
		src: 'css/**/*.css',
		dest: 'css/'
	},
	less: {		
		watch: 'less/**/*.less',		// Less
		src: 'less/main.less',
		dest: 'css/'
	},
	js: {								// Js
		src: 'dev-js/**/*.js',
        build: 'js/script.js',
		dest: 'js/'
	},
	images: {							// Images
		src: 'img/**/*',
		dest: 'img/'
	},
	fonts: {							// Fonts
        src: 'fonts/**/*',
        dest: 'fonts/'
    }								
};

/*  Config */


/* Smart Grid  */

var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        xl: {
        	width: '1400px'
    	},
        lg: {
            width: '1200px'
        },
        md: {
            width: '992px'
        },
        sm: {
            width: '768px',
            fields: '15px' 
        },
        xs: {
            width: '480px'
        }
    }
};

gulp.task('grid', function() {
    smartgrid(config.src + 'less', settings);
});

/* Smart Grid  */


/*  Tasks  */

gulp.task('html', function() {
    gulp.src(config.src + config.html.temp)
    	.pipe(include())
    	.pipe(gulp.dest(config.src))
		.pipe(browserSync.reload({
            stream: true
        }));
});


gulp.task('less', function () {
	gulp.src(config.src + config.less.src)
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: true
        }))
		.pipe(gcmq())
		.pipe(sourcemaps.write('./../maps'))
		.pipe(gulp.dest(config.src + config.less.dest))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('css', ['less'], function(){
	gulp.src(config.src + config.css.src)
        .pipe(concat('main.css'))
        .pipe(cleanCSS({
            level: 2
        }))
		.pipe(gulp.dest(config.build + config.css.dest))
		.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(config.src + config.js.src)
    	.pipe(sourcemaps.init())
    	.pipe(concat('script.js'))
    	//.pipe(uglify())
		.pipe(sourcemaps.write('./../maps'))
    	.pipe(gulp.dest(config.src + config.js.dest))
    	.pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch(config.src + config.less.watch, ['less']);
	gulp.watch(config.src + config.js.src, ['js']);
	gulp.watch([config.src + config.html.temp, config.src + config.html.comp], ['html']);
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: config.src
		}
	});
});

/*  Tasks  */


/*  Build  */

gulp.task('clean', function() {
    return del.sync(config.build);
});

gulp.task('img', function() {
    gulp.src(config.src + config.images.src)
      .pipe(imagemin({
      	interlaced: true,
      	progressive: true,
      	svgoPlugins: [{removeViewBox: false}]
      	}))
      .pipe(gulp.dest(config.build + config.images.dest));
});

gulp.task('build',['clean','html','less','css','js','img'], function() {

    var buildFonts = gulp.src(config.src + config.fonts.src) 
    .pipe(gulp.dest(config.build + config.fonts.dest))

    var buildJs = gulp.src(config.src + config.js.build)
    .pipe(gulp.dest(config.build + config.js.dest))

    var buildHtml = gulp.src(config.src + config.html.src) 
    .pipe(gulp.dest(config.build));

});

/*  Build  */