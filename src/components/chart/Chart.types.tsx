import { ChartData } from '../chart-renderer/transformer/DataTransformer';
export enum ChartType {
    LineChart,
    ColumnChart,
    DateChart
}
export default interface ChartProps {
    data: ChartData['data'];
    chartType: ChartType;
}