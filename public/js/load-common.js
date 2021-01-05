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