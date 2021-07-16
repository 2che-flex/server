'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Warehouses', 'CategoryId', {  
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Warehouses', 'CategoryId');
  }
};
