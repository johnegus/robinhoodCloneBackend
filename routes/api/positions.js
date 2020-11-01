const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { authenticated } = require('./security-utils');

const router = express.Router();

const db = require('../../db/models');

const { Position } = db;

// router.get(
//   "/",
//   authenticated,
//   asyncHandler(async function (req, res) {
//     const positions = await PositionRepository.list({
//             where: {userId: req.user.id},
//           });
//     res.json(positions);
//   })
// );

router.get(
  "/",
  authenticated,
  asyncHandler(async function (req, res) {
    const positions = await Position.findAll({
      where: {userId: req.user.id},
    });
    res.json(positions);
  })
);




const buyPrice = check('buyPrice')
  .not().isEmpty()
  .withMessage('Prices must not be null')

const shares = check('shares')
  .not().isEmpty()
  .withMessage('How many shares?')
  .isInt()
  .withMessage('How many shares?')

  const validationResult = [buyPrice, shares]

router.post('/', authenticated, asyncHandler ( async (req, res) => {
  const { 
    stockSymbol,
    stockName,
    currentPrice,
    buyPrice,
    shares
  } = req.body;
  const position = await Position.create({
    stockSymbol,
    stockName,
    currentPrice,
    buyPrice,
    shares,
    userId: req.user.id
  });
  res.json({ position });
}
));

router.get(
  "/:id",
  authenticated,
  asyncHandler(async function (req, res) {
    const position = await Position.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(position);
  })
);


router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const position = await Position.findOne({
      where: {
        id: req.params.id,
      },
    });
   
    if (position) {
      await position.destroy();
      res.json({ message: `Deleted  stock with id of ${req.params.id}.` });
    } else {
      console.error(' stock not found')
    }
  })
);


module.exports = router;
