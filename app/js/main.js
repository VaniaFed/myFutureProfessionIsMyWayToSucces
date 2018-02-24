$(document).ready(function() {
  // навигация
  $('.nav_menu-item').click(function() {
    $('.nav_menu-item-active').removeClass('nav_menu-item-active');
    $(this).addClass('nav_menu-item-active');
  });

  function nav() {
    $(window).scroll(function() {
      if($(document).scrollTop() > $('.directions').offset().top) {
        $('.nav_menu_container').addClass('menu_show');
        $('.nav_menu_container').removeClass('menu_hidden');
      }
      // скрыть 
      if($(document).scrollTop() < $('.directions').offset().top - 10 && $('.nav_menu_container').hasClass('menu_show')) {
        $('.nav_menu_container').addClass('menu_hidden');
        $('.nav_menu_container').removeClass('menu_show');
      }
      if($(document).scrollTop() + $(window).height() > $('#header').offset().top && $(document).scrollTop() - $('#header').offset().top < $('#header').height()) {
        if(!$('#item_header').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_header').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#directions').offset().top && $(document).scrollTop() - $('#directions').offset().top < $('#directions').height()) {
        if(!$('#item_directions').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_directions').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#web').offset().top && $(document).scrollTop() - $('#web').offset().top < $('#web').height()) {
        if(!$('#item_web').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_web').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#mobile').offset().top && $(document).scrollTop() - $('#mobile').offset().top < $('#mobile').height()) {
        if(!$('#item_mobile').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_mobile').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#desktop').offset().top && $(document).scrollTop() - $('#desktop').offset().top < $('#desktop').height()) {
        if(!$('#item_desktop').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_desktop').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#plus').offset().top && $(document).scrollTop() - $('#plus').offset().top < $('#plus').height()) {
        if(!$('#item_plus').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_plus').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#minus').offset().top && $(document).scrollTop() - $('#minus').offset().top < $('#minus').height()) {
        if(!$('#item_minus').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_minus').addClass('nav_menu-item-active');
        }
      }
      else if($(document).scrollTop() + $(window).height() > $('#from_the_author').offset().top && $(document).scrollTop() - $('#from_the_author').offset().top < $('#from_the_author').height()) {
        if(!$('#item_from_the_author').hasClass('nav_menu-item-active')) {
          $('.nav_menu-item-active').removeClass('nav_menu-item-active');
          $('#item_from_the_author').addClass('nav_menu-item-active');
        }
      }
    });
  }

  nav();

  if(screen.width > 992) {
    nav();
  }
  

  // при щелчке на ссылку отправляемся к #блоку
  $('a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();
    var target = this.hash, // текст после решетки
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 600, 'swing', function () {
      window.location.hash = target;
    });
  });


  //  высота = ширина
  function res() {
    var width1 = $('.square_container').width();

    $('.square_container').height(width1);
    $('.square_opacity').height(width1);
    $('.square').height(width1);
  }
  // высота = высота экрана
  function setHeiHeight() {
    var height = $(window).height();
    /*$('.title_inner').css({
      height: height + 'px'
    });*/
    $('.profession_header_opacity').css({
      height: height + 'px'
    });
    $('.profession_header_title').css({
      lineHeight: height + 'px'
    });
  }

  res();
  setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы

  $(window).resize(function() { // обновляем при изменении размеров окна
    res();
    setHeiHeight();
  });

  $('.square').hover(function() {
    var $this = $(this),
    text = $this.find('.square_text'),
    title = $this.find('.square_title');
    $(title)
    .stop(true)
    .queue('fx',
      function(){
        $(title)
        .animate({opacity: '0' }, 800)
        .dequeue('fx');
      });
    $(text)
    .stop(true)
    .queue('fx',
      function(){
        $(text)
        .animate({opacity: '1' }, 800)
        .dequeue('fx');
      });
  }, function(){
    var $this = $(this),
    text = $this.find('.square_text'),
    title = $this.find('.square_title');
    $(title)
    .stop(true)
    .queue('fx',
      function(){
        $(title)
        .animate({opacity: '1' }, 600)
        .dequeue('fx');
      });
    $(text)
    .stop(true)
    .queue('fx',
      function(){
        $(text)
        .animate({opacity: '0' }, 600)
        .dequeue('fx');
      });
  });

  var divs = $('.map_container'),
  layer = $('#layer');
  // если .map_container имеет класс fixed_center, убираем класс
  divs.click(function () {
    if($(this).hasClass('fixed_center')) {
      $(this).removeClass('fixed_center');
      layer.fadeOut('fast');
      $('body').removeClass('body_scroll_off');
      $('.nav_menu_container').addClass('menu_show');
      $('.nav_menu_container').removeClass('menu_hidden');

    }
    // иначе (если класс не имеет), добавить класс fixed_center к .map_container
    else {
      $(this).css('z-index', 300);
      $(this).addClass('fixed_center');
      $('body').addClass('body_scroll_off');
      layer.fadeIn('fast');
      $('.nav_menu_container').addClass('menu_hidden');
      $('.nav_menu_container').removeClass('menu_show');
    }
  });

  // нажимаем на слой. Если .map_container имеет класс fixed_center, убираем класс
  layer.click(function(){
    if(divs.hasClass('fixed_center')) {
      $(divs).removeClass('fixed_center');
      $('body').removeClass('body_scroll_off');
      $(layer).fadeOut('fast');
      $('.nav_menu_container').addClass('menu_show');
      $('.nav_menu_container').removeClass('menu_hidden');
    }
  });
});