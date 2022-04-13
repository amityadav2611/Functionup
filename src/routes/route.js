const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getBookList", BookController.bookList)

router.get("/getbooksinYear", BookController.booksinYear)

router.get("/getParticularBooks", BookController.getParticularBooks)

router.get("/getXINRBooks", BookController.xINRBooks)

router.get("/getRandomBooks", BookController.randomBooks)



module.exports = router;