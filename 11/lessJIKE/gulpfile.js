var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var paths = {
    lessa: ['css/index.less', 'css/reset.less'],
    cssa: ['css/index2.css']
};

gulp.task('default', ['task1less', 'taskcss', 'watch'], function() {
    console.log("ok");

});
gulp.task('task1less', function() {
    gulp.src(paths.lessa)
        .pipe(less())
        .pipe(concat("allless.css"))
        .pipe(gulp.dest('./css'));
})
gulp.task('taskcss', function() {
    // 将你的默认的任务代码放在这
    gulp.src(paths.cssa)
        .pipe(minifyCSS())
        .pipe(concat("allindex.css"))
        .pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
    gulp.watch(paths.cssa, ['taskcss']);
    gulp.watch(paths.lessa, ['task1less']);
});
