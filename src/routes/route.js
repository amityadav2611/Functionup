const express = require('express');
const logger = require('./logger')

const router = express.Router();

// router.get('/user-profile/:abcd', function(req, res) {
//     console.log(req)
//     console.log(req.params.abcd)
//     res.send('dummy response')
// })

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });

router.get('/movies', function (req,res){
    res.send(['Bahubali','Spiderman','Avengers','Wanted','Sholey'])
})




module.exports = router;
// adding this comment for no reason