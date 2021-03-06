import * as Highcharts from 'highcharts';

export interface ChartData {
    data: {
        name:string,
        date?:Date,
        count:number
    } []
}

export interface WordInfo {
    name: string,
    weight: number
}

export type WordCloudInfo = WordInfo [];

export interface TransformedData{
    xAxis: Highcharts.Options['xAxis'],
    series: Highcharts.Options['series']
}

export const getDateLineOptions : (data: ChartData) => Highcharts.Options = (data) => {
const transformedData=data.data.map(function(el, i) {
    return {
        x: new Date(el.date!).getTime(),
        y: el.count
    }
});
const total = data.data.reduce((acc,cur)=>acc+cur.count,0);
const avg = data.data.length===0? 0: Math.floor(total/data.data.length);
    return {
        title: {
                text: 'Chat count'
            },
        subtitle: {
            text: `Total chat ${total}`
        },
 
            chart:
            {
              type: 'area',  
            },
            xAxis: {type:'datetime'},
            yAxis: {
 plotLines:[{
                            color:'red',
                            zIndex:4,
                            width: 1,
                            value: avg,
                            label: {
                                text: `Avg ${avg}`,
                            }

            }]
            },
            series:[
                {
                    name:'count',
                    data: transformedData,
                    type:'area'
                },
            ]
        } ;

}

export const getLineChartOptions : (data: ChartData)=> Highcharts.Options = (data) => {
    const xAxisCategories = data.data.map(e=>e.name) ;
    const lineData: number []= data.data.map(e => e.count);

    return {
        title: {
                text: 'Chat count'
            },
        xAxis: {categories: xAxisCategories},
        series:[
            {
                name:'count',
                type: 'line',
                data: lineData
            },
        ]
    } ;
};


export const getColumnOptions : (data: ChartData)=> Highcharts.Options = (data) => {
    const xAxisCategories = data.data.map(e=>e.name) ;
    const lineData: number []= data.data.map(e => e.count);
    const total : number = lineData.reduce((prev,curr)=>prev+curr);
    const avg : number = lineData.length===0? 0: Math.floor(total/(lineData.length));

    return {
        title: {
                text: 'Chat count'
            },
        subtitle: {
            text: `Total chat ${total}`
        },
        xAxis: {
            categories: xAxisCategories,
        },
        yAxis:{
            plotLines:[{
                            color:'red',
                            zIndex:4,
                            width: 1,
                            value: avg,
                            label: {
                                text: `Avg ${avg}`,
                            }

            }]
        },
        series:[
            {
                name:'count',
                data: lineData,
                type: 'column',
                dataLabels: {
                    enabled: true,
                }
            },
        ]
    } ;
};


export function getWordCloudOptions(data: WordCloudInfo): Highcharts.Options {
    return {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'Wordcloud of texts'
        }
    }
}

