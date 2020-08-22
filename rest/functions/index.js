const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models/user.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/home', (req, res) => {
    res.send('Home Page');
})

app.post('/create', (req, res) => {
    const {
        username, 
        password, 
        imageUrl, 
        followers, 
        followed } = req.body;

    models.create({
        username, 
        password, 
        imageUrl, 
        followers, 
        followed,
        posts: []
    }).then(()  => {
        res.send('User saved!');
    })
})

app.get('/all', async (req, res) => {
    const snapshot = await models.all();
    const users = snapshot.docs.map(doc => doc.data());
    res.send(users);
})

app.listen(PORT, console.log('Server running...'));

exports.app = functions.https.onRequest(app);