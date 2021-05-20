import { memo } from 'react';
import VisualizationRenderer from '../chart-renderer/VisualizationRenderer';
import { getWordCloudOptions } from '../chart-renderer/transformer/DataTransformer';
import { WordCloudProps } from './WordCloud.types';

const WordCloud = memo<WordCloudProps>(({ data }) => {
    const options = getWordCloudOptions(data);
    return (
        <div>
            <VisualizationRenderer options={options} />
        </div>
    );
});

export default WordCloud;
