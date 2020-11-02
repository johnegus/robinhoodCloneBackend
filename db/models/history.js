'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    deposit: DataTypes.INTEGER,
    stockSymbol: DataTypes.STRING,
    stockName: DataTypes.STRING,
    boughtPrice: DataTypes.INTEGER,
    soldPrice: DataTypes.INTEGER,
    shares: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  History.associate = function(models) {
    History.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return History;
};