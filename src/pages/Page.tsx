import { memo } from 'react'
import { PageProps } from "./Page.types";
import MonthlyReport from '../features/MonthlyReport';

export const Page = memo<PageProps>(({ projectId }) => {

    // fetch data
    return <MonthlyReport compact />
});

