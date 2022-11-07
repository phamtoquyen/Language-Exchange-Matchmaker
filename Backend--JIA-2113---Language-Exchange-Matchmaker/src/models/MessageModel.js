'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  MessageModel.init({
    chatId: DataTypes.STRING,
    senderId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    timeStamp: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'MessageModel',
  });
  return UserAccount;
};