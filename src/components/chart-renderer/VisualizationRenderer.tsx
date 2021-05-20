import * as Highcharts from 'highcharts';
import loadwordcloud from 'highcharts/modules/wordcloud';
import { VisualizationRendererProps } from './VisualizationRenderer.types';

import { memo, useEffect } from 'react';
loadwordcloud(Highcharts);

const VisualizationRenderer = memo<VisualizationRendererProps>(({ options }) => {
    useEffect(() => {
        Highcharts.chart("main", options);
    }, [options]);
    return <><div id="main" style={{ minHeight: '500px' }} />  </>;
});

export default VisualizationRenderer;
