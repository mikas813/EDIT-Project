//SLIDER Main page slider with title!
  $(function(){//top slider options
    $('.slider__inner').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 4000,

    });
  });
  //SLIDER Main page slider with title!

  //Main page bottom slider whit items!
  $(function(){
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
  //Main page bottom slider whit items!

  //On click by burger menu shows navigation! MAX-WITH 1200px
    $( ".mobile__menu" ).click(function() {
      $(".navigation").toggle(); 
  });
  //On click by burger menu shows navigation! MAX-WITH 1200px

//Login button
  $('.logout').on('click', function () {
    $('.header__login-inner').toggle();
    $('.login').toggle();
  });

    $('[data-fancybox="gallery"]').fancybox({
      // Options will go here
    });
//Login button


  //By clicking on burger menu add a 'class' to midle burger row to change its options to display none!
  $('.mobile__menu').on('click', function(){
    $('.menu__row').toggleClass('active');
  });
  //By clicking on burger menu add a 'class' to midle burger row to change its options to display none!

  //On click on search icon opens texarera!
    $('.header__search-btn-img').on('click', function(){
      $('.search-area').toggleClass('text__area');
    });
  //On click on search icon opens texarera!

  //by clicking add a 'class' to header search button and change for this class margin left to 140px!
    $('.header__search-btn-img').on('click', function(){
      $('.header__search-btn-img').toggleClass('active');
    });
  });
  //by clicking add a 'class' to header search button and change for this class margin left to 140px!


  /*Description's page item slider*/
  $(document).ready(function () {
    $('#nav__bar img').on({
      click: function () {
        var imageURL = $(this).attr('src');
        $('#mainImage').fadeOut(500, function () {
          $(this).attr('src', imageURL);
        }).fadeIn(500);
      }
    });
  });
  /*Description's page item slider*/

//Pagination men all products page!
var paginator = new $('.items-container').joldPaginator({
  'perPage': 8,
  'items': '.item',
  'paginator': '.pagination-container',
  'indicator': {
    'selector': '.paginationindicator',
    'text': 'Showing item {start}-{end} of {total}',
  }
});
//Pagination men all products page!

//Custom select plugin!
$(function () {
  $('select').selectric();
});
//Custom select plugin!

//Animation on shoping page by clicing hide button and shows shiping and payment forms!
$('#hidePayment').on('click', function () {
  $('.checkout__inner').slideToggle();
  $(this).closest('.basket_bottom-buttons').slideUp(800);
  $(this).addClass('flipOutX');
});
//Animation on shoping page by clicing hide button and shows shiping and payment forms!

//Animation on item page, by clickin on button bounce up button!
$('.item-details-bottom__button').on('click', function () {
  $(this).addClass('bounceOutUp');
});
//Animation on item page, by clickin on button bounce up button!


//Items filter
$(function () {
  let selectVal = $('.selectric-scroll li').text();

  $('.selectric-scroll li').on('click', function () {
    $('.item__inner').hide();

    console.log(selectVal);
  
        // filterItems = $('[data-item]');

      // filterItems.addClass('hidden');
      // $('[data-filter-item][data-filter-name*="' + searchVal + '"]').removeClass('hidden');
      // filterItems.removeClass('hidden');
  });
});
//Items filter

new WOW().init();
