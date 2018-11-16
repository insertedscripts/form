document.getElementsByTagName("button")[0].click = myFunction;

function myFunction() {
    var deprintat = document.getElementById("text-00000008-acc").innerHTML;
    window.print(deprintat);
}
