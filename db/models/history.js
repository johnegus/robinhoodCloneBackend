'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    deposit: DataTypes.NUMERIC,
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    boughtPrice: DataTypes.NUMERIC,
    soldPrice: DataTypes.NUMERIC,
    shares: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  History.associate = function(models) {
    History.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return History;
};