<style>


		document.onmouseover = function mousepos(event) {
		
			setTimeout(function() {
			var y_pos_200 = event.clientY;
			console.log("position of hover 200ms: " + y_pos_200);
			}, 200);
			
			setTimeout(function() {
			var y_pos_2000 = event.clientY;
			console.log("position of hover 2000ms: " + y_pos_2000);
			}, 2000);
		
		}
	
	

document.onmouseover = function myCSS(event) {
	var font_size = getComputedStyle(event.target).getPropertyValue("font-size");
	var color = getComputedStyle(event.target).getPropertyValue("color");
	
	
	/*var rgbToHex = function(rgb) { 
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
		}
	return hex;
	};
	
	var fullColorHex = function(r,g,b) {   
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);
	return red+green+blue;
	};*/
	
	
	var font_family = getComputedStyle(event.target).getPropertyValue("font-family");
	var background_color = getComputedStyle(event.target).getPropertyValue("background-color");
	var height = getComputedStyle(event.target).getPropertyValue("height");
	var width = getComputedStyle(event.target).getPropertyValue("width");
	var padding = getComputedStyle(event.target).getPropertyValue("padding");
	var border = getComputedStyle(event.target).getPropertyValue("border");
	var margin = getComputedStyle(event.target).getPropertyValue("margin");
	//var top_left = getBoundingClientRect(event.target);
	//var placeholder = $(event.target).attr( "placeholder" );
	var z_index = getComputedStyle(event.target).getPropertyValue("z-index");
	
	//event.target.style.outline = "1px solid red";
	
	//setPropertyValue("color");
	//$(event.target).css('outline','1px solid red');
		


			setTimeout(function() {
				
			event.target.style.outline = "1px solid red";
			console.log("------------------------" +
		"\n" +
		"\n" +
		"font-size: " + font_size + "\n" +
		"color: " + color + "\n" +
		"font-family: " + font_family + "\n" +
		"\n" +
		"background-color: " + background_color + "\n" +
		"\n" +
		"height: " + height + "\n" +
		"width: " + width + "\n" +
		"\n" +
		"padding: " + padding + "\n" +
		"border: " + border + "\n" +
		"margin: " + margin + "\n" +
		"\n" +
		//"top & left: " + top_left.top + " & " + top_left.left + "\n" +
		//"bottom left: " + bottom_left + "\n" +
		//"top right: " + top_right + "\n" +
		//"bottom right: " + bottom_right + "\n" +
		"\n" +
		//"placeholder: " + placeholder + "\n" +
		"z-index: " +
		"\n" +
		"\n" +
		"------------------------");
			}, 3000);
	
	};
	


</style>
