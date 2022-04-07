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
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    console.log(_.chunk(month,2));
    res.send('My first ever api!')
});
module.exports = router;
// adding this comment for no reason