/**
 * An array shuffling using the Fisher-Yates shuffle algorithm
 * @param array an array you want to shuffle
 */
function shuffle(array: any[]) {
	for (let i = array.length; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[ array[i], array[j] ] = [ array[j], array[i] ];
	}
}

export default shuffle;