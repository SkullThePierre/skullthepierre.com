export default function getCookieBanner() {
  // Retrieves html source code for privacy policy banner.
  $.get("/common/cookie_policy_banner.html", function (page) {
    $(".container").append(page);
  });
}
