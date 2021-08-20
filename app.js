function myOpenFunction() {
    window.location.href ="pointofsale.html";
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
function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.height = "100vh";
    document.getElementById("main").style.position = "relative";
    document.getElementById("main").style.zIndex = "1";
    document.getElementById("main").style.marginLeft = "70px";
    document.getElementById("main").querySelectorAll("div")[0].style.minWidth = "315px";
    document.getElementById("main").querySelectorAll("div")[0].style.overflowX = "hidden";
    document.getElementById("cont").style.width = "70px";
    document.getElementById("cont").style.height = "100%";
    document.getElementById("cont").style.display = "flex";
    document.getElementById("cont").style.justifyContent = "space-between";
    document.getElementById("cont").style.flexDirection = "column";
    document.getElementById("cont").style.backgroundColor = "white";
    document.getElementById("cont").style.borderBottom = "1px solid #E1E1E1";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.display = "flex";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.flexWrap = "wrap";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.justifyContent = "center";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.alignItems = "center";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.width = "100%";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].style.marginTop = "40px";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.width = "35px";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.height = "35px";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.backgroundColor = "red";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.textAlign = "center";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.paddingTop = "5px";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].style.marginBottom = "40px";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].querySelectorAll("a")[0].style.color = "white";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].querySelectorAll("a")[0].style.fontWeight = "bold";
    document.getElementById("mySidebar").querySelectorAll("ul")[0].querySelectorAll("li")[0].querySelectorAll("a")[0].style.fontSize = "20px";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.display = "flex";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.flexWrap = "wrap";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.justifyContent = "center";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.alignItems = "center";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.width = "100%";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.marginTop = "40px";
    document.getElementById("mySidebar").querySelectorAll("ul")[1].style.backgroundColor = "white";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
function changeImgOn1(){
   var imgOn = document.getElementById("imgBtnOn1");
   var imgOff = document.getElementById("imgBtnOff1");
   imgOn.classList.toggle("hide");
   imgOff.classList.toggle("hide");
}
function changeImgOff1(){
    var imgOn = document.getElementById("imgBtnOn1");
    var imgOff = document.getElementById("imgBtnOff1");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOn2(){
    var imgOn = document.getElementById("imgBtnOn2");
    var imgOff = document.getElementById("imgBtnOff2");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff2(){
     var imgOn = document.getElementById("imgBtnOn2");
     var imgOff = document.getElementById("imgBtnOff2");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
  function changeImgOn3(){
    var imgOn = document.getElementById("imgBtnOn3");
    var imgOff = document.getElementById("imgBtnOff3");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff3(){
     var imgOn = document.getElementById("imgBtnOn3");
     var imgOff = document.getElementById("imgBtnOff3");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
  function changeImgOn4(){
    var imgOn = document.getElementById("imgBtnOn4");
    var imgOff = document.getElementById("imgBtnOff4");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff4(){
     var imgOn = document.getElementById("imgBtnOn4");
     var imgOff = document.getElementById("imgBtnOff4");
     imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
  }
  function changeImgOn5(){
    var imgOn = document.getElementById("imgBtnOn5");
    var imgOff = document.getElementById("imgBtnOff5");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff5(){
     var imgOn = document.getElementById("imgBtnOn5");
     var imgOff = document.getElementById("imgBtnOff5");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
  function changeImgOn6(){
    var imgOn = document.getElementById("imgBtnOn6");
    var imgOff = document.getElementById("imgBtnOff6");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff6(){
     var imgOn = document.getElementById("imgBtnOn6");
     var imgOff = document.getElementById("imgBtnOff6");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
  function changeImgOn7(){
    var imgOn = document.getElementById("imgBtnOn7");
    var imgOff = document.getElementById("imgBtnOff7");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff7(){
     var imgOn = document.getElementById("imgBtnOn7");
     var imgOff = document.getElementById("imgBtnOff7");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
  function changeImgOn8(){
    var imgOn = document.getElementById("imgBtnOn8");
    var imgOff = document.getElementById("imgBtnOff8");
    imgOn.classList.toggle("hide");
    imgOff.classList.toggle("hide");
 }
 function changeImgOff8(){
     var imgOn = document.getElementById("imgBtnOn8");
     var imgOff = document.getElementById("imgBtnOff8");
     imgOn.classList.toggle("hide");
     imgOff.classList.toggle("hide");
  }
