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
  