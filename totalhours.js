
function myJsFunction(){
    var date=document.getElementById('datedate').value;
    var hour=document.getElementById('hours').value;
    var vents= document.getElementById('event').value;
    document.getElementById('eventdetails').innerHTML+= "<tr><td>"+date+"</td><td>"+hour+"</td><td>"+vents+"</td></tr>";
}

var total = 0;
function addUp(){
var addhours = parseInt(document.getElementById('hours').value);
var numList = [];
numList.push(addhours);
//alert("hi");
for(i=0; i < numList.length; i++){
  total += numList[i];
  document.getElementById('total').innerHTML=total;
}

}

//function addhours(){
//  while (hours > 0):
//     hours + hours = total
//document.getElementById('total').innerHTML = total
//}
