function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}

function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

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
module.exports = {
  getOffset,
  emptyOrRows,
  getRange
}
