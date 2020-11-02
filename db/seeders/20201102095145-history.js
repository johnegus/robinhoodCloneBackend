'use strict';




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Histories', [
      { deposit: 10000, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'TSLA', stockName: 'Tesla Motors', boughtPrice: 250,  soldPrice: 2500, shares: 4,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'NFLX', stockName: 'Netflix', boughtPrice: 250, soldPrice: 500,  shares: 5, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { stockSymbol: 'AMZN', stockName: 'Amazon', boughtPrice: 250, soldPrice: 150,  shares: 8, userId: 1, createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Histories', null, {});
  
  }
};
