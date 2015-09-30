var gulp = require('gulp'),
    shell = require('shelljs'),
    webdriver = require('../wdio');

// Systems check
gulp.task('default', function () {
    console.log('Voyager');
});
// Install wdio requirements
gulp.task('init', function () {
    shell.exec('./node_modules/.bin/selenium-standalone install');
});
// Make user
gulp.task('user', function(done) {
    var astronaut = require('init.js');
    astronaut.init(function (err) {
        if (err) console.error(err);
        done();
    });
});
// Install wdio requirements
gulp.task('results', function(done) {
    var defaultIndex = require('../templates/default.js');
    defaultIndex.templatize(function (err) {
        if (err) console.error(err);
        done();
    });
});
// Start selenium, after running in console, open a new tab/window
gulp.task('selenium', function() {
    shell.exec('./node_modules/.bin/selenium-standalone start -Dwebdriver.chrome.driver=./node_modules/chromedriver/lib/chromedriver/chromedriver');
});
// This task runs all mocha tests gsfrom test/deploy/suite.js then prints output to Report.html
gulp.task('test', function() {
    return gulp.src('./test/wdio.*').pipe(webdriver());
});
// Create a node-static server instance to serve the './reports' folder
gulp.task('serve', function() {
    shell.exec('cd && php -S 127.0.0.1:7890');
});