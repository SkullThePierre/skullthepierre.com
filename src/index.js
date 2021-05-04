import Loadchanges from "./js/load-changes";
import replaceLogo from "./js/replace-logo";
import submitForm from "./js/submit-form";
import main from "./js/main";

const homeRegex = new RegExp(".com/$", "i");
const contactRegex = new RegExp("contact", "i");

Loadchanges();

$(document).ajaxStop(function () {
  main();

  if (homeRegex.test($(location).attr("href"))) {
    replaceLogo();
  }

  if (contactRegex.test($(location).attr("href"))) {
    submitForm();
  }
});
