const express = require('express');

const logger = require("../logger/logger.js");
const todaydate = require('../util/helper.js');
const textrim = require('../validator/formatter.js')
const _ = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    logger.welcome();
    res.send('This is problem first and its solve')
});

router.get('/test-me2', function (req, res) {
    todaydate.printDate();
    res.send('Today date is successfully display');
});
router.get('/test-me3', function (req, res) {
    textrim.trim();
    res.send('text are successfully trim,tolowercase and touppercase')
});

router.get('/hello', function (req, res) {
    /*****4th ques (A) ******************/
    const month = 
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'  
    ]
   
    console.log(_.chunk(month, 3));

    res.send('My first Api!');

    /*****4th ques (B) ******************/
    const oddNum = [1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddNum));


/*****4th ques (C) ******************/
    const arr1 = [1,2,3,45,5];
    const arr2 = [11,10,3,45,5];
    const arr3 = [1,20,3,45,5];
    const arr4 = [15,21,35,45,5];
    const arr5 = [1,20,30,45,5];

    console.log(_.union(arr1,arr2,arr3,arr4,arr5));

    /*****$th ques (D) ******************/

    let createObj = [
        ['name', 'Amit'], 
        ['live', 'Agra'], 
        ['used', 'nodejs']
    ]
      
    let obj = _.fromPairs(createObj);
      
    console.log(obj)
});
module.exports = router;
// adding this comment for no reason