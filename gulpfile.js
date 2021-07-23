let gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync');

    gulp.task('browser-sync', function () {
        browserSync({
            server:{
                baseDir: 'src'
            },
            notify: false
        });
    });

gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('src'))
});

gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('src/*.pug', gulp.parallel('pug'));
    gulp.watch('src/sass/style.sass', gulp.parallel('sass'));
});




gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));