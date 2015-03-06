var gulp        = require("gulp"),
//    jest        = require("gulp-jest"),
    source      = require('vinyl-source-stream'),
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    reactify    = require('reactify');
    connect     = require('gulp-connect'),
    open        = require('gulp-open'),
    port        = (process.env.port||5000);

var paths = {
   scripts: "src/**/*.js",
   tests: "__tests__" 
};
gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./src/main.js'], 
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/build/'));
});
/*
gulp.task('open', function() {
    var options = {
	   url: 'http://localhost:' + port
    };
    gulp.src('./public/index.html')
    .pipe(open('', options));
});

gulp.task('connect', function(){
    connect.server({
      root: './',
      port: port,
      livereload: true
    });
});

gulp.task('server', function() {
    gulp.src('./server.js')
        .pipe(connect.reload());
});

gulp.task( 'watch', function() {
    gulp.watch( './server.js', ['server']);
});
*/
gulp.task("serve", ["browserify"/*, "connect", "open", "watch" ,"jest", "watch",*/])
