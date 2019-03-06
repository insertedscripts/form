
document.onmouseover = function myCSS(event) {
	//var declaration = document.styleSheets[0].cssRules[0].style;
		//var allfields = document.querySelector("div")[0];
	//var allfields = document.getElementsByTagName("div");
	//var clr = event.target.getAttribute("class");
	var font_size = getComputedStyle(event.target).getPropertyValue("font-size");
	var color = getComputedStyle(event.target).getPropertyValue("color");
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
	event.target.style.outline = "1px solid red";
	//setPropertyValue("color");
	//$(event.target).css('outline','1px solid red');
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
};



