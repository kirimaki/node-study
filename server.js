const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.urlencoded({extended: true}));

let db;
MongoClient.connect('mongodb+srv://admin:1q2w3e4r@cluster0.v4wxlfs.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if(err) return console.log(err);
    db = client.db('todoApp');
    
    app.listen(8081, function() {
        console.log('connected success');
    });
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/list', (req, res) => {
    db.collection('post').find().toArray((err, result) => {
        res.sendFile(`${__dirname}/list.html`);
        console.log(err);
        console.log(result);
    });
})

app.delete('/delete', (req, res) => {
    res.send('야 잘받앗다');
    console.log(req.body);
})