define( ['plugins/router'], function(router){
	return {
		router:router,
		activate:function(){
			router.map([
				{route:'', title:'Home', moduleId:'journeys/index',nav:true, icon:'bower_components/foundation-icon-fonts/svgs/fi-home.svg' },
				{route:'journeys', title:'Journeys', moduleId:'journeys/index',nav:true, icon:'bower_components/foundation-icon-fonts/svgs/fi-ticket.svg' },
				{route:'journey/:id', title:'Journey Detail', moduleId:'journeys/detail',nav:false, icon:'bower_components/foundation-icon-fonts/svgs/fi-home.svg' }
			]).buildNavigationModel();
			return router.activate();
		}
	};
} );
