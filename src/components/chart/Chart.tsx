import { memo } from 'react';
import ChartProps, { ChartType } from './Chart.types';
import VisualizationRenderer from '../chart-renderer/VisualizationRenderer';
import { ChartData, getColumnOptions, getLineChartOptions } from '../chart-renderer/transformer/DataTransformer';

export const Chart = memo<ChartProps>(({ data, chartType = ChartType.ColumnChart }) => {
    let dataTmp: ChartData = { data: data }
    // get required highchart option and pass it to visualization renderer
    let options = getColumnOptions(dataTmp);
    switch (chartType) {
        case ChartType.ColumnChart:
            options = getColumnOptions(dataTmp);
            break;
        case ChartType.LineChart:
            options = getLineChartOptions(dataTmp);
            break;
    }
    return <VisualizationRenderer options={options} />;

});