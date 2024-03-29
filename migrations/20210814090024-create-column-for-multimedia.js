'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.addColumn('Warehouses', 'dataUrl',{ 
       type: Sequelize.BLOB
      }); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ 
     await queryInterface.removeColumn('Warehouses', 'dataUrl');
  }
};
