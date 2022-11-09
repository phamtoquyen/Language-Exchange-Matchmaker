import userService from '../service/MessageService';

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