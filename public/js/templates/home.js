(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"col-md-4 day-reco\">\n	 <h3 class=\"forecast\">"
    + alias3((helpers.weatherIcon || (depth0 && depth0.weatherIcon) || alias2).call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"weatherIcon","hash":{},"data":data}))
    + " "
    + alias3((helpers.makeToHumanDate || (depth0 && depth0.makeToHumanDate) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"makeToHumanDate","hash":{},"data":data}))
    + "</h3>\n	 <h4 class=\"temp\">High "
    + alias3((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias2).call(alias1,(depth0 != null ? depth0.temperatureMax : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + "&deg; - Low "
    + alias3((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias2).call(alias1,(depth0 != null ? depth0.temperatureMin : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + "&deg;</h4>\n	 <!--<p>"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"summary","hash":{},"data":data}) : helper)))
    + " Wind speed of "
    + alias3((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias2).call(alias1,(depth0 != null ? depth0.windSpeed : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + ".</p>-->\n\n	 <p>\n	 	<img src=\"images/models/rainy_w_01.jpg\">\n	 </p>\n\n	 <p><a class=\"btn btn-primary\" href=\"/umbrellas/1\">View Umbrellas</a></p>\n	 <p><a class=\"btn btn-primary\" href=\"/jeans/1\">View Jeans</a></p>\n	 <p><a class=\"btn btn-primary\" href=\"/shoes/1\">View shoes</a></p>\n\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.each_upto || (depth0 && depth0.each_upto) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.data : stack1),3,{"name":"each_upto","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();