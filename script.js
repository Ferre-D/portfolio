// check if page is ready jquery
$(document).ready(function () {
  // check if scrolled past button
  let scrolledPast = false;
  let button = $("#contact-me-button");

  $(window).scroll(function () {
    if (button.offset().top + button.outerHeight() < $(window).scrollTop()) {
      if (scrolledPast) return;
      scrolledPast = true;
      $(".contact-pop-up-button").removeAttr("hidden");
    } else {
      if (!scrolledPast) return;
      scrolledPast = false;
      $(".contact-pop-up-button").attr("hidden", true);
    }
  });
  $("nav li a").click((e) => {
    $("nav li.active").removeClass("active");
    $(e.target).closest("li").addClass("active")
  })
  
});
