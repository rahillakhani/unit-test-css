const path = require('path');
const fs = require('fs');

module.exports = {
	entry : path.resolve(__dirname, 'test.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	node: {
		fs: 'empty',
		path: 'empty'
	}
}