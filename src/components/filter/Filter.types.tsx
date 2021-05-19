
export default interface FilterProps {
    currentFilter: MonthsFilter | GranularityFilter;
    onFilterChange: (value: any) => void;
    filterType?: FilterType;
}

export enum FilterType {
    Months,
    Granularity
}

export const months = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
export type MonthsFilter = typeof months[number];

export const granularities = ['days', 'weeks', 'months'];
export type GranularityFilter = typeof granularities[number];

