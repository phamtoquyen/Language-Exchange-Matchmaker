import MessageModel from'../models/MessageModel';
import messageService from'../Service/messageService';
let addMessage = async (req, res) => {
    let chatId = req.body.chatId;
    let senderId = req.body.senderId;
    let text = req.body.text;
    console.log(chatId)
    console.log(senderId)
    console.log(text)

    let message = await messageService.handleMessageModel(chatId, senderId, text)
     return res.status(200).json({
             message: message.errMessage,
             messageData: message.data? message.data : {}
     })
}

module.exports = {
    addMessage: addMessage
}