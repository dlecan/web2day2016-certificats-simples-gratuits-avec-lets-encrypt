module.exports = function ( grunt ) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var taskConfig = {
    pkg: grunt.file.readJSON("package.json"),

    watch: {
      options: {
        livereload: true
      },
      index_html: {
        files: [ 'index.html' ]
      },
    },

    connect: {
      server: {
        options: {
//          open: {
//              target: 'http://localhost:8000/'
//          },
          keepalive: false,
          base: ['.'],
          livereload: true,
          hostname: 'localhost'
        }
      }
    }
  };

  grunt.initConfig( grunt.util._.extend( taskConfig) );

  grunt.registerTask( 'default', [ 'connect:server', 'watch'] );
};
