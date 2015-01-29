(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		var Super = this;
		var models = {
			item: function(item) {
				return '<div class="col-3">' + 
						'<div class="item">' + 
							'<div class="col-12">' + 
								'<img src="http://placehold.it/150x150" style="width:100%;">' + 
							'</div>' + 
							'<p class="name">' + item.name + '<a class="button" data-id="' + item.id + '" href="#">Add to cart</a></p>' + 
						'</div>' + 
					'</div>';
			}
		}
		$.getJSON( 'data/items.json', function( data ) {
			$.each( data.items, function( key, value ) {
				$(Super).append(models.item(value));
			});
		});
	};
	
}(jQuery));