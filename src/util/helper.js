let printDate = function(){
    let today = new Date();
    //console.log( +today.getDate()+'-'+(today.getMonth()+1)+' Thorium, W3D1, the topic for today is Nodejs module system');
    console.log(today)
}

let printMonth = function(){
    let month = new Date();
    console.log(month.getMonth()+1);
}

let getBatchInfo = function(){
    console.log("Uranium, W3D4, the topic for today is Nodejs module system")
}

module.exports.printdate = printDate;

module.exports.printmonth = printMonth;

module.exports.getbatchinfo = getBatchInfo;