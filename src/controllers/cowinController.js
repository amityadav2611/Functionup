let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


//1
const getByDistrict = async function (req, res){
    try{
    let district = req.query.district_id 
    let date = req.query.date
    console.log(`here is the district and date: ${district} ${date}`)
    let options = {
        method: "get",
        url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg: data})
}catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

//2-a,b
let getWheather = async function (req, res) {

    try {
        let q = req.query.q
        let appId = req.query.appid
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appId}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        let temp = data.main.temp
        res.status(200).send({ temp: temp, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//2-c
let getSortedCities = async function (req, res){
    try{
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for(let i = 0; i < cities.length; i++){
            let obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=dad456df05b76468b782afc84913db74`
            }
            let resp = await axios(options)
            //console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)

        }
        let sorted = cityObjArray.sort( function(a,b) { return a.temp - b.temp} )
        console.log(sorted)
        res.status(200).send({ status: true, data: sorted})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//3-a
let getAllMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//3-b
const getMemes = async function (req, res){
    try{
    let template = req.query.template_id
    let text1 = req.query.text0
    let text2 = req.query.text1
    let userName = req.query.username
    let password = req.query.password
    console.log(`here is memes details: ${template} ${text1} ${text2} ${userName} ${password}`)
    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text1}&text1=${text2}&username=${userName}&password=${password}`
    }
    let result = await axios(options)
    let data = result.data
    res.status(200).send({msg: data})
}catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp

//1
module.exports.getByDistrict = getByDistrict

//2
module.exports.getWheather = getWheather
module.exports.getSortedCities = getSortedCities

//3
module.exports.getAllMemes = getAllMemes

module.exports.getMemes = getMemes