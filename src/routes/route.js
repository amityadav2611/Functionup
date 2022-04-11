const express = require('express');
const router = express.Router();
const bookModel= require("../assimodels/bookModel.js")
const bookController= require("../assicontrollers/bookControllers.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post("/createBookList", bookController.createBookList  )

router.get("/getAllBookData", bookController.getAllBookData)

module.exports = router;