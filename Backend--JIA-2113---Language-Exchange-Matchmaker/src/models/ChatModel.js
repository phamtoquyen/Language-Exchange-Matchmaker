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
  ChatModel.init({
    memberID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        get() {
            return this.getDataValue('memberID').split(';')
        },
        set(val) {
           this.setDataValue('memberID',val.join(';'));
        },
    }
  }, {
    sequelize,
    modelName: 'ChatModel',
  });
  return ChatModel;
};