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
	var price = ["BTCUSD High"];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
		price.push(data[i][3]);
	}

	console.log(years);
	console.log(price);

	var chart = c3.generate({
		bindto: '#mychart',
	    data: {
	        columns: [
	        	price
	        ]
		}, subchart: {
			show: true
		},
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 10
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