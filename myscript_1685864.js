//window.onload
document.getElementById("header-text").onmouseover = function percentage() {
var subm = document.querySelectorAll("#myitemlist_myitemlist132083 h2").textContent;
//var $subm = $("#myitemlist_myitemlist132083 h2").text();
//var subm = document.getElementById("myitemlist_myitemlist132083").innerHTML;
var goal = document.querySelectorAll("#myitemlist_myitemlist132084 .widgettitle > span").textContent;
//var $goal = $("#myitemlist_myitemlist132084 .widgettitle > span").text();
//var goal = document.getElementById("myitemlist_myitemlist132084").innerHTML;
document.querySelectorAll("#myitemlist_myitemlist132095 .widgettitle > span.htmlwidget").textContent = subm;
//$("#myitemlist_myitemlist132095 .widgettitle > span.htmlwidget").text($subm/$goal);
//document.write("a"+subm+"b")
//document.getElementById("myitemlist_myitemlist132095").innerHTML = subm*goal;
}
