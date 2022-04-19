const mid1 = function (req, res, next){
    console.log("Hi I am a middleware named mid1")
    next()
}

const mid2 = function (req, res, next){
    console.log("Hi I am a middleware named mid2")
    next()
}

const mid3 = function (req, res, next){
    console.log("Hi I am a middleware named mid3")
    next()
}

const mid4 = function (req, res, next){
    console.log("Hi I am a middleware named mid4")
    next()
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4