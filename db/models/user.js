'use strict';
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    cashValue: DataTypes.NUMERIC,
    investmentsValue: DataTypes.NUMERIC,
    hashedPassword: {type: DataTypes.STRING.BINARY, allowNull: false},
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Watchlist, { foreignKey: 'userId'});
    User.hasMany(models.Position, { foreignKey: 'userId'});
    User.hasMany(models.History, { foreignKey: 'userId'});

  };

  User.prototype.isValid = () => true;

  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.prototype.toSafeObject = function () {
    return {
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      name: this.name,
      updatedAt: this.updatedAt,
    };
  }

  return User;
};

