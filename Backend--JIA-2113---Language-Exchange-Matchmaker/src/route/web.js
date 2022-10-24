import express from "express";
import homeController from '../controller/homeController';
import multer from 'multer';
import path from 'path';
import userController from '../controller/userController';
var appRoot = require('app-root-path');
let router = express.Router();


let initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    // API
    router.post('/api/login', userController.handleLogin)
    router.post('/Register', userController.handleRegister)
    router.post('/CreateProfile', userController.handleProfileCreation)
  
    return app.use('/', router);
}

export default initWebRoute;