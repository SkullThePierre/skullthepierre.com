import { player } from "./utils/youtube-api";

export function videosPage() {
  $("#btn-left").on("click", function () {
    var leftPos = $("#video_slider").scrollLeft();
    console.log("srcolling left", leftPos);
    $("#video_slider").animate({ scrollLeft: leftPos - 400 }, 400);
  });

  $("#btn-right").on("click", function () {
    var leftPos = $("#video_slider").scrollLeft();
    console.log("srcolling right", leftPos);
    $("#video_slider").animate({ scrollLeft: leftPos + 400 }, 400);
  });
}

export function overlay_click(id) {
  let old_video = $("#main_video");
  if (id !== old_video.attr("src")) {
    player.cueVideoById(id);
  }
}
