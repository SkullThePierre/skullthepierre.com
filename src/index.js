import Loadchanges from "./js/load-changes";
import main from "./js/main";

Loadchanges();

$(document).ajaxStop(function () {
  main();
});
