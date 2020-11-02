const router = require('express').Router();

const routes = ['users', 'session', 'positions', 'watchlist', 'history'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
