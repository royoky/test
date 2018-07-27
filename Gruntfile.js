module.exports = function(grunt) {
    // Do grunt related things here
    grunt.registerTask('test-grunt', () => {
        console.log('grunt ready')
    })

    grunt.registerTask('task2', () => {
        console.log('task2')
    })    

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jsonmin');
    grunt.loadNpmTasks('grunt-dom-munger2');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        htmlmin:{
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/assets/scripts/scripts.js': 'src/assets/scripts/scripts.js'
                }
            }
        },
        cssmin: {
            build: {
              files: {
                'dist/assets/css/style-min.css': ['src/assets/css/normalize.css', 'src/assets/css/style.css']
              }
            }
        },
        jsonmin: {
            build: {
                files: {
                "dist/data/moviesTab.json" : "src/data/moviesTab.json",
              }
            }
        },
        dom_munger: {
            build:{
                options: {
                    update: {selector:'#style',attribute:'href', value:'assets/css/style-min.css'},
                    remove: '#norm'
                },
                src: 'dist/index.html',
                dest: 'dist/index.html'
            },
        },
        clean: {
             folder: 'dist'
        },
        copy: {
            build: {
              files:
                // includes files within path
                [{expand: true, cwd: 'src/assets/posters/', src: ['**'], dest: 'dist/assets/posters'}]
            },
          },
    })
    grunt.registerTask('default', ['clean', 'htmlmin', 'uglify', 'cssmin', 'jsonmin', 'dom_munger', 'copy']);
};