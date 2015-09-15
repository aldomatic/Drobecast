(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"col-md-4 day-reco\">\r\n	 <h3 class=\"forecast\">"
    + alias2((helpers.weatherIcon || (depth0 && depth0.weatherIcon) || alias1).call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"weatherIcon","hash":{},"data":data}))
    + " "
    + alias2((helpers.makeToHumanDate || (depth0 && depth0.makeToHumanDate) || alias1).call(depth0,(depth0 != null ? depth0.time : depth0),{"name":"makeToHumanDate","hash":{},"data":data}))
    + "</h3>\r\n	 <h4 class=\"temp\">High "
    + alias2((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias1).call(depth0,(depth0 != null ? depth0.temperatureMax : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + "&deg; - Low "
    + alias2((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias1).call(depth0,(depth0 != null ? depth0.temperatureMin : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + "&deg;</h4>\r\n	 <!--<p>"
    + alias2(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + " Wind speed of "
    + alias2((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias1).call(depth0,(depth0 != null ? depth0.windSpeed : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + ".</p>-->\r\n\r\n	 <p>\r\n	 	<img src=\"images/models/rainy_w_01.jpg\">\r\n	 </p>\r\n\r\n	 <p><a class=\"btn btn-primary\" href=\"/umbrellas\">View Umbrellas</a></p>\r\n	 <p><a class=\"btn btn-primary\" href=\"/jeans\">View Jeans</a></p>\r\n	 <p><a class=\"btn btn-primary\" href=\"/shoes\">View shoes</a></p>\r\n\r\n</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.each_upto || (depth0 && depth0.each_upto) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.data : stack1),3,{"name":"each_upto","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();