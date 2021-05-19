import { DefaultButton } from '@fluentui/react';
import { memo } from 'react'
import FilterProps, { FilterType, granularities, months } from './Filter.types';


export const Filter = memo<FilterProps>(({ currentFilter, onFilterChange, filterType }) => {

    const onChange = (value: any) => () => { onFilterChange(value); };
    let filternames: FilterProps['currentFilter'][];
    switch (filterType) {
        case FilterType.Granularity:
            filternames = granularities;
            break;
        default:
            filternames = months;
            break;
    }
    const filters = filternames.map(fname => <DefaultButton key={fname} onClick={onChange(fname)} text={fname} checked={currentFilter === fname} />);
    return <div>
        {filters}
    </div>
});