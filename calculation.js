




function myFunction() {
  var y = document.getElementById("txt1").value;
  var z = document.getElementById("txt2").value;
  var r1 = document.getElementById("txt3").value;
  var r2 = document.getElementById("txt4").value;

  

  var p = (+y)+(+z)+((+r1 * +r2)/(+r1+ +r2));
  document.getElementById("demo").innerHTML = p;
}