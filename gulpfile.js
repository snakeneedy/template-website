import gulp from 'gulp';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCleanCss from 'gulp-clean-css';
import gulpPug from 'gulp-pug';
import gulpSass from 'gulp-sass';
import gulpTerser from 'gulp-terser';

gulp.task('build:html', () => gulp.src('src/**/*.pug')
  .pipe(gulpPug())
  .pipe(gulp.dest('build/')));

gulp.task('build:css', () => gulp.src('src/**/*.scss')
  .pipe(gulpSass())
  .pipe(gulpAutoprefixer({ cascade: true }))
  .pipe(gulpCleanCss())
  .pipe(gulp.dest('build/')));

gulp.task('build:js', () => gulp.src('src/**/*.js')
  .pipe(gulpTerser())
  .pipe(gulp.dest('build/')));
