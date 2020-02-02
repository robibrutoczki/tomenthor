// ETHUSD
setInterval("ticker()", 30000);
function ticker() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/ethusd/",
        type: 'post',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            
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
setInterval("ticker2()", 30000);
function ticker2() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/xrpusd/",
        type: 'post',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
          
            $('.xrpusd').html(data.ask);
           
            ticker2();
        }

    })

};
ticker2();

// LTCUSD
setInterval("ticker3()", 30000);
function ticker3() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/ltcusd/",
        type: 'post',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
          
            $('.ltcusd').html(data.ask);

            ticker3();
        }

    })

};
ticker3(); 

// BCHUSD
setInterval("ticker4()", 30000);
function ticker4() {
    $.ajax({
        url: "https://www.bitstamp.net/api/v2/ticker/bchusd/",
        type: 'post',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            
            $('.bchusd').html(data.ask);

            ticker4();
        }

    })

};
ticker4(); 

// BTCUSD
setInterval("ticker5()", 30000);
function ticker5() {
    $.ajax({
        url: "https://www.bitstamp.net/api/ticker",
        type: 'post',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
         
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
setTimeout("ticker6()", 30000);
function ticker6() {
$.ajax({
    url: "https://www.bitstamp.net/api/v2/ticker/btceur/",
    type: 'post',
    dataType: 'json',
    success: function (data, textStatus, jqXHR) {
       
        $('#selleuro').html(data.bid);
        $('#buyeuro').html(data.ask);
        $('#volumeeuro').html(parseFloat(data.volume).toFixed(2));
        // to make it two decimals used parseFloat

     
        ticker6();
    }

})

};
ticker6(); 