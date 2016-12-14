window.onload = function percentage() {
var $subm0 = $("#myitemlist_myitemlist131318 h2").text();
var $subm = $subm0.match(/[0-9]{1,}/);
var $goal = $("#myitemlist_myitemlist132390 .widgettitle > span.htmlwidget").text();
$("#myitemlist_myitemlist132391 .widgettitle > span.htmlwidget").text($subm/$goal);
}
