//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $('#currentYear').text(currentYear);
})
