(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		$.getJSON( 'data/items.json', function( data ) {
			$.each( data.items, function( key, value ) {
				console.log(value)
			});
		});
	};
	
}(jQuery));