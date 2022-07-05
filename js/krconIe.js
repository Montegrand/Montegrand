$(document).ready(function () {
    $('.swiper').removeClass();
    $('.slide').removeClass('swiper-wrapper')
        .find('div').removeClass('swiper-slide slider').end()
        .siblings().remove();

    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    })
});

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

    let wrap = document.querySelector('header .top_nav.wrap');

    let call = function () {
        let liCon = document.querySelectorAll('header .top_nav.wrap > li');
        if (liCon.length > 4) {
            if (window.innerWidth < 1240) {
                wrap.prepend(document.createElement('li'));
                wrap.children.item(0).prepend(document.createElement('div'));
                wrap.children.item(0).prepend(document.createElement('div'));
                Array.prototype.forEach.call(liCon, function (v, n) {
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

    let navT = document.querySelectorAll('header .top_nav.wrap > li:first-child > div:first-child > li');
    let navB = document.querySelectorAll('header .bot_nav.wrap .depth.snd > li');

    Array.prototype.forEach.call(navT, function (v, n) {
        v.addEventListener('click', function (e) {
            for (i = 0; i < navT.length; i++) {
                navT[i].classList.remove('on')
            }
            v.classList.add('on');
        })
    })

    Array.prototype.forEach.call(navB, function (v, n) {
        v.addEventListener('click', function (e) {
            for (i = 0; i < navB.length; i++) {
                navB[i].classList.remove('on')
            }
            v.classList.add('on');
            this.focus();
        })
    })

    document.addEventListener('click', function (e) {
        if (e.target === menu) {
            if (trigger === false) {
                nav.classList.add('on');
                menu.classList.add('on');
                overay.classList.add('on');
                trigger = true;
                overay.addEventListener('click', function () {
                    nav.classList.remove('on');
                    menu.classList.remove('on');
                    overay.classList.remove('on');
                    trigger = false;
                })
            } else {
                nav.classList.remove('on');
                menu.classList.remove('on');
                overay.classList.remove('on');
                trigger = false;
            }
        }
    })

    let line = document.querySelector('.sec.fst .slider:nth-child(3) > .inner > :nth-child(2)')

    if (window.innerWidth <= 768) {
        line.innerHTML = '최첨단 미래형<br> 수변도시의 시작'
    }

    var allA = document.querySelectorAll('a');

    let boxT = [

        {
            "name": "건축",
            "header": "당신께 감동으로 기억되는 건축명작을 창조해 갑니다.",
            "tbox": "공공건물에서 문화·스포츠 시설에 이르기까지 각 분야의 특성을 고려하여 기능성, 예술성, 효용성을 극대화한 건축물을 선보이고 있는 계룡건설, 그 어느 곳에서도 랜드마크가 되는 건축 명작으로 고객의 감동을 극대화하고 있습니다.",
            "box1H": "한국은행 통합별관",
            "img0": "url(../images/krcon/construct/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "주택",
            "header": "새로운 주거공간의 창조로 당신의 삶 속에 함께합니다.",
            "tbox": "쾌적한 자연환경과 미래형 첨단 시스템, 그리고 꿈의 주거 공간 창조로 고객 감동을 실현해온 계룡건설은 리슈빌과 로덴하우스에 이어 주거 브랜드 ‘ELIF’로 여러분의 일상에 새롭게 다가갑니다.",
            "box1H": "엘리프 송촌 더 파크",
            "img0": "url(../images/krcon/house/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "토목",
            "header": "당신은 이미 계룡건설과 함께하고 있습니다.",
            "tbox": "당신이 고속철도를 탈 때, 고속도로를이용할 때, 다리를 건너고 터널을 지날 때, 당신은 이미 계룡건설과 함께하고 있습니다. 세상과 세상을 잇는 큰 기술로 세상을 움직이는 이름, 계룡건설. 당신이 가는 길에 계룡건설이 있습니다.",
            "box1H": "송산그린시티 남측지구",
            "img0": "url(../images/krcon/civilE/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "해외",
            "header": "지구 곳곳에서 당신과 만나기 위해 세계의 무대를 넓혀 갑니다.",
            "tbox": "2004년 러시아 하바롭스크 주상복합아파트 건설이래, 바레인 등 활발한 글로벌 비즈니스로 세계의 고객과 만나고 있는 계룡건설. 세계 무대를 더욱 확장해가며 그 이름을 높여갈 것입니다.",
            "box1H": "남극 장보고 과학기지",
            "img0": "url(../images/krcon/global/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "플랜트",
            "header": "국가 기간 산업발전의 인프라를 구축하고 있습니다.",
            "tbox": "계룡건설은 산업플랜트사업의 시너지 효과를 극대화 할 수 있는 분야를 적극 개척하여 고객에게 제공하는 서비스의 가치를 높이기 위해 최선을 다 하겠습니다.",
            "box1H": "강동구 자원순환센터",
            "img0": "url(../images/krcon/plant/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "산업단지개발",
            "header": "당신의 성공 비즈니스를 위한 신세계를 펼쳐갑니다.",
            "tbox": "지금까지 무려 7개에 이르는 산업단지의 조성을 통해 이 분야 리딩 기업으로서 명성을 높여가고 있으며 탁월한 프로젝트 수행능력을 인정받고 있는 계룡건설은 기업의경쟁력을 높이는 풍요로운 산업 인프라를 창조하고 있습니다.",
            "box1H": "서산 1차 산업단지",
            "img0": "url(../images/krcon/indC/01.png) 50% 50% / cover no-repeat;"
        },

        {
            "name": "레져 · 조경",
            "header": "다양한 레저시설건설을 통해 새로운 휴양문화를 창조합니다.",
            "tbox": "여가생활에 대한 관심이 어느 때보다 높은 요즘, 소비자의 높아지는 니즈에 부응하기 위해 계룡건설은 레저시설분야에서도 새로운 도전을 시작하고 있습니다. 휴식의 감동을 더해주는 더욱 여유롭고 다양한 미래형 레저휴양문화를 만나실 수 있습니다.",
            "box1H": "ROUTE 52 골프장",
            "img0": "url(../images/krcon/leiL/01.png) 50% 50% / cover no-repeat;"
        }
    ];
}