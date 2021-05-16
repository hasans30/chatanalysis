import { ChartData } from '../chart-renderer/transformer/DataTransformer';
export enum ChartType {
    LineChart,
    ColumnChart
}
export default interface ChartProps {
    data: ChartData['data'];
    chartType: ChartType;
}