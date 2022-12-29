import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';
import drilldown from "highcharts-drilldown";

export default function graficoGeral(props) {

    drilldown(HighCharts);

    const dados = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: props.tipo
        },
        title: {
            text: props.titulo
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        tooltip: {
            headerFormat: `<span style="font-size:11px">{series.name}</span><br>`,
            pointFormat: props.formate
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                }
            },
           column: {
            dataLabels: {
                enabled: true,
                format: '{point.y:1f}'
              }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -65,
                style: {
                    fontSize: '15px',
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        series: [
            {
                name: props.nomeSerie,
                colorByPoint: true,
                data: props.dado,
               
            }
        ],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: 'right'
                }
            },
            series: props.serie
        }

    };

    return (

        <div>
            <HighChartsReact highcharts={HighCharts} options={dados} />
        </div>
    )
}



