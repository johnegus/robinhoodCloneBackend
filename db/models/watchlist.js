'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    currentPrice: DataTypes.NUMERIC,
    userId: DataTypes.INTEGER
  }, {});
  Watchlist.associate = function(models) {
    Watchlist.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Watchlist;
};