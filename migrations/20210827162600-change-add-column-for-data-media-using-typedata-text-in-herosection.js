'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('HeroSections', 'imageData',{ 
       type: Sequelize.TEXT('long')
      }); 
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('HeroSections', 'imageData');
  }
};
