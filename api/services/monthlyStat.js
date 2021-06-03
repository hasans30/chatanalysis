
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
      ['jun',['2021-06-01','2021-07-01']],
      ['jul',['2021-07-01','2021-08-01']],
      ['aug',['2021-08-01','2021-09-01']],
      ['sep',['2021-09-01','2021-10-01']],
      ['oct',['2021-10-01','2021-11-01']],
      ['nov',['2021-11-01','2021-12-01']],
      ['dev',['2021-12-01','2022-01-01']],
    ]
  );

  return range.get(month);

}

async function getMonthlyStat(page = 1, month ){
  const monthsRange=getRange(month);
  if(monthsRange===undefined)
    return {
      data:[],
      meta:{page}
    };
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
     `select name_map.name_mine as name, count(*) as count
        from chat_dedupe_stat,name_map where chat_dedupe_stat.id=name_map.ID and timestamp>=
            ? and timestamp<?
             group by chat_dedupe_stat.id
             order by count(*) desc`,
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
