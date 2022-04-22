const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
 try{
   let getUserData = req.body;
   if(Object.keys(getUserData).length == 0)
   return res.status(400).send({status: false, msg: "User details is required to create account"})
  let showData = await userModel.create(getUserData);
  res.status(201).send({status: true, data: showData});
 }catch(err){
   res.status(500).send({status: false, msg: err.message})
 }
};


const loginUser = async function (req, res) {
  try{

    // let userName = req.body.emailId;
    // let password = req.body.password;

    let email = req.body.emailId;
    let password = req.body.password;
    if(!email && !password) 
    return res.status(400).send({status: false, msg: "Email and password is required!"});

    let user = await userModel.findOne({ emailId: email, password: password });
    if (!user){
      return res.status(401).send({status: false, msg: "Email or password is not correct",})
    }

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "uranium",
      organisation: "FUnctionUp",
    },
    "functionup-uranium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: "Logged in Successfully" });
  }catch(err){
    res.status(500).send({status : false, msg: err.message})
  }
};

const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    if(!userId) return res.status(400).send({status: false, msg: "UserId is required"});

    let userData = await userModel.findById(userId);
    if(!userData){
      return res.status(404).send({status: false, msg: "No such user exists"})
    }
    res.status(200).send({status: true, data: userData});
  }catch(err){
    res.status(500).send({status: false, msg: err.message});
  }
};



const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  if(!userId) return res.status(400).send({status: false, msg:'UserId is required'});

  let user = await userModel.findById(userId);
  if(!user){
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  if(Object.keys(userData).length == 0)
   return res.status(400).send({status: false, msg: 'User details is required to update user account'})

  let updatedUser = await userModel.findOneAndUpdate(
    {_id: userId},
    {$set: userData},
    {new: true},
  );
  res.status(200).send({status: true, data: updatedUser});
}catch (err){
  res.status(500).send({status: false, msg: err.message});
}
};

const deleteUser = async function(req, res){
  try{
    let userId = req.params.userId;
    if(!userId) return res.status(400).send({status: false, msg: 'UserId is required'});

    let getUserId = await userModel.findById(userId);
    if(!getUserId){
      return res.status(404).send("No such user exists");
    }
    let user = await userModel.findOneAndUpdate(
      {_id: userId},
      {$set: {isDeleted: true}},
      {new: true}
    )

    res.status(200).send({status: true, data: user});
  }catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
}
// const postMessage = async function (req, res) {
//     let message = req.body.message
//     // Check if the token is present
//     // Check if the token present is a valid token
//     // Return a different error message in both these cases
//     let token = req.headers["x-auth-token"]
//     if(!token) return res.send({status: false, msg: "token must be present in the request header"})
//     let decodedToken = jwt.verify(token, 'functionup-thorium')

//     if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
//     //userId for which the request is made. In this case message to be posted.
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId

//     //userId comparision to check if the logged-in user is requesting for their own data
//     if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

//     let user = await userModel.findById(req.params.userId)
//     if(!user) return res.send({status: false, msg: 'No such user exists'})
    
//     let updatedPosts = user.posts
//     //add the message to user's posts
//     updatedPosts.push(message)
//     let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

//     //return the updated user document
//     return res.send({status: true, data: updatedUser})
// }

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
//module.exports.postMessage = postMessage
