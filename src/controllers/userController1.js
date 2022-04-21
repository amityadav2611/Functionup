const jwt = require("jsonwebtoken");
const userModel1 = require("../models/userModel1");


//1
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel1.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

//2-a
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel1.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

    //2-b
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"    //secret keys
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

//3
const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  //if token is present then check the valid or not
  let decodedToken = jwt.verify(token, "functionup-uranium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel1.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//4
const updateUser = async function (req, res) {

  let userId = req.params.userId;
 // console.log(userId)
  let user = await userModel1.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  //console.log(userData)
  let updatedUser = await userModel1.findOneAndUpdate({ _id: userId },{$set: userData},{new:true});
  //console.log(updatedUser)
  res.send({ status: updatedUser, data: updatedUser });
};

//5
const deleteUser = async function(req, res){
  let userId = req.params.userId;
  let user = await userModel1.findOneAndUpdate(
    {_id: userId},
    {$set: {isDeleted: true}},
    {new: true}
  )

  res.send({status: true, data: user});
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
