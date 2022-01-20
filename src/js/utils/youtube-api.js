import { video_page_slider_list } from "../link_list";

export var player;
const pages = {
  videos: () => {
    // Create player with given ID.
    player = new YT.Player("main_video", {
      height: "100%",
      width: "100%",
      id: "main_video",
      videoId: "rBNfZdD_vG8",
      events: {
        onReady: listVideos,
      },
    });

    // Create player with playlist.
    new YT.Player("beats_0", {
      height: "100%",
      width: "100%",
      playerVars: {
        listtype: "playlist",
        list: "PL0fxpGNlsFQgXhcNwh7C4vkA-KyCUdUms",
      },
    });
  },
  main: () => {
    // Create an empty player.
    player = new YT.Player("main-video", {
      width: "100%",
      height: "100%",
      playerVars: {
        controls: 1,
      },
      id: "main-video",
      events: {
        onReady: () => {
          $("#main-video").attr("class", "embedded-video opacity-0");
        },
      },
    });
  },
};

var page;
export function importYoutubeApi(p) {
  // Function to import YouTube iFrame API.
  // Calls onYouTubeIframeAPIReady once API is ready.
  page = p;
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export function onYouTubeIframeAPIReady() {
  // Function creates player iFrames on page.
  // Code is page dependent.
  pages[page]();
}

function listVideos() {
  // Function for /videos.
  // Creates and populates video slider with videos provided in video_page_slider_list
  $.each(video_page_slider_list, function (key, video_id) {
    // Create div element to put video in.
    let elem = `<div class="bg-red-900 h-full relative">
                  <div class="absolute h-full w-full vid_overlay" onclick="overlay_click('${video_id}')"></div>
                  <div id="vid_${key}"></div>
                </div>`;

    // Add element to page.
    $("#video_slider").append(elem);

    // Load videos into the element using video ID.
    let p = new YT.Player(`vid_${key}`, {
      height: "100%",
      width: "100%",
      id: `vid_${key}`,
      events: {
        onReady: () => {
          p.cueVideoById(video_id);
        },
      },
    });
  });
}
