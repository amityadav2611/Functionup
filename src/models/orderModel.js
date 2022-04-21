const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const date = new Date();
const dateStr = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

const orderSchema = new mongoose.Schema( {
    // Write the schema content
    userId:{
        type: ObjectId,
        ref: "User"
    },
    productId:{
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser :{
        type: Boolean,
        default: false
    } ,
    date: {
        type: String,
        default: dateStr
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 
