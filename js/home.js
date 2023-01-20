document.addEventListener("DOMContentLoaded", function(event) {


  var index = 0;
  change();

  function change() {

      //Collect all images with class 'slides'
      var pops = document.querySelectorAll('.pop');
      var popCurrent = document.querySelector('.popischanging');

      console.log(popCurrent);

      if (popCurrent != null) {
        popCurrent.classList.remove('popischanging');
      }

      //Increment index variable
      index++;

      //Set index to 1 if it's greater than the amount of images
      if(index > pops.length) {
          index = 1;
      }

      //set image display to 'block' (visible)
      pops[index - 1].classList.add('popischanging');



      //set loop to change image every 3000 milliseconds (3 seconds)
      setTimeout(change, 3000);


  }

})
