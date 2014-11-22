define( ['plugins/router'], function(router){
	return {
		router:router,
		activate:function(){
			router.map([
				{route:'', title:'Home', moduleId:'home',nav:true, icon:'bower_components/foundation-icon-fonts/svgs/fi-home.svg' }
			]).buildNavigationModel();
			return router.activate();
		}
	};
} );
