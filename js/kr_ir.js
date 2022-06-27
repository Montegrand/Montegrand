// https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?basDt=20220622&isinCd=KR7013580006&serviceKey=muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D



window.onload = function () {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 공공데이터 api 키 muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D
    // 계룡건설 KR7013580006

    let key = `muIq64no7R2y0I1U%2FGhNc1RUj9YYKw5JamO3v%2BafJEOmgNxiPxHn32IVPEWtBqru7HJxuO0wB54iebeiATQ3kg%3D%3D`;

    function getToday() {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        return year + month + day;
    }

    function getTime() {
        var time = new Date();
        var hours = time.getHours().toString();
        return hours;
    }

    let date = getToday();

    if (getTime() > 12) {
        date -= 6;
    } else {
        date -= 7;
    }



    let url = `https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?resultType=json&`;
    url += `basDt=${date}&`;
    url += `isinCd=KR7013580006&`;
    url += `serviceKey=${key}`;

    let outPut = document.querySelectorAll(`section .container table tr:last-child td`);
    let stock = document.querySelectorAll(`section .container .box .stock span`);
    let dateOut = document.querySelector(`section .container .box .date`);
    let company = document.querySelector(`section .container .box .company`);
    let stockC = document.querySelector(`section .container .box .stockC`);
    console.log(outPut)

    dateOut.innerHTML = new Date().getFullYear().toString() + " / " + ('0' + (1 + new Date().getMonth())).slice(-2).toString() + " / " + ('0' + (new Date().getDate() - 1)).slice(-2).toString() + ' 일자 기준';

    fetch(url)
        .then(res => res.json())
        .then(res => {
            let item = res.response.body.items.item[0];
            console.log(item)

            company.innerHTML += item.itmsNm;
            stockC.innerHTML += item.mrktCtg;
            // stock[0].innerHTML += item.clpr;
            // stock[1].innerHTML += item.vs;
            // stock[2].innerHTML += item.fltRt;

            stock.forEach(function (v, n) {
                var max;
                if (n === 0) {
                    max = Number(item.clpr);
                } else if (n === 1) {
                    max = Number(item.vs);
                } else if (n === 2) {
                    max = Number(item.fltRt);
                }

                console.log(Number.isInteger(max))

                console.log(max)
                var now = max
                const handle = setInterval(() => {
                    // v.innerHTML = Math.ceil(max - now);
                    if (Number.isInteger(max)) {
                        v.innerHTML = Math.ceil(max - now);
                    } else {
                        v.innerHTML = (max - now).toFixed(2);
                    }

                    // 목표에 도달하면 정지
                    if (now < 0) {
                        clearInterval(v);
                    }

                    // 적용될 수치, 점점 줄어듬
                    const step = now / 10;

                    now -= step;
                }, 30);
            })

            stock[2].innerHTML = `(${stock[2].innerHTML})`
            outPut[0].innerHTML += item.clpr;
            outPut[1].innerHTML += item.vs;
            outPut[2].innerHTML += item.fltRt;
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
                    console.log(outPut[i].textContent)
                    outPut[i].innerHTML = `<i></i>${outPut[i].innerHTML.slice(1)}`;
                } else {
                    outPut[i].classList.add(`rise`);
                }
            }
        })


    let wid = window.innerWidth;
    let hei = window.innerHeight;

    let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a`);

    navLi.forEach(function (v, n) {
        if (wid <= 1240) {
            for (i = 0; i < navLi.length; i++) {
                if (i !== 7) {
                    navLi[i].href = `#`;
                }
            }
        }
    })

    var allA = document.querySelectorAll(`a`);

    allA.forEach(function (v, n) {
        if (v.href.search(`#`) > 0) {
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
}