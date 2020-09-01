const express = require('express');
const router = express.Router();
const models = require('../models/user');

router.post('/', (req, res) => {
    const {
        email,
        username, 
        password, 
        profileImg, 
        followers, 
        followed } = req.body;
    
    console.log(req.body);

    //create collection
    models.create({
        email,
        username, 
        password, 
        profileImg, 
        followers, 
        followed,
        posts: [],
        comments: [],
        likes: 0
    }).then((response) => {
            //create user with email and password
            models.createUser({email, password}).then(() => {
                console.log('User created!');
                res.send(response.id);
            });
        })
})

module.exports = router;
