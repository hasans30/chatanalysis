
const express = require('express');
const router = express.Router();
const monthlyAllStat = require('../services/monthlyAllStat');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await monthlyAllStat.getMonthlyStat(req.query.page,req.query.month));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;