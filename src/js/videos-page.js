export default function videosPage() {
  $(".vid_overlay").on("click", function () {
    let new_video = $(this).next().attr("src");
    let old_video = $("#main_video");

    if (new_video !== old_video.attr("src")) {
      old_video.attr("src", new_video);
    }
  });
}
