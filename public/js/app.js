// GEOLOCATION
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
   getForecast(position.coords.latitude, position.coords.longitude);
}


// Get forecast from service
function getForecast(lat, lng){
  getCityFromLatAndLng(lat, lng);
    $.ajax({
       type: 'GET',
       url: "/forecast/"+lat+"/"+lng,
       //url: "js/forecast_test.json",
       dataType: 'json',
       error: function() {
         alert("something went wrong.");
       },
       success: function(json) {
         renderDailyWeatherTemplate(json);
       }
    }); 
}



function getCityFromLatAndLng(lat, lng){
  if(!lat && !lng){
    console.log("[default location coordinates]");
    var endpont = "/getcityfromlatandlng/"+lat+"/"+lng;
  } else {
    console.log("[current location coordinates]");
    var endpont = "/getcityfromlatandlng/"+lat+"/"+lng;
  }
  $.ajax({
     type: 'GET',
     url: endpont,
     dataType: 'json',
     error: function() {
       alert("something went wrong.");
     },
     success: function(data) {
       $("#cityAndState").text(data.cityandstate);
     }
  });
}


function getLocationData(){
  var zip = $("#zipcode").val();
  if(zip.length != 5){
    alert("provide a proper zipcode");
  } else {
     $.ajax({
       type: 'GET',
       url: '/zipcodetolatandlng/'+zip,
       dataType: 'json',
       error: function() {
         alert("something went wrong.");
       },
       success: function(data) {
         $("#cityAndState").text(data.cityandstate);
         getForecast(data.lat, data.lng);
       }
    });

  }
}


// Handlebars Methods
function renderDailyWeatherTemplate(context){
  var theTemplateScript = Handlebars.templates['home.hbs'];
  $('#home-wrapper').html(theTemplateScript(context));
}



// Init
$(document).ready(function(){
  //$("#zipcode").focus();
  //getCityFromLatAndLng();
  getLocation();
  //getForecast(32.786330, -96.796253);
});


// Handlebars Helpers
Handlebars.registerHelper("makeToHumanDate", function (time){
    return moment.unix(time).format('dddd');
});


Handlebars.registerHelper("roundTemp", function(temp){
  return Math.floor(temp);
});


Handlebars.registerHelper("weatherIcon", function(icon){
  if(icon == "cloudy"){
    return new Handlebars.SafeString('<i class="wi wi-cloudy"></i>&nbsp;');
  }else if(icon == "rain"){
    return new Handlebars.SafeString('<i class="wi wi-rain" style="color:rgb(68, 143, 228);"></i>&nbsp;');
  }else if(icon == "clear-day"){
    return new Handlebars.SafeString('<i class="wi wi-day-sunny" style="color:rgb(255, 213, 0);"></i>&nbsp;');
  }else if(icon == "partly-cloudy-day"){
    return new Handlebars.SafeString('<i class="wi wi-day-cloudy" style="color:rgb(138, 175, 186);"></i>&nbsp;');
  }else if(icon == "thunderstorm"){
    return new Handlebars.SafeString('<i class="wi wi-thunderstorm"></i>&nbsp;');
  } else {
    return new Handlebars.SafeString('');
  }
});


Handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

