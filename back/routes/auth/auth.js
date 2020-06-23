const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {

    const formData = req.body;

    connection.query('INSERT INTO users SET ?' , [formData], (err, results) => {
        if (err) {
            res.status(500).send("User couldn't be added");
        } else {
            res.status(200).send("User has been signed up!");
        }       
    });  
        
});

module.exports = router;
