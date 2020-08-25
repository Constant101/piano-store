$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotshead',
    });
    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
    $('.piano-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]

    });
    // $('.slider-map').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     focusOnSelect: true,
    // });
    $('.shop__slider, .restore__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-right.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
    });
    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('active');
    });
    new WOW().init();
  
});