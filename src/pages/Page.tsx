import React, {memo} from 'react'
import { Chart } from '../components/chart';
import { PageProps} from "./Page.types";

export const Page = memo<PageProps>( ( {projectId} )=>{
    return <div> remote ssh page
            <Chart/>
         </div>
});