import { DefaultButton } from '@fluentui/react';
import React, { memo } from 'react'
import FilterProps from './Filter.types';

export const Filter = memo<FilterProps>(({ filterid, onFilterChange }) => {
    const onChange = (value: any) => () => { onFilterChange(value); };
    const filternames = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const filters = filternames.map(fname => <DefaultButton key={fname} onClick={onChange(fname)} text={fname} checked={filterid === fname} />);
    return <div>
        {filters}
    </div>
});