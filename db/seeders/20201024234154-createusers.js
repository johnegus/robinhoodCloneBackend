'use strict';
const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { name: 'Demo-lition', email: 'demo@example.com', cashValue: 10000, hashedPassword: createPassword(), createdAt: new Date(),
      updatedAt: new Date(), },
      { name: 'Yusuke', email: 'yusuke@example.com', cashValue: 10000, hashedPassword: createPassword(), createdAt: new Date(),
      updatedAt: new Date(), },
      { name: 'Peta', email: 'petra@example.com',  cashValue: 250000, hashedPassword: createPassword(), createdAt: new Date(),
      updatedAt: new Date(), },
    ]);
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Users', null, {});
  
  }
};
