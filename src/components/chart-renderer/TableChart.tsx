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
    console.log(data);
    const fakeData = [{
        key: '1',
        name: 'My name',
        count: '12'
    }]
    const allItems: IDocument[] = data.map((e) => {
        return {
            key: '1' + e.name,
            name: e.name,
            value: '' + e.count
        }
    });
    return allItems;
    // return [{
    //     key: '1',
    //     name: 'Item x',
    //     value: '1'
    // }];
}
function getColumns(): IColumn[] {
    return [
        { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 50, maxWidth: 70, isResizable: true },
    ];
}


export default TableChart;