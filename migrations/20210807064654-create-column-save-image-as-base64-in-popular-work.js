'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.addColumn('Warehouses', 'base64',{ 
       type: Sequelize.TEXT
      }); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ 
     await queryInterface.removeColumn('Warehouses', 'base64');
  }
};
