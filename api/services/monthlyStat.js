
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMonthlyStat(page = 1, monthsRange=['2021-03-01', '2021-04-01']){
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