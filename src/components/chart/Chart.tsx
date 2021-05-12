import { memo } from 'react';
import ChartProps from './Chart.types';
import VisualizationRenderer from '../chart-renderer/VisualizationRenderer';
import { ChartData, getColumnOptions } from '../chart-renderer/transformer/DataTransformer';

export const Chart = memo<ChartProps>(({ data, selectedFilter }) => {
    let dataTmp: ChartData = { data: data }
    // get required highchart option and pass it to visualization renderer
    const options = getColumnOptions(dataTmp);
    return <VisualizationRenderer options={options} />;

});