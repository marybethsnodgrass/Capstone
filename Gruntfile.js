module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            options: {
                esnext: true
            },
            files: ['../public/app/**/*.js']
        },
        sass: {
            dist: {
                files: {
                    '../public/styles/main.css': '../public/sass/main.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../public/app/**/*.js'],
                tasks: ['jshint']
            },
            sassy: {
                files: ['../public/sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};

