var request = require('request');
var apiKey = 'AIzaSyAnltInxnuZ3RLaNCogvR2mjlC3YT1_rY4';
var geocoder = {};

// Used to handle the response for all the API calls
function createResponseHandler(callback) {
  return function (err, res, body) {
    if (err) {
      return callback(err, null);
    }
    if (res.statusCode >= 300) {
      return callback(body, null);
    }
    // Since JSON parse can fail
    var jsonData;
    try {
      jsonData = JSON.parse(body);
    } catch (error) {
      return callback(error, null);
    }

    return callback(null, jsonData);
  };
}

geocoder.reverse = function(lat, lng, callback){
	request('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key='+apiKey, createResponseHandler(callback));
}
geocoder.zipcodetolatandlng = function(zipcode, callback){
  request('https://maps.googleapis.com/maps/api/geocode/json?address='+zipcode+'&key='+apiKey, createResponseHandler(callback));
}

module.exports = geocoder;