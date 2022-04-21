const req = require("express/lib/request")
const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")


const createOrder = async function (req, res) {
    let data = req.body
    let user = data.userId
    let product = data.productId

    let user1 = await UserModel.findById(user)
    if (!user1) {
        return res.send({ message: "Not a valid user id" })
    }
    let product1 = await ProductModel.findById(product)

    if (!product1) {
        return res.send({ message: "Not a valid product id" })
    }

    if (req.isFreeAppUser) {
        data.amount = 0;
        data.isFreeAppUser = req.isFreeAppUser
        let orderCreated = await OrderModel.create(data)
        res.send({ msg: orderCreated })
    }
    else {
        let productPrice = await ProductModel.findById({ _id: data.productId }).select({ price: 1, _id: 0 })
        let productPrice1 = productPrice.price
        let balance = await UserModel.findById({ _id: data.userId })
        if (productPrice1 <= balance.balance) {
            let userBalance = await UserModel.findOneAndUpdate(
                { _id: data.userId },
                { $inc: { balance: - productPrice1 } },
                { new: true }
            )
            data.amount = productPrice1
            data.isFreeAppUser = req.isFreeAppUser
            let orderCreated = await OrderModel.create(data)
            res.send({ msg: orderCreated })
        }
        else {
            res.send({ Error: "Insufficient balance" })
        }
    }
}


module.exports.createOrder = createOrder