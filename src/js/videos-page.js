export default function videosPage() {
  $(".vid_overlay").on("click", function () {
    let new_video = $(this).next().attr("src");
    let old_video = $("#main_video");

    if (new_video !== old_video.attr("src")) {
      old_video.attr("src", new_video);
    }
  });

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
