'use strict';
module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    symbol: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Watchlist.associate = function(models) {
    Watchlist.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Watchlist;
};