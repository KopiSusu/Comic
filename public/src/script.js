$(document).ready(function() {

  // use this for paralax if needed
  $(window).scroll(function() {
    s = $(window).scrollTop() - 20;
    w = $(window).width();
    // sticky sidebar
    console.log("working");
    $('.title').css('margin-top', '-'+s+'%');

    // parralax effects
  //   if (w > 800 && s < 800) {
  //     $('div.main-articles img').css('bottom', '-'+s/3+'px');
  //   };
  });

  // $('section.grid div div.article').on('click', function() {
  //   $('section.grid div').css('-webkit-column-count', '1');    
  // });

});