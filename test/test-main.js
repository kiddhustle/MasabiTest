var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: 'base/',
	paths: {
        'text': 'bower_components/requirejs-text/text',
        'durandal':'bower_components/durandal/js',
        'plugins' : 'bower_components/durandal/js/plugins',
        'transitions' : 'bower_components/durandal/js/transitions',
        'knockout': 'bower_components/knockout.js/knockout',
        'jquery': 'bower_components/jquery/jquery',
        'moment':'bower_components/moment/moment',
        //'bootstrap':'../bower_components/dist/js/bootstrap',
   },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
