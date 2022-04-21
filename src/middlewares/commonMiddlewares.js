const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")

const mid1= function ( req, res, next) {
    //console.log("Hi I am a middleware named Mid4")
    //counter
    if(req.headers["isfreeappuser"] === undefined) {
        res.send({Error: "The request is missing a mandatory header"})
    } else if (req.headers["isfreeappuser"] === 'true') {
        req.isFreeAppUser  = true
        next();
    } else if (req.headers["isfreeappuser"] === 'false') {
        req.isFreeAppUser  = false
        next();
    } else {
        res.send({Error: "isfreeappuser can be either true or false"})
    };
}

 module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
//module.exports.mid4= mid4
