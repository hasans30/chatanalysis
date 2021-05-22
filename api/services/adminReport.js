const db = require('./db');
const helper = require('../helper');
const config = require('../config');


const alltimeQuery=`select actor,action,actedon,count(*) as '#times' from chat_action
group by actor,action,actedon
order by action desc`;

const monthlyQuery=`
select actor,action,actedon,count(*) as '#times' 
from chat_action
where timestamp>=? and timestamp <=?
group by actor,action,actedon
order by action
`;

async function getAdminReport(page = 1, month, all="true" ){
  const monthRange = helper.getRange(month)
  const query = all==="true"? alltimeQuery: monthlyQuery;
  const rows = await db.query(query,monthRange);
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
 getAdminReport
}