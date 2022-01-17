var player;
export default function onYouTubeIframeAPIReady() {
  player = new YT.Player("beats_0", {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      listType: "playlist",
      list: "PL0fxpGNlsFQgXhcNwh7C4vkA-KyCUdUms",
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  let videos = event.target.getPlaylist();
}
