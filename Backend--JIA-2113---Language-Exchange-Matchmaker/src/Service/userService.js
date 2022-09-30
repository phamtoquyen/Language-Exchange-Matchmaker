import db from '../models/index';
import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            // Return obj to Controller and the Controller will response to the user
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist){
                //use already exists
                //Then, compare password
                //1. Check again if later there someone delete that user in the database after we check
                let user = await db.User.findOne({
                    where: {email: email}
                });
                if (user){
                    //Compare password, using bycrypt lib
                    let check = await bcrypt.compareSync(password, user.password);
                    if (check){
                        userData.errCode = 0;
                        userData.errMessage = 'Password matched!'
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong Password!'
                    }
                }else {
                    userData.errCode = 2;
                    userData.errMessage = 'Username was no longer exist!'
                }
            }else {
                /*userDate object {
                errCode: 1
                errMessage: "username not exist"
                }
                */
                userData.errCode = 1;
                userData.errMessage = 'Your email not exist!'
            }
            resolve(userData);
        }catch(e){
            reject(e)
        }
    })
}

let handleUserRegister = (firstName, lastName, email, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            // Return obj to Controller and the Controller will response to the user
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist){
                //use already exists
                //Then, compare password
                //1. Check again if later there someone delete that user in the database after we check
                userData.errCode = 1;
                userData.errMessage = 'User already exists';
            }
            else {
                /*userDate object {
                errCode: 1
                errMessage: "username not exist"
                }
                */
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                let user = await db.User.create({
                    email: email,
                    password: hash,
                    phonenumber: '',
                    firstName: firstName,
                    lastName: lastName,
                    address: '',
                    gender: 0, // 0 - F and 1 - M
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                console.log(user.lastName);
                userData.errCode = 0;
                userData.errMessage = 'Successfully Registered';
                }
            resolve(userData);
    
        }catch(e){
            reject(e)
        }
    })
}


let checkUserEmail = (userEmail) => {
    return new Promise (async (resolve, reject) => {
        //findOne() --> return undefine if no user found
        try{
            let user = await db.User.findOne({
                where: {email : userEmail}
            })
            console.log(userEmail)
            if (user){
                resolve(true)
            }else {
                resolve(false)
            }
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
handleUserLogin, checkUserEmail, handleUserRegister
}