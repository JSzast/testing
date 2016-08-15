module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['css'],
          compress: false,
        },
        files: {
          'css/result.css': 'less/style.less'
        }
      },
      production: {
        options: {
          paths: ['css'],
          compress: true,
          sourceMap: true,
          sourceMapFilename: 'sorsmapa'
        },
        files: {
          'css/result.css': 'less/style.less'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.less',
        tasks: ['default']
        // options: {
        //   livereload: true
        // }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'watch']);

  // grunt.registerTask('logger', '', function() {
  //   console.log('This grunt task is pointless.');
  //   console.log('IMMA SUPPA COMPUTTAH!.');
  // })
};
