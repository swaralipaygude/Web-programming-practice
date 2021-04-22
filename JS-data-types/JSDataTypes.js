
var num = 500;    //number
var str = "What's up";    //string
var arr = ["One",2,"3","four",'5',"SIX"];   //mixed array
var bool = true;    //boolean
var obj = {"abcd":1,"efgh":2,"ijkl":"3"};   //object

function showNum(x) {
  document.getElementById('p1').innerHTML=x;
}

function showStr(x) {
  document.getElementById('p2').innerHTML=x;
}
function showArr(x) {
  document.getElementById('p3').innerHTML=x;
}
function showBool(x) {
  document.getElementById('p4').innerHTML=x;
}
function showObj(x) {
  document.getElementById('p5').innerHTML=x;
}

var colorArr = ["white","#ceddf5","#abc8f7","#90b7f5","#7aaaf5","#5c98f7","#3983f7","#186df2","#0a57cf","#094096"];
var n = 0;
document.getElementById('currNo').innerHTML= n;

function incr() {
  n += 1;
  document.getElementById('currNo').innerHTML= n;
  document.body.style.backgroundColor = colorArr[n];

}

function decr() {
  n -= 1;
  document.getElementById('currNo').innerHTML= n;
  document.body.style.backgroundColor = colorArr[n];

}


var myObj = {name:"The Office",genre:"Sitcom",year:2005,seasons:9};

function showName() {
  document.getElementById('show').innerHTML=myObj.name;
}

function showGenre() {
  document.getElementById('show').innerHTML=myObj.genre;
}

function showYear() {
  document.getElementById('show').innerHTML=myObj.year;
}

function showSeasons() {
  document.getElementById('show').innerHTML=myObj.seasons;
}

myObj.themeSong="The Office Theme Song";
function showTheme() {
  document.getElementById('show').innerHTML=myObj.themeSong;
}
