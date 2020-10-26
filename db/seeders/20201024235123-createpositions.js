'use strict';




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Positions', [
      { stockSymbol: 'TSLA', stockName: 'Tesla Motors', currentPrice: 2500, buyPrice: 250, shares: 4, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'AAPL', stockName: 'Apple', currentPrice: 115, buyPrice: 45, shares: 10, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'TSLA', stockName: 'Tesla Motors', currentPrice: 500, buyPrice: 340, shares: 4, userId: 1,
      createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Positions', null, {});
  
  }
};
