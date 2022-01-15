//Load youtube video in background after the page is loaded.
export default function replaceLogo() {
  let v = $("#main-video");
  v.attr("src", "https://www.youtube-nocookie.com/embed/mOJPFDT5i_E");

  //Detect when skp-centre-logo is in the middle of the screen.
  let skpLogo = $("#skp-logo");
  let timeout = null;
  $(window).on("scroll", function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        clearTimeout(timeout);
        timeout = null;
        if (
          skpLogo[0].getBoundingClientRect().y + skpLogo.height() / 2 <=
          window.innerHeight / 2
        ) {
          replace_logo();
        }
      }, 250);
    }
  });

  // Replace the logo.
  function replace_logo() {
    $(window).off("scroll"); // turn-off detection.
    skpLogo
      .addClass(
        "transition duration-500 ease-out opacity-0 transform scale-150"
      )
      .delay(500)
      .queue(function (next) {
        $(this).addClass("hidden");
        $(".video-container-outer").removeClass("hidden");
        next();
      }); //fade it out.

    //Fade video in.
    $("#main-video")
      .delay(600)
      .queue(function (next) {
        $(this).addClass("transition duration-1000 ease-in opacity-100");
      });
  }
}
