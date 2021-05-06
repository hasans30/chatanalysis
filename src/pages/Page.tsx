import { Spinner } from '@fluentui/react';
import React, { memo, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr';
import TableChart from '../components/chart-renderer/TableChart';
import { Chart } from '../components/chart/Chart'
import { Filter } from '../components/filter/Filter';
import { PageProps } from "./Page.types";

export const Page = memo<PageProps>(({ projectId }) => {

    // fetch data
    const [selectedFilter, setSelectedFilters] = useState('mar');
    const { data, error } = useSWR(`http://hasan.westus2.cloudapp.azure.com:3030/data?month=${selectedFilter}`);

    console.log(selectedFilter);
    useEffect(() => {
        console.log('useeffect');
    }, [projectId])


    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    if (error) return <div>failed to load data error.</div>
    if (!data) return <Spinner label="loading..." />

    const filter = <Filter filterid={selectedFilter} onFilterChange={onChange} />;
    return <div>
        {filter}
        <Chart data={data.data} selectedFilter={selectedFilter} />
        <TableChart data={data.data} />
    </div>
});

