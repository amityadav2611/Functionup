const bookModel= require("../assimodels/bookModel.js")

const createBookList= async function (req, res) {
    let data= req.body
    let savedBookData= await bookModel.create(data)
    res.send({msg: savedBookData})
}

const getAllBookData= async function (req, res) {
    let allBookList= await bookModel.find()
    res.send({msg: allBookList})
}

module.exports.createBookList= createBookList
module.exports.getAllBookData= getAllBookData