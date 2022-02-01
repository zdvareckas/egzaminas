const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    passiveListeners: true,
    slidesPerView: 1,

    breakpoints: {
        1000: {
            direction: 'horizontal',
            slidesPerView: 3,
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});