module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'public/styles/main.css': 'public/sass/main.scss'
                }
            }
        },
        watch: {
            sassy: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.registerTask('default',['sass','watch']);
};