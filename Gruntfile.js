'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    project: {
      app: ['app'],
      server: ['server'],
      tests: ['tests'],
      scss: ['<%= project.app %>/sass/**/*.scss',  'app/sass/**/*.sass'],
      css: ['<%= project.app %>/**/*.css', '!<%= project.app %>/sass/**/*.*'],
      html: ['<%= project.app %>/**/*.html'],
      alljs: ['<%= project.app %>/js/**/*.js', '<%= project.server %>/**/*.js', '<%= project.tests %>/**/*.js', '!tests/angular_test_bundle.js']
    },

    jshint: {
      all: ['<%= project.alljs %>', 'Gruntfile.js', 'server.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['<%= project.alljs %>', 'Gruntfile.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['tests/api/*.js']
    },

    browserify: {
      dev: {
        src: ['<%= project.app %>/js/**/*.js'],
        dest: 'build/app_bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['tests/app/**/*.js'],
        dest: 'tests/angular_test_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    clean: {
      src: ['build/']
    },

    copy: {
      dev: {
        cwd: 'app',
        expand: true,
        src: ['index.html', 'js/templates/**/*.html', 'css/**/*.css', 'img/**/*.*', 'fonts/**/*.*', 'js/**/*.js'],
        dest: 'build/'
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha', 'browserify:test', 'karma:unit']);
  grunt.registerTask('test:client', ['jshint', 'jscs', 'browserify:test', 'karma:unit']);
  grunt.registerTask('build', ['clean', 'browserify:dev', 'browserify:test', 'copy:dev']);
  grunt.registerTask('build:basic', ['clean', 'browserify:dev', 'copy:dev']);
};
