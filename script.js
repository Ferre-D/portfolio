// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  $('[data-toggle="tooltip"]').tooltip();
  let buttonWrapper = $(".button-wrapper");
  let button = $("#contact-me-button");
  let buttonDiv = $(".home-button");
  let scrolledPast =
    buttonDiv.offset().top + buttonDiv.outerHeight() < $(window).scrollTop();
  $("#floating-content").hide();



  let hideImageCover = (cover) => {
      $(cover).removeClass("show-image-cover")
      $(cover).addClass("hide-image-cover")
      $(cover).siblings(".project-image").find("lottie-player").get(0).pause();
    }
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
    alert("The site is currently under construction... \n You can always reach me on donne.ferre@gmail.com or shoot me a message on linkedin/ferre-donne")
  })
  $(".close-project-cover").click((e) => {
    let cover = $(e.target).parent(".image-cover")
    hideImageCover(cover);
  })
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
  $("lottie-player").click((e) => {
    $(e.target).parent(".project-image").siblings(".image-cover").removeClass("hide-image-cover")
    $(e.target).parent(".project-image").siblings(".image-cover").addClass("show-image-cover")
    $(e.target).get(0).play();
  })
  $(window).scroll(function () {
    checkPosition();
    checkNav();
  });
});
