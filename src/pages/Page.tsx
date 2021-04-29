import React, { memo, useCallback, useEffect, useState } from 'react'
import { Chart } from '../components/chart/Chart'
import { Filter } from '../components/filter/Filter';
import { PageProps } from "./Page.types";

export const Page = memo<PageProps>(({ projectId }) => {
    const [selectedFilter, setSelectedFilters] = useState('first1');
    console.log(selectedFilter);
    useEffect(() => {
        console.log('useeffect');
    }, [projectId])


    const onChange = useCallback((values) => {
        setSelectedFilters(values);
        console.log(`values is ${values}`);
    }, []);

    const filter = <Filter filterid={selectedFilter} onFilterChange={onChange} />;

    return <div> remote ssh page
            <Chart chartid="10" selectedFilter={selectedFilter} />
        {filter}
    </div>
});