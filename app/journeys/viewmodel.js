define(
	['durandal/system', 'durandal/app', 'knockout', 'plugins/http', 'moment', 'accounting'],
	function(system, app, ko, http, moment, accounting){
		return function(obj){
			var self = this;
			self.order = null;
			self.originStation = ko.observable();
			self.destinationStation = ko.observable();
			self.startTime = ko.observable();
			self.arrivalTime = ko.observable();
			self.operator = ko.observable();
			self.ticketPrices = ko.observableArray();
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
			self.fmtCurrency = function(val){
				return accounting.formatMoney( val, '£' );
			};
			
			self.getTicketUrl = function(oTicket){
				system.debug('getTicketUrl');
				return '#checkout/' + self.order +'?shortName=' + oTicket.shortName + '&price=' + accounting.formatMoney(oTicket.price,'');
			};
			self.init = function(){
				if(obj){
					self.order = obj.order;
					self.originStation(  obj.originStation );
					self.destinationStation( obj.destinationStation );
					self.startTime( obj.startTime );
					self.arrivalTime( obj.arrivalTime );
					self.operator( obj.operator );
					self.ticketPrices( obj.ticketPrices );
				}
			};
			if(obj){
				self.init();
			}
			
		};
	}
);
