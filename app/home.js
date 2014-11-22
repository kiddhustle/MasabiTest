define( 
	['durandal/system', 'knockout', 'plugins/http'], 
	function( system, ko, http ){
		var url = 'data/journeys.json';
		
		return function(){
			var self = this;
			self.journeys = ko.observableArray();
			self.sortBy = function(type){
				return function(a, b){
					
				};
			};
			self.activate = function(){
				
				// cancel http request if journeys already populated 
				if( self.journeys().length > 0 ){
					return;
				}
				
				system.log('ACTIVATED');
				return http.get( url ).then( function(response){
					system.log('PARSE');
					system.log(response);
					//response = JSON.parse( response );
					self.journeys( response );
				} );
			};
		};
	}
);
