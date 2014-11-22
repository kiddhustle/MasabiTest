requirejs.config({
    shim:{
        'bootstrap':{
            'deps':['jquery'],
            'exports':'jQuery'
        },
        //'knockout':{
        //    'deps':['knockout'],
        //    'exports':'ko'
        //}
    },
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal':'../bower_components/durandal/js',
        'plugins' : '../bower_components/durandal/js/plugins',
        'transitions' : '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout',
        'jquery': '../bower_components/jquery/jquery',
        'bootstrap':'../bower_components/dist/js/bootstrap',
    }
});
     
define(function (require) {
    var system = require('durandal/system'),
    app = require('durandal/app');
     
    system.debug(true);
     
    app.title = 'Masabi Journey Schedule';
     
    app.configurePlugins({
        router:true,
        dialog: true
    });
     
    app.start().then(function() {
        app.setRoot('shell');
    });
});