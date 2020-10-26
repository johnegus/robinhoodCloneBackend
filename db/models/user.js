'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    cashValue: DataTypes.INTEGER,
    investmentsValue: DataTypes.INTEGER,
    password: {type: DataTypes.STRING.BINARY, allowNull: false},
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};