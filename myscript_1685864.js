document.getElementById("#sortablewidgets").onclick = function percentage() {
//var subm = document.querySelectorAll("#myitemlist_myitemlist131630 h2").innerHTML;
var $subm = $("#myitemlist_myitemlist131630 h2").text();
//var subm = document.getElementById("#myitemlist_myitemlist131630").innerText;
//var goal = document.querySelectorAll("#myitemlist_myitemlist131634 .htmlwidget").innerHTML;
var $goal = $("#myitemlist_myitemlist131634 .widgettitle span:first").text();
//var goal = document.getElementById("#myitemlist_myitemlist131634").innerText;
//document.querySelectorAll("#myitemlist_myitemlist132095 .htmlwidget").innerHTML = subm*goal;
$("#myitemlist_myitemlist132095 .widgettitle span:first").text($subm);
//document.getElementById("#myitemlist_myitemlist132095").innerText = subm*goal;
}
