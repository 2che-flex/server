'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Stories', 'textHtml',{ 
       type: Sequelize.TEXT('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Stories', 'textHtml');
  }
};
