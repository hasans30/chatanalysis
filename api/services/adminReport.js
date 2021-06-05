const db = require('./db');
const helper = require('../helper');
const { getQuery, queryType } = require('./queries');

async function getAdminReport(page = 1, month, all = "true", dbname = "mysql") {
  const monthRange = helper.getRange(month)
  const query = getQuery(
    all === "true" ? queryType.alltimeAdminReport : queryType.monthlyAdminReport,
    dbname);

  const rows = await db.query(query, monthRange);
  const data = helper.emptyOrRows(rows);
  const meta = { page: page, month: !month ? 'all' : month };

  return {
    data,
    meta
  }
}

module.exports = {
  getAdminReport
}