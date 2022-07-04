window.onload = function () {

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

    let wrap = document.querySelector(`header .top_nav.wrap`);
    
    let call = function () {
        let liCon = document.querySelectorAll(`header .top_nav.wrap > li`);
        if (liCon.length>4) {
            if (window.innerWidth < 1240) {
                wrap.prepend(document.createElement('li'));
                wrap.children.item(0).prepend(document.createElement('div'));
                wrap.children.item(0).prepend(document.createElement('div'));
                liCon.forEach(function (v, n) {
                    var li = wrap.children.item(1);
                    if (n <= 2) {
                        wrap.children.item(0).children.item(0).insertAdjacentElement('beforeend', li)
                    } else if (n < 5) {
                        wrap.children.item(0).children.item(1).insertAdjacentElement('beforeend', li)
                    }
                })
            }
        }
        
        liCon[0].classList.add('on');
        if (window.innerWidth > window.innerHeight) {
            wrap.classList.add('width');
        } else {
            wrap.classList.remove('width')
        }
    }
    
    call();
    
    window.addEventListener('resize', function () {
        call();
        if (window.innerWidth >= 1240) {
            this.location.reload();
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

    let navT = document.querySelectorAll('header .top_nav.wrap > li:first-child > div:first-child > li');
    let navB = document.querySelectorAll('header .bot_nav.wrap .depth.snd > li');

    navT.forEach(function(v,n) {
        v.addEventListener('click', function(e) {
            for (i=0;i<navT.length;i++) {
                navT[i].classList.remove('on')
            }
            v.classList.add('on');
        })
    })

    navB.forEach(function(v,n) {
        v.addEventListener('click', function(e) {
            for (i=0;i<navB.length;i++) {
                navB[i].classList.remove('on')
            }
            v.classList.add('on');
            this.focus();
        })
    })
    
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

    class DataInfo {
        constructor(office, address, tel, fax) {
            this.office = office;
            this.header = [office + ' 위치안내'];
            this.address = address;
            this.tel = tel;
            this.fax = fax;
        }
    }

    class DataT {
        constructor() {
            this.datat = [];
        };
        newData(office, address, tel, fax) {
            let arrChild = new DataInfo(office, address, tel, fax);
            this.datat.push(arrChild);
            return arrChild;
        };
        get allDataT() {
            return this.datat;
        };
        get lengthOfDatat() {
            return this.datat.length;
        };
    };

    var datat = new DataT()

    datat.newData(
        "본사",
        "<i></i>대전광역시 서구 문정로 48번길 48",
        "<i></i>042-480-7114",
        "<i></i>042-486-1615"
    );

    datat.newData(
        "서울지사",
        "<i></i>서울 특별시 서초구 바우뫼로 180 신송빌딩2층",
        "<i></i>02-3463-2455",
        ""
    )

    window.addEventListener('resize', function () {
        if (wid <= 680) {
            if ( window.innerWidth > window.innerHeight ) {
                return document.querySelector(`section .map`).classList.add(`width`);
            } else {
                return document.querySelector(`section .map`).classList.remove(`width`);
            }
        }
    })

    let tap = document.querySelectorAll(`.tap > a`);
    let header = document.querySelector(`.container h4`);
    let address = document.querySelector(`.container .address > p:nth-child(1)`);
    let tel = document.querySelector(`.container .address > p:nth-child(2)`);
    let fax = document.querySelector(`.container .address > p:nth-child(3)`);
    let navi = document.querySelector(`.container .address > div`)

    header.innerHTML = datat.datat[0].header;
    address.innerHTML = datat.datat[0].address;
    tel.innerHTML = datat.datat[0].tel;
    fax.innerHTML = datat.datat[0].fax;

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    var iwContent = '<div style="padding:5px;">계룡건설산업(주)<br>' + datat.datat[0].office + '</div>' // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address.textContent, function (result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: iwContent
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);

            navi.innerHTML = '<a href="https://map.kakao.com/link/map/계룡건설산업(주) ' + datat.datat[0].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/계룡건설산업(주) ' + datat.datat[0].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">길찾기</a>';

        }

    });

    tap.forEach(function (v, n) {
        v.addEventListener('click', function (e) {
            for (i = 0; i < tap.length; i++) {
                if (tap[i] === v) {
                    tap[i].classList.add(`on`);
                } else {
                    tap[i].classList.remove(`on`);
                }
            }
            header.innerHTML = datat.datat[n].header;
            address.innerHTML = datat.datat[n].address;
            tel.innerHTML = datat.datat[n].tel;
            fax.innerHTML = datat.datat[n].fax;
            if (fax.innerHTML === "") {
                fax.classList.add(`off`);
            } else {
                fax.classList.remove(`off`);
            }
            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address.textContent, function (result, status) {

                // 정상적으로 검색이 완료됐으면 
                if (status === kakao.maps.services.Status.OK) {

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    var marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 인포윈도우로 장소에 대한 설명을 표시합니다
                    var infowindow = new kakao.maps.InfoWindow({
                        content: '<div style="padding:5px;">계룡건설산업(주)<br>' + datat.datat[n].office + '</div>' // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);

                    navi.innerHTML = '<a href="https://map.kakao.com/link/map/계룡건설산업(주) ' + datat.datat[n].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/계룡건설산업(주) ' + datat.datat[n].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">길찾기</a>';
                }

            });

        })
    })
}
