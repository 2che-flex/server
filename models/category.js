'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Warehouse, { as: 'Works', foreignKey: 'CategoryId' })
      // Category.hasOne(models.CustomNavbar, { as: 'Category' })
    }
  };
  Category.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Category Cannot empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};