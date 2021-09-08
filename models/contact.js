'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // define association here
    }
  };
  Contact.init({
    name:  {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Name Category Cannot empty'
        }
      }
    },
    phone_number:  {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Phone Number Contact Cannot empty'
        }
      }
    },
    role:  {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Role Contact Cannot empty'
        }
      }
    },
    email:  {
      type : DataTypes.STRING,
      validate : {
        notEmpty :{
          args : true,
          msg : 'Email Contact Cannot empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};