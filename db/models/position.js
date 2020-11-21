'use strict';
module.exports = (sequelize, DataTypes) => {
  const Position = sequelize.define('Position', {
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    currentPrice: DataTypes.NUMERIC,
    buyPrice: DataTypes.NUMERIC,
    shares: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Position.associate = function(models) {
    Position.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Position;
};