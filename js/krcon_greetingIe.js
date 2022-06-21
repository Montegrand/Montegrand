window.onload = function () {

    var allA = document.querySelectorAll('a');

    for (i = 0; i <= allA.length - 1; i++) {
        if (allA[i].href.search('#') > 0) {
            allA[i].onclick = function () {
                return false;
            }
        }
    }

    let menu = document.querySelector("header .bt");
    let nav = document.querySelector("header .top_nav.wrap");
    let overay = document.querySelector("header .overay");
    let trigger = false;

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
                });
            } else {
                nav.classList.remove('on');
                menu.classList.remove('on');
                overay.classList.remove('on');
                trigger = false;
            }
        }
    })
}