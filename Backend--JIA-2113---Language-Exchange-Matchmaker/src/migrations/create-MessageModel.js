'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MessageModel', {
      chatId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
//        references: {
//            model: 'UserAccount',
//            key: 'id'
//        }
      },

        text: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
         senderId: {
                    type: Sequelize.INTEGER
                },
        });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MessageModel');
  }
};