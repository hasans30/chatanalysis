import moment from 'moment';
import { Spinner } from 'office-ui-fabric-react';
import { memo, useCallback, useState } from 'react';
import useSWR from 'swr';
import TableChart from '../components/chart-renderer/TableChart';
import { Chart } from '../components/chart/Chart';
import { ChartType } from '../components/chart/Chart.types';
import { Filter } from '../components/filter/Filter';
import { ReportType, Query } from '../components/query/ReportQueries';

export interface MonthlyReportProps {
    compact: boolean
}

const MonthlyReport = memo<MonthlyReportProps>(({ compact = true }) => {
    const query = compact ? Query.get(ReportType.CompactMonthly) : Query.get(ReportType.AllMonthly);
    const currentMonth = moment().format("MMM").toLowerCase();
    const [selectedFilter, setSelectedFilters] = useState(currentMonth);
    const { data, error } = useSWR(`${query}/${selectedFilter}.json`);

    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const errorState = <div>No data available..</div>;
    const spinner = <Spinner label="loading..." />
    const charts = !data ? spinner : <>
        <Chart data={data.data} chartType={ChartType.ColumnChart} />
        <TableChart data={data.data} />
    </>;
    const filter = <Filter currentFilter={selectedFilter} onFilterChange={onChange} />;
    return <div className='reportcontainer'>
        {filter}
        {error ? errorState : charts}

    </div>
});

export default MonthlyReport;