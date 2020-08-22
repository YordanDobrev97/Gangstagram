const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models/user.js');
const helper = require('./utils/helper.js');

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
        profileImg, 
        followers, 
        followed } = req.body;

    models.create({
        username, 
        password, 
        profileImg, 
        followers, 
        followed,
        posts: [],
        comments: []
    }).then(()  => {
        res.send('User saved!');
    })
})

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    
    models.getById(id).then((user) => {
        const currentUser = helper.getDataWithId(user);
        
        res.send(`User: ${currentUser.username}`)
    });
})

app.post('/comment/:id', (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    
    models.getById(id).then((user) => {
        const currentUser = helper.getDataWithId(user);
        currentUser.comments.push(description);
        models.update(id, currentUser);
        res.send(`Sucessfully add comment on user: ${currentUser.username} with comment ${description}`);
    });
})

app.get('/posts', async (req, res) => {
    const snapshot = await models.all();
    const users = snapshot.docs.map(doc => doc.data());
    const posts = [];
    users.forEach(user => {
        posts.push(user.posts);
    });

    res.send(posts);
})

app.post('/post/:id', (req, res) => {
    const { id } = req.params;
    const { description, imageUrl } = req.body;

    models.getById(id).then((user) => {
        const currentUser = helper.getDataWithId(user);
        currentUser.posts.push({description, imageUrl});
        models.update(id, currentUser);
        res.send(`Sucessfully add post on user: ${currentUser.username}`);
    });
})

app.get('/all', async (req, res) => {
    const snapshot = await models.all();
    const users = snapshot.docs.map(doc => doc.data());
    res.send(users);
})

app.listen(PORT, console.log('Server running...'));

exports.app = functions.https.onRequest(app);