import React, {memo} from 'react'
import ChartProps from './chart.types';

export const Chart = memo<ChartProps>( ( {chartid} )=>{
    
    return <div> chart {chartid} </div>
});