import React, { memo } from 'react'
import FilterProps from './Filter.types';

export const Filter = memo<FilterProps>(({ filterid, onFilterChange }) => {
    const onChange = (value: any) => () => { onFilterChange(value); };
    const filternames = ['filter1', 'filter2', 'filter3'];
    const filters = filternames.map(fname => <button key={fname} onClick={onChange(fname)}>{fname}</button>);
    return <div> {filters} </div>
});