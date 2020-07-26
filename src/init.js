import Swal from 'sweetalert2';

$(document).ready(function () {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
	/*******************************************************
   *      VARIABLES declaration section
 ******************************************************/
	var platform = $('.platform');       // store our master div in variable
	var find;                            // number of car guessed
	// array of all fruits
	var fruits = ['red_apple','banana','orange','green_lemon','grenadian','peach',
		'yellow_lemon','Starberry','green_apple','yellow_peach','grape',
		'watermelon','freestone_peach','pinapple','cherry','raspberry',
		'mango','yellow_cherry'];


	/*******************************************************
 *                     GAME BOOT
 ******************************************************/
	init(fruits);    // boot Game

	/**
 * boot application by muddling elements
 * and slice at 14 elements and duplcating
 * at randoms
 * @param {array} fruits 
 */
	function init(fruits) {
		shuffle(fruits);                      // muddling of all value of fruits array
		var temp1 = fruits.slice(0,14);       // pic up only 14 unique elements
		var temp2 = temp1;                    // copy array to double content
		var cards = temp1.concat(temp2);      // joint all array in one to get 28 elements mixed
		shuffle(cards);                       // mix seconde all elements 

		// for each elements of array let's create an cards elements
		$.each(cards, function (indexInArray, valueOfElement) { 
			platform.append('<div class="flip">' 
                        + '<div class="card">'
                            + '<div class="hiddens"></div>'
                            + '<div id="" class="picture ' + valueOfElement + '"></div>' 
                         + '</div>'   
                     + '</div>');
		});   
		// start cownt down
		progress(60, 60, $('.progressbar'));
	}
      
	/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
	function shuffle(o) {
		for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	}


	/**
 *  update progressbar every 1s
 * @param {*} timeleft 
 * @param {*} timetotal 
 * @param {*} element 
 */
	function progress(timeleft, timetotal, $element) {
		// check if left time is still up 0 
		if(timeleft >= 0 ) {
			// boot time out
			setTimeout(function() {
				// variable to store width of progressbar  
				var progressBarWidth = Math.round(timeleft * 100 / timetotal);
				// set left time in seconde in progress label
				$('.progress-bar').css('width', progressBarWidth+'%').attr('aria-valuenow', progressBarWidth);    

				//$element.width(progressBarWidth + '%').text(timeleft + 's');
				// variable to store how much cards are guessed
				find = $('.win').length;
				// check if all cards are guessed
				if (find == 28) {
					// message of winning
					Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )

					//alert('Félicitation' + '\n' + 'Yohhhh!! gagner !!! valider ce message pour rejouer ou quitter');
					// refresh browser to start over
					location.reload();
          
				}
				/**
         *  so if timeleft is still bigger than 0
         * we call the function it self with timeleft
         * minus 1s
        */
				progress(timeleft - 1, timetotal, $element);
			}, 1000);
		} else {
			// alert when the countdown is finished
			Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )

			//alert('le temps accorder pour la partie est terminé ' + '\n' + 'Valider ce message pour rejouer');
			// refresh browser
			location.reload();
		}
	}

});