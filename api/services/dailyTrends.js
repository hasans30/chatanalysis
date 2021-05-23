const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getDailyTrends(page = 1){
  const rows = await db.query(
        `
          select count(*) as count, date(timestamp) as date from chat_text where timestamp>='2021-01-01' group by date
        `
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getDailyTrends
}