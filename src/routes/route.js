const express = require('express');

const router = express.Router();

//    let data = req.body;
//     players.filter((item) => {
//         if(item.name === data.name) return res.send({msg: "Player does not exist"});
//     })
//     players.push(data);
//     //return res.send(players);
//     //console.log(players);
    
//    return  res.send(  { data: players , status: true }  )
// 

router.get('/test-me', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send( { msg: "My first ever API response in JSON !!"} )
});



router.get('/test-api1', function (req, res) {

    res.send( "hi FunctionUp " )
});


router.get('/test-api2', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again !"} )
});


router.get('/test-api3', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api !"} )
});


router.get('/test-api4', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!"} )
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});



router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});


// const randomController= require("../controllers/randomController.js")
// //write a post request to accept an element in post request body and add it to the given array and return the new array
// router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER


// Assignment problem
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]


   router.post('/players', function (req, res) {
 
    //LOGIC WILL COME HERE

     let data = req.body.name
    console.log(data)

    for(let i = 0; i <= players.length;i++){

        if(data  !== players[i].name){
            players.push(req.body)
            res.send(  { data: players , status: true }  )
           
        }else{
            res.send( {player : data + " " + "This player already exist"} )
            
        }
    }
});

module.exports = router;
