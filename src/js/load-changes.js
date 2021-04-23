//Functions to load common pages.

$.fn.exists = function () {
    // Helper function helps to check if object exists.
    return this.length !== 0;
}

$(function () {
    // Load common pages using the 'data-include' attribute of a tag.
    // 'data-include' must contain a valid skullthepierre.com link.
    const includes = $('[data-include]');
    $.each(includes, function () {
        let file = $(this).data('include');
        let obj = $(this)
        $.get( file, function (page){
            obj.append(page);
        })
    })
})

function main(){
    //Set copyright year to current year automatically.
    let currentYear = (new Date).getFullYear();
    let metaTitle = $("meta[name='titleText']");
    $('#currentYear').text(currentYear);

    // Set a secondary title to the page if it exists.
    if (metaTitle.exists()) {
        $('#titleText').text(metaTitle.attr('content'))
    } else {
        $('#titleText').addClass('hidden')
        $('#nav-link-filler').removeClass('hidden')
    }
}

$(document).ajaxStop( function (){
    // Do stuff in function main() only when all pages are done loading.
    main()
})