
const express = require('express');
const router = express.Router();
const wordClouds  = require('../services/wordClouds');


/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await wordClouds.getWordClouds(req.query.page, req.query.month,req.query.max));
  } catch (err) {
    console.error(`getDailyTrends failed`, err.message);
    next(err);
  }
});

module.exports = router;