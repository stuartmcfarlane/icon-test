module.exports = function(grunt) {

  grunt.initConfig({
    spritesheet: {
      dist: {
        sprites: {
          "dist/css/sprites.png": ['src/icons/*.png']
        },
        sheet: "dist/scss/sprites.scss"
      }
    },
    sass: {
      dist: {
        files: {
          'dist/css/all.css': 'src/scss/main.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesheet');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [
    'spritesheet:dist',
    'sass:dist'
   ]);

};