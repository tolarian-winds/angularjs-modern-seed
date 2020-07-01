module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'browserify': {
      dist: {
        src: ['app/main.js'],
        dest: 'dist/bundle.js'
      }
    },
    clean: {
      dist: ['dist'],
      sass: ['app/src/styles.bundle.scss']
    },
    concat: {
      sass: {
        src: ['app/src/**/*.scss'],
        dest: 'app/src/styles.bundle.scss',
      },
    },
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: '0.0.0.0',
          base: 'dist'
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'app/src/',
          src: ['**/*.html', '*.html'],
          dest: 'dist'
        }, {
          'dist/index.html': 'app/index.html'
        }]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false
      },
      dist: {
        files: {
          'dist/bundle.js': 'dist/bundle.js'
        }
      }
    },    
    watch: {
      scripts: {
        files: ['app/src/**/*.js', '*.js'],
        tasks: ['browserify']
      },
      tscripts: {
        files: ['app/src/**/*.ts'],
        tasks: ['ts']
      },
      markup: {
        files: ['app/src/**/*.html', 'app/*.html', '*.html'],
        tasks: ['htmlmin']
      },
      styles: {
        files: ['app/src/**/*.scss', '*.scss'],
        tasks: ['styles']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/styles.bundle.css': 'app/src/styles.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('styles', ['clean:sass', 'sass']);
  grunt.registerTask('default', ['clean:dist', 'htmlmin', 'styles', 'browserify', 'connect', 'watch']);
  grunt.registerTask('build', ['clean:dist', 'htmlmin', 'styles', 'browserify', 'uglify']);

};