'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomNavbar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CustomNavbar.belongsTo(models.Category, { as: 'Works', foreignKey: 'CategoryId' })
    }
  };
  CustomNavbar.init({
    name: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CustomNavbar',
  });
  return CustomNavbar;
};