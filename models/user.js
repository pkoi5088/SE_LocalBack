'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    userID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    userPW:{
      type: DataTypes.STRING,
      allowNull: false
    },
    userName:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    timestamps: false,
    charset: "utf8"
  });
  User.associate = function(models){
    
  }
  return User;
};