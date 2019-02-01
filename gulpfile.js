var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gulputil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

function onError(err) {
	console.log(err);
	this.emit('end');
}

function do_scss( src, dest ) {
	var dir = src.substring( 0, src.lastIndexOf('/') );
	dest = dest || './css/' + dir ;
	return gulp.src( './src/scss/' + src + '.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'nested' } ).on('error', onError ) )
		.pipe( autoprefixer({
			browsers:['last 2 versions']
		}) )
		.pipe( gulp.dest( dest ) )
        .pipe( sass( { outputStyle: 'compressed' } ).on('error', onError ) )
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
		.pipe( uglify().on('error', onError ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( dest ) );
}

function concat_js( src, dest ) {
	return gulp.src( src )
		.pipe( sourcemaps.init() )
		.pipe( concat( dest ) )
		.pipe( gulp.dest( './js/' ) )
		.pipe( uglify().on('error', onError ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './js/' ) );

}

gulp.task('scss:bs-editor:3', function(){ return do_scss( 'admin/mce/tiny-bootstrap3-editor') });
gulp.task('scss:bs-editor:4', function(){ return do_scss( 'admin/mce/tiny-bootstrap3-editor') });
gulp.task('scss:bugsmall',    function(){ return do_scss( 'admin/mce/tiny-bootstrap-bigsmall-toolbar') });
gulp.task('scss:classes',     function(){ return do_scss( 'admin/mce/tiny-bootstrap-classes-editor') });
gulp.task('scss:uppercase',   function(){ return do_scss( 'admin/mce/tiny-bootstrap-uppercase-toolbar') });
gulp.task('scss:visibility',  function(){ return do_scss( 'admin/mce/tiny-bootstrap-visibility-editor') });
gulp.task('scss:bs:3',        function(){ return do_scss( 'bootstrap/3/bootstrap') });
gulp.task('scss:bs:4',        function(){ return do_scss( 'bootstrap/4/bootstrap') });

gulp.task('scss', gulp.parallel(
	'scss:bs-editor:3',
	'scss:bs-editor:4',
	'scss:bugsmall',
	'scss:classes',
	'scss:uppercase',
	'scss:visibility',
	'scss:bs:3',
	'scss:bs:4'
));

gulp.task('js:admin:bigsmall', function(){ return do_js('admin/mce/tiny-bootstrap-bigsmall-plugin') });
gulp.task('js:admin:classes', function(){ return do_js('admin/mce/tiny-bootstrap-classes-plugin') });
gulp.task('js:admin:uppercase', function(){ return do_js('admin/mce/tiny-bootstrap-uppercase-plugin') });
gulp.task('js:admin:visibility', function(){ return do_js('admin/mce/tiny-bootstrap-visibility-plugin') });

gulp.task('js:admin', gulp.parallel(
	'js:admin:bigsmall',
	'js:admin:classes',
	'js:admin:uppercase',
	'js:admin:visibility',
));


gulp.task( 'js', gulp.parallel('js:admin') );


gulp.task('build', gulp.parallel('scss','js') );


gulp.task('watch', function() {
	// place code for your default task here
	gulp.watch('./src/scss/**/*.scss',gulp.parallel( 'scss' ));
	gulp.watch('./src/js/**/*.js',gulp.parallel( 'js' ) );
});
gulp.task('default', gulp.series('build','watch'));
