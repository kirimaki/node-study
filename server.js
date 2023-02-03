const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.urlencoded({extended: true}));

let db;
MongoClient.connect('mongodb+srv://admin:1q2w3e4r@cluster0.v4wxlfs.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if(err) return console.log(err);
    db = client.db('todoApp');
    
    app.listen(8080, function() {
        console.log('connected success');
    });
});
