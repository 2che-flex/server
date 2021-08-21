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
      Warehouse.belongsTo(models.Category, { as: 'Works', foreignKey: 'CategoryId' })
      // Warehouse.belongsTo(models.CustomNavbar, { as: 'Category', foreignKey: 'CategoryId' })
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
    base64: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Version base64 from image cannot empty'
        }
      }
    },
    type: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Type Item Cannot empty'
        }
      }
    },
    video_url: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Type Video Url Cannot empty'
        }
      }
    },
    dataUrl: {
      type : DataTypes.BLOB,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Image Cannot empty'
        }
      }
    },
    CategoryId: {
      type : DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
  return Warehouse;
};