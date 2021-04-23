$.fn.exists = function () {
    return this.length !== 0;
}

$(function () {
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

    if (metaTitle.exists()) {
        $('#titleText').text(metaTitle.attr('content'))
    } else {
        $('#titleText').addClass('hidden')
        $('#nav-link-filler').removeClass('hidden')
    }
}

$(document).ajaxStop( function (){
    main()
})