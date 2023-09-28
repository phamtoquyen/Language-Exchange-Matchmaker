import userService from '../Service/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: "Missing username or/and password"
        })

    }
    // Call handleUserLogin to have the value of userData
    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
         errorCode: userData.errCode,
         message: userData.errMessage,
         id: userData.id,
         user: userData.user? userData.user : {}
    })
}

let handleRegister = async (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errorCode: 1,
            message: "Missing username or/and password"
        })

    }
    // Call handleUserLogin to have the value of userData
    let userData = await userService.handleUserRegister(firstName,lastName, email, password)
    console.log(userData.id);

    return res.status(200).json({
         errorCode: userData.errCode,
         message: userData.errMessage,
         id: userData.id,
         user: userData.user? userData.user : {}
    })
}

let handleProfileCreation = async (req, res) => {
    console.log("hi")
    let native_language = req.body.native_language;
    let target_language = req.body.target_language;
    let target_language_proficiency = req.body.target_language_proficiency;
    let age = req.body.age;
    let gender = req.body.gender;
    let profession = req.body.profession;
    let hobby = req.body.hobby;
    // Call handleProfileCreation to have the value of userData
    let userData = await userService.handleProfileCreation(native_language, target_language, target_language_proficiency, age, gender, profession, hobby)
    console.log(userData)
    return res.status(200).json({
         errorCode: userData.errCode,
         message: userData.errMessage,
         user: userData.user? userData.user : {}
    })
}

let handleGetUser = async (req, res) => {
    console.log("Second Check")
    const userId = req.params.userId
    if (userId) {
        let userData = await userService.getUserInfoById(userId)
        return res.send(userData)

    }else {
        return res.send("User not found !");
    }
}

let handleTranslator = async (req, res) => {
    let en = req.body.en;
    let ko = req.body.ko;
    let userData = await userService.handleTranslator(en, ko);
    console.log(userData);
    return res.status(200).json({
        errorCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user? userData.user : {}
    });
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister: handleRegister,
    handleProfileCreation: handleProfileCreation,
    handleGetUser : handleGetUser,
    handleTranslator : handleTranslator
}