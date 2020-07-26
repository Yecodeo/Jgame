import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';
import card from 'utils/template';

class Guess {
	constructor() {
		this.arrayFruits = fruits.slice(0,14);       // pic up only 14 unique elements
		this.cards = this.arrayFruits.concat([...this.arrayFruits]);
		this.platform = document.querySelector('.platform');
		this.guess1;
		this.guess2;
    }
    
	bind() {
		if (this.flip) {
			for (const o of this.flip) {
				o.addEventListener('click', (event) =>{
					console.log(event.name);
				});
			}
		}
    }
    
	deal() {
		this.cards = shuffle(this.cards);
		for (const key of  this.cards) {
			var carte = card(key);
            
			if (carte) {
				this.platform.appendChild(carte); 
			}  
        }
        this.flip = document.querySelectorAll('.flip');
		this.bind();
	}
    

}
export default Guess;