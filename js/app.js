(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		var models = {
			item: function(item) {
				return '<div class="col-4">' +
						'<div class="item">' +
							'<img src="http://placehold.it/150x150">' +
							'<p>' + item.name + '</p>' +
						'</div>' +
					'</div>';
			}
		}
		$.getJSON( 'data/items.json', function( data ) {
			$.each( data.items, function( key, value ) {
				this.append(models.item(value));
			});
		});
	};
	
}(jQuery));