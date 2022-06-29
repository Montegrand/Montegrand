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
        var year = date.getFullYear();
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var day = ('0' + date.getDate()).slice(-2);
        return year + month + day;
    }

    // 공공데이터포털 api 주말 x

    let date = getToday();

    let url = 'https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?resultType=json&';
    url += 'basDt=' + date + '&';
    url += 'isinCd=KR7013580006&';
    url += 'serviceKey=' + key;

    let outPut = document.querySelectorAll('section .container .stockContainer span');
    let stock = document.querySelectorAll('section .container .box .stock span');
    let dateOut = document.querySelector('section .container .box .date');
    let company = document.querySelector('section .container .box .company');
    let stockC = document.querySelector('section .container .box .stockC');

    dateOut.innerHTML = date.slice(0, 4) + '/' + date.slice(4, 6) + '/' + date.slice(-2) + '일자 기준';


    var result = fetch(url);
    result.then(function (response) {
            return response.json();
        })
        .then(function (res) {
            let item = res.response.body.items.item[0];
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
                    if (n !== 2) {
                        v.innerHTML = Math.ceil(max - now);
                    } else {
                        v.innerHTML = (max - now).toFixed(2);
                    }

                    if (n !== 0) {
                        if (n > 0) {
                            v.classList.add('rise');
                        } else {
                            v.classList.add('decline');
                        }
                    }

                    // 목표에 도달하면 정지?? 작동 x
                    if (now < 0) {
                        clearInterval(handle);
                    }

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
            outPut.forEach(function (v, n) {
                if (n !== 2) {
                    v.innerHTML = numberWithCommas(v.innerHTML);
                };
            });
            for (i = 1; i <= 2; i++) {
                if (outPut[i].textContent < '0') {
                    outPut[i].classList.add('decline');
                    outPut[i].innerHTML = '<i></i>' + outPut[i].innerHTML.slice(1);
                } else {
                    outPut[i].classList.add('rise');
                }
            }
        })
    // chart---------------------------------------------------------------------------------

    var ctx = document.getElementById('Chart_1').getContext('2d');

    const chart = new Chart(ctx, {
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
                            return v + '억원'
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
    })
}
