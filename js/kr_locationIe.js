window.onload = function () {
    let wid = window.innerWidth;
    let hei = window.innerHeight;

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

    let db = [
        {
        "office": "본사",
        "address": "<i></i>대전광역시 서구 문정로 48번길 48",
        "tel": "<i></i>042-480-7114",
        "fax": "<i></i>042-486-1615"
        },
        {
        "office": "서울지사",
        "address": "<i></i>서울 특별시 서초구 바우뫼로 180 신송빌딩2층",
        "tel": "<i></i>02-3463-2455",
        "fax": ""
        }
    ]

    let tapM = document.querySelectorAll('.tap > a');
    let header = document.querySelector('.container h4');
    let address = document.querySelector('.container .address > p:nth-child(1)');
    let tel = document.querySelector('.container .address > p:nth-child(2)');
    let fax = document.querySelector('.container .address > p:nth-child(3)');
    let navi = document.querySelector('.container .address > div')

    header.innerHTML = db[0].office;
    address.innerHTML = db[0].address;
    tel.innerHTML = db[0].tel;
    fax.innerHTML = db[0].fax;

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            draggable: false,
            zoomable: false
        };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    console.log(db[0].office)

    var iwContent = '<div style="padding:5px;">계룡건설산업(주)<br>' + db[0].office + '</div>' // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다


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

            navi.innerHTML = '<a href="https://map.kakao.com/link/map/계룡건설산업(주) ' + db[0].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/계룡건설산업(주) ' + db[0].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">길찾기</a>';

        }

    });

    Array.prototype.forEach.call(tapM, function (v, n) {
        v.addEventListener('click', function (e) {
            for (i = 0; i < tapM.length; i++) {
                if (tapM[i] === v) {
                    tapM[i].classList.add('on');
                } else {
                    tapM[i].classList.remove('on');
                }
            }
            header.innerHTML = db[n].office;
            address.innerHTML = db[n].address;
            tel.innerHTML = db[n].tel;
            fax.innerHTML = db[n].fax;
            if (fax.innerHTML === "") {
                fax.classList.add('off');
            } else {
                fax.classList.remove('off');
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
                        content: '<div style="padding:5px;">계룡건설산업(주)<br>' + db[n].office + '</div>' // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    });
                    infowindow.open(map, marker);

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);

                    navi.innerHTML = '<a href="https://map.kakao.com/link/map/계룡건설산업(주) ' + db[n].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/계룡건설산업(주) ' + db[n].office + ',' + result[0].y + ',' + result[0].x + '" target="_blank">길찾기</a>';
                }

            });
            
        })
    })
}
