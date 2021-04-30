import React, { memo, useEffect } from 'react';
import ChartProps from './Chart.types';
import * as Highcharts from 'highcharts';
import { ChartData, convertToLineChart } from '../chart-renderer/transformer/DataTransformer';

export const Chart = memo<ChartProps>(({ data, selectedFilter }) => {

    let dataTmp: ChartData = { data: data }
    const lineChartData = convertToLineChart(dataTmp);
    useEffect(() => {
        const options: Highcharts.Options = {
            chart: {
                renderTo: 'main',
            },
            ...lineChartData
        }
        Highcharts.chart(options);
    }, [lineChartData]);
    return <><div id="main" />  <div> selected filter {selectedFilter} </div> </>;
});