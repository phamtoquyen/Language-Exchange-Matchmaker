import axios from '../Utils/axios';

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword}) ;
}

const handleRegisterApi= (firstName, lastName, Email, userPassword) => {
    return axios.post('/Register', {firstName: firstName, lastName: lastName, email: Email, password: userPassword}) ;
}

const handleProfileCreationAPI = (native_language, target_language, target_language_proficiency, age, gender, profession, hobby) => {
    return axios.post('/CreateProfile', {native_language: native_language, target_language: target_language, target_language_proficiency: target_language_proficiency, age: age, gender: gender, profession: profession, hobby: hobby}) ;
}
//return
const handleChatApi = (senderId) => {
    return axios.get(`/Chats/${senderId}`)
}

const handleGetUser = (receiverId) => {
    return axios.get(`/api/getUser/${receiverId}`)
}

const getMessages = (chatId) => {
    return axios.get(`/Message/${chatId}`)
}

const addMessage = (data) => {
    return axios.post(`/Message/`, data)
}

const handleTranslator = (en, ko) => {
    return axios.post('/Translator', {en: en, ko: ko});
}





export {handleLoginApi, handleRegisterApi, handleProfileCreationAPI, handleChatApi, handleGetUser, getMessages, addMessage, handleTranslator}