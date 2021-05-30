import createCookie from "./create-cookie";

export default function getCookieBanner() {
  $.get("/common/cookie_policy_banner.html", function (page) {
    $(".container").append(page);
  }).then(function () {
    $("#cookieAccepted").on("click", function () {
      createCookie("cookies-accepted", true, 1);
      $(".cookie-banner-container")
        .addClass("transform ease-in-out duration-300 translate-y-full")
        .delay(400)
        .queue(function (next) {
          $(this).addClass("hidden");
          next();
        });
    });
  });
}
