$.fn.exists = function () {
    return this.length !== 0;
}

//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
let metaTitle = $("meta[name='titleText']");

$(document).ready(function () {
    $('#currentYear').text(currentYear);
})

$(window).bind('load', function(){
    if (metaTitle.exists()) {
        $('#titleText').text(metaTitle.attr('content'))
    } else {
        console.log("Hiding")
        $('#titleText').css('display', 'none')
        $('#nav-link-filler').css('display', 'block')
    }
})
