function get_streaming_links(links) {
  let streaming_links = [];
  $.each(links, function (key, link) {
    let c_link = `
        <div class="sm-list">
            <a href="${link}" class="sm-link" target="_blank">
                <img src="${sm_logos[key]}" alt="" />
            </a>
        </div>`;

    streaming_links.push(c_link);
  });
  return streaming_links.join("");
}

export default function musicPage() {
  $.each(music_cards, function (key, card) {
    let music_card = `
        <div class='cover-art'>
            <img src='${card.cover}' alt='' />
            <div class='pt-4 pb-12 grid grid-cols-1 justify-items-center gap-4 card'>
                <span>${card.name.toUpperCase()}</span>
                <div class='sm-list'>
                ${get_streaming_links(card.streaming)}
                </div>
                ${
                  card.buybtn !== ""
                    ? `<a class='buy-btn' href='${card.buybtn}'>BUY NOW</a>`
                    : ""
                }
            </div>
        </div>
        `;
    $("#music_cards").append(music_card);
  });
}
