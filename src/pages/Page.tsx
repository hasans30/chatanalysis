import { Spinner } from '@fluentui/react';
import React, { memo, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr';
import moment from 'moment';
import TableChart from '../components/chart-renderer/TableChart';
import { Chart } from '../components/chart/Chart'
import { Filter } from '../components/filter/Filter';
import { PageProps } from "./Page.types";

export const Page = memo<PageProps>(({ projectId }) => {

    // fetch data
    const currentMonth = moment().format("MMM").toLowerCase();
    const [selectedFilter, setSelectedFilters] = useState(currentMonth);
    const { data, error } = useSWR(`/data/${selectedFilter}.json`);

    console.log(selectedFilter);
    useEffect(() => {
        console.log('useeffect');
    }, [projectId])


    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const errorState = <div>No data available..</div>;
    const spinner = <Spinner label="loading..." />
    const charts = !data ? spinner : <>
        <Chart data={data.data} selectedFilter={selectedFilter} />
        <TableChart data={data.data} />
    </>;
    const filter = <Filter filterid={selectedFilter} onFilterChange={onChange} />;
    return <div>
        {filter}
        {error ? errorState : charts}

    </div>
});

