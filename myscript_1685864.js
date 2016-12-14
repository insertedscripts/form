//document.getElementById("header-text").onmouseover
window.onload = function percentage() {
//var subm = document.querySelectorAll("#myitemlist_myitemlist132083 h2").innerText;
var $subm = $("#myitemlist_myitemlist132083 h2").text();
//var subm = document.getElementById("myitemlist_myitemlist132083").innerHTML;
//var goal = document.querySelectorAll("#myitemlist_myitemlist132084 .widgettitle > span").innerText;
var $goal = $("#myitemlist_myitemlist132084 .widgettitle > span.htmlwidget").text();
//var goal = document.getElementById("myitemlist_myitemlist132084").innerHTML;
//document.querySelectorAll("#myitemlist_myitemlist132095 .widgettitle > span.htmlwidget").innerHTML = subm;
$("#myitemlist_myitemlist132095 .widgettitle > span.htmlwidget").text($subm/$goal);
//document.write("a"+subm+"b")
//document.getElementById("myitemlist_myitemlist132095").innerHTML = subm*goal;
}
