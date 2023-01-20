document.addEventListener("DOMContentLoaded", function(event) {

  var dropdownTrigger = document.querySelector('.dropbtn');

  dropdownTrigger.addEventListener('click', myFunction);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  var entryHTML = '<figure class="work">'
        + '<img src="' + entry.image.original.url'">'
        + '<dropdown>'
          '<button class="dropbtn" onclick="myFunction()">'
        + entry.title
          '<i class="fa fa-caret-down"></i>'
        '</button>'
        '<div class="dropdown-content" id="myDropdown">'
          + entry.description_html
          '</div>'
        + '</dropdown>'
      + '</figure>';



})
