// ETHUSD

function ticker() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/ethusd/",
        type: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $('#selleth').html(data.bid);
            $('#buyeth').html(data.ask);
            $('.ethusd').html(data.bid);
            $('#volumeeth').html(parseFloat(data.volume).toFixed(2));
            // to make it two decimals used parseFloat

       
            ticker();
        }

    })

};
ticker(); 

// XRPUSD

function ticker2() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/xrpusd/",
        type: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $('.xrpusd').html(data.ask);
           
            ticker2();
        }

    })

};
ticker2();

// LTCUSD

function ticker3() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/ltcusd/",
        type: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $('.ltcusd').html(data.ask);

            ticker3();
        }

    })

};
ticker3(); 

// BCHUSD

function ticker4() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/bchusd/",
        type: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $('.bchusd').html(data.ask);

            ticker4();
        }

    })

};
ticker4(); 

// BTCUSD

function ticker5() {
    $.ajax({
        url: "https://www.bitstamp.net/api/ticker",
        type: 'get',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            $('.btcusd').html(data.bid);
            $('#buy').html(data.ask);
            $('#volume').html(parseFloat(data.volume).toFixed(2));
            // to make it two decimals used parseFloat

         ticker5();
        }

    })

};
ticker5(); 

// BTCEUR

function ticker6() {
$.ajax({
    url: "https://www.bitstamp.net/api/v2/ticker/btceur/",
    type: 'get',
    dataType: 'json',
    success: function (data, textStatus, jqXHR) {
        console.log(data);
        $('#selleuro').html(data.bid);
        $('#buyeuro').html(data.ask);
        $('#volumeeuro').html(parseFloat(data.volume).toFixed(2));
        // to make it two decimals used parseFloat

     
        ticker6();
    }

})

};
ticker6(); 