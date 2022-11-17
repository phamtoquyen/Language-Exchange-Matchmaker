'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessageModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //One chat mode --> many messageModel
    models.ChatModel.belongsTo(MessageModel,{
        foreignKey:'chatId'
    })
    models.UserAccount.belongsTo(MessageModel, {
        foreignKey: 'senderId'
    })
    }
  };
  MessageModel.init({
    senderId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MessageModel',
  });
  return MessageModel;
};