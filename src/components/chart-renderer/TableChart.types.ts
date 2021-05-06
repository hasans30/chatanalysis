import { ChartData } from '../chart-renderer/transformer/DataTransformer';

export interface IDocument {
  key: string;
  name:string;
  value: string;
}
export interface TableChartProps {
    data: ChartData['data'];
}

