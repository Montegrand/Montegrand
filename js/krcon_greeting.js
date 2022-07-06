window.onload = function () {

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

    if (window.innerWidth <= 680) {
        greT.innerHTML = `계룡건설을 아끼고<br> 사랑해주시는 고객 여러분!<br> 안녕하십니까.`
    }
}