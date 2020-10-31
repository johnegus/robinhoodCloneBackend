'use strict';




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Watchlists', [
      { stockSymbol: 'GOOG', stockName: 'Google', currentPrice: 1622, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'IRBT', stockName: 'iRobot', currentPrice: 115, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'INTC', stockName: 'Intel', currentPrice: 44, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'NVDA', stockName: 'NVIDIA', currentPrice: 500, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Watchlists', null, {});
  
  }
};

