export default function main() {
  //Set copyright year to current year automatically.
  let currentYear = new Date().getFullYear();
  let metaTitle = $("meta[name='titleText']");

  $("#currentYear").text(currentYear);

  if (metaTitle.exists()) {
    $("#titleText").text(metaTitle.attr("content"));
  } else {
    $("#titleText").addClass("hidden");
    $("#nav-link-filler").removeClass("hidden");
  }

  $(".vid_overlay").on("click", function () {
    let new_video = $(this).next().attr("src");
    let old_video = $("#main_video");

    if (new_video !== old_video.attr("src")) {
      old_video.attr("src", new_video);
    }
  });
}
