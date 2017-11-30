module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'browserify': {
      dist: {
        src: ['src/main.js'],
        dest: 'dist/bundle.js'
      }
    },
    clean: {
      dist: ['dist'],
      sass: ['src/styles.bundle.scss']
    },
    concat: {
      sass: {
        src: ['src/**/*.scss'],
        dest: 'src/styles.bundle.scss',
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
          cwd: 'src',
          src: ['**/*.html', '*.html'],
          dest: 'dist'
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
          'dist/bundle.min.js': 'dist/bundle.js'
        }
      }
    },    
    watch: {
      scripts: {
        files: ['src/**/*.js', '*.js'],
        tasks: ['browserify']
      },
      tscripts: {
        files: ['src/**/*.ts'],
        tasks: ['ts']
      },
      markup: {
        files: ['src/**/*.html', '*.html'],
        tasks: ['htmlmin']
      },
      styles: {
        files: ['src/**/*.scss', '*.scss'],
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
          'dist/styles.bundle.css': 'src/styles.bundle.scss'
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
  grunt.registerTask('styles', ['clean:sass', 'concat:sass', 'sass']);
  grunt.registerTask('default', ['clean:dist', 'htmlmin', 'styles', 'browserify', 'connect', 'watch']);

};