const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
//Write a get api that returns a list of candidate names
    const candidates = ['Amit','Ravi','Arun','Sunil','Sweta','Shivam','Rohit','Rohan','Narendra','Ankit'];
    
    res.send('My first ever once again api!')
});




module.exports = router;
// adding this comment for no reason