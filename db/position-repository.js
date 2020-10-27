const { Position } = require("./models");


async function create(details, user) {
    details.userId = user.id;
    const position = await Position.create(details);
    return position.id;
  }
  
  async function list() {
    return await Position.findAll({
      attributes: ["stockSymbol", "stockName", "currentPrice", "id", "buyPrice", "shares"],
    });
  }
  
  async function one(id) {
    const position = await Position.findByPk(id, {
      include: ["user"],
    });
  
    return {
        stockSymbol: position.stockSymbol,
        stockName: position.stockName,
        currentPrice: currentPrice.id,
        id: position.id,
        buyPrice: position.buyPrice,
        shares: position.shares,
      userId: {
        id: position.user.id,
        name: position.user.name,
      },
      updatedAt: position.updatedAt,
    };
  }
  
  module.exports = {
    create,
    list,
    one,
  };
  