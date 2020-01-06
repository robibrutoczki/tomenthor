/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/BTCUSD2.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var price = ["BTCUSD"];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
		price.push(data[i][2]);
	}

	console.log(years);
	console.log(price);

	var chart = c3.generate({
		bindto: '#Chart',
	    data: {
	        columns: [
	        	price
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);