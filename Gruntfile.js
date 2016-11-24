module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
            ' * Bootsblogger v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %> (https://github.com/bootsblogger/bootsblogger/blob/master/LICENSE)\n' +
            ' */\n',

    clean: {
      dist: 'dist',
      templateAssets: ['template-src/includes/assets/bootstrap', 'template-src/includes/assets/bootsblogger'],
      docs: ['docs/assets/bootstrap', 'docs/assets/bootsblogger']
    },

    sass: {
      options: {
        precision: 6,
        sourcemap: 'auto',
        style: 'expanded',
        trace: true,
        bundleExec: true
      },
      bootstrap: {
        files: {
          'template-src/includes/assets/bootstrap/css/bootstrap.css': 'scss/bootstrap/bootstrap.scss'
        }
      },
      bootsblogger: {
        files: {
          'template-src/includes/assets/bootsblogger/css/bootsblogger.css': 'scss/bootsblogger/bootsblogger.scss'
        }
      },
      docs: {
        files: {
          'docs/assets/css/docs.css': 'docs/assets/scss/docs.scss'
        }
      }
    },

    scsslint: {
      options: {
        bundleExec: true,
        config: 'scss/.scss-lint.yml',
        reporterOutput: null
      },
      bootstrap: {
        src: ['scss/bootstrap/*.scss', '!scss/bootstrap/_normalize.scss']
      },
      bootsblogger: {
        src: ['scss/bootsblogger/*.scss', '!scss/bootsblogger/_gadgets.scss']
      },
      docs: {
        src: ['docs/assets/scss/*.scss', '!docs/assets/scss/docs.scss']
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie9,-properties.zeroUnits',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'template-src/includes/assets/bootstrap/css',
          src: ['*.css', '!*.min.css'],
          dest: 'template-src/includes/assets/bootstrap/css',
          ext: '.min.css'
        }]
      },
      bootsblogger: {
        files: [{
          expand: true,
          cwd: 'template-src/includes/assets/bootsblogger/css',
          src: ['*.css', '!*.min.css'],
          dest: 'template-src/includes/assets/bootsblogger/css',
          ext: '.min.css'
        }]
      },
      docs: {
        files: [{
          expand: true,
          cwd: 'docs/assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'docs/assets/css',
          ext: '.min.css'
        }]
      }
    },

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: true,
          sourcesContent: true
        },
        processors: [
          require('postcss-flexbugs-fixes')(),
          require('autoprefixer')({
            browsers: [
              //
              // Official browser support policy:
              // https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#supported-browsers
              //
              'Chrome >= 35', // Exact version number here is kinda arbitrary
              // Rather than using Autoprefixer's native "Firefox ESR" version specifier string,
              // we deliberately hardcode the number. This is to avoid unwittingly severely breaking the previous ESR in the event that:
              // (a) we happen to ship a new Bootstrap release soon after the release of a new ESR,
              //     such that folks haven't yet had a reasonable amount of time to upgrade; and
              // (b) the new ESR has unprefixed CSS properties/values whose absence would severely break webpages
              //     (e.g. `box-sizing`, as opposed to `background: linear-gradient(...)`).
              //     Since they've been unprefixed, Autoprefixer will stop prefixing them,
              //     thus causing them to not work in the previous ESR (where the prefixes were required).
              'Firefox >= 38', // Current Firefox Extended Support Release (ESR); https://www.mozilla.org/en-US/firefox/organizations/faq/
              // Note: Edge versions in Autoprefixer & Can I Use refer to the EdgeHTML rendering engine version,
              // NOT the Edge app version shown in Edge's "About" screen.
              // For example, at the time of writing, Edge 20 on an up-to-date system uses EdgeHTML 12.
              // See also https://github.com/Fyrd/caniuse/issues/1928
              'Edge >= 12',
              'Explorer >= 9',
              // Out of leniency, we prefix these 1 version further back than the official policy.
              'iOS >= 8',
              'Safari >= 8',
              // The following remain NOT officially supported, but we're lenient and include their prefixes to avoid severely breaking in them.
              'Android 2.3',
              'Android >= 4',
              'Opera >= 12'
            ]
          })
        ]
      },
      bootstrap: {
        src: 'template-src/includes/assets/bootstrap/css/*.css'
      },
      bootsblogger: {
        src: 'template-src/includes/assets/bootsblogger/css/*.css'
      },
      docs: {
        src: 'docs/assets/css/*.css'
      }
    },

    jscs: {
      options: {
        config: 'js/.jscsrc'
      },
      bootsblogger: {
        src: 'js/bootsblogger/**/*.js'
      },
      docs: {
        src: 'docs/assets/js/src/*.js'
      }
    },

    concat: {
      bootsblogger: {
        src: [
          'js/bootsblogger/post-clickable.js',
          'js/bootsblogger/widget-collapse.js',
          'js/bootsblogger/comments.js'
        ],
        dest: 'template-src/includes/assets/bootsblogger/js/bootsblogger.js'
      },
      bootsbloggerJSON: {
        src: [
          'js/bootsblogger/json/count.js',
          'js/bootsblogger/json/posts-default.js',
          'js/bootsblogger/json/posts-card.js',
          'js/bootsblogger/json/labels-lists.js',
          'js/bootsblogger/json/labels-custom.js',
          'js/bootsblogger/json/labels-select.js'
        ],
        dest: 'template-src/includes/assets/bootsblogger/js/bootsblogger-json.js'
      },
      docs: {
        src: [
          'docs/assets/js/vendor/anchor.min.js',
          'docs/assets/js/vendor/clipboard.min.js',
          'docs/assets/js/vendor/holder.min.js',
          'docs/assets/js/src/application.js'
        ],
        dest: 'docs/assets/js/docs.js'
      }
    },

    stamp: {
      bootsblogger: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          src: '<%= concat.bootsblogger.dest %>'
        }
      },
      bootsbloggerJSON: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          src: '<%= concat.bootsbloggerJSON.dest %>'
        }
      }
    },

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: /^!|@preserve|@license|@cc_on/i
      },
      bootsblogger: {
        src: '<%= concat.bootsblogger.dest %>',
        dest: 'template-src/includes/assets/bootsblogger/js/bootsblogger.min.js'
      },
      bootsbloggerJSON: {
        src: '<%= concat.bootsbloggerJSON.dest %>',
        dest: 'template-src/includes/assets/bootsblogger/js/bootsblogger-json.min.js'
      },
      docs: {
        src: '<%= concat.docs.dest %>',
        dest: 'docs/assets/js/docs.min.js'
      }
    },

    bake: {
      template: {
        options: {
          basePath: 'template-src',
          content: 'template-src/config.json'
        },
        files: {
          'dist/template.xml': 'template-src/template-src.xml'
        }
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        incremental: false
      },
      docs: {},
      github: {
        options: {
          raw: 'github: true'
        }
      }
    },

    htmllint: {
      options: {
        ignore: [
          'Attribute “autocomplete” is only allowed when the input type is “color”, “date”, “datetime”, “datetime-local”, “email”, “hidden”, “month”, “number”, “password”, “range”, “search”, “tel”, “text”, “time”, “url”, or “week”.',
          'Attribute “autocomplete” not allowed on element “button” at this point.',
          'Consider using the “h1” element as a top-level heading only (all “h1” elements are treated as top-level headings by many screen readers and other tools).',
          'Element “div” not allowed as child of element “progress” in this context. (Suppressing further errors from this subtree.)',
          'Element “img” is missing required attribute “src”.',
          'The “color” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “date” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime-local” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “month” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “time” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “week” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
        ]
      },
      docs: {
        src: '_gh_pages/**/*.html'
      }
    },

    htmlhint: {
      docs: {
        options: {
          htmlhintrc: 'docs/.htmlhintrc'
        },
        src: '_gh_pages/**/*.html'
      }
    },

    copy: {
      bootstrapJs: {
        expand: true,
        cwd: 'js/bootstrap/',
        src: 'js/*',
        dest: 'template-src/includes/assets/bootstrap/'
      },
      docs: {
        expand: true,
        cwd: 'template-src/includes/assets/',
        src: [
          'bootstrap/**/*',
          'bootsblogger/**/*'
        ],
        dest: 'docs/assets/'
      }
    },

    buildcontrol: {
      options: {
        dir: '_gh_pages',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:bootsblogger/bootsblogger.github.io.git',
          branch: 'master'
        }
      }
    },

    compress: {
      main: {
        options: {
          archive: 'bootsblogger-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**'],
            dest: 'bootsblogger-<%= pkg.version %>-dist'
          }
        ]
      }
    },

    watch: {
      bootstrapSass: {
        files: ['scss/bootstrap/**/*.scss', 'scss/_custom.scss'],
        tasks: ['test-sass-bootstrap', 'compile-sass-bootstrap', 'copy:docs', 'compile-template']
      },
      bootsbloggerSass: {
        files: ['scss/bootsblogger/**/*.scss', 'scss/_custom.scss'],
        tasks: ['test-sass-bootsblogger', 'compile-sass-bootsblogger', 'copy:docs', 'compile-template']
      },
      docsSass: {
        files: 'docs/assets/scss/**/*.scss',
        tasks: ['test-sass-docs', 'compile-sass-docs']
      },
      bootstrapJs: {
        files: 'js/bootstrap/js/*.js',
        tasks: ['copy:bootstrapJs', 'copy:docs', 'compile-template']
      },
      bootsbloggerJs: {
        files: 'js/bootsblogger/**/*.js',
        tasks: ['test-js-bootsblogger', 'compile-js-bootsblogger', 'copy:docs', 'compile-template']
      },
      docsJs: {
        files: 'docs/assets/js/src/*.js',
        tasks: ['compile-js-docs']
      },
      bake: {
        files: ['template-src/**/*.xml', 'template-src/**/*.css', 'template-src/**/*.js', '!template-src/**/bootsblogger/**/*', '!template-src/**/bootstrap/**/*', 'template-src/config.json'],
        tasks: ['compile-template']
      }
    }

  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
  require('time-grunt')(grunt);

  // CSS task.
  grunt.registerTask('test-sass-bootstrap', ['scsslint:bootstrap']);
  grunt.registerTask('test-sass-bootsblogger', ['scsslint:bootsblogger']);
  grunt.registerTask('compile-sass-bootstrap', ['sass:bootstrap', 'cssmin:bootstrap', 'postcss:bootstrap']);
  grunt.registerTask('compile-sass-bootsblogger', ['sass:bootsblogger', 'cssmin:bootsblogger', 'postcss:bootsblogger']);

  // JS task.
  grunt.registerTask('test-js-bootsblogger', ['jscs:bootsblogger']);
  grunt.registerTask('compile-js-bootstrap', ['copy:bootstrapJs']); // Just copy
  grunt.registerTask('compile-js-bootsblogger', ['concat:bootsblogger', 'stamp:bootsblogger', 'uglify:bootsblogger', 'concat:bootsbloggerJSON', 'stamp:bootsbloggerJSON', 'uglify:bootsbloggerJSON']);

  // Template task.
  grunt.registerTask('compile-template', ['bake:template']);

  // Docs task.
  grunt.registerTask('test-sass-docs', ['scsslint:docs']);
  grunt.registerTask('compile-sass-docs', ['sass:docs', 'cssmin:docs', 'postcss:docs']);
  grunt.registerTask('test-js-docs', ['jscs:docs']);
  grunt.registerTask('compile-js-docs', ['concat:docs', 'uglify:docs']);
  grunt.registerTask('compile-jekyll-docs', ['jekyll:docs']);
  grunt.registerTask('validate-html-docs', ['compile-jekyll-docs', 'htmllint:docs', 'htmlhint:docs']);
  grunt.registerTask('docs-github', ['jekyll:github']);
  grunt.registerTask('docs', ['test-sass-docs', 'test-js-docs', 'compile-sass-docs', 'compile-js-docs', 'clean:docs', 'copy:docs']);

  // Test all.
  grunt.registerTask('test', [
    'test-sass-bootstrap',
    'test-sass-bootsblogger',
    'test-sass-docs',
    'test-js-bootsblogger',
    'test-js-docs',
    'validate-html-docs'
  ]);

  // Compile all.
  grunt.registerTask('compile', [
    'clean:dist',
    'clean:templateAssets',
    'clean:docs',
    'compile-sass-bootstrap',
    'compile-sass-bootsblogger',
    'compile-sass-docs',
    'compile-js-bootstrap',
    'compile-js-bootsblogger',
    'compile-js-docs',
    'compile-template',
    'copy:docs'
  ]);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['test-sass-bootstrap', 'test-sass-bootsblogger', 'compile-sass-bootstrap', 'compile-sass-bootsblogger']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['test-js-bootsblogger', 'compile-js-bootstrap', 'compile-js-bootsblogger']);

  // Template distribution task.
  grunt.registerTask('dist-template', ['compile-template']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'clean:templateAssets', 'dist-css', 'dist-js', 'dist-template']);

  // Default task.
  grunt.registerTask('default', ['test', 'compile']);

  grunt.registerTask('prep-release', ['dist', 'docs', 'docs-github', 'compress']);

  // Publish to GitHub
  grunt.registerTask('publish', ['buildcontrol:pages']);
};
