const express = require('express');
const router = express.Router();
const models = require('../models/user');
const helper = require('../utils/helper');

router.get('/all', (req, res) => {
    models.all().then(response => {
        const users = response.docs.map(helper.getDataWithId);

         res.json(users);
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    
    models.getById(id).then((user) => {
        const currentUser = helper.getDataWithId(user);
        
        res.send(`User: ${currentUser.username}`)
    });
})

module.exports = router;