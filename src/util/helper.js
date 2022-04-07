let date = function(){
    let today = new Date();
    console.log( +today.getDate()+'-'+(today.getMonth()+1)+' Thorium, W3D1, the topic for today is Nodejs module system');
}
module.exports.printDate = date;