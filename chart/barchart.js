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
    var price = ["..data/BTCUSD2"];
    var open=['BTC volume'];
    var close=['USD volume'];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
        open.push(data[i][6]); 
        close.push(data[i][7]);
	}

	console.log(years);
	console.log(open);
    console.log(close);
    
	var chart = c3.generate({
        bindto: '#mychart3',
        
		data: { 
	        columns: [
	        	open,close
            ], type: 'bar', bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
           
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
	        position: 'top'
	    }
	});
}

parseData(createGraph);
