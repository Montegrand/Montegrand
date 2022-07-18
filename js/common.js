let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a, header .depth.trd li > a`)

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

// call();

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

// subNav--------------------------------------------------------------

let subBot = document.querySelector('nav.subNav .subBot');
let subTop = document.querySelector('nav.subNav .subTop');
let prul = document.querySelector('header .top_nav.wrap > li:nth-child(3) .depth.snd');
let subN = document.querySelector('nav.subNav');
// let subTA = document.querySelector('nav.subNav .subTop a');
// let subBA = document.querySelector('nav.subNav .subBot a');

navLi.forEach(function(v,n){
    if (v.href == window.location.href && v.closest('.depth.trd')){
        console.log(v)
        let subT = v.closest('.depth.snd')
        let subB = v.closest('ul')
        for(i=0;i<subT.children.length;i++){
            subTop.append(document.createElement('li'))
            subTop.children.item(i).append(subT.children.item(i).children.item(0).cloneNode(true))
            subBot.append(document.createElement('li'));
            subBot.children.item(i).append(subB.cloneNode(true))
        }
        return;
    } else if (v.href == window.location.href&&v.closest('ul').classList.contains('snd')) {
        let subT = v.closest('.depth.snd')
        let subB = v.closest('ul')
        for(i=0;i<subT.children.length;i++){
            subTop.append(document.createElement('li'))
            subTop.children.item(i).append(subT.children.item(i).children.item(0).cloneNode(true))
            // subBot.append(document.createElement('li'));
            // subBot.children.item(i).append(subB.cloneNode(true))
        }
    }
})

subN.addEventListener('mouseenter',function(){
    this.classList.add('on');
})

subN.addEventListener('mouseleave',function(){
    this.classList.remove('on');
})


navLi.forEach(function (v, n) {
    if (window.innerWidth <= 1240) {
        for (i = 0; i < navLi.length; i++) {
            if (i !== 7) {
                navLi[i].href = `#`;
            }
        }
    }
})

document.querySelectorAll('header a,nav a').forEach(function (v, n) {
    if (window.innerWidth <= 1240) {
        for (i = 0; i < navLi.length; i++) {
            if (i !== 7) {
                navLi[i].href = `#`;
            }
        }
    }
})