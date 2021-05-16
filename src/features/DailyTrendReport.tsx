import { Spinner } from '@fluentui/react';
import { memo } from 'react';
import useSWR from 'swr';
import { Chart } from '../components/chart/Chart';
import { ChartType } from '../components/chart/Chart.types';
import { Query, ReportType } from '../components/query/ReportQueries';

const DailyTrendReport = memo(() => {
    const query = Query.get(ReportType.DailyTotalTrend);
    const { data, error } = useSWR(`${query}`);
    const spinner = <Spinner label="loading..." />;
    const chart = !data ? spinner : <Chart data={data.data} chartType={ChartType.DateChart} />;

    return (
        <div>
            {error ? <div> error </div> : chart}
        </div>
    );
});

export default DailyTrendReport;