import { video_page_slider_list } from "../link_list";

export var player;
const pages = {
  videos: () => {
    player = new YT.Player("main_video", {
      height: "100%",
      width: "100%",
      id: "main_video",
      videoId: "rBNfZdD_vG8",
      events: {
        onReady: listVideos,
      },
    });

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
  console.log(p);
  page = p;
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export function onYouTubeIframeAPIReady() {
  pages[page]();
}

function listVideos() {
  $.each(video_page_slider_list, function (key, video_id) {
    let elem = `<div class="bg-red-900 h-full relative">
                  <div class="absolute h-full w-full vid_overlay" onclick="overlay_click('${video_id}')"></div>
                  <div id="vid_${key}"></div>
                </div>`;

    $("#video_slider").append(elem);

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
