import moment from 'moment';
import { DetailsList, IColumn } from 'office-ui-fabric-react';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { Filter } from '../components/filter/Filter';
import { ReportType, Query } from '../components/query/ReportQueries';

interface IReportData {
    actor: string;
    action: string;
    actedon: string;
    '#times': number
};


interface IDisplayReportData {
    key: string;
    actor: string;
    action: string;
    actedon: string;
    count: number;

}
const AdminReport = memo(() => {

    const currentMonth = moment().format("MMM").toLowerCase();
    const [selectedFilter, setSelectedFilters] = useState(currentMonth);
    const [items, setItems] = useState<IDisplayReportData[]>([]);
    const [columns, setColumns] = useState<IColumn[]>([]);
    /* 
        need for useRef refer https://stackoverflow.com/questions/62373062/fluentui-detailslist-oncolumnclick-with-react-hooks-gives-empty-items/64572688#64572688
        concept https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
    */
    const refItems = useRef(items);
    const refColumns = useRef(columns);

    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const query = Query.get(ReportType.AdminReport);

    const filter = <Filter currentFilter={selectedFilter} onFilterChange={onChange} />;

    const { data: monthlydata, error: monthlyerror } = useSWR(`${query}/${selectedFilter}.json`);

    const _onColumnClick = useCallback((ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const newColumns: IColumn[] = refColumns.current.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = _copyAndSort(refItems.current, currColumn.fieldName!, currColumn.isSortedDescending);
        setColumns(newColumns);
        refColumns.current = newColumns;
        setItems(newItems);
        refItems.current = newItems;
    }, []);

    useEffect(() => {
        const newColumns = getColumns(_onColumnClick);
        refColumns.current = newColumns;
        setColumns(newColumns);
    }, [_onColumnClick]);




    useEffect(() => {
        refItems.current = getItems(monthlydata?.data);
        setItems(refItems.current);

    }, [selectedFilter, monthlydata, refItems]);

    const error = <div>Error: No Data</div>;

    const report = <DetailsList
        items={items}
        columns={columns}
    />;



    return (
        <>
            {filter}
            <div style={{ display: 'block' }} >
                {(monthlyerror) ? error : report}
            </div>
        </>
    );
});

export default AdminReport;

function getItems(monthlydata: IReportData[] | undefined): IDisplayReportData[] {

    if (!monthlydata) {
        return [];
    }

    const items: IDisplayReportData[] = monthlydata.map((e, idx) => {
        return {
            key: `${idx}`,
            actor: e.actor,
            action: e.action,
            actedon: e.actedon,
            count: e['#times'],
        }
    })

    return items;
}
function getColumns(_onColumnClick: any): IColumn[] {
    const commonProps = { minWidth: 100, maxWidth: 200, isResizable: true, onColumnClick: _onColumnClick };
    const columns = [
        { key: 'column0', name: 'Who', fieldName: 'actor' },
        { key: 'column1', name: 'Action', fieldName: 'action' },
        { key: 'column2', name: 'Subject', fieldName: 'actedon' },
        { key: 'column3', name: '#Times', fieldName: 'count' },
    ].map(e => { return { ...commonProps, ...e } });
    return columns;
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}


