'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('CustomNavbars', 'textHtml',{ 
       type: Sequelize.TEXT('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('CustomNavbars', 'textHtml');
  }
};
