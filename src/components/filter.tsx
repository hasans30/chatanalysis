import React, {memo} from 'react'
import FilterProps from './filter.types';

export const Filter = memo<FilterProps>( ( {filterid, onFilterChange} )=>{
    const filter = <button onClick={onFilterChange}>Click here </button>;
    return <div> {filter} </div>
});