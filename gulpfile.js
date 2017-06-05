const bunyan      = require( 'bunyan' );
const spawn       = require( 'child_process' ).spawn;
const gulp        = require( 'gulp' );
const del         = require( 'del');
const nodemon     = require( 'gulp-nodemon' );
const sourcemaps  = require( 'gulp-sourcemaps' );
const tslint      = require( 'gulp-tslint' );
const ts          = require( 'gulp-typescript' );
const util        = require( 'gulp-util' );
const jasmine     = require( 'gulp-jasmine');
const reporters   = require( 'jasmine-reporters');
//
// Gulp Variables
//
const tsProject   = ts.createProject( 'src/tsconfig.json' );
const buildPath   = 'build';
const distPath    = 'dist';
const ignorePaths = [ 'node_modules' ];
const extensions  = 'ts json';
const watchSrc    = 'src';
const bunyanPath  = './node_modules/bunyan/bin/bunyan';
const bunyanArgs  = [ '--output', 'short', '--color' ];
const startScript = buildPath + '/app.js';
const distScript  = distPath + '/app.js';
const delScript   = [ buildPath + '/**/*' ];
const srcPath     = 'src';

gulp.task('default', ['clean', 'build', 'lint']);

gulp.task('lint', function(){
  return gulp.src(srcPath)
    .pipe(tslint({ formatter: 'stylish' }))
    .pipe(tslint.report({ summaryFailureOutput: true }))
    .on('error', function (error) {
        util.log('TS lint failed, details:');
        util.log(error.message);
    });
});

gulp.task('clean-build', function(){
  return del( delScript );
});

gulp.task('clean-dist', function(){
  return del( 'dist/**/*' );
});

gulp.task('build', function() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(buildPath));
});

gulp.task('dist', function() {
  return tsProject.src()
                  .pipe(tsProject())
                  .pipe(gulp.dest(distPath));
});

gulp.task('test', ['build', 'lint'], function(){
  return gulp.src('src/test/test.js')
    .pipe( jasmine({
      reporter: new reporters.TerminalReporter()
    }) );
});


gulp.task('dev', ['build', 'lint'], function() {
  var bunyan

  const stream = nodemon({
      script:   startScript,
      ext:      extensions,
      ignore:   ignorePaths,
      watch:    [ watchSrc ],
      tasks:    [ 'build', 'lint' ],
      stdout:   false,
      readable: false
    })
    .on('readable', function() {

      // free memory
      bunyan && bunyan.kill();

      bunyan = spawn(bunyanPath, bunyanArgs);

      bunyan.stdout.pipe(process.stdout);
      bunyan.stderr.pipe(process.stderr);

      this.stdout.pipe(bunyan.stdin);
      this.stderr.pipe(bunyan.stdin);
    })

    .on('restart', function(){ console.log( 'app restarted' );})

    .on('crash', function(){
        console.log( 'app crashed!' );
        stream.emit( 'restart', 10); // restart the server in 10 seconds
    })
});

gulp.task('start', [ 'dist', 'lint'], function(){
  var bunyan

  const stream = nodemon({
      script:   distScript,
      ext:      extensions,
      ignore:   ignorePaths,
      watch:    [ watchSrc ],
      tasks:    [ 'dist', 'lint' ],
      stdout:   false,
      readable: false
    })
    .on('readable', function() {

      // free memory
      bunyan && bunyan.kill();

      bunyan = spawn(bunyanPath, bunyanArgs);

      bunyan.stdout.pipe(process.stdout);
      bunyan.stderr.pipe(process.stderr);

      this.stdout.pipe(bunyan.stdin);
      this.stderr.pipe(bunyan.stdin);
    })

    .on('restart', function(){ console.log( 'app restarted' );})

    .on('crash', function(){
      console.log( 'app crashed!' );
      stream.emit( 'restart', 10); // restart the server in 10 seconds
    })

});
