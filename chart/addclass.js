$(document).ready(function () {

    $('#dropdown').change(function () {
        var getText = $('#dropdown option:selected').html();
        $("#chart").removeClass();
        $("#chart").toggleClass("my" + getText);
    });
});