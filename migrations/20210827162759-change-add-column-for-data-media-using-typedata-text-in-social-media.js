'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('SocialMedia', 'imageData',{ 
       type: Sequelize.TEXT('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('SocialMedia', 'imageData');
  }
};
