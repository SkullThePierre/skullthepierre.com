//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $('#currentYear').text(currentYear);
    $('#title-text').text($('meta[name=title-text]').attr('content'))
})
