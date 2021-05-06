import React, { memo } from 'react'
import FilterProps from './Filter.types';

export const Filter = memo<FilterProps>(({ filterid, onFilterChange }) => {
    const onChange = (value: any) => () => { onFilterChange(value); };
    const filternames = ['jan', 'feb', 'mar'];
    const filters = filternames.map(fname => <button key={fname} onClick={onChange(fname)}>{fname}</button>);
    return <div> {filters}
        <div> showing data for filter: {filterid} </div>
    </div>
});