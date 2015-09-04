'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            dev: {
                src: ['output', 'dist']
            },
        },

        copy: {
            main: {
                files: [
                    { expand: true, src: ['css/**', 'js/**','index.html'], dest: 'output/' },                   
                    { expand: true, src: ['views/**'], dest: 'dist/' },
                    { expand: true, src: ['img/**'], dest: 'dist/' },
                    { expand: true, src: ['project**.html'], dest: 'dist/' }
                ],
            },
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/perfmatters.js': ['output/js/perfmatters.js'],
                  }
              }
        },
        
        cssmin: {
            dist:{
                files:{
                    'dist/css/style.css': ['output/css/style.css'],
                    'dist/css/print.css': ['output/css/print.css'],
                    'dist/css/font.css': ['output/css/font.css'],
                }
            }
        },


        inline: {
            dist: {
                files: {
                    'dist/index.html': 'output/index.html',
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-inline');

    grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify', 'inline']);                                
 };