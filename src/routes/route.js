const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// const authorControllerData = require("../controllers/authorDataControllers")
// const publisherControllerData = require("../controllers/publisherControllers")
const bookControllerData = require("../controllers/bookDataControllers.js")

const controller1= require("../controllers/controllers1")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// router.post("/createAuthors", authorControllerData.createAuthorData)
// router.get("/getauthordatas", authorControllerData.getAuthorData)

// router.post("/createPublisher", publisherControllerData.createPublisherData)
// router.get("/getPublisher", publisherControllerData.getPublisherData)

// router.post("/createBookData", bookControllerData.createBookData)
// router.get("/getBookData", bookControllerData.getBookData)

router.post("/createAuthor", controller1.createAuthorData  )
router.post("/createPublisher", controller1.createPublisherData)
router.post("/createBook", controller1.createBookDatas  )
router.get("/getAllBooks", controller1.getBookWithAuthorPublisher)
router.put("/books/:name", controller1.hardCover)



module.exports = router;