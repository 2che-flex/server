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
      CustomNavbar.belongsTo(models.Category, { as: 'Category' })
    }
  };
  CustomNavbar.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Navbar Cannot empty'
        }
      }
    },
    CategoryId: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Category Cannot empty'
        }
      }
    },
    isActive: {
      type : DataTypes.BOOLEAN,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Is active Cannot empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'CustomNavbar',
  });
  return CustomNavbar;
};