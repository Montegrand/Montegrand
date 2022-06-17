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
                nav.className = `top_nav wrap on`;
                menu.className = `bt on`;
                overay.className = `overay on`;
                trigger = true;
                overay.addEventListener('click', function () {
                    nav.className = `top_nav wrap`;
                    menu.className = `bt`;
                    overay.className = `overay`;
                    trigger = false;
                })
            } else {
                nav.className = `top_nav wrap`;
                menu.className = `bt`;
                overay.className = `overay`;
                trigger = false;
            }
        }
    })

    // const mapContainer = document.querySelector('section .map'),
    //     mapOption = {
    //         center: new kakao.maps.LatLng(36.5, 127.5), // 지도의 중심 좌표(임의 설정)
    //         level: 13 // 지도의 확대 레벨(임의 설정)
    //     };

    // //설정한 지도 생성
    // const map = new kakao.maps.Map(mapContainer, mapOption);

    // //마커 초기화(초기화 시 지도에 미리 지정 가능 : 카카오맵 API 문서 참조)
    // const marker = new kakao.maps.Marker();

    // //카카오맵 클릭 이벤트 추가
    // kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
    //     //클릭한 위도, 경도 정보 불러오기
    //     const latlng = mouseEvent.latLng;
    //     //마커 위치를 클릭한 위치로 이동
    //     marker.setPosition(latlng);
    //     marker.setMap(map);

    //     alert(`위도 : ${latlng.getLat()}, 경도 : ${latlng.getLng()}`);
    // });

}