'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CustomNavbars', 'isActive', {  
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('CustomNavbars', 'isActive');
  }
};
