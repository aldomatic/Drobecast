(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['daily.hbs'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\"va-slice va-slice-color-"
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\r\n	    <h3 class=\"va-title\">"
    + alias3((helpers.weatherIcon || (depth0 && depth0.weatherIcon) || alias1).call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"weatherIcon","hash":{},"data":data}))
    + " "
    + alias3((helpers.makeToHumanDate || (depth0 && depth0.makeToHumanDate) || alias1).call(depth0,(depth0 != null ? depth0.time : depth0),{"name":"makeToHumanDate","hash":{},"data":data}))
    + " - <span class=\"temp\">"
    + alias3((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias1).call(depth0,(depth0 != null ? depth0.temperatureMax : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + "&deg;</span></h3>\r\n	    <div class=\"va-content\">\r\n	    	<h4>"
    + alias3(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"summary","hash":{},"data":data}) : helper)))
    + " Wind speed of "
    + alias3((helpers.roundTemp || (depth0 && depth0.roundTemp) || alias1).call(depth0,(depth0 != null ? depth0.windSpeed : depth0),{"name":"roundTemp","hash":{},"data":data}))
    + ".</h4>\r\n	    	\r\n	    	<div class=\"row va-ideas\">\r\n		    	<div class=\"col-md-3\">\r\n		    		<h3>Umbrella</h3>\r\n		    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>\r\n		    		<a class=\"btn btn-primary\" href=\"/umbrellas\">View Umbrellas</a>\r\n		    	</div>\r\n		    	<div class=\"col-md-3\">\r\n		    		<h3>Shoes</h3>\r\n		    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n		    		<a class=\"btn btn-primary\" href=\"/shoes\">View Shoes</a>\r\n		    	</div>\r\n		    	<div class=\"col-md-3\">\r\n		    		<h3>Jeans</h3>\r\n		    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>\r\n		    		<a class=\"btn btn-primary\" href=\"/jeans\">View Jeans</a>\r\n		    	</div>\r\n		    	<div class=\"col-md-3\">\r\n		    		<h3>Bottoms</h3>\r\n		    		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.. </p>\r\n		    		<a class=\"btn btn-primary\" href=\"/umbrellas\">View Bottoms</a>\r\n		    	</div>\r\n		    </div>\r\n\r\n	    </div>\r\n	</div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.daily : depth0)) != null ? stack1.data : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();