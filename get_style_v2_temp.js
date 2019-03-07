
var pos_div200 = document.createElement('div');
pos_div200.setAttribute("id", "div200");
pos_div200.style.border = "1px solid red";
pos_div200.style.color = "red";
pos_div200.innerHTML = "position 1";
document.body.appendChild(pos_div200);

var pos_div2000 = document.createElement('div');
pos_div2000.setAttribute("id", "div2000");
pos_div2000.style.border = "1px solid red";
pos_div2000.style.color = "red";
pos_div2000.innerHTML = "position 2";
document.body.appendChild(pos_div2000);

var pos_divdiff = document.createElement('div');
pos_divdiff.setAttribute("id", "divdiff");
pos_divdiff.style.border = "1px solid red";
pos_divdiff.style.color = "red";
pos_divdiff.innerHTML = "difference between positions";
document.body.appendChild(pos_divdiff);



document.onmouseover = function get_style_mouse_stops(event) {
		
	setTimeout(function() {
	var x_pos_200 = event.clientX;
	var y_pos_200 = event.clientY;
	pos_div200.innerHTML = x_pos_200 + ", " + y_pos_200;
	}, 200);
	
	setTimeout(function() {
	var x_pos_2000 = event.clientX;
	var y_pos_2000 = event.clientY;
	pos_div2000.innerHTML = x_pos_2000 + ", " + y_pos_2000;
	}, 2000);
	
	
	
	document.onmousemove = setTimeout(function() {
		
	var pos_div200_value = pos_div200.innerHTML;
	var pos_div2000_value = pos_div2000.innerHTML;

	if (pos_div200_value == pos_div2000_value) {
		console.log("mouse is not moving");
		pos_divdiff.innerHTML = 0;
		}
	if (pos_div200_value !== pos_div2000_value) {
		console.log("mouse is moving");
		pos_divdiff.innerHTML = 1;
		}

	}, 2500);



	setTimeout(function() {
	
	var font_size = getComputedStyle(event.target).getPropertyValue("font-size");
	var color = getComputedStyle(event.target).getPropertyValue("color");	
	
	var font_family = getComputedStyle(event.target).getPropertyValue("font-family");
	var background_color = getComputedStyle(event.target).getPropertyValue("background-color");
	var height = getComputedStyle(event.target).getPropertyValue("height");
	var width = getComputedStyle(event.target).getPropertyValue("width");
	var padding = getComputedStyle(event.target).getPropertyValue("padding");
	var border = getComputedStyle(event.target).getPropertyValue("border");
	var margin = getComputedStyle(event.target).getPropertyValue("margin");

	var z_index = getComputedStyle(event.target).getPropertyValue("z-index");
		
	var pos_divdiff_value = pos_divdiff.innerHTML;
		
		
	if (pos_divdiff_value == 0) {
		event.target.style.outline = "1px solid red";
		console.clear();
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
		"z-index: " +
		"\n" +
		"\n" +
		"------------------------");
		};
			
	if (pos_divdiff_value == 1) {
		console.clear();
		console.log("mouse is moving");
	};	
	
	}, 3000);


};

