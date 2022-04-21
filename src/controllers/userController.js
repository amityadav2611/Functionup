const req = require("express/lib/request")
const UserModel= require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")

const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)
    //counter
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    
    }

// const createProduct = async function(req,res){
//     let requestBody1 = req.body
//     let Product = await ProductModel.create(requestBody1)
//     res.send({msg: Product})
// }

// const createAUser = async function(req, res){
//     let requestBody2 = req.body
//     let User = await UserModel.create(requestBody2)
//     res.send({msg: User})
// }

const createOrder = function(req, res) {
    let requestBody = req.body
     let headers  = req.headers
    console.log(requestBody)
    

    //Printing all the headers before modification - addition of a new header called 'month'
    console.log('Request headers are before: ', headers)

    //Accessing a request header called 'batch'
    let batchHeader = headers["batch"] // headers.batch 
    
    ///Accessing a request header called 'content-type'
    let contentHeader = headers['content-type'] // headers.content-type

    console.log('Content Type hedser is: ',contentHeader)
    console.log('Batch header is: ', batchHeader)

    //Adding a new requets header
    req.headers["month"] = 'April' //req.headers.month = 'April' or req.headers["month"] = 'April'


    //Printing the headers after modification - addition of a new header called 'month'
    console.log('Request headers are after: ', headers)


    console.log('Request property called current-day', req['current-day'])
    
    //Adding a response header
    res.header('year', '2022')

    res.send('Just create a user')
}

//module.exports.createAUser = createAUser
module.exports.basicCode = basicCode

//module.exports.createProduct = createProduct

//module.exports.createOrder = createOrder

















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode