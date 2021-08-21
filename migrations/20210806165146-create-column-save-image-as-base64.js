'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     */
     await queryInterface.addColumn('SocialMedia', 'base64',{ 
       type: Sequelize.TEXT
      }); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     */ 
     await queryInterface.removeColumn('SocialMedia', 'base64');
  }
};
