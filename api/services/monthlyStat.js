
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMonthlyStat(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `select @rowid:=@rowid+1 as rowid, table1.* 
     from (select name_map.name_mine, count(*) 
        from chat_dedupe_stat,name_map where chat_dedupe_stat.id=name_map.ID and timestamp>=
            '2021-03-01' and timestamp<'2021-04-10'
             group by chat_dedupe_stat.id
             order by count(*) desc) as table1, 
             (select @rowid:=0) as table2;`, 
    [offset, config.listPerPage]
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