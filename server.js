const express = require('express');
const app = express();

app.listen(9092, function() {
    console.log('listening on 9092');
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
});

app.get('/write', (req, res) => {
    res.sendFile(`${__dirname}/write.html`);
});

app.get('/test', (req, res) => {
    res.send('여긴 테스트다');
});