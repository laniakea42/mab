$(document).ready(function(){
  $('.header-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    dots: true,
  });

  $('.cat-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.cat-nav'
  });
  $('.cat-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.cat-for',
   focusOnSelect: true,
   arrows: true
  });



  $('.fa-bars').on('click', function(){
    if (!$('.m-submenu').is(':visible')) {
      $('.m-submenu').slideDown();
      $(this).addClass('close');
    }
     else {
      $('.m-submenu').slideUp();
      $(this).removeClass('close');
    }
  });



  // custom btns
  $('.arr').on('click', function(){
    $(this).siblings('ul').slideToggle();
    $(this).toggleClass('open');
    event.preventDefault();
  });

    $('.services-card').on('mouseover', function(){
      $(this).addClass('h');
      $(this).on('mouseleave', function(){
        $(this).removeClass('h')
      });
    });
  });


  $('[data-modal]').on('click', function(){
    var modal = $(this).attr('data-modal');
    $(modal).fadeIn();
  });

  $('.modal .close, .modal .modal-layer').on('click', function(){
      $(this).parents('.modal').fadeOut();
  });


  $('.main-navbar .submenu').on('mouseover', function(){
    $(this).children('ul').stop().slideDown();
  });
  $('.submenu').on('mouseleave', function(){
    $('.submenu ul').stop().slideUp();
  });

  $('.m-submenu .submenu > a').on('click', function(){
    $(this).siblings('ul').stop().slideToggle();
  });

  easydropdown('.cat-dropdown');
