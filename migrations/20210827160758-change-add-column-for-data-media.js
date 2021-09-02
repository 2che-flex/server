'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Warehouses', 'image',{ 
       type: Sequelize.BLOB('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('Warehouses', 'image');
  }
};
