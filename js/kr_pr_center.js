window.onload = function () {

    window.addEventListener('resize', function () {
        if ( window.innerWidth > window.innerHeight ) {
            return document.querySelector(`section .brochure`).classList.add(`width`);
        } else {
            return document.querySelector(`section .brochure`).classList.remove(`width`);
        }
    })

}