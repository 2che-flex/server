'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Story.init({
    textHtml: {
      type : DataTypes.TEXT('long'),
      validate : {
        notEmpty :{
          args : true,
          msg : 'Text HTML Cannot empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};