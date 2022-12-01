import matchingService from '../Service/matchingService';

let handleMatchingFriends = async (req, res) => {
  let id = req.body.id
  let userNative = req.body.userNative
  let userTarget = req.body.userTarget

   // Call handleUserLogin to have the value of userData
  let userData = await matchingService.checkFriends(id, userNative, userTarget)
  userData.forEach(stat => {
    console.log(stat.id);
    // we could put ids into an array here, but we want first names. How can we get first names? from user account 
});
  
  return res.status(200).json({
       errorCode: userData.errCode,
       message: userData.errMessage,
       user: userData.user? userData.user : {}
  })
}

module.exports = {
  handleMatchingFriends: handleMatchingFriends
}