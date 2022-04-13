const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        unique: true,
        required: true
    }, 
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    tags: [String],
    authorName: String, 
    
   // sales: {type: Number, default: 10}
   totalPages: Number,
   stockAvailable: Boolean,
   publishedYear: Number
}, { timestamps: true });


module.exports = mongoose.model('Bookdb', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
