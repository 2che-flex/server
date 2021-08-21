'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('HeroSections', 'image_url', {  
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('HeroSections', 'image_url');
  }
};
