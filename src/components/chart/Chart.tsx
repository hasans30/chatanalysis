import React, { memo, useEffect } from 'react';
import ChartProps from './Chart.types';
import * as Highcharts from 'highcharts';

export const Chart = memo<ChartProps>(({ chartid, selectedFilter }) => {
    // const content=<div> render chart for {chartid} with filter {selectedFilter} </div>;

    // if chartid changes, then fetch new data and render chart

    console.log(`${chartid} ${selectedFilter}`);
    useEffect(() => {
        const options: Highcharts.Options = {
            chart: {
                renderTo: 'main',
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar']
            },
            series: [
                {
                    type: 'line',
                    data: [{
                        x: 1,
                        y: 2
                    }, {
                        x: 2,
                        y: 3
                    }]
                }
            ]
        }
        Highcharts.chart(options);
    }, []);
    return <div id="main" > </div>;
});