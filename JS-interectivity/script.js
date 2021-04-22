
function pickcol() {
  var dd1 = document.getElementById("d1");
  var colinput = document.getElementById("colpick");
  dd1.style.backgroundColor = colinput.value;
}

function square() {
  var dd1 = document.getElementById("d1");
  var sizeinput = document.getElementById("slid");
  var size = sizeinput.value;
  
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle = "black";
  ctx.fillRect(10,10,size,size);
  ctx.fillRect(parseInt(size)+30,10,size,size)
  
}


function togreen() {
  var dd2 = document.getElementById("d2");
  dd2.style.backgroundColor = "green";
  var ctx = dd2.getContext("2d");
  
  ctx.fillStyle="black";
  ctx.fillRect(10,10,60,60);
  ctx.fillRect(80,10,60,60);
  ctx.fillRect(150,10,60,60);
  
  ctx.fillStyle="white";
  ctx.font="20px sans serif";
  ctx.fillText("Hello",15,40);
  
  ctx.fillStyle="white";
  ctx.font="20px arial";
  ctx.fillText("Okay",85,45);
  
  ctx.fillStyle="white";
  ctx.font="20px calibri";
  ctx.fillText("Go",155,50);
  
}
