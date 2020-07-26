import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import card from 'utils/template';

class Guess {
	constructor() {
		this.arrayFruits = fruits.slice(0,14);       // pic up only 14 unique elements
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector('.platform');
    
	}
    
	deal() {
        this.cards = shuffle(this.cards);
		for (const key of  this.cards) {
			var carte = card(key);
            
			if (carte) {
				this.platform.appendChild(carte); 
			}  
		}
	}
}
export default Guess;