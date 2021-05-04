export default function getCookieBanner() {
  $.get("/common/cookie_policy_banner.html", function (page) {
    $(".container").append(page);
  });
}
