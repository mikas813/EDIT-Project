$(function(){//top slider options
    $('.slider__inner').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 4000,

    });
    
  
}); 
$(function(){//slider bottom options 
    $('.carousel__inner').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 1020,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 820,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 620,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 560,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '20px',
                  slidesToShow: 1,
                }
              },
           
          ]
      });

    $( ".mobile__menu" ).click(function() {
      $(".navigation").toggle(); //change display none to display block by clicking on burger menu and shows responsive site navigation!
  });

  $('.mobile__menu').on('click', function(){
    $('.menu__row').toggleClass('active');//by clicking add a 'class' to midle burger row to change its options to display none on click!
  });
    //header search button
    $('.header__search-btn-img').on('click', function(){
      $('.search-area').toggleClass('text__area');
    });

    $('.header__search-btn-img').on('click', function(){
      $('.header__search-btn-img').toggleClass('active');//by clicking add a 'class' to header search button and change for this class margin left to 140px!

    });
  });
  /*Item description page slider*/
$(document).ready(function () {
  $('#nav__bar img').on({
    click: function () {
      var imageURL = $(this).attr('src');
      $('#mainImage').fadeOut(1000, function () {
        $(this).attr('src', imageURL);
      }).fadeIn(1000);
    }
  });
});

//pagination men all products page
var paginator = new $('.items-container').joldPaginator({
  'perPage': 12,
  'items': '.item',
  'paginator': '.pagination-container',
  'indicator': {
    'selector': '.paginationindicator',
    'text': 'Showing item {start}-{end} of {total}',
  }
});
//custom select! men all products page
$('.select__items-inner').on('click', function () {
  // $('.select__option-inner').slideUp();
  $(this).toggleClass('rotatetriangle');
  $(this).find('.select__option-inner').slideToggle(400);
});
$(document).mouseup(function (e) { // событие клика по веб-документу
  var div = $(".select__option-inner"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.slideUp(); // скрываем его
    $('.select__items-inner').removeClass('rotatetriangle');
  }
});




// $('.20-40').click(function () {
//   $("[class*=item__inner]").hide();
//   $("[class*=20-40]").show();
// });
// $('.40-60').click(function () {
//   $("[class*=item__inner]").hide();
//   $("[class*=40-60]").show();
// });
// $('.60-80').click(function () {
//   $("[class*=item__inner]").hide();
//   $("[class*=60-80]").show();
// });
