document.getElementById("mainform123").onmouseover = function zerototal() {
var coupon = document.getElementById("id123-couponcode").value;
if (coupon == "968Q1VRF") {
document.getElementById("id123-control20644108").value=0;
}
}


document.getElementById("mainform123").onchange = function hidesubmit() {
var payonline = document.getElementById("id123-control20642110_0").checked;
var paybycheck = document.getElementById("id123-control20642110_1").checked;
var couponchk = document.getElementById("id123-couponcode").value;
if (paybycheck === true && couponchk == "CHECK") {
s = "inline-block";
}
if (paybycheck === true && couponchk !== "CHECK") {
s = "none";
}
if (payonline === true) {
s = "inline-block";
}
document.getElementById("id123-button-send").style.display=s;
}


document.getElementById("mainform123").onmouseover = function fillcheckfield() {
var coupon = document.getElementById("id123-couponcode").value;
if (coupon == "CHECK") {
s = "CHECK";
}
if (coupon == "968Q1VRF") {
s = "968Q1VRF";
}
document.getElementById("id123-control20093333").value=s;
}
