let myFun = function(){
    let text = "          FunctionUp"
    console.log(text.trim());
    let text1 = "FUNCTIONUP"
    console.log(text1.toLowerCase());
    let text2 = "functionup"
    console.log(text2.toUpperCase())
}
module.exports.trim = myFun;