//src= "new profile.html"
function goalSubmit(){
var goal=document.getElementById('few').value;
document.getElementById('goalpara').innerHTML += "<li>"+goal+"</li>";
}
function goalTwo(){
var goalie=document.getElementById('personal').value;
document.getElementById('bioo').innerHTML = goalie;
}
$(function(){
  $('#search').click(function(e){
    e.preventDefault()
    var getinfo= $('#personal').val()
      console.log(data)
      document.getElementById("personal").innerHTML
  })
})
