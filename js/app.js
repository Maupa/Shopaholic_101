(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		var Super = this;
		var jsonData = {};
		var models = {
			item: function(item) {
				return '<div class="col-3">' + 
						'<div class="item">' + 
							'<div class="col-12">' + 
								'<img src="http://placehold.it/150x150" style="width:100%;">' + 
							'</div>' + 
							'<p class="name">' + item.name + '<a class="button" data-id="' + item.id + '" href="#">+</a></p>' + 
						'</div>' + 
					'</div>';
			}
		}

		var render = {
			items: function(data){ //Renders Items
				$.each( data.items, function( key, value ) {
					$(Super).append(models.item(value));
				});
			},
			desc: function(){ //Renders Description
				options.header.append('<img src=\"data/' + jsonData.logo + '\"/>'); //Add image
				options.header.append('<h1>' + jsonData.name + '</h1>'); //Add name
				options.header.append('<h3>' + jsonData.description + '</h3>');//Add description
				
				$('head').append('<title>' + jsonData.name + '</title>'); //Add name
			},
			cart: function(){

			}
		}

		$.getJSON( 'data/items.json', function( data ) {
			jsonData = data; //Saving data
			render.desc(); //Rendering description
			render.items(data); //Rendering items
		});


	};
	
}(jQuery));