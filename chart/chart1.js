/*
 * Parse the data and create a graph with the data.
 */

// September HIGH/LOW 
function parseData(createGraph) {
	Papa.parse("data/b9.csv", {
		download: true,
		complete: function (results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var years = [];
	var price = ["BTCUSD"];
	var high = ['BTC High'];
	var low = ['Btc Low'];

	for (var i = 1; i < data.length; i++) {
		years.push(data[i][0]);
		high.push(data[i][3]);
		low.push(data[i][4]);
	}



	var chart = c3.generate({
		size: {
			height: 300,
			width:300
		},
		bindto: '.mychart9',

		data: {
			columns: [
				high, low
			], type: 'spline',

		}, grid: {
			x: {
				show: true
			},
			y: {
				show: true
			}
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
