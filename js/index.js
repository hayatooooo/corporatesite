//ヘッダー固定
var $win = $(window),
  $fv = $(".fv"),
  $header = $(".header"),
  $fvHeight = $fv.outerHeight(),
  fixedClass = "js-fixed";

//header固定
$win.on("load scroll", () => {
  var $value = $(this).scrollTop();
  if ($value > $fvHeight) {
    $header.addClass(fixedClass);
  } else {
    $header.removeClass(fixedClass);
  }
});

//ページ内リンク
$(() => {
  var headerHight = 100;
  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var $href = $(this).attr("href");
    var $target = $($href == "#" || $href == "" ? "html" : $href);
    var $position = $target.offset().top - headerHight;
    $("body,html").animate({ scrollTop: $position }, speed, "swing");
    return false;
  });
});

//ページトップへ戻る
var $pageTop = $(".page-top");
$(window).scroll(() => {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on("click", () => {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

//ハンバーガーメニューの開閉
$(".burger-btn").on("click", () => {
  $(".header-nav").fadeToggle(300);
  $(".burger-btn").toggleClass("cross");
  $("body").toggleClass("noscroll");
});
$(".js-link").click(() => {
  if ($win.width() < 599) {
    $(".header-nav").fadeToggle(300);
    $(".burger-btn").toggleClass("cross");
    $("body").toggleClass("noscroll");
  }
});
