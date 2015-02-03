(function($) {

	$.fn.shopaholic = function(params) {
		var options = $.extend({
			data: '/data/items.json' //This line adding another parameter to the options... ```expands``` it
		}, params);
		var Super = this;
		var jsonData = {};
		var shelf = {};
		var models = {
			item: function(item) {
				var text = db.in(item.id) ? '‒' : '+';
				var colour = db.in(item.id) ? 'red' : '';

				return '<div class="col-3">' + 
						'<div class="item">' + 
							'<div class="col-12">' + 
								'<img src="http://placehold.it/150x150" style="width:100%;">' + 
							'</div>' + 
							'<p class="name">' + item.name + '<a class="button ' + colour + '" data-id="' + item.id + '" href="#">' + text + '</a></p>' + 
						'</div>' + 
					'</div>';
			}
		};

		var db = {

			list: function(){ //Returns array of items.
				return JSON.parse(localStorage.getItem('cart')) || [];
			},

			in: function(id){
				var temp = JSON.parse(localStorage.getItem('cart')) || [];
				var index = temp.indexOf(id.toString());
				if(index !== -1){
					return true;
				}
				return false;
			},

			add: function(id){ //Added id.
				var temp = JSON.parse(localStorage.getItem('cart')) || [];
				// if(!Array.isArray(temp)) temp = []; //SAVE FOR LATER
				var index = temp.indexOf(id.toString());
				if(index === -1){
					temp.push(id.toString());
					localStorage.setItem('cart', JSON.stringify(temp));
				}

			},

			remove: function(id){ //Removes id.
				var temp = JSON.parse(localStorage['cart']);
				var index = temp.indexOf(id.toString());
				if(index !== -1){
					temp.splice(index, 1);
					localStorage.setItem('cart', JSON.stringify(temp));
				}
			},

			clear: function(){ //Clears shopping cart.
				localStorage.setItem('cart', []);
			}
		};

		var render = {
			items: function(data){ //Renders Items
				$.each( data.items, function( key, value ) {
					$(Super).append(models.item(value)).show('slow');
				});
				$('a.button').click(function(){ //Adds click handler
					var id = $(this).data('id');
					if(id){
						render.button(this, id);
					}
				})

			},
			desc: function(data){ //Renders Description
				options.header.append('<img src=\"data/' + data.logo + '\"/>'); //Add image
				options.header.append('<h1>' + data.name + '</h1>'); //Add name
				options.header.append('<h3>' + data.description + '</h3>');//Add description
				
				$('head').append('<title>' + data.name + '</title>'); //Add title
			},
			button: function(button, id){
				if(!db.in(id)){
					db.add(id); //Adds item to list

					$(button).addClass('red');//Change the colour.
					$(button).text('‒');//Changes the text.

				}else{
					db.remove(id);

					$(button).removeClass('red'); //Change the colour.
					$(button).text('+'); //Changes the text.
				}
				render.cart();
			},
			cart: function(){
				var info = {
					amount: db.list().length,
					costs: function(){
						var amount = 0;
						for (item of db.list()) {
							amount += shelf[item.toString()].price;
						};
						return amount
					}()
				};
				options.cart.html(info.amount + ' items in your cart, worth ' + info.costs + '$.');
			}
		}
		$.getJSON( 'data/items.json', function( data ) {
			$.each( data.items, function( key, value ) {
				shelf[value.id.toString()] = value //Reversing list to object
			});
			// console.log(items);
			jsonData = data; //Saving data

			render.desc(data); //Rendering description
			render.items(data); //Rendering items
			render.cart()
		})
		.fail(function(error){
			console.log(error)
		})
	};
	
}(jQuery));