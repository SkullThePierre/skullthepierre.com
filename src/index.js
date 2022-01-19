import Loadchanges from "./js/load-changes";
import replaceLogo from "./js/replace-logo";
import submitForm from "./js/submit-form";
import { videosPage, overlay_click } from "./js/videos-page";
import musicPage from "./js/music-page";
import main from "./js/main";
import { onYouTubeIframeAPIReady } from "./js/utils/youtube-api";

const homeRegex = new RegExp(".com/$", "i");
const contactRegex = new RegExp("contact", "i");
const videosRegex = new RegExp("videos", "i");
const musicRegex = new RegExp("music", "i");

Loadchanges();

$(document).ajaxStop(function () {
  main();

  if (homeRegex.test($(location).attr("href"))) {
    replaceLogo();
  }

  if (contactRegex.test($(location).attr("href"))) {
    submitForm();
  }

  if (videosRegex.test($(location).attr("href"))) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    videosPage();
  }

  if (musicRegex.test($(location).attr("href"))) {
    musicPage();
  }

  setTimeout(function () {
    $(".cookie-banner-container").removeClass("translate-y-full");
  }, 1500);
});

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
window.overlay_click = overlay_click;
