const developersDetails = require('../models/developersModel.js')
const batchesDetails = require('../models/batchesModel.js')


//1
const createBatches = async function(req, res){
    let data = req.body
    let batches = await batchesDetails.create(data)
    res.send({msg: batches})
}

//2
const createDevelopers = async function (req, res){
    let data1 = req.body
    let developers = await developersDetails.create(data1)
    res.send({msg: developers})
}

//3
const getScholarshipDevelopers = async function (req, res){
    let scholarshipDev = await developersDetails.find({ $and: [{gender:"female"},{percentage:{$gte:70}}],})
    res.send({msg: scholarshipDev})

}

//4
const getDevelopers = async function (req, res){
    const prog = await batchesDetails.find({ program: req.query.program }).select({ _id: 1 });
    const progId = prog[0]._id;
    const developer = await developersDetails.find({$and: [{ batch: progId }, { percentage: { $gte: req.query.percentage } }],}).populate("batch");
     res.send({ data: developer});
    

}



// const test = async function (req, res) {
//     //   const input = req.query;
  
//     const developer = await developersDetails.find().populate("batch");
//     res.send({ data: developer });

// }



module.exports.createBatches = createBatches

module.exports.createDevelopers = createDevelopers

module.exports.getScholarshipDevelopers = getScholarshipDevelopers

module.exports. getDevelopers =  getDevelopers

//module.exports.test = test
