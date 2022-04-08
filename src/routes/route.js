const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)

    res.send('My first ever once again api!')
});

router.post('/candidates', function (req, res){
    //Write a get api that returns a list of candidate names
    const arr1 = ['Amit','Ravi','Arun','Sunil','Sweta','Shivam','Rohit','Rohan','Narendra','Ankit'];
    // console.log(req)
    // comnsole.log(req.query)
    res.send(arr1)
});


router.get('/get-missing' , function(req, res){

    
    let arr = [1,2,3,4,5,7,8]
    //let arr = [33,34,35,37,38,39]
    let n = arr.length + +1;
    let sumOfn = (n * (n+1)) / 2;
    for(let i = 0;i < arr.length;i++){
        
         sumOfn = sumOfn - arr[i];
    }
    let missing = sumOfn;
     res.send('The missing value is: ' + missing)
})

router.get('/', function(req,res){
    let arr1 = [33,34,35,37,38,39]
})

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
    router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let lastDigit= arr.pop()
    let consecutiveSum= lastDigit * (lastDigit+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });

  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
   router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35,36, 38]
    let len= arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });
 
 
module.exports = router;
// adding this comment for no reason
