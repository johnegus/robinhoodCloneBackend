const express = require('express');
const asyncHandler = require('express-async-handler');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { Watchlist } = db;

router.get(
  "/",
  authenticated,
  asyncHandler(async  (req, res) => {
    const watchedStocks = await Watchlist.findAll({
      where: {
        userId: req.user.id,
      },
    });
    if(watchedStocks) {
      res.json(watchedStocks)
    } 
  })
);

router.post(
    "/",
    authenticated,
    asyncHandler(async (req, res) => {
      const { watchedStock } = req.body;
      const watchedStock = await Watchlist.create({ symbol, userId: req.user.id });
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
      if (req.user.id !== watchedStock.userId) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this stock.";
        err.title = "Unauthorized";
        throw err;
      }
      if (watchedStock) {
        await watchedStock.destroy();
        res.json({ message: `Deleted watchlist stock with id of ${req.params.id}.` });
      } else {
        console.error('watchlist stock not found')
      }
    })
  );

module.exports = router;