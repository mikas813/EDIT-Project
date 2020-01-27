//SLIDER Main page
  $(function(){//top slider options
    $('.slider__inner').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 4000,

    });
    
  
  });
  //Main page
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
    $( "#removeItem" ).click(function(remIt) {
      $(this).parent().toggle(500); //on click remove item from cart
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

  /*Item description's page slider*/
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
  /*Item description's page slider*/
//SLIDER

//PAGINATION men all products page
var paginator = new $('.items-container').joldPaginator({
  'perPage': 8,
  'items': '.item',
  'paginator': '.pagination-container',
  'indicator': {
    'selector': '.paginationindicator',
    'text': 'Showing item {start}-{end} of {total}',
  }
});
//PAGINATION

//CUSTOM SELECT men all products page!
$('.select__items-inner').on('click', function () {
  $('.select__option-inner').slideUp();
  $(this).find('.select__option-inner').slideToggle(400);
  $(this).toggleClass('rotatetriangle');//toggle class and rotate triangle on 180 deg!
});

//By clickin outside of element hide all opened select elements!
 $(document).mouseup(function (e) { //  action by click on document
   var div = $(".select__option-inner"); //varible with element
   if (!div.is(e.target) // if clicked outside of element
     && div.has(e.target).length === 0) { // or clicked outside of children element 
     div.slideUp(); //element hides
     $('.select__items-inner').removeClass('rotatetriangle'); //remove class and rotate triangle on 180 deg!
   }
 });


$(function () {
  $('select').selectric();
});

$('#hidePayment').on('click', function () {
  $('.checkout__inner').slideToggle();
  $(this).closest('.basket_bottom-buttons').slideUp(800);
  $(this).addClass('flipOutX');
});

//item description button add to cart animation!
$('.item-details-bottom__button').on('click', function () {
  $(this).addClass('bounceOutUp');
});


var mixer = mixitup('.containerr');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
  selectors: {
    target: '.blog-item'
  },
  animation: {
    duration: 300
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
