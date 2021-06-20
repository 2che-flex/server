'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Warehouse.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Item Cannot Empty'
        }
      }
    },
    description: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Description Item Cannot Empty'
        }
      }
    },
    url: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Url Item cannot empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};