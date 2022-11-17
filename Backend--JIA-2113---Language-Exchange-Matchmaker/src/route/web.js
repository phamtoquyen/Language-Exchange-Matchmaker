import express from "express";
import homeController from '../controller/homeController';
import multer from 'multer';
import path from 'path';
import userController from '../controller/userController';
import dashBoardController from '../controller/dashBoardController';
import messageController from '../controller/messageController';
var appRoot = require('app-root-path');
let router = express.Router();


let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    // API
    router.post('/api/login', userController.handleLogin)
    router.post('/Register', userController.handleRegister)
    router.post('/CreateProfile', userController.handleProfileCreation)
    router.post('/Dashboard', dashBoardController.handleDashBoard)
    router.post('/Message', messageController.addMessage)
    return app.use('/', router);
    //Message Routes

//    route.get('/Message/chatId', getMessages)
}

export default initWebRoute;