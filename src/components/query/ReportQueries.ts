import { useQuery } from '@apollo/client';
import { GET_APP_STATE } from '../../operations/queries/getAppState';


 enum ReportType {
    CompactMonthly,
    AllMonthly,
    DailyTotalTrend,
    WordCloud,
    AdminReport,
}

const querySuffix = new Map(
    [
        [ReportType.CompactMonthly,`data/compact-monthly`],
        [ReportType.AllMonthly,`data/all-monthly`],
        [ReportType.DailyTotalTrend,`data/daily-total-trend/data.json`],
        [ReportType.WordCloud,`data/wordcloud`],
        [ReportType.AdminReport,`data/admin-report`]
    ]
);


function useBasePath(){
    const {data:{appState:{org,year}} } = useQuery(GET_APP_STATE);
    const basePath=`${org}/${year}`;
    return basePath;
}

function useAppQuery(queryType: ReportType):string {
    const host=process.env.REACT_APP_API_BASE||'';
    const baseURL=`${host}/${useBasePath()}`;
    return `${baseURL}/${querySuffix.get(queryType)}`;

}


export { 
    useAppQuery,
    useBasePath,
    ReportType
}