const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { History } = db;

router.get(
  "/",
  authenticated,
  asyncHandler(async (req, res, next) => {
    const transaction = await History.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json({ transaction });
  })
);

router.post(
    "/",
    authenticated,
    asyncHandler(async (req, res) => {
      const { cashInstance, investmentsInstance } = req.body;
      const transaction = await History.create({ cashInstance, investmentsInstance, userId: req.user.id });
      res.json({ transaction });
    })
  );

router.get(
  "/:id",
  authenticated,
  asyncHandler(async function (req, res) {
    const stock = await Watchlist.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(stock);
  })
);

router.delete(
    "/:id",
    asyncHandler(async (req, res, next) => {
      const stock = await Watchlist.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (req.user.id !== stock.userId) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.message = "You are not authorized to delete this stock.";
        err.title = "Unauthorized";
        throw err;
      }
      if (stock) {
        await stock.destroy();
        res.json({ message: `Deleted watchlist stock with id of ${req.params.id}.` });
      } else {
        console.error('watchlist stock not found')
      }
    })
  );

module.exports = router;