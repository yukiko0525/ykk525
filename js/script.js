$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

$(window).on('load scroll',function(){
  $('.works-img').each(function(){
    let viewPos = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let winHeight = $(window).height();
    if( scrollPos > viewPos - winHeight){
      $(this).addClass('js-on');
    }
  });
});

$(window).on('load scroll',function(){
  $('.skill-body').each(function(){
    let viewPos = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let winHeight = $(window).height();
    if( scrollPos > viewPos - winHeight){
      $(this).addClass('js-on');
    }
  });
});

$(window).on('load scroll',function(){
  $('.profile').each(function(){
    let viewPos = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let winHeight = $(window).height();
    if( scrollPos > viewPos - winHeight){
      $(this).addClass('js-on');
    }
  });
});

$(window).on('load scroll',function(){
  $('.profile-img').each(function(){
    let viewPos = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let winHeight = $(window).height();
    if( scrollPos > viewPos - winHeight){
      $(this).addClass('js-on');
    }
  });
});

$(window).on('load scroll',function(){
  $('.profile-body').each(function(){
    let viewPos = $(this).offset().top;
    let scrollPos = $(window).scrollTop();
    let winHeight = $(window).height();
    if( scrollPos > viewPos - winHeight){
      $(this).addClass('js-on');
    }
  });
});