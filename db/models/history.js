'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    cashInstance: DataTypes.INTEGER,
    investmentsInstance: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  History.associate = function(models) {
    History.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return History;
};