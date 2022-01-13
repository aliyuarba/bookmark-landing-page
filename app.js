$(".tabs-link a").click(function () {
  let target = $(this).index() + 1;
  $(`.tab:nth-child(${target})`).addClass("active");
  $(`.tab:nth-child(${target})`).siblings().removeClass("active");
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

$(".accordion h5").click(function () {
  let panel = this.nextElementSibling;

  if ($(this).parent().hasClass("active")) {
    $(this).next().css("height", "0");
  } else {
    $(this).next().css("height", `${panel.scrollHeight + 16}px`);
    $(this).parent().siblings().children("p").css("height", "0");
  }

  $(this).parent().toggleClass("active");
  $(this).parent().siblings().removeClass("active");
});

$('.btnmenu').click(function(){
  $('.main-menu').toggleClass('active');
})