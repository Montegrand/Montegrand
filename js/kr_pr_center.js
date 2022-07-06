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
        if (liCon.length > 4) {
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

    let header = document.querySelector('header');
    if (window.innerWidth < 1240) {
        document.body.prepend(header);
    }

    window.addEventListener('resize', function () {
        call();
        if (window.innerWidth >= 1240) {
            this.location.reload();
        } else {
            this.document.body.prepend(header);
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

    navT.forEach(function (v, n) {
        v.addEventListener('click', function (e) {
            for (i = 0; i < navT.length; i++) {
                navT[i].classList.remove('on')
            }
            v.classList.add('on');
        })
    })

    navB.forEach(function (v, n) {
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

    window.addEventListener('resize', function () {
        if (window.innerWidth > window.innerHeight) {
            return document.querySelectorAll(`.sec.fst .img`).forEach(function (v, n) {
                v.classList.add(`width`);
            });
        } else {
            return document.querySelectorAll(`.sec.fst .img`).forEach(function (v, n) {
                v.classList.remove(`width`);
            });
        }
    })

    let greT = document.querySelector('.sec.fst .box.snd .text.container h5')

    if (wid <= 680) {
        greT.innerHTML = `계룡건설을 아끼고<br> 사랑해주시는 고객 여러분!<br> 안녕하십니까.`
    }

    // subNav--------------------------------------------------------------

    let subBot = document.querySelector('nav.subNav .subBot');
    let subTop = document.querySelector('nav.subNav .subTop');
    let arr = [];
    
    navLi.forEach(function (v, n) {
        if (v.href === location.href) {
            if (v.parentNode.parentElement.className === 'depth snd') {
                let subTopA = v.parentNode.parentElement.children;
                for (i = 0; i < subTopA.length; i++) {
                    let li = document.createElement('li');
                    subTop.appendChild(li)
                    subTop.children.item(i).innerHTML = `<a href="#" onclick="return false">${subTopA[i].children.item(0).textContent}</a>`;
                    console.log(subTopA[i].children.length)
                    if (subTopA[i].children.length>1){
                        arr.push(subTopA[i].children.item(1).children.item(0).children.item(0))
                    }
                }

                if (subTopA.length>1) {
                    let subTopL = document.querySelectorAll('nav.subNav .subTop li');
                    subTopL.forEach(function(v,n){
                        v.addEventListener('click',function() {
                            console.log(arr.length)
                            for (i = 0; i < subTopL.length; i++) {
                                subTopL[i].classList.remove('on')
                                if (arr.length>0){
                                    subBot.innerHTML = arr[n].innerHTML;
                                }
                            }
                            v.classList.add('on')
                            let subBotA = document.querySelectorAll('nav.subNav .subBot a')
                            subBotA.forEach(function(v,n){
                                if (v.href.search('#')>0){
                                    v.onclick = function() {
                                        return false;
                                    }
                                }
                            })
                        })
                    });
                }
            }
        }
    })

    let subTopL = document.querySelectorAll('nav.subNav .subTop li');
    let result = document.querySelector('nav.subNav .result');
    let subNav = document.querySelector('nav.subNav');
    subNav.addEventListener('mouseenter', function () {
        this.classList.add('on');
        this.addEventListener('mousemove', function (e) {
            let positionL = e.clientX
            let positionY = e.clientY
            result.style.left = positionL - 120 + 'px';
            result.style.top = positionY - 60 + 'px';
            document.querySelectorAll('nav.subNav .subBot a').forEach(function (v, n) {
                v.addEventListener('mouseenter', function () {
                    if (v.href.search('#') > 0) {
                        result.innerHTML = '<span>링크가 없습니다</span>'
                    }
                })
                v.addEventListener('mouseleave', function () {
                    result.innerHTML = '';
                })
            })
        });
    })
    subNav.addEventListener('mouseleave', function () {
        this.classList.remove('on');
        subBot.innerHTML = '';
        for (i = 0; i < subTopL.length; i++) {
            subTopL[i].classList.remove('on')
        }
    })

    let toTop = document.querySelector('nav.subNav .toTop > a');
    toTop.addEventListener('click', function () {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        });
    })

    window.addEventListener('resize', function () {
        if ( window.innerWidth > window.innerHeight ) {
            return document.querySelector(`section .brochure`).classList.add(`width`);
        } else {
            return document.querySelector(`section .brochure`).classList.remove(`width`);
        }
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}