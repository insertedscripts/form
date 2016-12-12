window.onload = function percentage() {
//var subm = document.querySelectorAll("#myitemlist_myitemlist131630 h2").innerHTML;
var subm = $("#myitemlist_myitemlist131630 h2").html();
//var subm = document.getElementById("#myitemlist_myitemlist131630").innerHTML;
//var goal = document.querySelectorAll("#myitemlist_myitemlist131634 .htmlwidget").innerHTML;
var goal = $("#myitemlist_myitemlist131634 .htmlwidget").html();
//var subm = document.getElementById("#myitemlist_myitemlist131634").innerHTML;
//document.querySelectorAll("#myitemlist_myitemlist132095 .htmlwidget").innerHTML = subm*goal;
$("#myitemlist_myitemlist132095 .htmlwidget").text(subm*goal);
//var subm = document.getElementById("#myitemlist_myitemlist132095").innerHTML;
}
