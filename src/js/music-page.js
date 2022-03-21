function get_streaming_links(links) {
  // Function to create streaming media icon with appropriate links.
  let streaming_links = []; // Array to store tags.

  $.each(links, function (key, link) {
    // Loop over each link.
    if (link !== "") {
      // If link exists, create the tag.
      let c_link = `
        <div class="sm-list">
            <a href="${link}" class="sm-link" target="_blank">
                <img src="${sm_logos[key]}" alt="" />
            </a>
        </div>`;

      streaming_links.push(c_link); // Add to array.
    }
  });

  // Join array and return as string.
  return streaming_links.join("");
}

export default function musicPage() {
  // Function to create album cards on /music.
  // music_cards defined in music.html
  $.each(music_cards, function (key, card) {
    // Loop over each element.
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
        </div>`;
    // Add card to page.
    $("#music_cards").append(music_card);
  });
}
