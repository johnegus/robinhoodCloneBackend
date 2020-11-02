const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');
const bcrypt = require("bcryptjs");
const db = require('../../db/models');

const { Position, User, Watchlist} = db;

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const name =
  check('name')
    .not().isEmpty()
    .withMessage('Please provide a user name');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', email, password, name, asyncHandler(async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  // const { name, email, password, cashValue } = req.body;
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const user = await User.create({ name, email, cashValue, hashedPassword, tokenId });


  const reqUser = {
    name: req.body.name,
    fullName: req.body.fullName,
    email: req.body.email,
    cashValue: req.body.cashValue,
    password: req.body.password,
    tokenId: ''
  }

  const user = await UserRepository.create(reqUser);

  const { jti, token } = generateToken(user);
  user.tokenId = jti;
  await user.save();
  res.json({ token, user: user.toSafeObject() });
}));

router.get('/me', authenticated, function(req, res) {
  res.json({
    email: req.user.email,
    name: req.user.name,
  });
});

router.get(
  "/:id",
  authenticated,
  asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    const positions = await Position.findAll({
      where: {
        userId: req.params.id,
      },
    });
    const watchlists = await Watchlist.findAll({
      where: {
        userId: req.params.id,
      },
    });
    res.json({ positions, user, watchlists });
  })
);

// router.patch('/', asyncHandler(async function (req, res, next) {
 
//   const user = await UserRepository.create(req.body);

//   const { jti, token } = generateToken(user);
//   user.tokenId = jti;
//   await user.save();
//   res.json({ token, user: user.toSafeObject() });
// }));

module.exports = router;
