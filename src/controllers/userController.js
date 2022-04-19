const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


const basicCode = async function (req, res){
    console.log("hey man, congrats you have reached the handler")
    const date = new Date()
    console.log("Time:", date, req.ip, req.path);
    res.send({msg: "This is coming from controller {handlers}"})
}

module.exports.basicCode = basicCode


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData