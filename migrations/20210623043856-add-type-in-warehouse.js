'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Warehouses', 'type', {  
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('Warehouses', 'type');
  }
};
