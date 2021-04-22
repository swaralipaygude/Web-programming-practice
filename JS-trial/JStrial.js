
function buttonAlert() {
  alert("You clicked the button");

}

function dateTimeAlert() {
  alert(Date());
}

function changeText() {
  document.getElementById('originalText').innerHTML='Changed text';
}

function changeCSS() {
  document.getElementById('originalText').style.backgroundColor='aquamarine';
  document.getElementById('originalText').style.border='3px solid black';

}

function addBorder() {
  document.body.style.border="5px solid green";
  document.body.style.padding="10px";
  document.body.style.margin="5px";

}

function addBgColor() {
  document.body.style.backgroundColor="limegreen";

}

function onMouseOut() {
  document.getElementById('divOne').style.backgroundColor="lightgreen";

}

function onMouseUp() {
  document.getElementById('divTwo').style.backgroundColor="lightblue";
  document.body.style.backgroundColor="gray";

}

function onKeyDown() {
  document.getElementById('divThree').style.backgroundColor="red";
  document.getElementById('cap').innerHTML="The caption has been changed";

}

var myVar1 = 30000;
var myVar2 = "Hello";
function onKeyDownAlert(txt) {
  alert(txt);
}
