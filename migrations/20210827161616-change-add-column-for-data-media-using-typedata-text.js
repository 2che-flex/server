'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Warehouses', 'imageData',{ 
       type: Sequelize.TEXT('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Warehouses', 'imageData');
  }
};
