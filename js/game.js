$(document).ready(function () {
   
   var click = $('.flip');              // store the element flip in variable
   var guess1 , guess2;                 // variable where we will store guessed cards

   /**
    * rotate the elements by adding class rotate
    */
   $('.flip').on('click',function () { 
      if (isEmpty(guess1)) {                                // check if guess1 is empty
          guess1 = $(this).find('.picture');                // if it is we save the clicked element child (.picture)
          $(this).children('.card').addClass('rotate');     // add class to show the picture
      } else if (isEmpty(guess2)) {                         // or check guess2 if is empty
          guess2 = $(this).find('.picture');                // if it is we save the clicked element child (.picture)
         $(this).children('.card').addClass('rotate');      // add class to show the picture
      } 

      if (!isEmpty(guess1) && !isEmpty(guess2)) {                   // if guess1 and guess2 are filled
        var c1 = guess1.attr('class');                              // store guess1 class name in c1
        var c2 = guess2.attr('class');                              // store guess2 class name in c2
        if (c1 === c2 ) {                                           // check if selected cards are the same
          guess1.parent().removeClass('rotate').addClass('win');    // remove rotate class and add win class
          guess2.parent().removeClass('rotate').addClass('win');    // remove rotate class and add win class
          guess1.unbind('click');                                   // forbid click on guessed cards
          guess2.unbind('click');                                   // forbid click on guessed cards
          guess1 = '';                                              // empty guess1 for next click
          guess2 = '';                                              // empty guess2 for next click
        }  
      }
   });

/**
 * ckeck if a variable is empty as in php with isEmpty
 * @param {variable} val 
 */
   function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

/**
 * Check flip the wonrg guess
 * @param {}
 */
setInterval(function() {                                        // boot timer
        if (!isEmpty(guess1) && !isEmpty(guess2)) {             // if guess1 and guess2 are filled
          $('.card').removeClass('rotate');                     // rotate them 
          guess1 = '';                                          // empty guess1 for next click
          guess2 = '';                                          // empty guess1 for next click
        }
}, 2800);                                                       // execute all this code every 2.8s 
});