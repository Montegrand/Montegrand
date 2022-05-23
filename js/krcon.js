window.onload = function () {
    var swiper = new Swiper(".sldwrap", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const bt = document.querySelectorAll('.bt > a');
    function handle() {
        bt.classList.add("on");
    }
    bt.addEventListener
    console.log(bt);
}