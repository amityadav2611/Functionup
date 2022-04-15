const bookControllerModel = require('../models/bookDataModel.js')

const createBookData = async function (req, res){
    let bookdata = req.body
    let bookcreatedata = await bookControllerModel.create(bookdata)
    res.send({ msg: bookcreatedata})
}

const getBookData = async function(req, res){
    let bookget = await bookControllerModel.find()
    res.send({ data: bookget})
}

module.exports.createBookData = createBookData;

module.exports.getBookData = getBookData;