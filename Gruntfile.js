module.exports = function(grunt) {
    // Do grunt related things here
    grunt.registerTask('test-grunt', () => {
        console.log('grunt ready')
    })

    grunt.registerTask('task2', () => {
        console.log('task2')
    })

    grunt.registerTask('default', ['test-grunt', 'task2'])
};