'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('MessageModel', {
        fields: ["senderId"],
        type: 'foreign key',
        name: 'user-chat-association',
        references: {
            table: 'UserAccount',
            field: 'id'
        }
    });
  },

  async down (queryInterface, Sequelize) {
  queryInterface.removeConstraint('MessageModel', 'user-chat-association');
  }
};