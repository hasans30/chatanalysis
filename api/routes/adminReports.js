const express = require('express');
const router = express.Router();
const adminReport = require('../services/adminReport');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await adminReport.getAdminReport(req.query.page,req.query.month,req.query.all));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;