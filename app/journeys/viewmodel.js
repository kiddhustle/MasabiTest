define(
	['durandal/system', 'durandal/app', 'knockout', 'plugins/http', 'moment'],
	function(system, app, ko, http, moment){
		return function(obj){
			var self = this;
			self.order = null;
			self.originStation = ko.observable();
			self.destinationStation = ko.observable();
			self.startTime = ko.observable();
			self.arrivalTime = ko.observable();
			self.operator = ko.observable();
			self.duration = function(){
				var iDay = 86400000;
				var delta = moment.utc( self.arrivalTime(), 'hh:mm:ss' ) - moment.utc( self.startTime(), 'hh:mm:ss' );
				delta = delta >0 ? delta : iDay + delta;
				return moment.duration(
					delta
				);
			};
			self.duration_string = function(){
				return moment.utc( self.duration().as('milliseconds') ).format('hh:mm:ss');
			};
			self.init = function(){
				if(obj){
					self.order = obj.order;
					self.originStation(  obj.originStation );
					self.destinationStation( obj.destinationStation );
					self.startTime( obj.startTime );
					self.arrivalTime( obj.arrivalTime );
					self.operator( obj.operator );
				}
			};
			if(obj){
				self.init();
			}
			
		};
	}
);
