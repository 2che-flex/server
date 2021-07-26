'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('CustomNavbars', 'isActive', {  
      type: Sequelize.BOOLEAN
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CustomNavbars', 'isActive');
  }
};
