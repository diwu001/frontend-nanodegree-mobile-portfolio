'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            dev: {
                src: ['output', 'dist'],
            },
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['css/**', 'js/**', 'views/**'], dest: 'output/'},
                    {expand: true, src: ['img/**'], dest: 'dist/'},
                    {expand: true, src: ['pizza.png'], dest: 'dist/views/images/'},
                    {expand: true, src: ['pizzeria.jpg'], dest: 'dist/views/images/'},
                    {expand: true, src: ['**.html'], dest: 'output/'}
                ],
            },
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/perfmatters.js':['output/js/perfmatters.js'],
                    //'dist/views/js/main.js':['output/views/js/main.js']
                  }
              }
        },
        
        cssmin: {
            dist:{
                files:{
                    'dist/css/style.css':['output/css/style.css'],
                    'dist/css/print.css':['output/css/print.css'],
                    'dist/css/font.css':['output/css/font.css'],
                    //'dist/views/css/bootstrap-grid.css':['output/views/css/bootstrap-grid.css'],
                    //'dist/views/css/style.css':['output/views/css/style.css']
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

       /* htmlmin: {                                     
            dist: {                                      
              options: {                                 
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   
                'dist/index.html': 'output/index.html',

              }
            }
          }*/
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'uglify', 'inline']);                                
 };