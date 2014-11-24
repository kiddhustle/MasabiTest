requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal':'../bower_components/durandal/js',
        'plugins' : '../bower_components/durandal/js/plugins',
        'transitions' : '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout',
        'knockout.footable': '../lib/knockout/knockout.binding.footable',
        'jquery': '../bower_components/jquery/jquery',
        'moment':'../bower_components/moment/moment',
        'footable':'../bower_components/footable/dist/footable.all.min',
        //'jasmine':'../bower_components/jasmine/lib',
        //'bootstrap':'../bower_components/dist/js/bootstrap',
    },
    shim:{
        'footable':{
            'deps':['jquery'],
            'exports':'jQuery'
        },
        'knockout.footable':{
            'deps':['knockout'],
            'exports':'ko'
        }
    }
});
     
define(['durandal/system', 'durandal/app' ],function (system, app) {
     
    system.debug(true);
     
    app.title = 'Masabi Journey Schedule';
     
    app.configurePlugins({
        router:true,
        dialog: true,
        observable:true
    });
     
    app.start().then(function() {
        app.setRoot('shell');
    });
});