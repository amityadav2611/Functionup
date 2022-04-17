const AuthorControllerModel = require('../models/authorDataModel.js')
const newPublisherModel = require('../models/publisherModel.js')
const bookControllerModel = require('../models/bookDataModel.js')


//1
const createAuthorData = async function (req, res){
    let author = req.body
    let authorcreatedata = await AuthorControllerModel.create(author)
    res.send({ msg: authorcreatedata})
}

//2
const createPublisherData = async function (req, res){
    let publisher = req.body
    let publishercreatedata = await newPublisherModel.create(publisher)
    res.send({ msg: publishercreatedata})
}

//3
const createBookDatas = async function(req, res){
    let bookdata = req.body

    if(bookdata.author == null || bookdata.publisher == null){
        res.send( {Error: "All details required "})
    }
    else{
        let author1 = await AuthorControllerModel.find().select({_id:1})
        let publisher1 = await newPublisherModel.find().select({_id:1})


        for(let i = 0; i < author1.length;i++){
            let a = author1[i]._id == bookdata.author
            if(a){
                for(let j = 0; j < publisher1.length; j++){
                    let b = publisher1[j]._id == bookdata.publisher
                    if(b){
                        let bookCreated = await bookControllerModel.create(bookdata)
                        res.send({ msg: bookCreated})
                        return
                    }
                }
                res.send({ msg: "Publisher not found" })

                return
            }
        }
        res.send({ msg: "Author not found"})
    }

}


//4
const getBookWithAuthorPublisher = async function (req, res){
    let allBook = await bookControllerModel.find().populate('author').populate('publisher')
    res.send({ data: allBook})
}


//------------Fifth-----------------------
const hardCover = async function(req, res){
    let data= req.params.name
    //console.log(data)
    let publisherId= await newPublisherModel.findOne({name: data}).select({_id:1})
    //console.log(publisherId)
    let updateBook= await bookControllerModel.updateMany(
        {publisher: publisherId},
        {$set: {isHardCover: true}}
    )

    let authorId= await AuthorControllerModel.find({rating: {$gt: 3.5}})
    //console.log(authorId)
    let updatePrice= await bookControllerModel.updateMany(
        {author: authorId},
        {$inc: {price: 10}}
    )

    res.send({msg: updateBook, updatePrice})
}



module.exports.createAuthorData = createAuthorData;

module.exports.createPublisherData = createPublisherData;

module.exports.createBookDatas = createBookDatas;

module.exports.getBookWithAuthorPublisher = getBookWithAuthorPublisher

module.exports.hardCover= hardCover