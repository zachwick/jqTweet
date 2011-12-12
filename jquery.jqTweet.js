(function ($) {
    processTweets = function (jsonData) {
	var searchResults = json_to_object(jsonData);
	// Create the divs and show the tweets
	for (var i=0;i<searchResults.results.length;i++) {
	    $(callingDiv).append("<div class='tweet-wrapper'>"+searchResults.results[i].text+"</div><hr>");
	}
    };
    json_to_object = function (object_var) {
	if (typeof object_var == 'object') {
	    return object_var;
	}
	if (typeof object_var != 'string') {
	    return false;
	}
	return eval('(' + object_var + ')');
    };
    var callingDiv;
    var methods = {
	init : function(options) {
	    var options = $.extend({
		term:"jQuery"
	    }, options);
	    callingDiv = $(this);
	    var searchURL = "http://search.twitter.com/search.json?&q="+
		encodeURIComponent(options.term)+
		"&callback=processTweets&_"+new Date().getTime();
	    $(this).append("<script src='"+searchURL+"'></script>");
	},
	hide : function() {

	},
	show : function() {

	},
	refresh : function() {

	},
    };

    $.fn.jqTweet = function(method) {
	if (methods[method]) {
	    return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
	} else if (typeof method == 'object' || !method) {
	    return methods.init.apply(this,arguments);
	} else {
	    $.error("Method " + method + " does not exist on jQuery.jqTweet");
	}
    };
    
})(jQuery);