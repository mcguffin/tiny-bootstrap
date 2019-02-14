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

function srcPath( src, type ) {
	return './src/'+type+'/' + src + '.' + type;
}

function do_scss( src, dest ) {
	var dir = src.substring( 0, src.lastIndexOf('/') );
	dest = dest || './css/' + dir ;
	src = srcPath(src,'scss');
	return gulp.src( src )
		.pipe( sourcemaps.init() )
        .pipe( sass( { outputStyle: 'compressed' } ).on('error', onError ) )
		.pipe( autoprefixer({
			browsers:['last 2 versions']
		}) )
		.pipe( gulp.dest( dest ) )
		.pipe( rename( { suffix: '.dev' } ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( dest ) );

}

function do_js( src, dest ) {
	var dir = src.substring( 0, src.lastIndexOf('/') );
	dest = dest || './js/' + dir ;
	src = srcPath(src,'js');
	return gulp.src( src )
		.pipe( sourcemaps.init() )
		.pipe( uglify().on('error', onError ) )
		.pipe( gulp.dest( dest ) )
		.pipe( rename( { suffix: '.dev' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( dest ) );
}

function concat_js( src, dest ) {
	src = src.map( function(el){
		return srcPath(el,'js');
	} );
	return gulp.src( src )
		.pipe( sourcemaps.init() )
		.pipe( uglify().on('error', onError ) )
		.pipe( concat( dest ) )
		.pipe( gulp.dest( './js/' ) )
		.pipe( rename( { suffix: '.dev' } ) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './js/' ) );
}

gulp.task('scss:bs-editor:3',   function(){ return do_scss( 'admin/mce/tiny-bootstrap3-editor') });
gulp.task('scss:bs-editor:4',   function(){ return do_scss( 'admin/mce/tiny-bootstrap3-editor') });
gulp.task('scss:bugsmall',      function(){ return do_scss( 'admin/mce/tiny-bootstrap-bigsmall-toolbar') });
gulp.task('scss:classes',       function(){ return do_scss( 'admin/mce/tiny-bootstrap-classes-editor') });
gulp.task('scss:uppercase',     function(){ return do_scss( 'admin/mce/tiny-bootstrap-uppercase-toolbar') });
gulp.task('scss:visibility',    function(){ return do_scss( 'admin/mce/tiny-bootstrap-visibility-editor') });
gulp.task('scss:bs:3',          function(){ return do_scss( 'bootstrap/3/bootstrap') });
gulp.task('scss:bs:4',          function(){ return do_scss( 'bootstrap/4/bootstrap') });
gulp.task('scss:admin:blocks',  function(){ return do_scss( 'admin/blocks/blocks') });

gulp.task('scss', gulp.parallel(
	'scss:bs-editor:3',
	'scss:bs-editor:4',
	'scss:bugsmall',
	'scss:classes',
	'scss:uppercase',
	'scss:visibility',
	'scss:bs:3',
	'scss:bs:4',
	'scss:admin:blocks'
));

gulp.task('js:admin:bigsmall', function(){ return do_js('admin/mce/tiny-bootstrap-bigsmall-plugin') });
gulp.task('js:admin:classes', function(){ return do_js('admin/mce/tiny-bootstrap-classes-plugin') });
gulp.task('js:admin:uppercase', function(){ return do_js('admin/mce/tiny-bootstrap-uppercase-plugin') });
gulp.task('js:admin:visibility', function(){ return do_js('admin/mce/tiny-bootstrap-visibility-plugin') });
/*
gulp.task('js:admin:blocks', function(){ return do_js('admin/blocks/blocks') });
/*/
gulp.task('js:admin:blocks', function(){ return concat_js([
	'admin/blocks/overrides/*',
	'admin/blocks/blocks',
	'admin/blocks/components/*',
	'admin/blocks/blocks/*',
	'admin/blocks/features/*',
],'admin/blocks/blocks.js') });
//*/
gulp.task('js:admin', gulp.parallel(
	'js:admin:bigsmall',
	'js:admin:classes',
	'js:admin:uppercase',
	'js:admin:visibility',
	'js:admin:blocks',
));


gulp.task( 'js', gulp.parallel('js:admin') );


gulp.task('build', gulp.parallel('scss','js') );


gulp.task('watch', function() {
	// place code for your default task here
	gulp.watch('./src/scss/**/*.scss',gulp.parallel( 'scss' ));
	gulp.watch('./src/js/**/*.js',gulp.parallel( 'js' ) );
});
gulp.task('default', gulp.series('build','watch'));
