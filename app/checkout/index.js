define( 
	['durandal/system', 'knockout', 'plugins/http','footable', 'knockout.footable'], 
	function( system, ko, http, $ ){
		var api_url = '/data/journeys.json';
		
		return function(){
			var self = this;
			self.ticket = {};
			self.journey = ko.observable();
			self.sortBy = function(type){
				return function(a, b){
					
				};
			};
			self.activate = function(journey_id, oParams){
				
				var oItem = response.filter( function(val, index, arr){
					return parseInt( val.order ) === parseInt( journey_id ) ? true : false;
				} )[0];
			};
			
			self.bindingComplete = function(view){
				system.log('Binding complete');
				$('#tbl_journey_detail').footable();
			};
		};
	}
);
