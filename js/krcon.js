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

    var bt = document.querySelectorAll('.bt > a')
// ======================================
    var tbox1 = [];
    tbox1[0] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[1] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[2] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[3] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[4] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[5] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
    tbox1[6] = '당신께 감동으로 기억되는 건축명작을 창조해 갑니다.';
// ==========================================
    
// ================================================


    bt.forEach(function(v, n, Node){
        v.addEventListener('click', tap);
        function tap() {
            var box1 = document.querySelector('.sec.snd .depth.snd h3')
            var box2 = document.querySelector('.sec.snd .depth.snd span')
            box1.textContent = tbox1[n];
            box2.textContent = bt[n].textContent;
            console.log(box1);
        };
        // console.log(bt[n]);
    });
    // console.log(bt);
}
// $(document).ready(function() {

//     $('.bt > a').click(function() {
//         $(this).parents('.wrap').children(".depth.snd").find('p').text($(this).index);
//     })
    
// })