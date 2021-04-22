var cars = ["Mercedes","BMW","Ferrari","Porsche","Mini Cooper","Jaguar","Aston Martin"]
var para = ""

for(i=0;i<cars.length;i++) {
  para += cars[i] + '<br>';     //concatenate arr elements with line break
}

document.getElementById('avCars').innerHTML = para;
