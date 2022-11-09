'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MessageModel', {
      chatId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
       senderId: {
            type: Sequelize.INTEGER
       },
        text: {
            type: Sequelize.STRING
        },
        timeStamp: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MessageModel');
  }
};