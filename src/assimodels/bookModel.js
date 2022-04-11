const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    author: String,
    catogory: String,
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('bookList', bookSchema)