import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import card from 'utils/template';

class Guess {
	constructor() {
        this.arrayFruits = fruits.slice(0,14);       // pic up only 14 unique elements
        console.log('1', this.arrayFruits);
        this.cards = this.arrayFruits.concat([...this.arrayFruits]);
        
		this.cards = shuffle(this.cards);
        console.log('1', this.cards);
		this.platform = document.querySelector('.platform');
        
		for (const key of  this.cards) {
			var carte = card(key);
            
			if (carte) {
				this.platform.appendChild(carte); 
			}  
		}
	}
}
export default Guess;