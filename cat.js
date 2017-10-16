$(function() {

	var data = {
		catNames: ['Sweety', 'Pinki', 'Nikki', 'Chinki', 'Ricky'], 
		click: '0',
		display: $('#cat'),
		elem: document.createElement('div'),
		div1: document.createElement('div'),
		div2: document.createElement('div'),
		image: new Image(500,500)		
	};

	var octopus = {
		displayCat: function(id) {

			if(data.display.has("div")) {
				data.display.empty();
			};

			data.image.src = `cat_${id}.jpg`;
			
			view.render(id);
		},

		init: function() {
			view.init();
		}
	};

	var view = {
		init: function() {
			
			$('li').click(function() {
				octopus.displayCat(this.id);
			});
		},

		render: function(id) {
			data.div1.innerHTML = data.catNames[id-1];
			data.elem.appendChild(data.div1);
			data.elem.appendChild(data.div2);
			data.elem.appendChild(data.image);

			data.image.click(function() {
				data.click++;
				data.div2.innerHTML = click;
			});
			
			data.display.append(data.elem);
		}
	}

	octopus.init();
}());