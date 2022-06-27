window.onload = function () {

    var context = document.getElementById('myChart').getContext('2d');

    const DATA_COUNT = 20;
    const NUMBER_CFG = {
        count: DATA_COUNT,
        min: 4000,
        max: 22000
    };

    const labels = [
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
    ]

    const date = {
        labels: labels,
        datasets: [{
            label: '연도별 토건 시평액',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [
                5422,
                6093,
                7113,
                9157,
                10567,
                11880,
                12693,
                15025,
                16325,
                17091,
                18144,
                17207,
                16386,
                15819,
                15899,
                15127,
                16013,
                16814,
                18011,
                20244
            ]
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                }
            }
        },
    };

    const WChart = new Chart(
        document.getElementById('WChart'),
        config
    );

    
}