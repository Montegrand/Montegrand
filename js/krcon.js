window.onload = function () {
    var swiper = new Swiper(".sldwrap", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // ======================================

    var box = [
        [
            '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.',
            '공공건물에서 문화·스포츠 시설에 이르기까지 각 분야의 특성을 고려하여 기능성, 예술성, 효용성을 극대화한 건축물을 선보이고 있는 계룡건설, 그 어느 곳에서도 랜드마크가 되는 건축 명작으로 고객의 감동을 극대화하고 있습니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '새로운 주거공간의 창조로 당신의 삶 속에 함께합니다.',
            '쾌적한 자연환경과 미래형 첨단 시스템, 그리고 꿈의 주거 공간 창조로 고객 감동을 실현해온 계룡건설은 리슈빌과 로덴하우스에 이어 주거 브랜드 ‘ELIF’로 여러분의 일상에 새롭게 다가갑니다.',
            'url(../images/krcon/bild_2.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '당신은 이미 계룡건설과 함께하고 있습니다.',
            '당신이 고속철도를 탈 때, 고속도로를이용할 때, 다리를 건너고 터널을 지날 때, 당신은 이미 계룡건설과 함께하고 있습니다. 세상과 세상을 잇는 큰 기술로 세상을 움직이는 이름, 계룡건설. 당신이 가는 길에 계룡건설이 있습니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '지구 곳곳에서 당신과 만나기 위해 세계의 무대를 넓혀 갑니다.',
            '2004년 러시아 하바롭스크 주상복합아파트 건설이래, 바레인 등 활발한 글로벌 비즈니스로 세계의 고객과 만나고 있는 계룡건설. 세계 무대를 더욱 확장해가며 그 이름을 높여갈 것입니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '국가 기간 산업발전의 인프라를 구축하고 있습니다.',
            '계룡건설은 산업플랜트사업의 시너지 효과를 극대화 할 수 있는 분야를 적극 개척하여 고객에게 제공하는 서비스의 가치를 높이기 위해 최선을 다 하겠습니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '당신의 성공 비즈니스를 위한 신세계를 펼쳐갑니다.',
            '지금까지 무려 7개에 이르는 산업단지의 조성을 통해 이 분야 리딩 기업으로서 명성을 높여가고 있으며 탁월한 프로젝트 수행능력을 인정받고 있는 계룡건설은 기업의경쟁력을 높이는 풍요로운 산업 인프라를 창조하고 있습니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ],
        [
            '다양한 레저시설건설을 통해 새로운 휴양문화를 창조합니다.',
            '여가생활에 대한 관심이 어느 때보다 높은 요즘, 소비자의 높아지는 니즈에 부응하기 위해 계룡건설은 레저시설분야에서도 새로운 도전을 시작하고 있습니다. 휴식의 감동을 더해주는 더욱 여유롭고 다양한 미래형 레저휴양문화를 만나실 수 있습니다.',
            'url(../images/krcon/bild_1.png)',
            'url(../images/krcon/bild_2.png)'
        ]
    ];

    // console.log(box);



    let boxT = [
        
        {
            "name": "건축",
            "header": "당신께 감동으로 기억되는 건축명작을 창조해 갑니다.",
            "tbox": "공공건물에서 문화·스포츠 시설에 이르기까지 각 분야의 특성을 고려하여 기능성, 예술성, 효용성을 극대화한 건축물을 선보이고 있는 계룡건설, 그 어느 곳에서도 랜드마크가 되는 건축 명작으로 고객의 감동을 극대화하고 있습니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "주택",
            "header": "새로운 주거공간의 창조로 당신의 삶 속에 함께합니다.",
            "tbox": "쾌적한 자연환경과 미래형 첨단 시스템, 그리고 꿈의 주거 공간 창조로 고객 감동을 실현해온 계룡건설은 리슈빌과 로덴하우스에 이어 주거 브랜드 ‘ELIF’로 여러분의 일상에 새롭게 다가갑니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "토목",
            "header": "당신은 이미 계룡건설과 함께하고 있습니다.",
            "tbox": "당신이 고속철도를 탈 때, 고속도로를이용할 때, 다리를 건너고 터널을 지날 때, 당신은 이미 계룡건설과 함께하고 있습니다. 세상과 세상을 잇는 큰 기술로 세상을 움직이는 이름, 계룡건설. 당신이 가는 길에 계룡건설이 있습니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "해외",
            "header": "지구 곳곳에서 당신과 만나기 위해 세계의 무대를 넓혀 갑니다.",
            "tbox": "2004년 러시아 하바롭스크 주상복합아파트 건설이래, 바레인 등 활발한 글로벌 비즈니스로 세계의 고객과 만나고 있는 계룡건설. 세계 무대를 더욱 확장해가며 그 이름을 높여갈 것입니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "플랜트",
            "header": "국가 기간 산업발전의 인프라를 구축하고 있습니다.",
            "tbox": "계룡건설은 산업플랜트사업의 시너지 효과를 극대화 할 수 있는 분야를 적극 개척하여 고객에게 제공하는 서비스의 가치를 높이기 위해 최선을 다 하겠습니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "산업단지개발",
            "header": "당신의 성공 비즈니스를 위한 신세계를 펼쳐갑니다.",
            "tbox": "지금까지 무려 7개에 이르는 산업단지의 조성을 통해 이 분야 리딩 기업으로서 명성을 높여가고 있으며 탁월한 프로젝트 수행능력을 인정받고 있는 계룡건설은 기업의경쟁력을 높이는 풍요로운 산업 인프라를 창조하고 있습니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        },

        {
            "name": "레져 · 조경",
            "header": "다양한 레저시설건설을 통해 새로운 휴양문화를 창조합니다.",
            "tbox": "여가생활에 대한 관심이 어느 때보다 높은 요즘, 소비자의 높아지는 니즈에 부응하기 위해 계룡건설은 레저시설분야에서도 새로운 도전을 시작하고 있습니다. 휴식의 감동을 더해주는 더욱 여유롭고 다양한 미래형 레저휴양문화를 만나실 수 있습니다.",
            "box1H": "전남도립미술관",
            "img0": "url(../images/krcon/bild_1.png)"
        }

    ];

    
    
    // ==========================================

    // ================================================

    var box4 = document.querySelector('.sec.snd .depth.trd > div:first-child');
    box4.style.background = boxT[0].img0 + '50% 0';
    box4.style.backgroundRepeat = 'no-repeat';
    box4.style.backgroundSize = 'contain';
    
    var bt = document.querySelectorAll('.bt > a')
    
    bt.forEach(function (v, n, Node) {
        
        v.addEventListener('click', tap);
        function tap() {
            var box1 = document.querySelector('.sec.snd .depth.snd h3');
            var box2 = document.querySelector('.sec.snd .depth.snd span');
            var box3 = document.querySelector('.sec.snd .depth.snd p');
            var box4 = document.querySelector('.sec.snd .depth.trd > div:first-child');
            
            box1.textContent = boxT[n].header; //depth2 h3
            
            box2.textContent = boxT[n].name; //depth2 span
            
            box3.textContent = boxT[n].tbox; //depth2 p
            
            box4.style.background = boxT[n].img0 + '50% 0';
            box4.style.backgroundRepeat = 'no-repeat';
            box4.style.backgroundSize = 'contain';
            //depth3 
            

            console.log(boxT);
        };

    });
    // console.log(bt);
}
// $(document).ready(function() {

//     $('.bt > a').click(function() {
//         $(this).parents('.wrap').children(".depth.snd").find('p').text($(this).index);
//     })

// })