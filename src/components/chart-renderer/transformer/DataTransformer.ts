import * as Highcharts from 'highcharts';

export interface ChartData {
    data: {
        name:string,
        count:number
    } []
}

export interface TransformedData{
    xAxis: Highcharts.Options['xAxis'],
    series: Highcharts.Options['series']
}

export const convertToLineChart : (data: ChartData)=> TransformedData = (data) => {
    const xAxisCategories = data.data.map(e=>e.name) ;
    const lineData: number []= data.data.map(e => e.count);

    return {
        xAxis: {categories: xAxisCategories},
        series:[
        {
            type: 'line',
            data: lineData
        }
    ]} ;
};


