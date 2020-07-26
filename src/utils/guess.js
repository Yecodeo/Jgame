import shuffle from 'utils/shuffle';
import fruits from 'utils/fruits';

class Guess {
	constructor() {
		this.fruitsShuffled = shuffle(fruits);
	}
}
export default Guess;