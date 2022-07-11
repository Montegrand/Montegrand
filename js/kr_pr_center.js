window.onload = function () {
    window.addEventListener('resize', function () {
        if ( window.innerWidth > window.innerHeight ) {
            return document.querySelector(`section .brochure`).classList.add(`width`);
        } else {
            return document.querySelector(`section .brochure`).classList.remove(`width`);
        }
    })

    let tap = document.querySelectorAll('section .tap a');
    let contents = document.querySelectorAll('section .contents > div');

    tap.forEach(function(v, n){
        v.addEventListener('click', function (e) {
            for (i = 0; i <= tap.length - 1; i++) {
                if (tap[i] === e.target) {
                    tap[i].classList.add('on');
                    contents[i].classList.add('on');
                } else {
                    tap[i].classList.remove('on');
                    contents[i].classList.remove('on');
                }
            };
        })
    });
}