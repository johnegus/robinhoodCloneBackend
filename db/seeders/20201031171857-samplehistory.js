'use strict';




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Histories', [
      { deposit: 10000, profitLoss: 0,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: -150,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: -45,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 80,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 200,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 50,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: -10,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 100,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 250,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: -60,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
      { deposit: 0, profitLoss: 100,  userId: 1, createdAt: new Date(), updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Histories', null, {});
  
  }
};

