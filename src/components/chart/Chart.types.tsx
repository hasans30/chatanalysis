import { ChartData } from '../chart-renderer/transformer/DataTransformer';
export default interface ChartProps {
    data: ChartData['data'];
    selectedFilter: string;
}