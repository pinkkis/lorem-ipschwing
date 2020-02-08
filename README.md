# Lorem Ipschwing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![GitHub package.json version](https://img.shields.io/github/package-json/v/pinkkis/lorem-ipschwing)

Wayne's World Lorem Ipsum Generator

## Usage

```js
import { Lorem, defaultConfig } from "@pinkkis/lorem-ipschwing";

const lorem = new Lorem(/*defaultConfig*/);

const sentence = lorem.generateSentence(/*startWithLoremIpsum*/);
const paragraph = lorem.generateParagraph();
```

You can override default config values:

```js
const defaultConfig = {
	sentenceLength: {
		min: 4,
		max: 8
	},
	paragraphLength: {
		min: 4,
		max: 8
	},
	ww1: true, // use wayne's world 1 quotes
	ww2: true, // use wayne's world 2 quotes
	useLongSentences: true, // add a long sentence as part of output (one per generated sentence)
	startWithLoremIpsum: true,
	sentenceAddThreshold: 0.6 // Math.random() > threshold
};
```

Noting that if `useLongSentences` is used, it creates much longer sentences

---

Wayne's World and Wayne's World 2 are the property of NBCUniversal and Paramount Pictures
