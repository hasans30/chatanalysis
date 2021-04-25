import React, {memo,  useCallback,  useEffect, useState} from 'react'
import { Chart } from '../components/chart';
import { Filter } from '../components/filter';
import { PageProps} from "./Page.types";

export const Page = memo<PageProps>( ( {projectId} )=>{
    const [filters,setFilters]=useState();
    console.log(filters);
    useEffect(()=>{
        setFilters(undefined);
        console.log('useeffect');
    },[projectId])

    
    const onChange = useCallback((values)=>{
        setFilters(values);
        console.log(`values is ${values}`);
    },[]);
    

    return <div> remote ssh page
            <Chart chartid="10"/>
            <Filter filterid="90" onFilterChange={onChange}/>
         </div>
});