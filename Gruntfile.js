module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'css/main.css': ['css/content.css', 'css/other.css']
        }
      }
    }

    uglify: {
      dist: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin', 'uglify']);

  // grunt.registerTask('logger', '', function() {
  //   console.log('This grunt task is pointless.');
  //   console.log('IMMA SUPPA COMPUTTAH!.');
  // })
};
