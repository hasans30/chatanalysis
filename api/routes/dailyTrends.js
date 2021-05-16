
const express = require('express');
const router = express.Router();
const dailyTrends = require('../services/dailyTrends');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await dailyTrends.getDailyTrends(req.query.page));
  } catch (err) {
    console.error(`getDailyTrends failed`, err.message);
    next(err);
  }
});

module.exports = router;