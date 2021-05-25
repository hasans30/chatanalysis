import { Spinner } from '@fluentui/react';
import moment from 'moment';
import { memo, useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { ChartData } from '../components/chart-renderer/transformer/DataTransformer';
import { Chart } from '../components/chart/Chart';
import { ChartType } from '../components/chart/Chart.types';
import { Filter } from '../components/filter/Filter';
import { FilterType, granularities, GranularityFilter } from '../components/filter/Filter.types';
import { useAppQuery, ReportType } from '../components/query/ReportQueries';

const DailyTrendReport = memo(() => {

    const [selectedFilter, setSelectedFilters] = useState<GranularityFilter>(granularities[2]);
    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const query = useAppQuery(ReportType.DailyTotalTrend);
    const { data, error } = useSWR(`${query}`);
    const spinner = <Spinner label="loading..." />;
    const convertedData = useMemo(() => {

        const weekmap = !data ? null : data.data.reduce((acc: any, cur: any) => {
            let key = moment(cur['date']).week();
            let value = cur['count'];
            acc[key] = !!acc[key] ? acc[key] + value : value;
            return acc;
        }, {});
        const weeksdata = !data ? null : Object.keys(weekmap).map(dt => {
            return {
                name: 'week',
                date: new Date(moment().week(parseInt(dt)).format('YYYY-MM-DD')),
                count: weekmap[dt]
            }
        });

        const monthmap = !data ? null : data.data.reduce((acc: any, cur: any) => {
            let key = moment(cur['date']).month();
            let value = cur['count'];
            acc[key] = !!acc[key] ? acc[key] + value : value;
            return acc;
        }, {});

        const monthdata = !data ? null : Object.keys(monthmap).map(dt => {
            return {
                name: 'month',
                date: new Date(moment().month(dt).format('YYYY-MM')),
                count: monthmap[dt]
            }
        })

        return { weeksdata, monthdata };
    }, [data])

    const { weeksdata, monthdata } = convertedData;

    let chartdata: ChartData['data'] | null;
    switch (selectedFilter) {
        case granularities[0]:
            chartdata = data.data;
            break;
        case granularities[1]:
            chartdata = weeksdata;
            break;
        default:
            chartdata = monthdata;
    }

    const chart = !chartdata ? spinner : <Chart data={chartdata} chartType={ChartType.DateChart} />;

    const filter = <Filter currentFilter={selectedFilter} onFilterChange={onChange} filterType={FilterType.Granularity} />

    return (
        <div>
            {filter}
            {error ? <div> error </div> : chart}
        </div>
    );
});

export default DailyTrendReport;