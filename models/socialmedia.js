'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SocialMedia.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Cannot empty'
        }
      }
    },
    url: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Url Cannot empty'
        }
      }
    },
    base64: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Encode base64 Cannot empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'SocialMedia',
  });
  return SocialMedia;
};