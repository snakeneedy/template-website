import browserSync from 'browser-sync';
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

gulp.task('build', gulp.parallel(['build:html', 'build:css', 'build:js']));

gulp.task('watch', gulp.series([
  'build',
  () => {
    gulp.watch('src/**/*.pug', gulp.series('build:html'));
    gulp.watch('src/**/*.scss', gulp.series('build:css'));
    gulp.watch('src/**/*.js', gulp.series('build:js'));

    browserSync.init({
      server: {
        baseDir: 'build/',
      },
    });
    gulp.watch('build/', (done) => {
      browserSync.reload();
      done();
    });
  },
]));
