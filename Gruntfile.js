module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
        'css/result.css': 'less/style.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

  // grunt.registerTask('logger', '', function() {
  //   console.log('This grunt task is pointless.');
  //   console.log('IMMA SUPPA COMPUTTAH!.');
  // })
};
