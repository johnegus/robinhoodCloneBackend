const express = require('express');
const asyncHandler = require('express-async-handler');

const { authenticated } = require('./security-utils');

const router = express.Router();


const db = require('../../db/models');
const {Watchlist} = db;

 

// router.get("/", authenticated, asyncHandler(async (req, res) =>{
//     const {load} = await Watchlist.findAll()
//        res.JSON({load})
    
//   })
// );

router.get(
  "/",
  authenticated,
  asyncHandler(async (req, res) => {
    const watchedStocks = await Watchlist.findAll({
      where: {userId: req.user.id},
    });
    res.json( watchedStocks );
  })
);

router.post(
    "/",
    authenticated,
    asyncHandler(async (req, res) => {
      const { stockSymbol, stockName, currentPrice } = req.body;
      const watchedStock = await Watchlist.create({ stockSymbol, stockName, currentPrice, userId: req.user.id });
      res.json({ watchedStock });
    })
  );

router.get(
  "/:id",
  authenticated,
  asyncHandler(async function (req, res) {
    const watchedStock = await Watchlist.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(watchedStock);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const watchedStock = await Watchlist.findOne({
      where: {
        id: req.params.id,
      },
    });
   
    if (watchedStock) {
      await watchedStock.destroy();
      res.json({ message: `Deleted  stock with id of ${req.params.id}.` });
    } else {
      console.error(' stock not found')
    }
  })
);

module.exports = router;