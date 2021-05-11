import { memo } from 'react';
import ChartProps from './Chart.types';
import VisualizationRenderer from '../chart-renderer/VisualizationRenderer';

export const Chart = memo<ChartProps>(({ data, selectedFilter }) => {

    return <VisualizationRenderer data={data} />;

});