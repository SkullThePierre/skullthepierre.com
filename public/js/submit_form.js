$(document).ready(function() {

    // get the form elements defined in your form HTML above

    const form = $("#contactForm")[0];
    const button = $("#sendMessage");
    const status = $("#status");
    const requiredField = 'outline-red';

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset()

        button.off("click")
        button.removeClass('bg-gray-100 hover:bg-gray-300')
        button.addClass('bg-green-500')
        button.text("Thanks!")

        status.addClass('text-green-500')
        status.text("I'll get back to you soon :)");
    }

    function error() {
        status.addClass('text-red-500')
        status.text("Oops! There was a problem. Please try again.");
    }

    // handle the form submission event

    $(button).on('click', function(e) {
        console.log("Sending data!")
        e.preventDefault();
        if (checkValidity()) {
            let data = new FormData(form);
            sendData(form.method, form.action, data, success, error);
        } else {
            error()
        }
    })
});

function checkValidity(){
    let valid = true
    $('[required=""]').each(function(){
        if( $(this).val() === "" ){
            valid = false
            $(this).addClass('outline-red')
        }
    })
    return valid;
}

// helper function for sending an AJAX request

function sendData(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}