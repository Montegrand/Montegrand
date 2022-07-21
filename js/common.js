let navLi = document.querySelectorAll(`header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a, header .depth.trd li > a`)

let wrap = document.querySelector(`header .top_nav.wrap`);
let header = document.querySelector('header');

let call = function () {
    let liCon = document.querySelectorAll(`header .top_nav.wrap > li`);

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

        wrap.querySelectorAll('div:first-child > li > a').forEach(function (v, n) {
            v.href = '#';
        })
        document.querySelectorAll('header .top_nav.wrap .depth.snd > li > a').forEach(function (v, n) {
            if (v.closest('ul').classList.contains('snd') && v.nextElementSibling != null) {
                v.href = '#';
            }
        })
    }

    liCon[0].classList.add('on');
}

navLi.forEach(function(v,n){
    let topDepth = document.querySelector('.top');
    let pgH = topDepth.querySelector('h2');
    let pgDepth = topDepth.querySelector('ul');
    if (v.href == window.location.href && v.closest('.depth.trd')) {
        let subT = v.closest('.depth.snd')
        if (header.nextElementSibling === topDepth) {
            pgDepth.append(document.createElement('li'))
            pgDepth.append(document.createElement('li'))
            pgDepth.append(document.createElement('li'))
            pgDepth = pgDepth.querySelectorAll('li')
            pgH.innerHTML = v.closest('.depth.fst').querySelector('p').textContent
            pgDepth.forEach(function (val, num) {
                val.append(document.createElement('a'))
                if (num === 0) {
                    val.children.item(0).textContent = v.closest('.depth.fst').querySelector('p').textContent
                } else if (num === 1) {
                    val.children.item(0).textContent = v.closest('.depth.trd').previousElementSibling.textContent
                } else {
                    val.children.item(0).textContent = v.textContent
                }
            })
        }
    } else if (v.href == window.location.href && v.closest('ul').classList.contains('snd') && v.nextElementSibling == null) {
        let subT = v.closest('.depth.snd')
        if (header.nextElementSibling === topDepth) {
            pgDepth.append(document.createElement('li'))
            pgDepth.append(document.createElement('li'))
            pgDepth = pgDepth.querySelectorAll('li')
            pgH.innerHTML = v.closest('.depth.fst').querySelector('p').textContent
            pgDepth.forEach(function (val, num) {
                val.append(document.createElement('a'))
                if (num === 0) {
                    val.children.item(0).textContent = v.closest('.depth.fst').querySelector('p').textContent
                } else if (num === 1) {
                    val.children.item(0).textContent = v.closest('.depth.snd').querySelector('a').textContent
                }
            })
        }
    }
})

call();

let liCon2 = document.querySelectorAll(`header .depth.snd > li > a`);

document.querySelectorAll('header a').forEach(function (v, n) {
    if (v.href.search('#') > 0) {
        v.onclick = function () {
            return false;
        }
    }
})

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1240) {
        this.location.reload();
    } else {
        this.document.body.prepend(header);
    }
    if (window.innerWidth > window.innerHeight) {
        wrap.classList.add('width');
    } else {
        wrap.classList.remove('width')
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

if (window.innerWidth<1280) {
    window.addEventListener('scroll',function(e){
        console.log(this.window.scrollY)
        console.log(document.querySelector('body > div').offsetHeight)
        if(this.window.scrollY+80>document.querySelector('body > div').offsetHeight){
            header.style.position = 'fixed';
            header.style.width = '100%';
        } else {
            header.style.position = 'sticky';
            header.style.width = '100%';
        }
    })
}

// subNav--------------------------------------------------------------

let subBot = document.querySelector('nav.subNav .subBot');
let subTop = document.querySelector('nav.subNav .subTop');
let prul = document.querySelector('header .top_nav.wrap > li:nth-child(3) .depth.snd');
let subN = document.querySelector('nav.subNav');
let toTop = document.querySelector('nav.subNav .toTop > a')

navLi.forEach(function (v, n) {

    if (v.href == window.location.href && v.closest('.depth.trd')) {
        let subT = v.closest('.depth.snd')
        for (i = 0; i < subT.children.length; i++) {
            subTop.append(document.createElement('li'))
            subTop.children.item(i).append(subT.children.item(i).children.item(0).cloneNode(true))
            subBot.append(document.createElement('li'));
            subBot.children.item(i).append(subT.children.item(i).querySelector('ul.trd ul').cloneNode(true))
        }
    } else if (v.href == window.location.href && v.closest('ul').classList.contains('snd') && v.nextElementSibling == null) {
        let subT = v.closest('.depth.snd')
        let subB = v.closest('ul')
        for (i = 0; i < subT.children.length; i++) {
            subTop.append(document.createElement('li'))
            subTop.children.item(i).append(subT.children.item(i).children.item(0).cloneNode(true))
        }
    }
})

let subTA = document.querySelectorAll('nav.subNav .subTop a');
let subB = document.querySelectorAll('nav.subNav .subBot > li');



if (subB.length > 0) {
    subTA.forEach(function (v, n) {
        v.href = '#';
        v.addEventListener('click', function (e) {
            for (i = 0; i < subTA.length; i++) {
                subTA[i].parentElement.classList.remove('on');
                subB[i].classList.remove('on');
            }
            v.parentElement.classList.add('on');
            subB[n].classList.add('on');
        })
    })
}

if (subN) {
    subN.addEventListener('mouseenter', function () {
        this.classList.add('on');
    })

    subN.addEventListener('mouseleave', function () {
        document.querySelectorAll('nav, nav *').forEach(function (v, n) {
            v.classList.remove('on');
        })
    })
    toTop.addEventListener('click', function () {
        window.scrollTo(0, 'smooth');
    })
    var subA = document.querySelectorAll(`nav a`);

    subA.forEach(function (v, n) {
        if (v.href.search(`#`) > 0) {
            v.onclick = function () {
                return false;
            }
        }
    })
}
