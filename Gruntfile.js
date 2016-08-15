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
          'css/style.css': 'less/style.less'
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
          'css/style.css': 'less/style.less'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.less',
        tasks: ['less:development']
        // options: {
        //   livereload: true
        // }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development', 'watch']);

  grunt.registerTask('logger', '', function() {
    console.log('IMMA SUPPA COMPUTTAH!.');
  })
};
