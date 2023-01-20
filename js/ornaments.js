document.addEventListener("DOMContentLoaded", function(event) {

  $(function(){
  	var SITE = (function(){

  		const hoursOfDay = new Date().getHours();
  		var isDay = false;
  		var specialDay = 4;

  		var width = 100;
  		var height= 100;
  		var ornamentRate = 0.009;

  		var ornamentString = '';

  		var endnote = '';

  		var ornamentCharacters = ['p', 'd', 'q', 'r', 's', '1', 'o', 'm', 'd', 'e', 'z', 'r', 'a', '✴&#xFE0E;'];

  		function whatDay() {
  			var now = new Date();
  			var dayOfMonth = now.getDate();
  			// console.log(dayOfMonth);

  			if (dayOfMonth === specialDay) {
  				ornamentCharacters = ['j', 'o', 's', 'e','*', '*', '*', '✯', '✴&#xFE0E;', '⊹', '✧', '✫', '✯', '✴', '✿', '✾', '⏧', '♫'];
  			}
  		}

      function layout() {
  			for (var i = 0; i < height; i++) {
  				generateOrnamentRow();
  			}
  			ornamentString = ornamentString + endnote;
  			$('.ornamentfield').html(ornamentString)
  		}

  		function generateOrnamentRow(){
  			for (var j = 0; j < width; j++) {
  				if(Math.random() > ornamentRate) {
  					ornamentString = ornamentString + '&nbsp; ';
  				} else {
  					randomOrnamentInt = parseInt(ornamentCharacters.length * Math.random());
  					randomOrnament = ornamentCharacters[randomOrnamentInt];
  					var addingString = '<a>' + randomOrnament + '</a>';
  					ornamentString = ornamentString + addingString + ' ';
  				};
  			}
  		}

  		function checkTime() {
  			if (hoursOfDay < 7) {
  				$('body').addClass('is-night');
  			} else if(hoursOfDay < 8) {
  				$('body').addClass('is-day');
  			} else if (hoursOfDay < 20) {
  				$('body').addClass('is-day');
  			} else if (hoursOfDay < 21) {
  				$('body').addClass('is-sunset');
  			} else {
  				$('body').addClass('is-night');
  			}
  		}


  		function init() {
  			whatDay();
  			checkTime();

  			layout();
  		}


  		// return an object that exposes our greeting function publicly
  		return {
  			init: init
  		};

  	})();
  	SITE.init();

  });


  })
