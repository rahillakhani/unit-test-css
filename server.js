const express = require('express');
const path = require('path');
const app = express();
const port = 8910;

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname + 'public/index.html'));
});

app.listen(port);

app.on('listen', (port) => {
		console.log('app has started', port);
	}
);