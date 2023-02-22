const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const cors = require('cors');
app.use(cors());

let db;
MongoClient.connect('mongodb+srv://admin:1q2w3e4r@cluster0.v4wxlfs.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology:true}, (err, client) => {
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
    console.log(req.body);
    res.status(400).send({ message : '성공했습니다.'});
})

app.get('/detail/:id', (req, res) => {
    db.collection('post').findOne({_id : parseInt(req.params.id)}, (err, result) => {
        if(!result) {
            res.status(200).send();
            console.log('결과데이터 없다');
        }
        res.render('test');
    })
})

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/login', (req, res) => {
    // 1. DB랑 사용자 데이터 비교
    // 2. 성공 시 
    const params = { 
        data : {
            id: 1, 
            password : '1q2w3e'
        }
    };
    console.log('test');
    return res.send(params);
});