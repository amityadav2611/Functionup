const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "AuthorData"
    },
    price: Number,
    rating: Number,
    publisher: {
        type: ObjectId,
        ref: "publisherData"
    } 
}, { timestamps: true} );

module.exports = mongoose.model('BookData', bookSchema)

