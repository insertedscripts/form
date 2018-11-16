document.getElementsByTagName("button")[0].click = myFunction();

var deprintat = document.getElementById("text-00000008-acc").value;

function myFunction() {
    window.print(deprintat);
}
