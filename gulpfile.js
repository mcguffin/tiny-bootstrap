var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulputil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');


function do_scss( src, dest ) {
	var dir = src.substring( 0, src.lastIndexOf('/') );
	dest = dest || './css/' + dir ;
	return gulp.src( './src/scss/' + src + '.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'nested' } ).on('error', sass.logError ) )
		.pipe( autoprefixer({
			browsers:['last 2 versions']
		}) )
		.pipe( gulp.dest( dest ) )
        .pipe( sass( { outputStyle: 'compressed' } ).on('error', sass.logError ) )
		.pipe( rename( { suffix: '.min' } ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( dest ) );

}

function do_js( src, dest ) {
	var dir = src.substring( 0, src.lastIndexOf('/') );
	dest = dest || './js/' + dir ;
	return gulp.src( './src/js/' + src + '.js' )
		.pipe( sourcemaps.init() )
		.pipe( gulp.dest( dest ) )
		.pipe( uglify().on('error', gulputil.log ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( dest ) );
}

function concat_js( src, dest ) {
	return gulp.src( src )
		.pipe( sourcemaps.init() )
		.pipe( concat( dest ) )
		.pipe( gulp.dest( './js/' ) )
		.pipe( uglify().on('error', gulputil.log ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './js/' ) );

}


gulp.task('scss', function() {
	return [
		do_scss( 'admin/mce/tiny-bootstrap3-editor'),
		do_scss( 'admin/mce/tiny-bootstrap4-editor'),
		do_scss( 'admin/mce/tiny-bootstrap-bigsmall-toolbar'),
		do_scss( 'admin/mce/tiny-bootstrap-classes-editor'),
		do_scss( 'admin/mce/tiny-bootstrap-visibility-editor'),
		do_scss( 'bootstrap/3/bootstrap'),
		do_scss( 'bootstrap/4/bootstrap'),
	];
});


gulp.task('js-admin', function() {
    return [
		do_js('admin/mce/tiny-bootstrap-bigsmall-plugin'),
		do_js('admin/mce/tiny-bootstrap-classes-plugin'),
		do_js('admin/mce/tiny-bootstrap-visibility-plugin'),
    ];
});


gulp.task( 'js', function(){
	return concat_js( [
	], 'frontend.js');
} );


gulp.task('build', ['scss','js','js-admin'] );


gulp.task('watch', function() {
	// place code for your default task here
	gulp.watch('./src/scss/**/*.scss',[ 'scss' ]);
	gulp.watch('./src/js/**/*.js',[ 'js-admin' ]);
});
gulp.task('default', ['build','watch']);
