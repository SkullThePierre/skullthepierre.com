var player;
export default function onYouTubeIframeAPIReady() {
  player = new YT.Player("beats_0", {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      listtype: "playlist",
      list: "PL0fxpGNlsFQgXhcNwh7C4vkA-KyCUdUms",
    },
    events: {
      onReady: listVideos,
    },
  });
}

function listVideos(event) {
  let videos = event.target.getPlaylist();
  $.each(videos.slice(1), function (id, video) {
    console.log(video);
    let video_card = `<div class="bg-red-900 h-full relative">
                        <div class="absolute h-full w-full vid_overlay" 
                        onclick="overlay_click(beats_${id + 1})"></div>
                        <div id="beats_${id + 1}"></div>
                      </div>`;
    $("#beats-videos").append(video_card);

    player = new YT.Player(`beats_${id + 1}`, {
      height: "100%",
      width: "100%",
      videoId: video,
      playerVars: {
        autoplay: 0,
        controls: 1,
      },
    });
  });
}
