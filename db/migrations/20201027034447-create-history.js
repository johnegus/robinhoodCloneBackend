'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deposit: {
        type: Sequelize.NUMERIC(10, 2),
        defaultValue: 0
      },
      stockSymbol: {
        defaultValue: '---',
        type: Sequelize.STRING
      },
      stockName: {
        defaultValue: '---',
        type: Sequelize.STRING
      },
      boughtPrice: {
        defaultValue: 0,
        type: Sequelize.NUMERIC(10, 2)
      },
      soldPrice: {
        defaultValue: 0,
        type: Sequelize.NUMERIC(10, 2)
      },
      shares: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Histories');
  }
};