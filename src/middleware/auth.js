const jwt = require("jsonwebtoken");

const authenticate = function (req, res, next) {
    let authToken = req.headers["x-Auth-token"];

    if(!authToken){
        authToken = req.headers["x-auth-token"]
    }

   if (!authToken) {
      res.send({ status: false, message: "Mandatory authentication header missing" });
    } 
    else {
      let decodedToken = jwt.verify(authToken, "functionup-uranium");
      if (decodedToken) {

        req.user = decodedToken
        
        console.log("Token:- ",decodedToken)
        next();

      } else {
        res.send({ status: false, message: "The authentication token is invalid" });
      }
    }
};

module.exports.authenticate = authenticate;