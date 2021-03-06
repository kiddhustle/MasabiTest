define( 
	['durandal/system', 'knockout', 'plugins/http','footable', 'knockout.footable'], 
	function( system, ko, http, $ ){
		var api_url = '/data/journeysPrices.json';
		
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
				return http.get( api_url ).then( function(response){
					system.log('PARSE');
					system.log(response);
					//response = JSON.parse( response );
					self.journeys( response );
				} );
			};
			
			self.bindingComplete = function(view){
				system.log('Binding complete');
				$('#tbl_journey_detail').footable();
			};
		};
	}
);
