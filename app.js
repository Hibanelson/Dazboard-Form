function myOpenFunction() {
    window.open("pointofsale.html","_self");
}
function subFunction() {
    var q = parseInt(document.getElementById("quantity1").innerHTML);
    q--;
    document.getElementById("quantity1").innerHTML = q;
}
function addFunction() {
    var q = parseInt(document.getElementById("quantity1").innerHTML);
    q++;
    document.getElementById("quantity1").innerHTML = q;
}
function subFunctionTwo() {
    var q = parseInt(document.getElementById("quantity2").innerHTML);
    q--;
    document.getElementById("quantity2").innerHTML = q;
}
function addFunctionTwo() {
    var q = parseInt(document.getElementById("quantity2").innerHTML);
    q++;
    document.getElementById("quantity2").innerHTML = q;
}
function subFunctionThree() {
    var q = parseInt(document.getElementById("quantity3").innerHTML);
    q--;
    document.getElementById("quantity3").innerHTML = q;
}
function addFunctionThree() {
    var q = parseInt(document.getElementById("quantity3").innerHTML);
    q++;
    document.getElementById("quantity3").innerHTML = q;
}