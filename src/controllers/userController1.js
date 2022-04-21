const req = require("express/lib/request")
const UserModel = require("../models/userModel")

const createUser = async function(req, res){
    let data= req.body
    let user= await UserModel.create(data)

    res.send({msg: user})
}

module.exports.createUser= createUser