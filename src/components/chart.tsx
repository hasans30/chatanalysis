import React, {memo} from 'react'
import ChartProps from './chart.types';

export const Chart = memo<ChartProps>( ( {chartid, selectedFilter} )=>{
    
    return <div> render chart for {chartid} with filter {selectedFilter} </div>
});