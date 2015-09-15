var request = require('request'),
	shopsenseAPI = "http://api.shopstyle.com/api/v2/products?pid=uid9444-29863038-30&limit=20&sort=popular";
var geocoder = require('../geocoder.js');
// Home
exports.home = function(req, res) {res.render('home');}

// Forecast.io
exports.forecast = function(req, res){
	request({
		url:"https://api.forecast.io/forecast/b48965221d0bafb7d6ce73306458cf95/"+req.params.lat+','+req.params.lng+'?exclude=minutely,hourly,flags',
		json: true
	}, function (error, response, body){
		res.json(body);
	});
}


// Womans Umbrellas
exports.umbrellas = function(req, res){
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&offset=0&fts=womens+umbrellas&fl=p20:24",
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: 0,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}
exports.umbrellasWithPaging = function(req, res){
	var pagingOffset = req.params.page * 20;
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&fl=p20:24&fts=womens+umbrellas&offset="+pagingOffset,
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: req.params.page,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}


// Womans Shoes
exports.shoes = function(req, res){
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&offset=0&fts=rain+shoes+for+women&fl=p20:27",
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: 0,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}
exports.shoesWithPaging = function(req, res){
	var pagingOffset = req.params.page * 20;
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&fl=p20:27&fts=rain+shoes+for+women&offset="+pagingOffset,
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: req.params.page,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}

// Womans Jeans
exports.jeans = function(req, res){
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&offset=0&fts=womens+jeans&fl=p20:24",
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: 0,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}
exports.jeansWithPaging = function(req, res){
	var pagingOffset = req.params.page * 20;
	var pathName = req.path.split('/');
	request({
		url:shopsenseAPI+"&fl=p20:24&fts=womens+jeans&offset="+pagingOffset,
		json: true
	}, function (error, response, body){
		var numberOfPages = (body.metadata.total / 20);
		res.render('shopsense', {products: body.products, pagination: {
		  page: req.params.page,
		  pageCount: Math.floor(numberOfPages),
		  path: pathName[1]}
		});
	});
}

exports.getcityfromlatandlng = function(req, res){
	geocoder.reverse(req.params.lat, req.params.lng, function(err, data) {
		var cityData = data.results[2].address_components[1].long_name;
		var stateData = data.results[2].address_components[2].short_name;
		res.json({cityandstate: cityData+', '+stateData});
	});
}