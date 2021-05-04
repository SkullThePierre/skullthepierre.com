import readCookie from "./utils/read-cookie";
import getCookieBanner from "./utils/get-cookie-banner";

$.fn.exists = function () {
  return this.length !== 0;
};

export default function Loadchanges() {
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
