window.onload = function() {

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

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let money = document.querySelectorAll(`.money`)

    money.forEach(function(v,n) {
        v.innerHTML = numberWithCommas(v.innerHTML);
    })

    // window.addEventListener('resize', function () {
    //     if ( window.innerWidth > window.innerHeight ) {
    //         return document.querySelector(`section`).classList.add(`width`);
    //     } else {
    //         return document.querySelector(`section`).classList.remove(`width`);
    //     }
    // })
    
}