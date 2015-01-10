runSequence = require 'run-sequence'
gulp        = require 'gulp'

gulp.task 'build', ->
	return runSequence(
		'spritesmith'
		'imagemin:sprite'
		'stylus'
		'jade'
		'scripts'
		'copy'
	)

gulp.task 'default', ->
	return runSequence(
		'spritesmith'
		'imagemin'
		'stylus'
		'jade'
		'scripts'
		'jscs'
		'jshint'
		'browserSync'
		'watch'
	)
