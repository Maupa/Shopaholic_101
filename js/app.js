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
				$('a.button').click(function(){ //Adds click handler
					console.log(this);
				})

			},
			desc: function(data){ //Renders Description
				options.header.append('<img src=\"data/' + data.logo + '\"/>'); //Add image
				options.header.append('<h1>' + data.name + '</h1>'); //Add name
				options.header.append('<h3>' + data.description + '</h3>');//Add description
				
				$('head').append('<title>' + data.name + '</title>'); //Add name
			},
			cart: function(){

			}
		}

		$.getJSON( 'data/items.json', function( data ) {
			jsonData = data; //Saving data
			render.desc(data); //Rendering description
			render.items(data); //Rendering items
		});
	};
	
}(jQuery));