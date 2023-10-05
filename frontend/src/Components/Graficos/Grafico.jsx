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
            type: props.tipo,
            height: props.vertical
        },
        title: {
            text: props.titulo
        },
        subtitle: {
            text: props.subTitulo
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
                innerSize: props.size,
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                },
                showInLegend: true
            },
            column: {
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                }
            },
            bar: {
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                }
            },
            spline: {
                dataLabels: {
                    enabled: true,
                    format: props.texto,
                    style: {
                        color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        legend: {
            enabled: props.Legenda,
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: props.rotacao,
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
                colorByPoint: props.cor,
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



