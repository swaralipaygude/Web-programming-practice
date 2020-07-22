function calcTip() {
 var billAmt = document.getElementById('amt').value;
 //var e = document.getElementById('tipPercent');
 //var tipPer = e.options[e.selectedIndex].value;
 var tipPer = document.getElementById('tipPercent').value;
 var people = document.getElementById('people').value;

 var tipTotal = billAmt*tipPer;
 var tip = Math.round((tipTotal/people));   //round up

 document.getElementById('tipAmount').innerHTML = "Tip per person <br> Rs." + tip;

}
