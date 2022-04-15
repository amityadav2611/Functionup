const newPublisherModel = require('../models/publisherModel.js')

const createPublisherData = async function (req, res){
    let publisherdata = req.body
    let publishercreatedata = await newPublisherModel.create(publisherdata)
    res.send({ msg: publishercreatedata})
}

const getPublisherData = async function(req, res){
    let publisher = await newPublisherModel.find()
    res.send({ data: publisher})
}

module.exports.createPublisherData = createPublisherData;

module.exports.getPublisherData = getPublisherData;