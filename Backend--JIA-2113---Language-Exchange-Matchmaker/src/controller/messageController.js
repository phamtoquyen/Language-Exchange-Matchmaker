//import dashboardService from '../Service/MessageService';
//import db from '../models/index';
//
//let createMessage = async (req, res) => {
//    const messageData = MessageModel.build({
//        members: [req.body.senderId, res.body.receiverId]
//    });
//
//    try{
//        const result = await messageData.save();
//        res.status(200).json(result);
//
//    }catch(error){
//        res.status(500).json(error)
//    }
//}
//
//let handleUserChats = async(req, res) => {
//    try{
//        const chat = await MessageModel.find({
//            members: {$in: [req.params.userId]}
//        })
//        res.status(200).json(chat)//type of an array since one person can have many chats
//
//    }catch(error){
//        res.status(500).json(error)
//    }
//}
//
//let handleFindChat = async(req, res) => {
//    try{
//        const chat = await MessageModel.findOne({
//            members: {$all: [req.params.firstId, req.params.secondId]}
//        })
//            res.status(200).json(chat)
//    }catch(error){
//        res.status(500).json(error)
//    }
//}
//
//module.exports = {
//    createMessage: createMessage
//    handleUserChats: handleUserChats
//    handleFindChat: handleFindChat
//}