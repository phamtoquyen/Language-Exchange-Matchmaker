'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //One chat model belongs to many userAccount.
      ChatModel.belongsTo(models.UserAccount,{
        foreignKey:'senderId'
      }),
      ChatModel.belongsTo(models.UserAccount,{
         foreignKey:'receiverId'
      })

    }
  };
  ChatModel.init({
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ChatModel',
  });

  return ChatModel;
  };