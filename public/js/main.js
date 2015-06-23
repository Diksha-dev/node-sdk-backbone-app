requirejs.config({
	baseUrl: '.',
	paths: {
		// APP PATHS
		//routing: 'js/routing',
		views: 'js/views',
		models: 'js/models',
		collections: 'js/collections',
		data: 'js/data',		
		
		// VENDOR PATHS (just to show you exactly what we have set up)
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore',
		jquery: '../bower_components/jquery/jquery',
		json2: '../bower_components/json2/json2',
		handlebars: '../bower_components/handlebars/handlebars',
		jquerycookie: '../bower_components/jquery.cookie/jquery.cookie',
		moment: '../bower_components/moment/moment',
		jqueryvalidate: '../bower_components/jquery.validate/dist/jquery.validate',
		text: '../bower_components/text/text',
		fuelux: '../bower_components/fuelux/dist/js/fuelux',
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
	},
	deps: [ 'js/app' ],
	shim: {
		'backbone': {
			deps: [ 'underscore', 'jquery', 'json2' ],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		}
	},
	stubModules: ['text']
});
