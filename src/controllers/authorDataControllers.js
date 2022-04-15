const AuthorControllerModel = require('../models/authorDataModel.js')

const createAuthorData = async function (req, res){
    let authordata = req.body
    let authorcreatedata = await AuthorControllerModel.create(authordata)
    res.send({ msg: authorcreatedata})
}

const getAuthorData = async function(req, res){
    let authorget = await AuthorControllerModel.find()
    res.send({ data: authorget})
}

module.exports.createAuthorData = createAuthorData;

module.exports.getAuthorData = getAuthorData;