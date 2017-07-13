var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var paths = {
    scriptss: ['public/js/index.js', 'public/js/add.js', 'public/js/admin.js', 'public/js/edit.js'],
    sascss: ['public/css/m_index.css']
};

gulp.task('default', function() {
    console.log("ok");
    gulp.src(paths.scriptss)
        .pipe(uglify())
        .pipe(concat("all.min.js"))
        .pipe(gulp.dest('public/bulid'));

});
gulp.task('sass', function() {
    console.log("ok3");
    // 将你的默认的任务代码放在这
    gulp.src(paths.sascss)
        .pipe(minifyCSS())
        .pipe(concat("all.css"))
        .pipe(gulp.dest('public/bulid'));
});
gulp.task('watch', function() {
    gulp.watch(paths.scriptss, ['default']);
    gulp.watch(paths.sascss, ['sass']);
});
