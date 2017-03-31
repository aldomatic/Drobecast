var express = require('express'), 
	underscore = require('underscore'),
	exphbs  = require('express-handlebars'),
	geocoder = require('./geocoder.js'), 	
	request = require('request'),	
	path = require('path'),
	routes = require('./routes/routes');

var paginate = require('handlebars-paginate');
var hbs = exphbs.create({
	defaultLayout: 'main', 
	extname: '.hbs',
    helpers: {
        everyNth : function(context, every, options) {
		  var fn = options.fn, inverse = options.inverse;
		  var ret = "";
		  if(context && context.length > 0) {
		    for(var i=0, j=context.length; i<j; i++) {
		      var modZero = i % every === 0;
		      ret = ret + fn(underscore.extend({}, context[i], {
		        isModZero: modZero,
		        isModZeroNotFirst: modZero && i > 0,
		        isLast: i === context.length - 1
		      }));
		    }
		  } else {
		    ret = inverse(this);
		  }
		  return ret;
		},
		paginate: paginate
    }
});

// Express 
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express.static(__dirname + '/public'));
//app.use(app.router);

// Routes
app.get('/', routes.home);
app.get('/getcityfromlatandlng/:lat/:lng', routes.getcityfromlatandlng);
app.get('/umbrellas/:page', routes.umbrellasWithPaging);
app.get('/umbrellas', routes.umbrellas);
app.get('/shoes', routes.shoes);
app.get('/shoes/:page', routes.shoesWithPaging);
app.get('/jeans', routes.jeans);
app.get('/jeans/:page', routes.jeansWithPaging);
app.get('/forecast/:lat/:lng', routes.forecast);


// Google API 
/*app.get('/getcityfromlatandlng/:lat/:lng', function(req, res){
	geocoder.reverse(req.params.lat, req.params.lng, function(err, data) {
		var cityData = data.results[2].address_components[1].long_name;
		var stateData = data.results[2].address_components[2].short_name;
		res.json({cityandstate: cityData+', '+stateData});
	});
});*/

app.get('/zipcodetolatandlng/:zipcode', function(req, res){
	var zipcodeToSearch = req.params.zipcode;
	geocoder.zipcodetolatandlng(zipcodeToSearch, function(err, data){
		res.json({
			lat: data.results[0].geometry.location.lat, 
			lng: data.results[0].geometry.location.lng,
			cityandstate: data.results[0].address_components[1].short_name +", "+data.results[0].address_components[3].short_name
		});
	});
});

app.listen(5555);
console.log("Server started at port 5555");
