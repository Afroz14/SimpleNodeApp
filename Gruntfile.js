/*
 Author : Afroz Alam,
 Date   : 27 August 2015
 Copyright : None
*/

var Oven = Oven || {};


//All grunt configurations must be put here
Oven.config = {
    cssLessDir: "public/styles/less",
    buildCssDir: "public/styles/build",
    jsDir:"public/scripts"
};

var timer = require("grunt-timer");

module.exports = function(grunt) {

  timer.init(grunt, { deferLogs: true, friendlyTime: true, color: "blue" });

  // Load all modules here

   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-jshint');
  

   grunt.initConfig({

    config: Oven.config,

    less: {
            production: {
                options: {
                    cleancss: false
                },
                files: {
                  '<%= config.buildCssDir %>/app.css' : '<%= config.cssLessDir %>/app.less',
                }
            }
      },
    jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: ['<%= config.jsDir %>/**/*.js','!<%= config.jsDir %>/vendors/*.js']
      },

  });

    grunt.registerTask('default' ,'build');
    grunt.registerTask('build', ['less','jshint']);

};
