console.log("loaded test.js");
$$(document).ready(function() {
  $("[data-role=choice]").click(function() {
      console.log("CLICKED TEST");
     var selectedEl = $( this );
     selectedEl.siblings( "[data-selected=1]" ).removeAttr("data-selected");
     selectedEl.attr("data-selected", "1");
  });
});
