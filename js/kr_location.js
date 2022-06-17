window.onload = function() {
    let wid = window.innerWidth;
    let hei = window.innerHeight;

    let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a`);

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

}