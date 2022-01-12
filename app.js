document.querySelector('.btnmenu').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
})

$('.accordion i').click(function(){
  $(this).parents().parents().toggleClass('active');
  $(this).parents().parents().siblings().removeClass('active');
})

$('.tabs-menu a').click(function(){
  let target = $(this).index() + 1;
  $(`#tab${target}`).addClass("active");
  $(`#tab${target}`).siblings().removeClass("active");
  $(this).addClass('active');
  $(this).siblings().removeClass("active");
})