
(function (arr) {
    Array.prototype.forEach.call(arr, function (item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();

                    Array.prototype.forEach.call(argArr, function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                });

                this.insertBefore(docFrag, this.firstChild);
            }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;
  }
  
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
  
      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

let navLi = document.querySelectorAll('header .top_nav.wrap > li > a, header .top_nav.wrap .depth.snd > li > a, header .depth.trd li > a')

let wrap = document.querySelector('header .top_nav.wrap');

let call = function () {
    let liCon = document.querySelectorAll('header .top_nav.wrap > li');

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
        Array.prototype.forEach.call(wrap.querySelectorAll('div:first-child > li > a'), function (v, n) {
            v.href = '#';
        })
        Array.prototype.forEach.call(document.querySelectorAll('header .top_nav.wrap .depth.snd > li > a'), function (v, n) {
            if (v.closest('ul').classList.contains('snd') && v.nextElementSibling != null) {
                v.href = '#';
            }
        })
    }

    liCon[0].classList.add('on');
    if (window.innerWidth > window.innerHeight) {
        wrap.classList.add('width');
    } else {
        wrap.classList.remove('width')
    }

}

call();
let liCon2 = document.querySelectorAll('header .depth.snd > li > a');

Array.prototype.forEach.call(document.querySelectorAll('header a'), function (v, n) {
    if (v.href.search('#') > 0) {
        v.onclick = function () {
            return false;
        }
    }
})

let header = document.querySelector('header');
if (window.innerWidth < 1240) {
    document.body.prepend(header);
}

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1240) {
        this.location.reload();
    } else {
        this.location.reload();
        call();
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
