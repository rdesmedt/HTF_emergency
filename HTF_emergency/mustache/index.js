var sys = require('sys');
var mustache = require('mustache');

var view = {
	  title: "Joe",
	  calc: function() {
	    return 2 + 4;
	  }
	};

var template = "{{title}} spends {{calc}}";
	
exports.test = function(req, res)
{
	var html = mustache.to_html(template, view);

	res.send(html);
}