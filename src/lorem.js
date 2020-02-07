import { defaultConfig } from './config.js';
import { w1w, w1s, w2w, w2s } from './dictionary.js';
import { randomValueFromArray, numBetween, capitalizeSentence, endSentence } from './util.js';

export class Lorem {
	constructor(config = defaultConfig) {
		this.config = config;
		this.dictionaries = {
			words: [],
			sentences: []
		}

		if (config.ww1) {
			this.dictionaries.words = this.dictionaries.words.concat(w1w);
			this.dictionaries.sentences = this.dictionaries.sentences.concat(w1s);
		}

		if (config.ww2) {
			this.dictionaries.words = this.dictionaries.words.concat(w2w);
			this.dictionaries.sentences = this.dictionaries.sentences.concat(w2s);
		}
	}

	generateSentence(startWithLoremIpsum = this.config.startWithLoremIpsum) {
		const returnArray = [];
		const words = numBetween(this.config.sentenceLength.min, this.config.sentenceLength.max);

		for (let i = 0; i < words; i++) {
			returnArray.push(randomValueFromArray(w1w));
		}
		if (this.config.useLongSentences && Math.random() > this.config.sentenceAddThreshold) {
			returnArray.push(randomValueFromArray(w1s));
		}

		if (startWithLoremIpsum) {
			returnArray.unshift('Lorem Ipsum');
		}

		return capitalizeSentence(endSentence(returnArray.join(' '))) ;
	}

	generateParagraph() {
		const returnArray = [];
		const sentences = numBetween(this.config.paragraphLength.min, this.config.paragraphLength.max);
		for (let i = 0; i < sentences; i++) {
			returnArray.push(this.generateSentence(false));
		}

		if (this.config.startWithLoremIpsum) {
			returnArray.unshift('Lorem Ipsum');
		}

		return returnArray.join(' ');
	}

}
