 enum ReportType {
    CompactMonthly,
    AllMonthly,
    DailyTotalTrend,
}

const host=process.env.REACT_APP_API_BASE||'';
const org=process.env.REACT_APP_ORG||'';

//TODO: move the year in url parameter
const year=process.env.REACT_APP_YEAR||'';
const baseURL=`${host}/${org}/${year}`;


const Query = new Map(
    [
        [ReportType.CompactMonthly,`${baseURL}/data/compact-monthly`],
        [ReportType.AllMonthly,`${baseURL}/data/all-monthly`],
        [ReportType.DailyTotalTrend,`${baseURL}/data/daily-total-trend/data.json`]
    ]
);


export { Query,
    ReportType
}