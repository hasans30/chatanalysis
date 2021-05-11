import { ChartData } from "./transformer/DataTransformer";

export interface LineChartProps {
  data: ChartData['data'];
  position?: string;
}
