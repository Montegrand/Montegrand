// https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?basDt=20220622&isinCd=KR7013580006&serviceKey=muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D



window.onload = function () {

    let wid = window.innerWidth;
    let hei = window.innerHeight;

    let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a`);

    let wrap = document.querySelector(`header .top_nav.wrap`);
    if (window.innerWidth<1280) {
        let liCon = document.querySelectorAll(`header .top_nav.wrap > li`);
        wrap.prepend(document.createElement('li'));
        wrap.children.item(0).prepend(document.createElement('div'));
        wrap.children.item(0).prepend(document.createElement('div'));
        liCon.forEach(function(v,n) {
            var li = wrap.children.item(1);
            if (n<=2) {
                wrap.children.item(0).children.item(0).insertAdjacentElement('beforeend', li)
            } else if (n<5) {
                wrap.children.item(0).children.item(1).insertAdjacentElement('beforeend', li)
            }
        })
    }
    window.addEventListener('resize',function() {

        this.location.reload();

        if (window.innerWidth>window.innerHeight) {
            wrap.classList.add('width');
        } else {
            wrap.classList.remove('width')
        }
    })

    navLi.forEach(function (v, n) {
        if (wid <= 1240) {
            for ( i = 0; i < navLi.length; i++ ) {
                if ( i !== 7 ) {
                    navLi[i].href = `#`;
                }
            }
        }
    })

    var allA = document.querySelectorAll(`a`);

    allA.forEach(function(v,n){
        if (v.href.search(`#`) > 0) {
            v.onclick = function() {return false;}
        }
    })

    let menu = document.querySelector("header .bt");
    let nav = document.querySelector("header .top_nav.wrap");
    let overay = document.querySelector("header .overay")
    let trigger = false;


    document.addEventListener('click', function (e) {
        if (e.target === menu) {
            if (trigger === false) {
                nav.classList.add(`on`);
                menu.classList.add(`on`);
                overay.classList.add(`on`);
                trigger = true;
                overay.addEventListener('click', function () {
                    nav.classList.remove(`on`);
                    menu.classList.remove(`on`);
                    overay.classList.remove(`on`);
                    trigger = false;
                })
            } else {
                nav.classList.remove(`on`);
                menu.classList.remove(`on`);
                overay.classList.remove(`on`);
                trigger = false;
            }
        }
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 공공데이터 api 키 muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D
    // 계룡건설 KR7013580006

    let key = `muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D`;

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

    let url = `https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?resultType=json&`;
    url += `basDt=${date}&`;
    url += `isinCd=KR7013580006&`;
    url += `serviceKey=${key}`;

    let outPut = document.querySelectorAll(`section .container .stockContainer span`);
    let stock = document.querySelectorAll(`section .container .box .stock span`);
    let dateOut = document.querySelector(`section .container .box .date`);
    let company = document.querySelector(`section .container .box .company`);
    let stockC = document.querySelector(`section .container .box .stockC`);

    dateOut.innerHTML = `${date.slice(0,4)} / ${date.slice(4,6)} / ${date.slice(-2)} 일자 기준`;

    fetch(url)
        .then(res => res.json())
        .then(res => {
            let item = res.response.body.items.item[0];

            company.innerHTML += item.itmsNm;
            stockC.innerHTML += item.mrktCtg;

            stock.forEach(function (v, n) {
                var max;
                if (n === 0) {
                    max = Number(item.clpr);
                } else if (n === 1) {
                    max = Number(item.vs);
                } else if (n === 2) {
                    max = Number(item.fltRt);
                }

                console.log(max)

                var now = max
                const handle = setInterval(() => {
                    // v.innerHTML = Math.ceil(max - now);
                    if (Number.isInteger(max)) {
                        v.innerHTML = Math.ceil(max - now);
                    } else {
                        v.innerHTML = (max - now).toFixed(2);
                    }
                    if (n !== 2) {
                        v.innerHTML = numberWithCommas(v.innerHTML);
                    };
                    if (n !== 0) {
                        if (max > 0) {
                            v.classList.add(`rise`);
                        } else {
                            v.classList.add(`decline`);
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

            stock[2].innerHTML = `(${stock[2].innerHTML})`
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
                    outPut[i].classList.add(`decline`);
                    outPut[i].innerHTML = outPut[i].innerHTML.slice(1);
                } else {
                    outPut[i].classList.add(`rise`);
                }
            }
        })
        
    chartContain.forEach(function(v,n) {
        if (wid <= 1240) {
            v.height = 400;
        }
    })

    // chart-----------------------------------------------------------------------------------------

    var context = document.getElementById('Chart_1').getContext('2d');

    var WChart = new Chart(context, {
        type: 'line',
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
                backgroundColor: [
                    '#0972CD44',
                ],
            }, {
                label: '도급순위',
                fill: false,
                yAxisID: 'y2',
                data: [
                    25, 25, 24, 23, 22, 19, 21, 21, 21, 20, 19, 23, 21, 23, 17, 17, 18, 18, 18, 18
                ],
                backgroundColor: [
                    'rgba(255,5,10,1)',
                ],
                borderColor: [
                    'rgba(255,5,10,1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: 'nearest'
            },
            scales: {
                y1: {
                    type: 'linear',
                    position: 'left',
                    min: 4000,
                    max: 22000,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        callback: function (v, i, a) {
                            return v + ' 억';
                        }
                    }
                },
                y2: {
                    type: 'linear',
                    grid: {
                        display: false,
                    },
                    position: 'right',
                    min: 10,
                    max: 30,
                    reverse: true,
                    ticks: {
                        callback: function (v, i, a) {
                            return v + ' 위';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });


    var context = document.getElementById('Chart_2').getContext('2d');

    var WChart = new Chart(context, {
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
                backgroundColor: [
                    '#0972CD',
                ],
            }]
        },
        options: {
            maintainAspectRatio: false,
            // elements: {
            //     bar: {
            //         inflateAmount: 2
            //     }
            // },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18
                        },
                        // padding: 30
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                    min: 14000,
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                }
            }
        }

    });


    var context = document.getElementById('Chart_3').getContext('2d');

    var WChart = new Chart(context, {
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
                backgroundColor: [
                    '#CC581D',
                ],
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                    min: 1200,
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                }
            }
        }
    });


    var context = document.getElementById('Chart_4').getContext('2d');

    var WChart = new Chart(context, {
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
                backgroundColor: [
                    '#1214CC',
                ],
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                    min: 800,
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 20
                        }
                    }
                }
            }
        }
    });

    var td = document.querySelectorAll('section.snd table td');

    td.forEach(function(v,n) {
        if (Number.isInteger(parseInt(v.innerHTML))) {
            v.innerHTML = numberWithCommas(v.innerHTML);
        }
    })

}