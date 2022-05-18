// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  $('[data-toggle="tooltip"]').tooltip();
  let buttonDiv = $(".home-button");
  let scrolledPast =
    buttonDiv.offset().top + buttonDiv.outerHeight() < $(window).scrollTop();
  $("#floating-content").hide();

  let checkPosition = () => {
    if (
      buttonDiv.offset().top + buttonDiv.outerHeight() - 56 <
      $(window).scrollTop()
    ) {
      if (scrolledPast) return;
      scrolledPast = true;
      buttonDiv.addClass("floating");
      $("#not-floating-content").hide();
      $("#floating-content").show();
    } else {
      if (!scrolledPast) return;
      scrolledPast = false;
      buttonDiv.removeClass("floating");
      $("#floating-content").hide();
      $("#not-floating-content").show();
    }
  };
  $(".contact-me-button").click((e) => {
    alert(
      "The site is currently under construction... \n You can always reach me on donne.ferre@gmail.com or shoot me a message on linkedin/ferre-donne"
    );
  });
  let checkNav = () => {
    $(".active").removeClass("active");
    if ($("#projects").offset().top - 56 < $(window).scrollTop()) {
      $(".active").removeClass("active");
      return $("#projects-nav").addClass("active");
    }
    if ($("#internship").offset().top - 56 < $(window).scrollTop()) {
      $(".active").removeClass("active");
      return $("#internship-nav").addClass("active");
    }
    if ($("#whatido").offset().top - 56 < $(window).scrollTop()) {
      return $("#whatido-nav").addClass("active");
    }
    if ($("#home").offset().top - 56 < $(window).scrollTop()) {
      $(".active").removeClass("active");
      return $("#home-nav").addClass("active");
    }
  };
  checkPosition();
  $(window).scroll(function () {
    checkPosition();
    checkNav();
  });
});
