window.onload = function () {

    // alert('dass');

    let wid = window.innerWidth;
    let hei = window.innerHeight;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let navLi = document.querySelectorAll('header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a');

    Array.prototype.forEach.call(navLi, function (v, n) {
        if (wid <= 1240) {
            for (i = 0; i < navLi.length; i++) {
                if (i !== 7) {
                    navLi[i].href = '#';
                }
            }
        }
    })

    var allA = document.querySelectorAll('a');

    Array.prototype.forEach.call(allA, function (v, n) {
        if (v.href.search('#') > 0) {
            v.onclick = function () {
                return false;
            }
        }
    })

    let menu = document.querySelector("header .bt");
    let nav = document.querySelector("header .top_nav.wrap");
    let overay = document.querySelector("header .overay")
    let trigger = false;


    document.addEventListener('click', function (e) {
        if (e.target === menu) {
            if (trigger === false) {
                nav.className = 'top_nav wrap on';
                menu.className = 'bt on';
                overay.className = 'overay on';
                trigger = true;
                overay.addEventListener('click', function () {
                    nav.className = 'top_nav wrap';
                    menu.className = 'bt';
                    overay.className = 'overay';
                    trigger = false;
                })
            } else {
                nav.className = 'top_nav wrap';
                menu.className = 'bt';
                overay.className = 'overay';
                trigger = false;
            }
        }
    })
    // 공공데이터 api 키 muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D
    // 계룡건설 KR7013580006

    let key = 'muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D';

    function getToday() {
        var date = new Date();
        if (date.getHours() < 12) {
            date = new Date(date.setDate(date.getDate() - 1));
        }
        for (i = 1; i > 0; i++) {
            date = new Date(date.setDate(date.getDate() - i));
            if (date.getDay() % 6 != 0) {
                break;
            }
        };
        if (new Date().getDay() == 6 || new Date().getDay() == 0) {
            date.setDate(date.getDate() - 1)
        };
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        return year + month + day;
    }

    // 공공데이터포털 api 주말 x

    let date = getToday();

    let url = '';
    url += 'https://cors-mongtegrand.herokuapp.com/';
    url += 'https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?resultType=json&';
    url += 'basDt=' + date+ '&';
    url += 'isinCd=KR7013580006&';
    url += 'serviceKey=' + key;

    let outPut = document.querySelectorAll('section .container .stockContainer span');
    let stock = document.querySelectorAll('section .container .box .stock span');
    let dateOut = document.querySelector('section .container .box .date');
    let company = document.querySelector('section .container .box .company');
    let stockC = document.querySelector('section .container .box .stockC');

    dateOut.innerHTML = date.slice(0, 4) + '/' + date.slice(4, 6) + '/' + date.slice(-2) + '일자 기준';

    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
    };

    var result = fetch(url);
    result.then(function (response) {
            return response.json();
        })
        .then(function (res) {
            let item = res.response.body.items.item[0];
            console.log(item)
            company.innerHTML += item.itmsNm;
            stockC.innerHTML += item.mrktCtg;

            Array.prototype.forEach.call(stock, function (v, n) {
                var max;
                if (n === 0) {
                    max = Number(item.clpr);
                } else if (n === 1) {
                    max = Number(item.vs);
                } else if (n === 2) {
                    max = Number(item.fltRt);
                }

                var now = max
                const handle = setInterval(function () {
                    // v.innerHTML = Math.ceil(max - now);
                    if (Number.isInteger(max)) {
                        v.innerHTML = Math.ceil(max - now);
                    } else {
                        v.innerHTML = (max - now).toFixed(2);
                    }
                    if (n !== 2) {
                        v.innerHTML = numberWithCommas(v.innerHTML);
                    } else {
                        v.innerHTML += '%';
                    }
                    if (n !== 0) {
                        if (max > 0) {
                            v.classList.add('rise');
                        } else {
                            v.classList.add('decline');
                        }
                    }

                    // -목표에 도달하면 정지- 마이너스일때 정지
                    // if (now < 0) {
                    //     clearInterval(handle);
                    // }

                    const step = now / 10;
                    now -= step;
                }, 30);
            })

            stock[2].innerHTML = stock[2].innerHTML
            outPut[0].innerHTML += item.clpr;
            outPut[1].innerHTML += item.vs;
            outPut[2].innerHTML += item.fltRt + '%';
            outPut[3].innerHTML += item.mkp;
            outPut[4].innerHTML += item.hipr;
            outPut[5].innerHTML += item.lopr;
            outPut[6].innerHTML += item.trqu;
            Array.prototype.forEach.call(outPut, function (v, n) {
                if (n !== 2) {
                    v.innerHTML = numberWithCommas(v.innerHTML);
                };
            });
            for (i = 1; i <= 2; i++) {
                if (outPut[i].innerHTML < '0') {
                    outPut[i].classList.add('decline');
                    outPut[i].innerHTML = outPut[i].innerHTML.slice(1);
                } else {
                    outPut[i].classList.add('rise');
                }
            }

        })
    // chart---------------------------------------------------------------------------------

    var ctx = document.getElementById('Chart_1').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021',
            ],
            datasets: [{
                    label: '연도별 토건 시평액 (억원)',
                    yAxisID: 'y1',
                    type: 'bar',
                    fill: false,
                    data: [
                        5422, 6093, 7113, 9157, 10567, 11880, 12693, 15025, 16325, 17091, 18144, 17207, 16386, 15819, 15899, 15127, 16013, 16814, 18011, 20244
                    ],
                    backgroundColor: 'rgba(9,114,205,0.33)',
                },
                {
                    label: '도급순위',
                    fill: false,
                    type: 'line',
                    yAxisID: 'y2',
                    data: [
                        25, 25, 24, 23, 22, 19, 21, 21, 21, 20, 19, 23, 21, 23, 17, 17, 18, 18, 18, 18
                    ],
                    backgroundColor: 'rgba(255,5,10,1)',
                    borderColor: 'rgba(255,5,10,1)',
                    borderWidth: 2,
                    tension: 0
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart Title'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: "black"
                    },
                    ticks: {
                        beginAtZero: false,
                    }
                }],
                yAxes: [{
                    id: 'y1',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        min: 4000,
                        max: 22000,
                        beginAtZero: false,
                        callback: function (v, i, a) {
                            return v + '억'
                        }
                    }
                }, {
                    id: 'y2',
                    type: 'linear',
                    gridLines: {
                        display: false,
                    },
                    position: 'right',
                    ticks: {
                        min: 10,
                        max: 30,
                        reverse: true,
                        beginAtZero: false,
                        callback: function (v, i, a) {
                            return v + ' 위';
                        }
                    }
                }],
            }
        }
    });

    var ctx = document.getElementById('Chart_2').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2019', '2020', '2021',
            ],
            datasets: [{
                label: '매출액',
                type: 'bar',
                fill: false,
                data: [
                    16493.89656049, 15712.92959736, 18707.62288982
                ],
                backgroundColor: '#0972CD',
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart Title'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: "black"
                    },
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        min: 14000,
                        callback: function (v, i, a) {
                            return v + ' 억'
                        }
                    }
                }],
            }
        }
    });

    var ctx = document.getElementById('Chart_3').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2019', '2020', '2021',
            ],
            datasets: [{
                label: '매출총이익',
                type: 'bar',
                fill: false,
                data: [
                    1689.33546009, 2135.47059759, 2590.67725788
                ],
                backgroundColor: '#CC581D',
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart Title'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: "black"
                    }
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        min: 1200,
                        callback: function (v, i, a) {
                            return v + ' 억'
                        }
                    }
                }],
            }
        }
    });

    var ctx = document.getElementById('Chart_4').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2019', '2020', '2021',
            ],
            datasets: [{
                label: '영업이익 (손실)',
                type: 'bar',
                fill: false,
                data: [
                    1169.22456688, 1519.90194050, 2036.21424439
                ],
                backgroundColor: '#1214CC',
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart Title'
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        color: "black"
                    },
                }],
                yAxes: [{
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        min: 800,
                        callback: function (v, i, a) {
                            return v + ' 억'
                        }
                    }
                }],
            }
        }
    });

}
