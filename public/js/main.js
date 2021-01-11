//Set copyright year to current year automatically.
let currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $('#currentYear').text(currentYear);
})

//Detect when skp-centre-logo is in the middle of the screen.
let skpLogo = $('#skp-logo');
let timeout = null;

$(window).scroll(function () {
    if (!timeout) {
        timeout = setTimeout(function () {
            clearTimeout(timeout);
            timeout = null;
            if (skpLogo[0].getBoundingClientRect().y + skpLogo.height()/2 <= window.innerHeight/2){
                replaceLogo();
            }

        }, 250);
    }
});

// Replace the logo.
function replaceLogo(){
    $(window).off('scroll'); // turn-off detection.
    skpLogo.addClass('transition duration-500 ease-out opacity-0 transform scale-150'); //fade it out.
}
