module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      normal: {
        files: {
          'build/normal-browserify/client.js': 'client.js',
          'build/normal-browserify/worker.js': 'worker.js'
        }
      },

      custom: {
        files: {
          'build/custom-browserify/client.js': 'client.js',
          'build/custom-browserify/worker.js': 'worker.js'
        },
        options: {
          alias: './custom_lodash.js:lodash'
        }
      }
    },

    jshint: {
      lodash_worker: ['client.js', 'worker.js', 'Gruntfile.js']
    },

    testem: {
      lodash_worker: {
        src: 'testem.json'
      }
    },

    webpack: {
      custom_client: {
        entry: './client.js',
        output: {
          path: 'build/custom-webpack/',
          filename: 'client.js'
        },
        resolve: {
          alias: {
            'lodash': './custom_lodash.js'
          }
        }
      },

      custom_worker: {
        entry: './worker.js',
        output: {
          path: 'build/custom-webpack/',
          filename: 'worker.js'
        },
        resolve: {
          alias: {
            'lodash': './custom_lodash.js'
          }
        }
      },

      normal_client: {
        entry: './client.js',
        output: {
          path: 'build/normal-webpack/',
          filename: 'client.js'
        }
      },

      normal_worker: {
        entry: './worker.js',
        output: {
          path: 'build/normal-webpack/',
          filename: 'worker.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-testem');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['browserify', 'webpack']);
  grunt.registerTask('test', ['jshint', 'testem']);
};
