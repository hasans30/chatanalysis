 enum ReportType {
    CompactMonthly,
    AllMonthly,
    DailyTotalTrend,
}

const Query = new Map(
    [
        [ReportType.CompactMonthly,'/data/compact-monthly'],
        [ReportType.AllMonthly,'/data/all-monthly'],
        [ReportType.DailyTotalTrend,'/data/daily-total-trend/data.json']
    ]
);


export { Query,
    ReportType
}