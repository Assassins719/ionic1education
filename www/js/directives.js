angular.module('starter.directives', [])
        .directive('focusMe', function ($timeout) {
            return {
                link: function (scope, element, attrs) {

                    $timeout(function () {
                        element[0].focus();
                    });
                }
            };
        })

        .directive('randomAvatar', function () {
            var images = [
                'img/adam.jpg',
                'img/ben.png',
                'img/max.png',
                'img/mike.png',
                'img/perry.png',
                'https://pbs.twimg.com/profile_images/589457347229065217/ZtoGwJKr_bigger.jpg'
            ]

            return {
                restrict: 'AE',
                link: function (scope, el) {
                    angular.element(el).attr('src', images[Math.round(Math.random(1) * (images.length - 1))]);
                }
            }
        })

        .directive('randomBackground', function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    var colors = [
                        '#F44336',
                        '#E91E63',
                        '#9C27B0',
                        '#673AB7',
                        '#3F51B5',
                        '#2196F3',
                        '#039BE5',
                        '#0097A7',
                        '#009688',
                        '#43A047',
                        '#689F38',
                        '#FDD835',
                        '#EF6C00',
                        '#FF5722',
                        '#323F4B',
                    ];
                    angular.element(el).css({'background-color': colors[Math.round(Math.random(1) * (colors.length - 1))]})
                }
            }
        })


        .directive('divHighchartMap', function () {
            return {
                link: function (scope, element, attrs) {
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var mychart = new Highcharts.chart(element[0], {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Overall'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['English', 'Hindi', 'Math', 'Science', 'Social Sci', 'Sanskrit', 'Comp Sci'],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {formatter: function () {
                                    return chatdata[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 2,
                                borderWidth: 0,
                                pointWidth: 40
                            }
                        },
                        series: [{
                                name: 'FA',
                                color: '#ff0035',
                                data: [{name: 'A1', y: 6, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'B2', y: 3, drilldown: 'FA'}]

                            }, {
                                name: 'SA',
                                color: '#11a9ed',
                                data: [{name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'B1', y: 4, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'A1', y: 6, drilldown: 'SA'},
                                    {name: 'B1', y: 4, drilldown: 'SA'}]

                            }, {
                                name: 'TotalOverall',
                                color: '#ff9e0d',
                                data: [{name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'B1', y: 4, drilldown: 'TotalOverall'},
                                    {name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'B1', y: 4, drilldown: 'TotalOverall'}]

                            }],
                        drilldown: {
                            series: [{
                                    name: 'FA',
                                    id: 'FA',
                                    data: [
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['B2', 3]
                                    ]

                                },
                                {
                                    name: 'SA',
                                    id: 'SA',
                                    data: [
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['B1', 4],
                                        ['A2', 5],
                                        ['A2', 5],
                                        ['A1', 6],
                                        ['B1', 3]
                                    ]

                                },
                                {
                                    name: 'Total Overall',
                                    id: 'TotalOverall',
                                    data: [
                                        ['A2', 5],
                                        ['A2', 1],
                                        ['B1', 3],
                                        ['A2', 5],
                                        ['A2', 4],
                                        ['A2', 6],
                                        ['B2', 3]
                                    ]

                                }]
                        }
                    });
                    $('.highcharts-credits').hide();
                }

            };
        })
        .directive('hqBulletChart4', function () {
            return {
                link: function (scope, element, attrs) {
                    var revComp = new FusionCharts({
                        type: 'hbullet',
                        renderAt: element[0],
                        width: '300',
                        height: '80',
                        dataFormat: 'json',
                        dataSource: {
                            "chart": {
                                "lowerLimit": "0",
                                "upperLimit": "6",
                                "plotFillColor": "#ffffff",
                                "targetColor": "#ffffff",
                                "showHoverEffect": "1",
                                "showBorder": "0",
                                "bgColor": "#ffffff",
                                "showShadow": "0",
                                "colorRangeFillMix": "{light+0}",
                                "valuePadding": "7",
                                "tickValueStep": "1"
                            },
                            "colorRange": {
                                "color": [
                                    {
                                        "minValue": "0",
                                        "maxValue": "4",
                                        "code": "#FF9800",
                                        "alpha": "70"
                                    },
                                    {
                                        "minValue": "4",
                                        "maxValue": "6",
                                        "code": "#0091EA",
                                        "alpha": "70"
                                    }

                                ]
                            },
                            "label": "B1",
                            "value": "5"

                        }
                    })
                            .render();


                }
            };
        })

        .directive('divJqGauge', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 5,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 5,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'A2', y: 5}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge1', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 4,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 4,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'A2', y: 5}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge2', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 5,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 5,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'B1', y: 4}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge3', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 3,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 3,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'A2', y: 5}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge4', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 3,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 3,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'A2', y: 5}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge5', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 5,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 5,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'A1', y: 6}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })
        .directive('divJqGauge6', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.seriesTypes.gauge.prototype.drawLegendSymbol =
                            Highcharts.seriesTypes.column.prototype.drawLegendSymbol;
                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    var chartColors = ['#828282', ];
                    var gaugePBColors = ['#FF9800', '#0091EA'];

                    var chart = new Highcharts.Chart({
                        chart: {
                            renderTo: element[0],
                            type: 'gauge',
                            backgroundColor: 'none'
                        },
                        colors: [
                            chartColors[1]
                        ],
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: '',
                            style: {
                                fontFamily: 'arial,helvetica,sans-serif',
                                color: chartColors[1],
                                fontWeight: 'bold',
                                fontSize: '24px'
                            }
                        },
                        legend: {
                            align: 'left',
                            verticalAlign: 'bottom',
                            layout: 'vertical',
                            x: 0,
                            y: -112,
                            floating: true,
                            borderWidth: 0
                        },
                        pane: [{
                                startAngle: -90,
                                endAngle: 90,
                                background: null
                            }],
                        yAxis: [{
                                min: 0,
                                max: 6,
                                lineColor: 'transparent',
                                tickWidth: 2,
                                tickLength: 12,
                                tickColor: 'transparent', /*'#ffffff',*/
                                minorTickColor: 'transparent',
                                tickPositions: [0, 1, 2, 3, 4, 5, 6],
                                labels: {
                                    rotation: null,
                                    distance: 15,
                                    zIndex: 1,
                                    formatter: function () {
                                        return chatdata[this.value];
                                    }
                                },
                                plotBands: [{
                                        from: 0,
                                        to: 4,
                                        color: gaugePBColors[0],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }, {
                                        from: 4,
                                        to: 6,
                                        color: gaugePBColors[1],
                                        innerRadius: '50%',
                                        outerRadius: '100%'
                                    }],
                                pane: 0
                            }],
                        tooltip: {
                            formatter: function () {
                                return 'Actual: ' + '<b>' + chatdata[this.y] + '</b>';
                            }
                        },
                        plotOptions: {
                            gauge: {
                                dial: {
                                    radius: '100%',
                                    baseWidth: 7,
                                    baseLength: 14,
                                    rearLength: 0
                                },
                                pivot: {
                                    radius: 3,
                                    backgroundColor: chartColors[1]
                                },
                                showInLegend: false
                            }
                        },
                        series: [{
                                name: 'Acutal',
                                data: [{grade: 'B2', y: 4}],
                                dial: {
                                    backgroundColor: chartColors[1]
                                },
                                yAxis: 0,
                                dataLabels: {
                                    enabled: false,
                                    x: 96,
                                    y: -135,
                                    color: chartColors[1],
                                    borderWidth: 0,
                                    borderRadius: 7,
                                    backgroundColor: '#ffffff',
                                    padding: 1,
                                    style: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        lineHeight: '40px'
                                    }
                                }
                            }]

                    }



                    );
                }

            };
        })


        .directive('divHighchartMap1', function () {
            return {
                link: function (scope, element, attrs) {

                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Overall (Class III)'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['English', 'Hindi', 'Math', 'Science', 'Social Sci', 'Sanskrit', 'Comp Science'],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {formatter: function () {
                                    return chatdata[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 2,
                                borderWidth: 0,
                                pointWidth: 40
                            }
                        },
                        series: [{
                                name: 'FA',
                                color: '#ff0035',
                                data: [{name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'C1', y: 2, drilldown: 'FA'},
                                    {name: 'B1', y: 4, drilldown: 'FA'},
                                    {name: 'A2', drilldown: 'FA'},
                                    {name: 'A1', y: 6, drilldown: 'FA'},
                                    {name: 'C2', y: 1, drilldown: 'FA'}]

                            }, {
                                name: 'SA',
                                color: '#11a9ed',
                                data: [{name: 'B1', y: 4, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'C2', y: 1, drilldown: 'SA'},
                                    {name: 'A1', y: 6, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'},
                                    {name: 'B2', y: 3, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'}]

                            }, {
                                name: 'TotalOverall',
                                color: '#ff9e0d',
                                data: [{name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'C2', y: 1, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'A1', y: 6, drilldown: 'TotalOverall'},
                                    {name: 'C1', y: 2, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'B1', y: 4, drilldown: 'TotalOverall'}]

                            }],
                        drilldown: {
                            series: [{
                                    name: 'FA',
                                    id: 'FA',
                                    data: [
                                        ['B2', 3],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['A1', 6],
                                        ['B2', 3],
                                        ['C1', 2],
                                        ['B1', 4]
                                    ]

                                },
                                {
                                    name: 'SA',
                                    id: 'SA',
                                    data: [
                                        ['A1', 6],
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['B1', 4],
                                        ['B2', 3],
                                        ['C2', 1],
                                        ['C1', 2]
                                    ]

                                },
                                {
                                    name: 'Total Overall',
                                    id: 'TotalOverall',
                                    data: [
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['B2', 3],
                                        ['B1', 4],
                                        ['A1', 6],
                                        ['B2', 3]
                                    ]

                                }]
                        }
                    });
                    $('.highcharts-credits').hide();
                }

            };
        })
        .directive('divHighchartMap2', function () {
            return {
                link: function (scope, element, attrs) {

                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Overall (Class VI)'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['English', 'Hindi', 'Math', 'Science', 'Social Sci', 'Sanskrit', 'Comp Science'],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {formatter: function () {
                                    return chatdata[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 2,
                                borderWidth: 0,
                                pointWidth: 40
                            }
                        },
                        series: [{
                                name: 'FA',
                                color: '#ff0035',
                                data: [{name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'C1', y: 2, drilldown: 'FA'},
                                    {name: 'B1', y: 4, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A1', y: 6, drilldown: 'FA'},
                                    {name: 'C2', y: 1, drilldown: 'FA'}]

                            }, {
                                name: 'SA',
                                color: '#11a9ed',
                                data: [{name: 'B1', y: 4, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'C2', y: 1, drilldown: 'SA'},
                                    {name: 'A1', y: 6, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'},
                                    {name: 'B2', y: 3, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'}]

                            }, {
                                name: 'TotalOverall',
                                color: '#ff9e0d',
                                data: [{name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'C2', y: 1, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'A1', y: 6, drilldown: 'TotalOverall'},
                                    {name: 'C1', y: 2, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'B1', y: 4, drilldown: 'TotalOverall'}]

                            }],
                        drilldown: {
                            series: [{
                                    name: 'FA',
                                    id: 'FA',
                                    data: [
                                        ['B2', 3],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['A1', 6],
                                        ['B2', 3],
                                        ['C1', 2],
                                        ['B1', 4]
                                    ]

                                },
                                {
                                    name: 'SA',
                                    id: 'SA',
                                    data: [
                                        ['A1', 6],
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['B1', 4],
                                        ['B2', 3],
                                        ['C2', 1],
                                        ['C1', 2]
                                    ]

                                },
                                {
                                    name: 'Total Overall',
                                    id: 'TotalOverall',
                                    data: [
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['B2', 3],
                                        ['B1', 4],
                                        ['A1', 6],
                                        ['B2', 3]
                                    ]

                                }]
                        }
                    });
                    $('.highcharts-credits').hide();
                }

            };
        })
        .directive('divHighchartMap3', function () {
            return {
                link: function (scope, element, attrs) {

                    var chatdata = ["D", "C2", "C1", "B2", "B1", "A2", "A1"];
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Overall (Class V)'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            categories: ['English', 'Hindi', 'Math', 'Science', 'Social Sci', 'Sanskrit', 'Comp Science'],
                            crosshair: true
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {formatter: function () {
                                    return chatdata[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 2,
                                borderWidth: 0,
                                pointWidth: 40
                            }
                        },
                        series: [{
                                name: 'FA',
                                color: '#ff0035',
                                data: [{name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'B2', y: 3, drilldown: 'FA'},
                                    {name: 'C1', y: 2, drilldown: 'FA'},
                                    {name: 'B1', y: 4, drilldown: 'FA'},
                                    {name: 'A2', y: 5, drilldown: 'FA'},
                                    {name: 'A1', y: 6, drilldown: 'FA'},
                                    {name: 'C2', y: 1, drilldown: 'FA'}]

                            }, {
                                name: 'SA',
                                color: '#11a9ed',
                                data: [{name: 'B1', y: 4, drilldown: 'SA'},
                                    {name: 'A2', y: 5, drilldown: 'SA'},
                                    {name: 'C2', y: 1, drilldown: 'SA'},
                                    {name: 'A1', y: 6, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'},
                                    {name: 'B2', y: 3, drilldown: 'SA'},
                                    {name: 'C1', y: 2, drilldown: 'SA'}]

                            }, {
                                name: 'TotalOverall',
                                color: '#ff9e0d',
                                data: [{name: 'A2', y: 5, drilldown: 'TotalOverall'},
                                    {name: 'C2', y: 1, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'A1', y: 6, drilldown: 'TotalOverall'},
                                    {name: 'C1', y: 2, drilldown: 'TotalOverall'},
                                    {name: 'B2', y: 3, drilldown: 'TotalOverall'},
                                    {name: 'B1', y: 4, drilldown: 'TotalOverall'}]

                            }],
                        drilldown: {
                            series: [{
                                    name: 'FA',
                                    id: 'FA',
                                    data: [
                                        ['B2', 3],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['A1', 6],
                                        ['B2', 3],
                                        ['C1', 2],
                                        ['B1', 4]]

                                },
                                {
                                    name: 'SA',
                                    id: 'SA',
                                    data: [
                                        ['A1', 6],
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['B1', 4],
                                        ['B2', 3],
                                        ['C2', 1],
                                        ['C1', 2]]
                                },
                                {
                                    name: 'Total Overall',
                                    id: 'TotalOverall',
                                    data: [
                                        ['C1', 2],
                                        ['A2', 5],
                                        ['C2', 1],
                                        ['B2', 3],
                                        ['B1', 4],
                                        ['A1', 6],
                                        ['B2', 3]]

                                }]
                        }
                    });
                    $('.highcharts-credits').hide();
                }

            };
        })
        .directive('divHighchartLine', function () {
            return {
                link: function (scope, element, attrs) {

                    var chartData = ['D', 'C2', 'C1', 'B2', 'B1', 'A2', 'A1'];
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'line'
                        },
                        title: {
                            text: 'Overall Performance by Subject / Class',
                            style: {fontSize: "11px"}
                        },
                        xAxis: {
                            categories: ['Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX']
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {
                                formatter: function () {
                                    return chartData[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        legend: {
                            squareSymbol: true,
                            symbolHeight: 14,
                            itemDistance: 15,
                            itemMarginTop: 13,
                            align: 'center',
                            layout: 'horizontal',
                            itemStyle: {
                                fontSize: "13px"
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: false
                                },
                                enableMouseTracking: true
                            },
                            series: {
                                events: {
                                    legendItemClick: function (event) {
                                        var selected = this.index;
                                        var allSeries = this.chart.series;

                                        $.each(allSeries, function (index, series) {
                                            selected == index ? series.show() : series.hide();
                                        });

                                        return false;
                                    }
                                }
                            }
                        },
                        series: [{
                                name: 'English',
                                data: [
                                    {name: 'A1', y: 6},
                                    {name: 'B2', y: 3},
                                    {name: 'C2', y: 1},
                                    {name: 'C1', y: 2},
                                    {name: 'A2', y: 5},
                                    {name: 'B1', y: 4},
                                    {name: 'A1', y: 6}]
                            },
                            {name: 'Hindi',
                                visible: false,
                                data: [
                                    {name: 'B1', y: 4},
                                    {name: 'A2', y: 5},
                                    {name: 'C2', y: 1},
                                    {name: 'A1', y: 6},
                                    {name: 'C1', y: 2},
                                    {name: 'B2', y: 3},
                                    {name: 'C1', y: 2}]
                            }, {
                                name: 'Maths',
                                visible: false,
                                data: [{name: 'B2', y: 3},
                                    {name: 'C2', y: 1},
                                    {name: 'B1', y: 4},
                                    {name: 'A2', y: 5},
                                    {name: 'C2', y: 1},
                                    {name: 'B1', y: 4},
                                    {name: 'A1', y: 6}]
                            }, {
                                name: 'Science',
                                visible: false,
                                data: [{name: 'C1', y: 2},
                                    {name: 'C2', y: 1},
                                    {name: 'B1', y: 4},
                                    {name: 'A1', y: 6},
                                    {name: 'B2', y: 3},
                                    {name: 'B2', y: 3},
                                    {name: 'C1', y: 2}]
                            }, {
                                name: 'Social Science',
                                visible: false,
                                data: [{name: 'B2', y: 3},
                                    {name: 'A1', y: 6},
                                    {name: 'B2', y: 4},
                                    {name: 'C2', y: 1},
                                    {name: 'A2', y: 5},
                                    {name: 'B1', y: 4},
                                    {name: 'C2', y: 1}]
                            }, {
                                name: 'Sanskrit',
                                visible: false,
                                data: [{name: 'B1', y: 1},
                                    {name: 'A2', y: 5},
                                    {name: 'B2', y: 3},
                                    {name: 'A1', y: 6},
                                    {name: 'B1', y: 4},
                                    {name: 'C2', y: 1},
                                    {name: 'B1', y: 4}]
                            }, {
                                name: 'Computer Science',
                                visible: false,
                                data: [{name: 'B1', y: 4},
                                    {name: 'C2', y: 2},
                                    {name: 'A2', y: 5},
                                    {name: 'C2', y: 1},
                                    {name: 'A1', y: 6},
                                    {name: 'C1', y: 2},
                                    {name: 'B1', y: 4}]
                            }]
                    })
                    $('.highcharts-credits').hide();
                }

            };
        })

        .directive('divHighchartLine1', function () {
            return {
                link: function (scope, element, attrs) {
                    var chartData = ['D', 'C2', 'C1', 'B2', 'B1', 'A2', 'A1'];
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'line'
                        },
                        title: {
                            text: 'Overall Term Performance - By Class',
                            style: {fontSize: "11px"}
                        },
                        xAxis: {
                            categories: ['Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX']
                        },
                        yAxis: {
                            min: 0,
                            max: 6,
                            labels: {
                                formatter: function () {
                                    return chartData[this.value];
                                }
                            },
                            title: {
                                text: ''
                            },
                            tickPositions: [0, 1, 2, 3, 4, 5, 6]
                        },
                        legend: {
                            squareSymbol: true,
                            symbolHeight: 14,
                            itemDistance: 15,
                            itemMarginTop: 13,
                            align: 'center',
                            layout: 'horizontal',
                            itemStyle: {
                                fontSize: "13px"
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.x}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.name} </b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: false
                                },
                                enableMouseTracking: true
                            },
                            series: {
                                events: {
                                    legendItemClick: function (event) {
                                        var selected = this.index;
                                        var allSeries = this.chart.series;

                                        $.each(allSeries, function (index, series) {
                                            selected == index ? series.show() : series.hide();
                                        });

                                        return false;
                                    }
                                }
                            }
                        },
                        series: [{
                                name: 'Term 1',
                                visible: false,
                                data: [{name: 'C1', y: 2},
                                    {name: 'C2', y: 2},
                                    {name: 'A2', y: 5},
                                    {name: 'C2', y: 1},
                                    {name: 'A1', y: 6},
                                    {name: 'C1', y: 2},
                                    {name: 'B1', y: 4}]
                            }, {
                                name: 'Term 2',
                                visible: false,
                                data: [{name: 'B1', y: 1},
                                    {name: 'C1', y: 2},
                                    {name: 'B2', y: 3},
                                    {name: 'A1', y: 6},
                                    {name: 'B1', y: 4},
                                    {name: 'C2', y: 1},
                                    {name: 'B1', y: 4}]
                            }, {
                                name: 'Overall',
                                data: [{name: 'C1', y: 2},
                                    {name: 'C2', y: 1},
                                    {name: 'A2', y: 5},
                                    {name: 'A1', y: 6},
                                    {name: 'B2', y: 3},
                                    {name: 'B2', y: 3},
                                    {name: 'A2', y: 5}]
                            }]
                    })
                    $('.highcharts-credits').hide();
                }

            };
        })
        .directive('hcChart', function () {
            return {
                restrict: 'E',
                template: '<div></div>',
                scope: {
                    options: '='
                },
                link: function (scope, element) {
                    Highcharts.chart(element[0], scope.options);
                }
            };
        })


        .directive('divHighchartLine2', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'spline'
                        },
                        title: {
                            text: 'Body Mass Index Report for Class',
                            style: {fontSize: "12px"}

                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            type: 'datetime',
                            labels: {
                                overflow: 'justify'
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'BMI Index'
                            },
                            minorGridLineWidth: 0,
                            gridLineWidth: 0,
                            alternateGridColor: null,
                            plotBands: [{// Light air
                                    from: 0.0,
                                    to: 18.5,
                                    color: 'rgba(68, 170, 213, 0.1)',
                                    label: {
                                        text: 'Under Weight',
                                        style: {
                                            color: '#606060'
                                        }
                                    }
                                }, {// Light breeze
                                    from: 18.5,
                                    to: 24.9,
                                    color: 'rgba(0, 0, 0, 0)',
                                    label: {
                                        text: 'Normal Weight',
                                        style: {
                                            color: '#606060'
                                        }
                                    }
                                }, {// Gentle breeze
                                    from: 25.0,
                                    to: 29.9,
                                    color: 'rgba(68, 170, 213, 0.1)',
                                    label: {
                                        text: 'Over Weight',
                                        style: {
                                            color: '#606060'
                                        }
                                    }
                                }
                            ]
                        },
                        tooltip: {
                            valueSuffix: ''
                        },
                        plotOptions: {
                            spline: {
                                lineWidth: 4,
                                states: {
                                    hover: {
                                        lineWidth: 5
                                    }
                                },
                                marker: {
                                    enabled: false
                                },
                                pointInterval: 7257600000, // one day
                                pointStart: Date.UTC(2012, 00, 01, 0, 0, 0)
                            }
                        },
                        series: [{
                                name: 'BMI',
                                data: [20.0, 21.9, 23.3, 22.1, 23.9, 24.9, 24.2, 25.1, 25.8, 26.2, 25.9, 26.5, 27.2, 27.8, 28.5, 29.1, 29.9, 30.3, 29.4, 28.9, 28.2, 28.7, 29.4]

                            }
                        ],
                        navigation: {
                            menuItemStyle: {
                                fontSize: '10px'
                            }
                        }
                    })
                    $('.highcharts-credits').hide();
                }
            };
        })
        .directive('divHighchartLine9', function () {
            return {
                link: function (scope, element, attrs) {
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'spline'
                        },
                        title: {
                            text: 'Height-Weight Report for Class'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            type: 'datetime',
                            labels: {
                                overflow: 'justify'
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'Height(cm)-Weight(Kg)'
                            },
                            minorGridLineWidth: 0,
                            gridLineWidth: 0,
                            alternateGridColor: null,
                            plotBands: [{// Light air
                                    from: 0.0,
                                    to: 18.5,
                                    color: 'rgba(68, 170, 213, 0.1)',
                                    label: {
                                        text: ' Weight',
                                        style: {
                                            color: '#606060'
                                        }
                                    }
                                }
                            ]
                        },
                        tooltip: {
                            valueSuffix: ''
                        },
                        plotOptions: {
                            spline: {
                                lineWidth: 4,
                                states: {
                                    hover: {
                                        lineWidth: 5
                                    }
                                },
                                marker: {
                                    enabled: false
                                },
                                pointInterval: 7257600000, // one day
                                pointStart: Date.UTC(2013, 00, 01, 0, 0, 0)
                            }
                        },
                        series: [{
                                name: 'Weight',
                                data: [16.0, 18.2, 20.5, 22.6, 23.5, 24.6, 25.7, 26.8, 27.4, 28.8, 29.0, 28.8, 29.3, 29.9, 30.9, 33.2, 35.9, 37.5, 39.0]

                            },
                            {
                                name: 'Height',
                                data: [70, 71, 75, 75, 78, 79, 83, 89, 91, 96, 99, 105, 109, 114, 120, 126, 132, 140, 152]

                            }
                        ],
                        navigation: {
                            menuItemStyle: {
                                fontSize: '10px'
                            }
                        }

                    })
                    $('.highcharts-credits').hide();
                }
            };
        })
        
