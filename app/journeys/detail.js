define( 
	['durandal/system', 'knockout', 'plugins/http', 'plugins/observable', 'footable', 'journeys/viewmodel', 'foundation'], 
	function( system, ko, http, observable, $, JourneyVM ){
		var api_url = '/data/journeysPrices.json';
		
		return function(){
			var self = this;
			self.journey = null;
			self.sortBy = function(type){
				return function(a, b){
					
				};
			};
			self.activate = function( journey_id ){
				
				// cancel http request if journeys already populated 
				if( self.journey != null ){
					return;
				}
				
				system.log('ACTIVATED');
				return http.get( api_url ).then( function(response){
					system.log('PARSE');
					system.log(response);
					//response = JSON.parse( response );
					var oItem = response.filter( function(val, index, arr){
						return parseInt( val.order ) === parseInt( journey_id ) ? true : false;
					} )[0];
					system.log('oItem');
					system.log(oItem);
					self.journey = new JourneyVM( oItem );
					//system.log($);
					//system.log('self.journey');
					//system.log(self.journey);
				} );
			};
			
			self.bindingComplete = function(view){
				system.log('Binding complete');
				$('#tbl_journey_detail').footable();
				
			};
			self.compositionComplete = function(view, parent){
				system.log('Composition complete');
				$(document).foundation();
			};
		};
	}
);