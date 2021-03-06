define(
	['app/journeys/viewmodel','moment'],function(JourneyVM, moment){
		var obj = new JourneyVM(
			{
				"order":0,
				"originStation":"Brighton",
				"destinationStation":"London Victoria",
				"operator":"Southern Trains",
				"startTime":"23:50:00",
				"arrivalTime":"01:00:00",
				"ticketPrices":[
					{
						"shortName":"Standard",
						"price":8.50
					},
					{
						"shortName":"First Class",
						"price":11.30
					}
				]
			}
		);
		
		test('Testing JourneyVM', function(assert){
			assert.equal(obj.duration(), 4200000, 'duration should equal 4200000 seconds');
			assert.equal(obj.duration_string(), '01:10:00', 'duration should equal 01:10:00 seconds');
			assert.equal(obj.getTicketUrl( obj.ticketPrices()[0] ), '#checkout/0?shortName=Standard&price=8.50', 'duration should equal 01:10:00 seconds');
		});
	}
);
