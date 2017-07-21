function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(id, className) {

    document.getElementById(id).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
document.onclick = function() {closedropdown()};

function closedropdown() {
  var test = "hello"
  if (!event.target.matches('.dropbtn')) {
    var classes = ['animals', 'arts', 'give', 'communities', 'bake'];
    var i;
    for (i=0; i < classes.length; i++) {
      var dropdowns = document.getElementsByClassName(classes[i]);
      var j;
      for (j = 0; j < dropdowns.length; j++) {
        var openDropdown = dropdowns[j];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
