$(function () {
    const includes = $('[data-include]');
    $.each(includes, function () {
        let file = 'common/' + $(this).data('include') + '.html';
        $(this).load(file)
    })
})