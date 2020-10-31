'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    deposit: DataTypes.INTEGER,
    profitLoss: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  History.associate = function(models) {
    History.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return History;
};