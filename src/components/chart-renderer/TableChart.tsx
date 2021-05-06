import { DetailsList, IColumn } from "@fluentui/react";
import React, { FunctionComponent } from "react";
import { IDocument, TableChartProps } from './TableChart.types';
import { ChartData } from "./transformer/DataTransformer";

const TableChart: FunctionComponent<TableChartProps> = (data) => {

    const items: IDocument[] = getItems(data.data);
    const columns: IColumn[] = getColumns();
    return <DetailsList items={items} columns={columns} />
}


function getItems(data: ChartData['data']): IDocument[] {
    const allItems: IDocument[] = data.map((e, idx) => {
        return {
            key: e.name,
            rank: idx + 1,
            name: e.name,
            value: '' + e.count
        }
    });
    return allItems;
}
function getColumns(): IColumn[] {
    return [
        { key: 'column0', name: 'Sl#', fieldName: 'rank', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 50, maxWidth: 70, isResizable: true },
    ];
}


export default TableChart;