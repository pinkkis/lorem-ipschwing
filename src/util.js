/**
 * @param {array} array
 */
export const randomValueFromArray = (array = []) => {
	if (!array.length) {
		return '';
	}

	const idx = (Math.random() * array.length) | 0;

	return array[idx];

};

/**
 * @param {string} sentence
 */
export const capitalizeSentence = (sentence) => {
	return sentence.replace(/^\w/, c => c.toUpperCase());
};

/**
 * @param {string} sentence
 */
export const endSentence = (sentence) => {
	return sentence.replace(/.$/, c => {
		if (['!', '?', '.'].includes(c)) {
			return c;
		}

		return c + '.';
	});

};

/**
 * @param {number} min
 * @param {number} max
 */
export const numBetween = (min, max) => {
	return min + (Math.random() * (max - min)) | 0;
}

/**
 * @param {array} array
 */
export const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}