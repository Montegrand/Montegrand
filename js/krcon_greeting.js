window.onload = function() {

    let wid = window.innerWidth;
    let hei = window.innerHeight;

    let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a`);

    console.log(navLi)

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
    let overay = document.querySelector("header .overay");
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

    window.addEventListener('resize', function () {
        if ( window.innerWidth > window.innerHeight ) {
            return document.querySelectorAll(`.sec.fst .img`).forEach(function(v,n) {
                v.classList.add(`width`);
            });
        } else {
            return document.querySelectorAll(`.sec.fst .img`).forEach(function(v,n) {
                v.classList.remove(`width`);
            });
        }
    })

    let greT = document.querySelector('.sec.fst .box.snd .text.container h5')

    if ( wid <= 680 ) {
        greT.innerHTML = `계룡건설을 아끼고<br> 사랑해주시는 고객 여러분!<br> 안녕하십니까.`
    }

}