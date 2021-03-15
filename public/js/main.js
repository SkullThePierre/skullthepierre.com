$.fn.exists = function () {
    return this.length !== 0;
}

//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
let titleText = $('#title-text');
let metaTitle = $('meta[name=title-text]');

$(document).ready(function () {
    $('#currentYear').text(currentYear);

    if (metaTitle.exists()) {
        titleText.text(metaTitle.attr('content'))
        titleText.removeClass("hidden")
    }
})
