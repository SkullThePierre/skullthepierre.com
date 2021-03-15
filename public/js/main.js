$.fn.exists = function () {
    return this.length !== 0;
}

//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
let metaTitle = $("meta[name='titleText']");

$(document).ready(function () {
    $('#currentYear').text(currentYear);

    if (metaTitle.exists()) {
        $('#titleText').text(metaTitle.attr('content'))
    } else {
        $('#titleText').addClass("hidden")
        $('#nav-link-filler').removeClass('hidden')
    }
})
