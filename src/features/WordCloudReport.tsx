import moment from 'moment';
import { Spinner } from 'office-ui-fabric-react';
import React, { memo, useCallback, useState } from 'react';
import useSWR from 'swr';
import WordCloud from '../components/chart/WordCloud';
import { Filter } from '../components/filter/Filter';
import { useAppQuery, ReportType } from '../components/query/ReportQueries';

const WordCloudReport = memo(() => {

    const query = useAppQuery(ReportType.WordCloud);
    const currentMonth = moment().format("MMM").toLowerCase();
    const [selectedFilter, setSelectedFilters] = useState(currentMonth);
    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const { data, error } = useSWR(`${query}/${selectedFilter}.json`);

    console.log(`wordcloud data=${data} error=${error}`);
    const filter = <Filter currentFilter={selectedFilter} onFilterChange={onChange} />;
    const spinner = <Spinner label="loading..." />
    const chart = !data ? spinner : <WordCloud data={data.data} />
    const errorState = <div>No data available..</div>;
    return (
        <div>
            {filter}
            {error ? errorState : chart}
        </div>
    );
});

export default WordCloudReport;