import React, { memo, useEffect } from 'react';
import ChartProps from './Chart.types';
import * as Highcharts from 'highcharts';
import { ChartData, convertToLineChart } from '../chart-renderer/transformer/DataTransformer';
import { chartData } from './data';

export const Chart = memo<ChartProps>(({ chartid, selectedFilter }) => {
    // const content=<div> render chart for {chartid} with filter {selectedFilter} </div>;

    // if chartid changes, then fetch new data and render chart

    console.log(`${chartid} ${selectedFilter}`);
    let dataTmp: ChartData = { data: [...chartData.data] }
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