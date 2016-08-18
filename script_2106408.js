//to be added on duplicate fid 2106408 and probably also on original fid 2015104
$('img').on("dblclick",function() {
$(this).css("width","980px");
$(this).css("z-index","100000");
$(this).css("position","relative");
$(this).css("margin-left","-100px");
var parent_c = $(this).closest(".fieldcontainer.currentPageActive");
$(".fieldcontainer.currentPageActive").not(parent_c).css("-webkit-opacity","0.3");
$(".fieldcontainer.currentPageActive").not(parent_c).css("-moz-opacity","0.3");
$(".fieldcontainer.currentPageActive").not(parent_c).css("opacity","0.3");
$(".fieldcontainer.thebuttons").not(parent_c).css("-webkit-opacity","0.3");
$(".fieldcontainer.thebuttons").not(parent_c).css("-moz-opacity","0.3");
$(".fieldcontainer.thebuttons").not(parent_c).css("opacity","0.3");
});

$('img').on("click",function() {
$(this).css("width","inherit");
$(this).css("z-index","auto");
$(this).css("margin-left","initial");
$(".fieldcontainer.currentPageActive").css("-webkit-opacity","1");
$(".fieldcontainer.currentPageActive").css("-moz-opacity","1");
$(".fieldcontainer.currentPageActive").css("opacity","1");
$(".fieldcontainer.thebuttons").css("-webkit-opacity","1");
$(".fieldcontainer.thebuttons").css("-moz-opacity","1");
$(".fieldcontainer.thebuttons").css("opacity","1");
});