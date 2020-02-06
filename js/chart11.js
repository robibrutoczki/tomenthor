/*
 * Parse the data and create a graph with the data.
 */
$(document).ready(function () {
    $('#load_data3').click(function () {

        function parseData(createGraph) {
            Papa.parse("data/b11.csv", {
                download: true,
                complete: function (results) {
                    createGraph(results.data);
                }
            });
        }

        function createGraph(data) {
            let years = ["date"];
            high = ["High"];
            low = ["Low"];
            open = ["Open"];
            close = ["Close"];

            for (var i = 1; i < data.length; i++) {
                years.push(data[i][0]);
                high.push(data[i][3]);
                low.push(data[i][4]);
                open.push(data[i][2]);
                close.push(data[i][5]);
            }


            var chart = c3.generate({


                bindto: '#chart1', padding: {
                    left: 40,
                    right: 30
                },
                point: {
                    show: false
                },

                data: {
                    columns: [
                        high, low
                    ],
                    type: 'area-spline'

                }, color: {
                    pattern: ['#ed2913', '#1375ed']
                }, grid: {
                    x: {
                        show: true
                    },
                    y: {
                        show: true
                    }
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


            var chart = c3.generate({
                bindto: '#chart2',

                data: {
                    columns: [
                        open, close
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

            var chart = c3.generate({
                bindto: '#chart3', padding: {
                    left: 40,
                    right: 30
                },
                point: {
                    show: false
                },

                data: {
                    columns: [
                        low
                    ], type: 'area-spline',
                },
                axis: {
                    x: {

                        categories: years,
                        tick: {
                            multiline: false,
                            culling: {
                                max: 7
                            }
                        }
                    }
                }, subchart: {
                    show: true
                },
                zoom: {
                    enabled: true
                },
                legend: {
                    position: 'top'
                }
            });

            var chart = c3.generate({
                bindto: '#chart4',

                data: {
                    columns: [
                        high
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
                                max: 7
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

            var chart = c3.generate({
                bindto: '#chart5',

                data: {
                    columns: [
                        open
                    ], type: 'bar'
                }, bar: {
                    width: {
                        ratio: 0.8 // this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                },
                axis: {
                    x: {

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
                    position: 'top'
                }
            });

            var chart = c3.generate({
                bindto: '#chart6',

                data: {
                    columns: [
                        close
                    ], type: 'bar'
                }, bar: {
                    width: {
                        ratio: 0.8// this makes bar width 50% of length between ticks
                    }
                    // or
                    //width: 100 // this makes bar width 100px
                }, subchart: {
                    type: 'line',
                    show: true
                },
                axis: {
                    x: {

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
                    position: 'top'
                }
            });
        }



        parseData(createGraph);
    });
});
