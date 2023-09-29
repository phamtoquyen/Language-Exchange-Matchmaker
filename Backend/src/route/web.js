import express from "express";
import homeController from '../controller/homeController';
import multer from 'multer';
import path from 'path';
import userController from '../controller/userController';
import dashBoardController from '../controller/dashBoardController';
import messageController from '../controller/messageController';
import chatController from '../controller/chatController';
import friendsController from '../controller/friendsController';
import matchingController from '../controller/matchingController';
var appRoot = require('app-root-path');
let router = express.Router();


let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    // API
    router.post('/api/login', userController.handleLogin)
    router.get('/api/getUser/:userId', userController.handleGetUser)
    router.post('/Register', userController.handleRegister)
    router.post('/Translator', userController.handleTranslator)
    router.post('/CreateProfile', userController.handleProfileCreation)
    router.post('/Dashboard', dashBoardController.handleDashBoard)
    router.post('/findFriends', friendsController.findFriends)

    router.post('/findMatch', matchingController.handleMatchingFriends)
    router.get('/api/getProfile/:userId', userController.handleGetProfile)



    //Chat routes
    router.post('/Chat', chatController.createChat)
    router.get('/Chats/:userId', chatController.findChats)
    router.get('/Chat/:senderId/:receiverId', chatController.findChat)
    //Message Routes
    router.post('/Message', messageController.addMessage)
    router.get('/Message/:chatId', messageController.findMessages)
    return app.use('/', router);


//    route.get('/Message/chatId', getMessages)
}

export default initWebRoute;