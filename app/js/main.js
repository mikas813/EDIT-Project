//SLIDER Main page slider with title!
$(function () {//top slider options
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
$(function () {
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
  $(".mobile__menu").click(function () {
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
  $('.mobile__menu').on('click', function () {
    $('.menu__row').toggleClass('active');
  });
  //By clicking on burger menu add a 'class' to midle burger row to change its options to display none!

  //On click on search icon opens texarera!
  $('.header__search-btn-img').on('click', function () {
    $('.search-area').toggleClass('text__area');
  });
  //On click on search icon opens texarera!

  //by clicking add a 'class' to header search button and change for this class margin left to 140px!
  $('.header__search-btn-img').on('click', function () {
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

// Validation contact page!
$(document).ready(function () {
  let form = $('.contact__inner');
  let btn = form.find('#contact-btn');
  form.find('.inp').addClass('empty-field');

  function checkInput() {
    form.find('.inp').each(function () {
      if ($(this).val() != '') {
        //If the field is not empty, delete the class 'empty_field'
        $(this).removeClass('empty_field');
      } else {
        //If the field is empty, add class 'empty_field'
        $(this).addClass('empty_field');
      }
    });
  }
  //Function for highlighting blank fields
  function lightEmpty() {
    //If the field blank add border-bottom
    form.find('.empty_field').css({ 'border-color': '#ff0000' });
    setTimeout(function () {
      //After half a second, remove the  border-bottom
      form.find('.empty_field').removeAttr('style');
    }, 1500);
  }
  setInterval(function () {
    //Real time check
    checkInput();
    //Count the number of blank fields
    let sizeEmpty = form.find('.empty_field').length;
    if (sizeEmpty > 0) {
      if (btn.hasClass('disabled')) {
        return false
      } else {
        btn.addClass('disabled')
      }
    } else {
      btn.removeClass('disabled')
    }
  }, 500);
  btn.on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('disabled')) {
      lightEmpty();
      return false
    } else {
      form.submit();
    }
  });
});

// Validation basket!
$(document).ready(function () {
  let form = $('form');
  let btn = form.find('.order-btn');
  form.find('.inp').addClass('empty-field');

  function checkInput() {
    form.find('.inp').each(function () {
      if ($(this).val() != '') {
        //If the field is not empty, delete the class 'empty_field'
        $(this).removeClass('empty_field');
      } else {
        //If the field is empty, add class 'empty_field'
        $(this).addClass('empty_field');
      }
    });
  }
  //Function for highlighting blank fields
  function lightEmpty() {
    //If the field blank add border-bottom
    form.find('.empty_field').css({ 'border-color': '#ff0000' });
    setTimeout(function () {
      //After half a second, remove the  border-bottom
      form.find('.empty_field').removeAttr('style');
    }, 1500);
  }
  setInterval(function () {
    //Real time check
    checkInput();
    //Count the number of blank fields
    let sizeEmpty = form.find('.empty_field').length;
    if (sizeEmpty > 0) {
      if (btn.hasClass('disabled')) {
        return false
      } else {
        btn.addClass('disabled')
      }
    } else {
      btn.removeClass('disabled')
    }
  }, 500);
  btn.on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('disabled')) {
      lightEmpty();
      return false
    } else {
      form.submit();
    }
  });
});
// Validation!

let logoutBtn = $('.logout-btn');
let loginBtn = $('.login-btn');
let loginPopUp = $('.login-popup');
let popUpCloseBtn = $('.login-popup h3 span');

logoutBtn.on('click', function () {
  $('.header__login-inner').toggle();
  loginBtn.toggle()
});
loginBtn.on('click', function () {
  loginPopUp.toggle();
});
popUpCloseBtn.on('click', function () {
  loginPopUp.toggle();
});
$('.login').on('click', function () {
  loginPopUp.toggle();

});


new WOW().init();
