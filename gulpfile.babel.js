// 加载相关插件
import gulp from 'gulp'
import sass from 'gulp-sass'
import cleanCss from 'gulp-clean-css'
import browserSync from 'browser-sync'
// import babel from 'gulp-babel'
import del from 'del'
import sourcemaps from 'gulp-sourcemaps'
import usemin from 'gulp-usemin'
import uglify from 'gulp-uglify'
import rev from 'gulp-rev'

import zip from 'gulp-zip'

let reload = browserSync.reload

const config = {
        actName: 'simona',
        dist: 'dist'
    }
    // 获取文件名
let getPath = (reg) => {
    return `activity/${config.actName}/${reg}`
}

const paths = {
    styles: {
        src: getPath('sass/**/*.scss'),
        temp: getPath('css'),
        dest: getPath('dist/css')
    }
}

//清理 文件夹
const clean = () => del([`activity/${config.actName}/${config.dist}/`, `activity/${config.actName}/css/`])
export { clean }

// 编译sass
export function style() {
    return gulp.src(paths.styles.src)
    	.pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        // .pipe(cleanCss())
        .pipe(reload({ stream: true }))
        .pipe(gulp.dest(paths.styles.temp))
}

// 修改依赖文件名
export function useminTask () {
	return gulp.src(getPath('html/**/*.html'))
	.pipe(usemin({
		css: [cleanCss(), rev()],
		js: [uglify(), rev()]
	}))
	.pipe(gulp.dest(getPath(`${config.dist}/html`)))
}

// 监听文件，刷新浏览器
export function watch() {
    gulp.watch(getPath('sass/**/*.scss'), style)
    gulp.watch(['*.html', 'html/**/*.html', 'css/**/*.css', 'js/**/*.js'], { cwd: `activity/${config.actName}` }).on('change', reload)
}

// 复制逻辑js文件到dist
export function copyJs () {
    return gulp.src(getPath('js/**/*.js'))
        .pipe(gulp.dest(getPath(`${config.dist}/js`)))
}

// 启动本地服务
const browser = () => {
    browserSync({
        server: {
            baseDir: `activity/${config.actName}` ,
            routes: {
            	'/lib': 'lib'
            }
        }

    })
}

export { browser }

export function compress () {
    return gulp.src(getPath('dist/**'), '!' + getPath('dist/*.zip'))
    .pipe(zip(`dist${Date.now()}.zip`))
    .pipe(gulp.dest(getPath(config.dist)))
}

const serve = gulp.series(clean, style, gulp.parallel(browser, watch))

const build = gulp.series(clean, style, gulp.parallel(useminTask, copyJs))

export { serve, build }
