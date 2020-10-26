'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    currentPrice: DataTypes.INTEGER,
    buyPrice: DataTypes.INTEGER,
    shares: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Position.associate = function(models) {
    // associations can be defined here
  };
  return Position;
};