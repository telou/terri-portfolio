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
         $(".fas").addClass("opaque");
      }
      if ($(this).scrollTop() < 900) {
         $("body").removeClass("changeColorAgain");
         $(".fas").removeClass("opaque");
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
   $(document).ready(function () {
      bodyBlue ();
      setTimeout(bodyWhite, 100);
   })
});

const bodyBlue = () => {
  document.body.style.backgroundColor = "#13A8AC";
};

const bodyWhite = () => {
  document.body.style.backgroundColor = "";
}





