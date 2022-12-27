import React from 'react';
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';


export default function graficoGeral(props) {

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
        tooltip: {
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
            }
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
                name: 'Equipamentos',
                colorByPoint: true,
                data: props.dado
            }
        ]
    };

    return (

        <div>
            <HighChartsReact highcharts={HighCharts} options={dados} />
        </div>
    )
}



// const pieData = [
    //     { name: props.nome1, y: props.i1 },
    //     { name: props.nome2, y: props.i2 },
    //     { name: props.nome3, y: props.i3 },
    //     { name: props.nome4, y: props.i4 },
    //     { name: props.nome5, y: props.i5 },
    //     { name: props.nome6, y: props.i6 },
    //     { name: props.nome7, y: props.i7 },
    //     { name: props.nome8, y: props.i8 },
    //     { name: props.nome9, y: props.i9 }
    //   ]

    // const pieData = [
    //     { name: 'Atendimento On-site', y: 30 },
    //     { name: 'Contratos', y: 50 },
    //     { name: 'Avulso', y: 10 },
    //     { name: 'Help Desk', y: 10 },
    //   ]

    // const dados = {
    //     chart: {
    //         plotBackgroundColor: null,
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //       type: props.tipo,
    //       options3d: {
    //         enabled: true,
    //         alpha: 45
    //       }
    //     },
    //     title: {
    //         text: 'Ordem de Serviço'
    //       },
    //     tooltip: {
    //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //       },
    //       plotOptions: {
    //         pie: {
    //         innerSize: 100,
    //         depth: 45,
    //           allowPointSelect: true,
    //           cursor: 'pointer',
    //           dataLabels: {
    //             enabled: true,
    //             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
    //             style: {
    //               color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || 'black'
    //             }
    //           }
    //         }
    //       },
    //     series: [
    //       {
    //         name: 'QTD',
    //         colorByPoint: true,
    //         data: pieData
    //       }
    //     ]
    //   };