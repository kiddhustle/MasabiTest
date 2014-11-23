define(
	['durandal/system', 'durandal/app', 'knockout', 'plugins/http'],
	function(system, app, knockout, http, moment){
		return function(obj){
			var self = this;
			self.order = null;
			self.originStation = '';
			self.destinationStation = '';
			self.startTime = '';
			self.arrivalTime = '';
			self.operator = '';
			self.duration = function(){
				moment.parse( self.arrivalTime, 'hh:mm:ss' );
			};
			self.init = function(){
				if(obj){
					self.order = obj.order;
					self.originStation = obj.originStation;
					self.destinationStation = obj.destinationStation;
					self.startTime = obj.startTime;
					self.arrivalTime = obj.arrivalTime;
					self.operator = obj.operator;
				}
			};
			self.init();
		};
	}
);
