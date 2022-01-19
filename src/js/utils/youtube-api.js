var player;
export default function onYouTubeIframeAPIReady() {
  player = new YT.Player("beats_0", {
    height: "100%",
    width: "100%",
    playerVars: {
      listtype: "playlist",
      list: "PL0fxpGNlsFQgXhcNwh7C4vkA-KyCUdUms",
    },
  });
}
