import moment from 'moment';
import { DetailsList, IColumn } from 'office-ui-fabric-react';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
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
    const onChange = useCallback((values) => {
        setSelectedFilters(values);
    }, []);

    const query = Query.get(ReportType.AdminReport);

    const filter = <Filter currentFilter={selectedFilter} onFilterChange={onChange} />;

    const { data: monthlydata, error: monthlyerror } = useSWR(`${query}/${selectedFilter}.json`);
    const columns: IColumn[] = useMemo(getColumns, []);
    useEffect(() => {
        setItems(getItems(monthlydata?.data));
    }, [selectedFilter, monthlydata]);

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
function getColumns(): IColumn[] {
    const columns = [
        { key: 'column0', name: 'Who', fieldName: 'actor', minWidth: 100, maxWidth: 200, isResizable: false },
        { key: 'column1', name: 'Action', fieldName: 'action', minWidth: 100, maxWidth: 200, isResizable: false },
        { key: 'column2', name: 'Subject', fieldName: 'actedon', minWidth: 50, maxWidth: 200, isResizable: false },
        { key: 'column3', name: '#Times', fieldName: 'count', minWidth: 50, maxWidth: 200, isResizable: false },
    ];
    return columns;
}



