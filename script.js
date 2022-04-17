// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  let buttonWrapper = $(".button-wrapper");
  let button = $("#contact-me-button");
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
  checkPosition();
  $(window).scroll(function () {
    checkPosition();
  });
  $("nav li a").click((e) => {
    $("nav li.active").removeClass("active");
    $(e.target).closest("li").addClass("active");
  });
});
