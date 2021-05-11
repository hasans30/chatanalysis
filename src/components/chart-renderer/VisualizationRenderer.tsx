import * as Highcharts from 'highcharts';
import { LineChartProps } from './VisualizationRenderer.types';

import { memo, useEffect } from 'react';
import { ChartData, getLineChartOptions } from './transformer/DataTransformer';

const VisualizationRenderer = memo<LineChartProps>(({ data }) => {
    useEffect(() => {
        let dataTmp: ChartData = { data: data }
        const lineChartData = getLineChartOptions(dataTmp)
        const options: Highcharts.Options = {
            title: {
                text: 'Chat count'
            },
            ...lineChartData
        }
        Highcharts.chart("main", options);
    }, [data]);
    return <><div id="main" />  </>;
});

export default VisualizationRenderer;
