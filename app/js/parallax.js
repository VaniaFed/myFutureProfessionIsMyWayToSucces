$(window).on('scroll resize', function(e) {
  // высота текущей прокрутки страницы
  var y = $(window).scrollTop();
  var h = $(window).height();
  var y1 = $('#web .profession_header').offset().top;
  var y2 = $('#mobile .profession_header').offset().top;
  var y3 = $('#desktop .profession_header').offset().top;
  var height = 350;
  var n1 = y - y1 + h,
      n2 = y - y2 + h,
      n3 = y - y3 + h;
  $('#web .profession_header').css({
    'backgroundPositionY' : n1/50 + '%'
  });
  $('#mobile .profession_header').css({
    'backgroundPositionY' : n2/50 + '%'
  });
  $('#desktop .profession_header').css({
    'backgroundPositionY' : n3/50 + '%'
  });
});