import db from '../models/index';
import bcrypt from 'bcryptjs';

let user_id = null
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try{
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist){
                //use already exists
                //Then, compare password
                //1. Check again if later there someone delete that user in the database after we check
                let UserAccount = await db.UserAccount.findOne({
                    where: {email: email}
                });
                if (UserAccount){
                    //Compare password, using bycrypt lib
                    let check = await bcrypt.compareSync(password, UserAccount.password);
                    if (check){
                        userData.errCode = 0;
                        userData.errMessage = 'Password matched!'
                        userData.UserAccount = UserAccount;
                        user_id = UserAccount['dataValues']['id']
                        userData.id =  user_id
                        console.log(user_id)
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
                //user already exists
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
                let UserAccount = await db.UserAccount.create({
                    email: email,
                    password: hash,
                    firstName: firstName,
                    lastName: lastName,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
                console.log(UserAccount.lastName);
                userData.errCode = 0;
                userData.errMessage = 'Successfully Registered';
                user_id = UserAccount['dataValues']['id']
                userData.id = user_id
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
            let user = await db.UserAccount.findOne({
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

let handleProfileCreation = (native_language, target_language, target_language_proficiency, age, gender, profession, hobby) => {
    return new Promise(async (resolve, reject) => {
        try{
            let userData = {};

            let userProfile = await db.UserProfile.create({
                id: user_id,
                native_language: native_language,
                target_language: target_language,
                target_language_proficiency: target_language_proficiency,
                age: age,
                gender: gender,
                profession: profession,
                hobby: hobby
            });
            console.log("hi");
            userData.errCode = 0;
            userData.errMessage = 'Profile Successfully Created!';
            resolve(userData);
        }catch(e){
            reject(e)
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise (async (resolve, reject) => {
        try{
            let user = await db.UserAccount.findOne({
                where: {id: userId}
            })
            console.log(userId)
            if (user){
                resolve(user);
            }else {
                resolve([]);
            }
        }catch(e){
            reject(e);
        }
    })
}

let handleTranslator = (en, ko) => {
    return new Promise (async (resolve, reject) => {
        try {
            let userTranslation = await db.UserTranslations.create({
                en: en,
                ko: ko
            });
            console.log("translation");
        } catch(e) {
            reject(e);
        }
    })
}

module.exports = {
handleUserLogin, checkUserEmail, handleUserRegister, handleProfileCreation, getUserInfoById, handleTranslator
}