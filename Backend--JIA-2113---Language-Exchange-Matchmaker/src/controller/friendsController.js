import FriendsModel from'../models/FriendsModel';
import friendsService from'../Service/friendsService';
let createFriends = async (req, res) => {
    let user1_ID = req.body.user1_ID;
    let user2_ID = req.body.user2_ID;
    let message = await friendsService.handleFriendsModel(user1_ID, user2_ID)
     return res.status(200).json({
             message: message.errMessage,
             messageData: message.data? message.data : {}
     })
}

let findFriends = async (req, res) => {
    let userId = req.params.userId
    console.log("check userId >>>>", userId)
    let messageData = await friendsService.handleFindFriends(userId)
    return res.status(200).json({
        message: messageData.errMessage,
        chatsData: messageData.data? messageData.data : {}
    })
}

let findChat = async (req, res) => {
    let senderId = req.params.senderId
    let receiverId = req.params.receiverId

    console.log("check userId >>>>", senderId, receiverId)
    let messageData = await chatService.handleFindChat(senderId, receiverId)
    return res.status(200).json({
        message: messageData.errMessage,
        chatsData: messageData.data? messageData.data : {}
    })
}


module.exports = {
    createChat: createChat,
    findChats: findChats,
    findChat: findChat
}