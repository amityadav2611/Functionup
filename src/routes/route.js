const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")

const userController1 = require("../controllers/userController1")
const midd = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController1.createUser  )

router.post("/login",userController1.loginUser)

//The userId is sent by front end
router.get("/users/:userId",midd.authenticate, userController1.getUserData)

router.put("/users/:userId",midd.authenticate, userController1.updateUser)

router.delete("/users/:userId", midd.authenticate, userController1.deleteUser)

module.exports = router;