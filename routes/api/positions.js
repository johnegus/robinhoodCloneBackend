const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { Position } = db;
const PositionRepository = require('../../db/position-repository');

router.get(
  "/",
  authenticated,
  asyncHandler(async function (_req, res) {
    const positions = await PositionRepository.list();
    res.json(positions);
  })
);

// router.post(
//   "/",
 
//   asyncHandler(async function (req, res, next) {
   

//     const id = await PositionRepository.create(req.body, req.user);
//     return res.redirect(`${req.baseUrl}/${id}`);
//   })
// );

router.post('/', authenticated, asyncHandler ( async (req, res) => {
  const { 
    stockSymbol,
    stockName,
    currentPrice,
    buyPrice,
    shares,
    userId
  } = req.body;
  const position = await Position.create({
    stockSymbol,
    stockName,
    currentPrice,
    buyPrice,
    shares,
    userId
  });
  res.json({ position });
}
));

router.get(
  "/:id",
  authenticated,
  asyncHandler(async function (req, res) {
    const positions = await PositionRepository.one(req.params.id);
    res.json(positions);
  })
);



module.exports = router;
