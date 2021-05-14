import { DetailsList, IColumn, mergeStyleSets } from "@fluentui/react";
import { FunctionComponent, memo } from "react";
import { IDocument, TableChartProps } from './TableChart.types';
import { ChartData } from "./transformer/DataTransformer";

const classNames = mergeStyleSets({
    controlWrapper: {
        display: 'block',
    },
    root: {
        marginLeft: '0px'
    }
});



const TableChartBase: FunctionComponent<TableChartProps> = (data) => {

    const items: IDocument[] = getItems(data.data);
    const columns: IColumn[] = getColumns();
    return <div className={classNames.controlWrapper}>
        <DetailsList items={items} columns={columns} className={classNames.root} />
    </div>;
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
        { key: 'column0', name: 'Sl#', fieldName: 'rank', minWidth: 100, maxWidth: 20, isResizable: false },
        { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: false },
        { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 50, maxWidth: 70, isResizable: false },
    ];
}


export const TableChart = memo(TableChartBase);
export default TableChart;