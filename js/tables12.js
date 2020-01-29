$(document).ready(function () {
    $('#load_data12').click(function () {
        $.ajax({
            url: "data/bit12.csv",
            dataType: "text",
            success: function (data) {
                var btc_data = data.split(/\r?\n|\r/);
                var table_data = '<table class="table table-bordered table-striped bg-dark text-light">';
                for (var count = 0; count < btc_data.length; count++) {
                    var cell_data = btc_data[count].split(",");
                    table_data += '<tr>';
                    for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
                        if (count === 0) {
                            table_data += '<th>' + cell_data[cell_count] + '</th>';
                        }
                        else {
                            table_data += '<td>' + cell_data[cell_count] + '</td>';
                        }
                    }
                    table_data += '</tr>';
                }
                table_data += '</table>';
                $('#data').html(table_data);
            }
        });
    });

});
