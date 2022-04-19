// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  let buttonWrapper = $(".button-wrapper");
  let button = $("#contact-me-button");
  let buttonDiv = $(".home-button");
  let scrolledPast =
    buttonDiv.offset().top + buttonDiv.outerHeight() < $(window).scrollTop();
  $("#floating-content").hide();
  $(".image-cover").mouseenter((e) => {
    $(e.target).addClass("show-image-cover")
    $(e.target).siblings(".project-image").find("lottie-player").get(0).play();
  })
  $(".image-cover").mouseleave((e) => {
    $(e.target).removeClass("show-image-cover")
    $(e.target).siblings(".project-image").find("lottie-player").get(0).pause();

  })
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
  let checkNav = () => {
    $(".active").removeClass("active");
    if ($("#projects").offset().top - 56 < $(window).scrollTop()) {
      $(".active").removeClass("active");
      return $("#projects-nav").addClass("active");
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
