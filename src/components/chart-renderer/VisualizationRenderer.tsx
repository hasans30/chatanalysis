import * as Highcharts from 'highcharts';
import { VisualizationRendererProps } from './VisualizationRenderer.types';

import { memo, useEffect } from 'react';

const VisualizationRenderer = memo<VisualizationRendererProps>(({ options }) => {
    useEffect(() => {
        Highcharts.chart("main", options);
    }, [options]);
    return <><div id="main" />  </>;
});

export default VisualizationRenderer;
