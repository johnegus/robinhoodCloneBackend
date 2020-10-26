'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    currentPrice: DataTypes.INTEGER,
    buyPrice: DataTypes.INTEGER,
    shares: DataTypes.INTEGER, validate: {
      min: 1
    },
    userId: DataTypes.INTEGER
  }, {});
  Position.associate = function(models) {
    // associations can be defined here
  };
  return Position;
};