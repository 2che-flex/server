'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.addColumn('CustomNavbars', 'active',{ 
       type: Sequelize.STRING
      }); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ 
     await queryInterface.removeColumn('CustomNavbars', 'active');
  }
};
