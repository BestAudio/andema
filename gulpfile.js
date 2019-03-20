var gulp = require("gulp");
// var sass = require("gulp-sass");

// gulp.task("copy-html",async ()=>{
// 	//gulp.src("index.html").pipe(gulp.dest("dist"));
// 	gulp.src("*.html")
// 	.pipe(gulp.dest("D:\phpStudy\WWW\Under Armour"));
// });
// gulp.task("copy-img",async ()=>{
// 	gulp.src("img/*.{jpg,png,web,webp}").pipe(gulp.dest("D:\phpStudy\WWW\Under Armour\\img"));
// });

// gulp.task("copy-js",async ()=>{
// 	gulp.src("js/*")
// 	.pipe(gulp.dest("D:\phpStudy\WWW\Under Armour\\js"));
// });
// //监听并更改所有css文件
// gulp.task("copy-css",async ()=>{
// 	gulp.src("css/*")
// 	.pipe(gulp.dest("D:\phpStudy\WWW\Under Armour\\css"));
// });


// gulp.task("watchall",async ()=>{
// 	gulp.watch("*.html",gulp.series("copy-html"));
// 	gulp.watch("img/*.{jpg,png,web,webp}",gulp.series("copy-img"));
// 	gulp.watch("js/*",gulp.series("copy-js"));
// 	gulp.watch("css/*",gulp.series("copy-css"));
// });
gulp.task("copy-html", async ()=>{
	gulp.src("index.html").pipe(gulp.dest("D:\phpStudy\WWW\Under Armour"));
});