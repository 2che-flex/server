'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  HeroSection.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Title Video Cannot empty'
        }
      }
    },
    video_url: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Url Video Cannot empty'
        }
      }
    },
    desc: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Description Video Cannot empty'
        }
      }
    },
    image_url: {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Description Image Cannot empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'HeroSection',
  });
  return HeroSection;
};