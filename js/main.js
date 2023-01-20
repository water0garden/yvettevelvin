// document.addEventListener("DOMContentLoaded", function(event) {
//
// var dropdownTriggers = document.querySelectorAll('.dropbtn');
// console.log(dropdownTriggers);
//
// const Dropdowns = {
//   init: function() {
//     Dropdowns.bindEvents();
//   },
//
//   bindEvents: function() {
//     dropdownTriggers = document.querySelectorAll('.dropbtn');
//     console.log(dropdownTriggers);
//
//
//     for (var i = 0; i < dropdownTriggers.length; i++) {
//       dropdownTriggers[i].addEventListener('click', function(){
//           this.classList.toggle("show");
//         console.log('curious', this);
//
//       });
//     }
//   }
// };
//
//
//
//
//
// // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.description.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }
//
//
// setTimeout(function(){
//
//   console.log('start dropping');
//   Dropdowns.init()
//
// }, 4000);
//
//
// const Images = {
//   els: document.querySelector('.js-image-enhance'),
//
//   init: function() {
//     Images.bindEvents();
//   },
//
//   bindEvents: function() {
//
//   },
//
//   enhance: function() {
//
//   }
// };
//
//
//
// const Settings = {
//   url: window.location.hostname
// }
//
// const Site = {
//   init: function() {
//     Site.bindEvents();
//   },
//
//   bindEvents: function() {
//
//   }
// };
//
// const Carousel = {
//   figures: document.querySelectorAll('.js-carousel-figure'),
//   selectedImage: document.querySelector('.js-carousel-figure.is-visible'),
//   current: 0,
//   totalCount: document.querySelectorAll('.js-carousel-figure').length,
//   nextTrigger: document.querySelector('.js-carousel-next'),
//
//   init: function() {
//     console.log('carousel innit');
//     Carousel.bindEvents();
//   },
//
//   bindEvents: function() {
//     Carousel.nextTrigger.addEventListener( 'click', Carousel.goToNext );
//   },
//
//   goToNext: function() {
//     console.log('go to next');
//     Carousel.current = Carousel.current + 1;
//     if(Carousel.current == Carousel.totalCount) {
//       Carousel.current = 0;
//     }
//     Carousel.selectedImage.classList.remove('is-visible');
//     Carousel.figures[Carousel.current].classList.add('is-visible');
//     Carousel.selectedImage = document.querySelector('.js-carousel-figure.is-visible');
//   }
// };
//
//
//
// Debug.init();
// Site.init();
// Helpers.init();
// Carousel.init();
//
//
// });
