const db = require('./db');
const helper = require('../helper');
const { getQuery, queryType } = require('./queries');


async function getDailyTrends(page = 1, dbname) {

  const query = getQuery(queryType.dailyTrends, dbname);

  const rows = await db.query(query);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta
  }
}

module.exports = {
  getDailyTrends
}