window.onload = function () {
    var swiper = new Swiper(".pofowrap", {
        slidesPerView: 3,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}