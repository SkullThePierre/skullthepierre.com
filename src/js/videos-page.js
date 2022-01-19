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
  let new_video = $(id).attr("videoId");
  let old_video = $("#main_video");
  if (new_video !== old_video.attr("src")) {
    console.log(new_video);
    player.cueVideoById(new_video);
  }
}
