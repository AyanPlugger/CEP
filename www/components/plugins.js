// This is a JavaScript file

$(document).on("click","#alert",function(){
    navigator.notification.alert("app para mostrar o mapa", null, "alert", "sim");
});


    function showMap(lat, long){
        L.mapquest.key = 'ISLy0mUUlvb6hfSYq0XToeDbL70uJ2Cf';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
    }

$(document).on("click","#geo",function(){
     var onSuccess = function(position) {
       showMap(position.coords.latitude, position.coords.longitude)
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

