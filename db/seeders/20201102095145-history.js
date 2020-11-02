'use strict';




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Histories', [
      { deposit: 10000, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'TSLA', stockName: 'Tesla Motors', currentPrice: 2500, buyPrice: 250, shares: 4,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'NFLX', stockName: 'Netflix', currentPrice: 500, buyPrice: 250,  shares: 5, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'AMZN', stockName: 'Amazon', currentPrice: 150, buyPrice: 250, shares: 8, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Histories', null, {});
  
  }
};
