import readCookie from "./utils/read-cookie";
import getCookieBanner from "./utils/get-cookie-banner";

// Load Navbar and Footer on each page with AJAX calls.
// Also checks for acceptance of cookie policy
// and displays cookie banner accordingly.

$.fn.exists = function () {
  // Function to check if a given function exists.
  return this.length !== 0;
};

export default function Loadchanges() {
  // Looks for `[data-include]` attribute in an element.
  // If found, the element if replaced by the url provided.

  const includes = $("[data-include]");
  $.each(includes, function () {
    let file = $(this).data("include");
    let obj = $(this);
    obj.load(file, function () {
      $(this).contents().unwrap();
    });
  });
  if (!readCookie("cookies-accepted")) {
    getCookieBanner();
  }
}
