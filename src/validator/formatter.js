// let myFun = function(){
//     let text = "          FunctionUp"
//     console.log(text.trim());
//     let text1 = "FUNCTIONUP"
//     console.log(text1.toLowerCase());
//     let text2 = "functionup"
//     console.log(text2.toUpperCase())
// }

let trim = function(){
    let text = "        FunctionUp  ";
    console.log(text.trim());
}

let toLowerCase = function(){
    let text1 = "FUNCTIONUP";
    console.log(text1.toLowerCase());
}

let toUpperCase = function(){
    let text2 = "functionup";
    console.log(text2.toUpperCase());
}

module.exports.trimText = trim;

module.exports.tolowercase = toLowerCase;

module.exports.touppercase = toUpperCase;