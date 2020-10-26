const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const name =
  check('name')
    .not().isEmpty()
    .withMessage('Please provide a player name');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', email, password, name, asyncHandler(async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const user = await UserRepository.create(req.body);

  const { jti, token } = generateToken(player);
  player.tokenId = jti;
  await user.save();
  res.json({ token, user: user.toSafeObject() });
}));

router.get('/me', authenticated, function(req, res) {
  res.json({
    email: req.user.email,
    name: req.user.name,
  });
});

module.exports = router;
