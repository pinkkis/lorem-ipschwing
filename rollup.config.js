import {terser} from 'rollup-plugin-terser';

export default {
	input: 'src/index.js',
	output: [
		{ file: 'dist/main.umd.js', format: 'umd', name: 'LoremIpschwing' },
		{ file: 'dist/main.min.js', format: 'cjs' },
		{ file: 'dist/main.esm.js', format: 'es' }
	],
	plugins: [
		terser({
			include: [/^.+\.min\.js$/, '*esm*']
		})
	]
}