document.addEventListener("DOMContentLoaded", function(event) {

  var index = 0;
  change();

  function change() {

      //Collect all images with class 'slides'
      var x = document.getElementsByClassName('work');

      //Set all the images display to 'none' (invisible)
      for(var i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }

      //Increment index variable
      index++;

      //Set index to 1 if it's greater than the amount of images
      if(index > x.length) {
          index = 1;
      }

      //set image display to 'block' (visible)
      x[index - 1].style.display = "block";

      //set loop to change image every 3000 milliseconds (3 seconds)
      setTimeout(change, 3000);
  }

})
