
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

function getRange(month){
  const range=new Map(
    [
      ['jan',['2021-01-01','2021-02-01']],
      ['feb',['2021-02-01','2021-03-01']],
      ['mar',['2021-03-01','2021-04-01']],
      ['apr',['2021-04-01','2021-05-01']],
      ['may',['2021-05-01','2021-06-01']],
      ['june',['2021-06-01','2021-07-01']],
      ['july',['2021-07-01','2021-08-01']],
      ['aug',['2021-08-01','2021-09-01']],
      ['sep',['2021-09-01','2021-10-01']],
      ['oct',['2021-10-01','2021-11-01']],
      ['nov',['2021-11-01','2021-12-01']],
      ['dev',['2021-12-01','2022-01-01']],
    ]
  );

  return range.get(month);

}

const rawquery = `
select sender as name, count(*) as count 
from chat_text where timestamp>=? and timestamp<? 
group by chat_text.sender order by count(*) desc;
`;
const joinquery= `select name_map.name_mine as name, count(*) as count
    from chat_text,name_map 
    where chat_text.sender=name_map.ID 
    and timestamp>=? and timestamp<?
    group by chat_text.sender 
    order by count(*) desc;
    `;
async function getMonthlyStat(page = 1, month, rawdata ){
  const monthsRange=getRange(month);
  if(monthsRange===undefined)
    return {
      data:[],
      meta:{page}
    };
  const offset = helper.getOffset(page, config.listPerPage);
  const query=!!rawdata? rawquery: joinquery;
  const rows = await db.query(
    query,
    monthsRange
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMonthlyStat
}