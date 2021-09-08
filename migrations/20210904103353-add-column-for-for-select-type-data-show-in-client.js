'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('HeroSections', 'show',{ 
       type: Sequelize.STRING
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('HeroSections', 'show');
  }
};
