import React, {memo} from 'react'
import { PageProps} from "./Page.types";

export const Page = memo<PageProps>( ( {projectId} )=>{
    return <div> page </div>
});