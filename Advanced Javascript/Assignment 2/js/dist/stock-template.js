(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Stock Viewer</h1>\r\n<div class=\"details\">Symbol: "
    + alias4(((helper = (helper = lookupProperty(helpers,"symbol") || (depth0 != null ? lookupProperty(depth0,"symbol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbol","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":39}}}) : helper)))
    + "</div>\r\n<div class=\"details\">Date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":35}}}) : helper)))
    + "</div>\r\n<h2>Last Five Days Closing Prices</h2>\r\n<ul>\r\n    <li>Close: "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"closeOne") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":6,"column":15},"end":{"line":6,"column":36}}}))
    + "</li>\r\n    <li>Close: "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"closeTwo") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":7,"column":15},"end":{"line":7,"column":36}}}))
    + "</li>\r\n    <li>Close: "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"closeThree") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":8,"column":15},"end":{"line":8,"column":38}}}))
    + "</li>\r\n    <li>Close: "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"closeFour") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":9,"column":15},"end":{"line":9,"column":37}}}))
    + "</li>\r\n    <li>Close: "
    + alias4((lookupProperty(helpers,"currency")||(depth0 && lookupProperty(depth0,"currency"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"closeFive") : depth0),{"name":"currency","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":37}}}))
    + "</li>\r\n    \r\n</ul>\r\n\r\n\r\n";
},"useData":true});
})();