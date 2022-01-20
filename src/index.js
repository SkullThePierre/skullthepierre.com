import Loadchanges from "./js/load-changes";
import replaceLogo from "./js/replace-logo";
import submitForm from "./js/submit-form";
import { videosPage, overlay_click } from "./js/videos-page";
import musicPage from "./js/music-page";
import main from "./js/main";
import {
  onYouTubeIframeAPIReady,
  importYoutubeApi,
} from "./js/utils/youtube-api";

// Regex to check current page.
// Seperates code for different pages.
const homeRegex = new RegExp(".com/$", "i");
const contactRegex = new RegExp("contact", "i");
const videosRegex = new RegExp("videos", "i");
const musicRegex = new RegExp("music", "i");

Loadchanges();

$(document).ajaxStop(function () {
  // Once all `[data-include]` tags are replaces, call the appropriate functions.
  main();

  if (homeRegex.test($(location).attr("href"))) {
    importYoutubeApi("main");
    replaceLogo();
  }

  if (contactRegex.test($(location).attr("href"))) {
    submitForm();
  }

  if (videosRegex.test($(location).attr("href"))) {
    importYoutubeApi("videos");
    videosPage();
  }

  if (musicRegex.test($(location).attr("href"))) {
    musicPage();
  }

  setTimeout(function () {
    $(".cookie-banner-container").removeClass("translate-y-full");
  }, 1500);
});

// Prevent webpack from disregarding "unused" functions.
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
window.overlay_click = overlay_click;
