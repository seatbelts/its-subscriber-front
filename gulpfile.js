var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    coffee        = require('gulp-coffee'),
    concat        = require('gulp-concat'),
    concatCss     = require('gulp-concat-css'),
    jade          = require('gulp-jade'),
    less          = require('gulp-less'),
    gutil         = require('gulp-util'),
    ngAnnotate    = require('gulp-ng-annotate'),
    gulpif        = require('gulp-if'),
    templateCache = require('gulp-angular-templatecache'),
    template      = require('gulp-template'),
    lazypipe      = require('lazypipe'),
    uglify        = require('gulp-uglify');
    minify        = require('gulp-minify');

var bowercssFiles = require("./listAssets/bowercss.json");
var bowerjsFiles = require("./listAssets/bowerjs.json");

var cssFiles = require("./listAssets/css.json");
var jsFiles = require("./listAssets/scripts.json");

var enviroments = {
  "development" : {
  },
  "production" : {
  }
}

var enviroment = enviroments["development"];
if (process.argv.length > 2){
  if (process.argv[2] == "production") {
    enviroment = enviroments["production"]
  }
};

gulp.task('connect', function () {
  connect.server({
    root: './build',
    port: 8888,
    livereload: true                                                                                                                                                                                                                           
  });
});

gulp.task('templates', function () {
  return gulp.src(['app/**/*.html', 'app/**/*.jade'])
    .pipe(gulpif(/[.]jade$/, jade({
      pretty: true
    })))
    .pipe(templateCache('templates.js', {
      module: 'templates',
      standalone: true
    }))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(connect.reload());
});

var fontsDirectory = [
  'font/font-awesome/fonts/*.*',
  'font/simple-line-icons/fonts/*.*' 
];

gulp.task('copyfonts',function(){
  return gulp.src(fontsDirectory, { base: 'font'})
      .pipe(gulp.dest('build/assets'));
});



gulp.task('minify-css', function () {
    return gulp.src(bowercssFiles)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('build/assets/css'))
});

gulp.task('minify-js', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'))
});

gulp.task('minify-js-dependencies', function() {
  return gulp.src(bowerjsFiles)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js/'))
});

gulp.task('copyImages',function(){
  return gulp.src(['app/assets/img/*.*', '!app/assets/img/.gitkeep'])
  .pipe(gulp.dest('build/assets/img'));
});


gulp.task('minify-own-styles', function(){
  return gulp.src(cssFiles)
      .pipe(concatCss('app.css'))
      .pipe(gulp.dest('build/assets/css'))
});

gulp.task('minify-own-sources', function() {
  gulp.src(['app/modules/**/*.module.js' , 'app/services/**/*.js', 'app/modules/**/*.js','app/js/*.js'])
    .pipe(
      gulpif(/[.]coffee$/, coffee({bare: true}).on('error', gutil.log)
    ))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest("build/assets/js/"))
    .pipe(connect.reload())
});


gulp.task('index', function(){
  return gulp.src('app/index.html')
    .pipe(gulp.dest('build/'));
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/**/*.coffee','./app/**/*.js'], ['minify-own-sources']);
  gulp.watch(['./app/assets/css/**/*.css'],['minify-own-styles']);
  gulp.watch(['./app/**/*.html', './app/**/*.jade', '!app/index.jade'], ['templates']);
  gulp.watch(['app/index.html'], ['index']);
});

gulp.task('default', ['connect', 'copyfonts', 'copyImages', 'minify-js-dependencies', 'templates', 'minify-css', 'minify-own-styles', 'minify-own-sources', 'minify-js', 'index' ,'watch']);
gulp.task('production', ['copyfonts', 'copyImages', 'bowerify', 'templates', 'minify-own-styles', 'minify-own-sources', 'index']);