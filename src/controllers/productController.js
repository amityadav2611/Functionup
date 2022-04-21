const req = require("express/lib/request")
const ProductModel= require("../models/productModel")

const createProduct= async function(req,res){
    let data= req.body
    let product= await ProductModel.create(data)

    res.send({msg: product})
}

module.exports.createProduct= createProduct