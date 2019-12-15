let gulp        = require('gulp');
let config      = require('../config');
let htmlhint    = require('gulp-htmlhint');
let sassLint    = require('gulp-sass-lint');

let git         = require('gulp-git');


gulp.task('lint:js', () => {
  // return gulp.src(['src/js/**/*.js', '!node_modules/**'])
  //   .pipe(eslint())
  //   .pipe(eslint.format())
  //   .pipe(eslint.failAfterError());
});


gulp.task('lint:html', () => {
  return gulp.src(`${config.dest.html  }/*.html`)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.failReporter());
});

gulp.task('lint:sass', () => {
  return gulp.src('src/sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('lint', [

  'lint:sass',
  'lint:html'
]);
