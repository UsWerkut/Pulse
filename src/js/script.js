// const { on } = require("gulp");

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 800,
    prevArrow: '<button type="button" class="slick_prev"><img src="images/icons/Arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick_next"><img src="images/icons/Arrow_right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          infinite: true,
          dots: true,
          dotsClass: 'slick-dots',
          arrows: false
        }
      },

    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});

