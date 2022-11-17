import db from '../models/index';

let handleMessageModel = (chatId, senderId, text) => {
     return new Promise(async (resolve, reject) => {
            try{
            console.log(">>>> Check messageModel ");
                let message = {};
                let messageModel = await db.MessageModel.create({
//                    chatId: chatId,
                    senderId: senderId,
                    text: text,
                    createdAt: new Date(),
                    updatedAt: new Date()
                });

                message.errMessage = 'Successfully Added!';
                message.data = messageModel;
                resolve(message);
            }catch(e){
                reject(e)
            }
        })
}


module.exports = {handleMessageModel}