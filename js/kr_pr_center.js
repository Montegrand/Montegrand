window.onload = function() {

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
    
    let wid = screen.width;
    let hei = screen.height;
    let tap = document.querySelectorAll(`section .tap a`);
    let contents = document.querySelectorAll(`section .contents > div`);
    let brochure = document.querySelectorAll(`section .brochure > a`)
    tap.forEach(function(v, n) {
        v.addEventListener('click', function(e) {
            for ( i = 0; i <= tap.length-1; i++ ) {
                if ( tap[i] === e.target ) {
                    tap[i].classList.add(`on`);
                    contents[i].classList.add(`on`);
                } else {
                    tap[i].classList.remove(`on`);
                    contents[i].classList.remove(`on`);
                }
            };
        })
        // console.log(v.style)
    })
    brochure.forEach(function(v,n) {
        if ( wid > hei ) {
            v.style.width = `1500`;
        }
    })

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    console.log(wid);

    let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a`);
    console.log(navLi);
    navLi.forEach(function(v,n) {
        if ( wid <= 1240 ) {
            v.href = `#`;
        }
    })
    // let money = document.querySelectorAll(`.money`)

    // money.forEach(function(v,n) {
    //     // console.log(v.innerHTML);
    //     v.innerHTML = numberWithCommas(v.innerHTML);
    // })
    
}