(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		var Super = this;
		var jsonData = {};
		var items = {};
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
					render.cart.add($(this).data('id'));
				})

			},
			desc: function(data){ //Renders Description
				options.header.append('<img src=\"data/' + data.logo + '\"/>'); //Add image
				options.header.append('<h1>' + data.name + '</h1>'); //Add name
				options.header.append('<h3>' + data.description + '</h3>');//Add description
				
				$('head').append('<title>' + data.name + '</title>'); //Add name
			},
			cart: {

				list: function(){ //Returns array of items.
					return JSON.parse(localStorage.get('cart'));
				},

				add: function(id){ //Added id.
					var temp = JSON.parse(localStorage.getItem('cart'));
					if(!Array.isArray(temp)) temp = [];
					temp.push(id.toString());
					localStorage.setItem('cart', JSON.stringify(temp));
				},

				remove: function(id){ //Removes id.
					var temp = JSON.parse(localStorage['cart']);
					var index = temp.indexOf(id.toString());
					if(index > -1){
						temp = temp.splice(index, 1);
						localStorage.setItem('cart', JSON.stringify(temp));
					}
				},

				clear: function(){ //Clears shopping cart.
					localStorage.setItem('cart', []);
				}
			}
		}

		$.getJSON( 'data/items.json', function( data ) {
			$.each( data.items, function( key, value ) {
				items[value.id] = value //Reversing list to object
			});

			jsonData = data; //Saving data
			render.desc(data); //Rendering description
			render.items(data); //Rendering items
		})
		.fail(function(error){
			console.log(error)
		})
	};
	
}(jQuery));