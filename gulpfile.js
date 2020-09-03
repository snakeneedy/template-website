import gulp from 'gulp';
import gulpPug from 'gulp-pug';

gulp.task('build:html', () => gulp.src('src/**/*.pug')
  .pipe(gulpPug())
  .pipe(gulp.dest('build/')));
