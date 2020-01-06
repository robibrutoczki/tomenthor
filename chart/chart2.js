/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("data/BTCUSD2.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
    var price = ["BTCUSD"];
    var open=['BTC Open'];
    var close=['Btc Close'];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
        open.push(data[i][2]); 
        close.push(data[i][5]);
	}

	
    
	var chart = c3.generate({
		bindto: '#mychart2', size: {
			height: 300,
			width: 350
		},
        
		data: { 
	        columns: [
	        	open,close
            ], type: 'spline', 
           
        }, 
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 5
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'top'
	    }
	});
}

parseData(createGraph);
