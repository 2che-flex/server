'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Contacts', 'phoneNumber',{ 
       type: Sequelize.TEXT
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Contacts', 'phoneNumber');
  }
};
