// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  $('[data-toggle="tooltip"]').tooltip();
  let buttonDiv = $(".home-button");
  let scrolledPast =
    buttonDiv.offset().top + buttonDiv.outerHeight() < $(window).scrollTop();
  $("#floating-content").hide();
  let hideContactModal = () => {
    $("body").removeClass("overflow-hidden");
    $(".contact-me-modal").attr("data-show", false);
  };
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
  //on escape
  $(document).keyup(function (e) {
    if (e.keyCode == 27 && $(".contact-me-modal").attr("data-show") == "true") {
      hideContactModal();
    }
  });
  $("#close-modal").click(hideContactModal);
  $(".contact-me-modal").click((e) => {
    if (
      e.target.id === "contact-me-modal-backdrop" ||
      e.target.id === "close-modal"
    ) {
      hideContactModal();
    }
  });

  $(".contact-me-button").click((e) => {
    e.preventDefault();
    $("body").addClass("overflow-hidden");
    $(".contact-me-modal").attr("data-show", true);
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
