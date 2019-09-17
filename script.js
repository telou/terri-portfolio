$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".blue, .orange").addClass("opaque");
      }
      if ($(this).scrollTop() > 300) {
         $("body").addClass("changeColor");
         $("body").addClass("white-text");
         $(".nav-text, .social-link").css('color','white');
      }
      if ($(this).scrollTop() > 900) {
         $("body").addClass("changeColorAgain");
         $("body").removeClass("changeColor");
      }
      if ($(this).scrollTop() < 900) {
         $("body").removeClass("changeColorAgain");
      }
      if ($(this).scrollTop() < 300) {
         $("body").removeClass("changeColor");
         $(".nav-text").css('color','#13A8AC');
         $(".social-link").css('color','#13A8AC');
      }
      if ($(this).scrollTop() < 50) {
        $(".blue, .orange").removeClass("opaque");
      }
   });
});

